export type WaitlistInput = {
  name: string;
  email: string;
  /** Honeypot field. Real users leave it empty. */
  company: string;
};

export type WaitlistResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Something went wrong. Please try again.";

/**
 * Posts the signup to `/api/waitlist`, which validates it and forwards it to
 * the Google Apps Script receiver (see `app/api/waitlist/route.ts`).
 */
export async function submitWaitlist(
  input: WaitlistInput,
): Promise<WaitlistResult> {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data: { ok?: boolean; error?: string } = await response
      .json()
      .catch(() => ({}));

    if (response.ok && data.ok === true) return { ok: true };
    if (response.status === 400) {
      if (data.error === "invalid_name") {
        return { ok: false, error: "Please enter your full name." };
      }
      if (data.error === "invalid_email") {
        return { ok: false, error: "Please enter a valid email address." };
      }
    }
    return { ok: false, error: GENERIC_ERROR };
  } catch {
    return { ok: false, error: GENERIC_ERROR };
  }
}
