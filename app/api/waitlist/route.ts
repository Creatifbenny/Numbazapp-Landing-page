const MAX_BODY_BYTES = 2048;
const UPSTREAM_TIMEOUT_MS = 10_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Failure =
  | "invalid_name"
  | "invalid_email"
  | "not_configured"
  | "upstream_error"
  | "bad_request"
  | "forbidden";

function fail(error: Failure, status: number) {
  return Response.json({ ok: false, error }, { status });
}

/** Strip control characters, collapse whitespace, trim. */
function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001f\u007f-\u009f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!/^application\/json\s*(;|$)/i.test(contentType)) {
    return fail("bad_request", 415);
  }

  // Cross-site posts: an Origin, when present, must match our own host.
  const origin = request.headers.get("origin");
  if (origin !== null) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {
      // unparseable origin: treated as a mismatch below
    }
    if (originHost !== request.headers.get("host")) {
      return fail("forbidden", 403);
    }
  }

  const raw = await request.text();
  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
    return fail("bad_request", 413);
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return fail("bad_request", 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("bad_request", 400);
  }

  const name = clean(body.name);
  const email = clean(body.email);
  if (name.length < 2 || name.length > 100) {
    return fail("invalid_name", 400);
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return fail("invalid_email", 400);
  }

  // Honeypot: look successful, send nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const scriptUrl = process.env.WAITLIST_SCRIPT_URL;
  const secret = process.env.WAITLIST_SECRET;
  if (!scriptUrl || !secret) {
    console.error("waitlist: not configured");
    return fail("not_configured", 503);
  }

  let result: unknown;
  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret, name, email }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    if (!upstream.ok) {
      console.error("waitlist: upstream non-2xx");
      return fail("upstream_error", 502);
    }
    result = JSON.parse(await upstream.text());
  } catch (err) {
    const timedOut = err instanceof Error && err.name === "TimeoutError";
    console.error(
      timedOut ? "waitlist: upstream timeout" : "waitlist: upstream failure",
    );
    return fail("upstream_error", 502);
  }

  const answer = (result ?? {}) as { ok?: unknown; error?: unknown };
  if (answer.ok === true) {
    return Response.json({ ok: true });
  }
  if (answer.error === "invalid_name" || answer.error === "invalid_email") {
    return fail(answer.error, 400);
  }
  console.error("waitlist: upstream rejected");
  return fail("upstream_error", 502);
}
