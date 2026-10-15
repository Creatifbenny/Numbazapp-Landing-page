export type WaitlistInput = {
  name: string;
  email: string;
  /** Honeypot field. Real users leave it empty. */
  company: string;
};

export type WaitlistResult = { ok: true } | { ok: false; error: string };

/**
 * PLACEHOLDER. This is the one place the real signup route gets plugged in
 * later: replace the body with a `fetch` to the API route (or server action)
 * that stores the signup and sends the welcome email, and map its response to
 * `{ ok: true }` or `{ ok: false, error }`.
 *
 * For now it waits about 800ms and reports success. Nothing is saved.
 */
export async function submitWaitlist(
  input: WaitlistInput,
): Promise<WaitlistResult> {
  void input;
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { ok: true };
}
