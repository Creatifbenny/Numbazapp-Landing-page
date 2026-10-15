"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { submitWaitlist } from "@/lib/waitlist";

type Status = "idle" | "sending" | "success" | "failure";
type Errors = { name?: string; email?: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PREVIEW = process.env.NEXT_PUBLIC_WAITLIST_LIVE !== "true";

export default function WaitlistDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const baseId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  const titleId = `${baseId}-title`;
  const introId = `${baseId}-intro`;
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const nameErrorId = `${baseId}-name-error`;
  const emailErrorId = `${baseId}-email-error`;

  // One delegated listener opens the dialog from every trigger on the page.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const trigger = target?.closest<HTMLElement>("[data-waitlist-trigger]");
      if (!trigger) return;
      event.preventDefault();
      openerRef.current = trigger;
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;

      // Lock page scroll without shifting the layout sideways.
      const html = document.documentElement;
      const scrollbar = window.innerWidth - html.clientWidth;
      html.style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : "";
      html.style.overflow = "hidden";

      dialog.showModal();
      nameRef.current?.focus();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Idempotent: called from the dialog close and cancel events and from our
  // own close paths, so cleanup never depends on a single event firing.
  function handleClose() {
    const html = document.documentElement;
    html.style.overflow = "";
    html.style.paddingRight = "";
    setName("");
    setEmail("");
    setCompany("");
    setErrors({});
    setStatus("idle");
    setFirstName("");
    openerRef.current?.focus();
  }

  function handleDialogClick(event: React.MouseEvent<HTMLDialogElement>) {
    // The dialog has no padding of its own, so a click whose target is the
    // dialog element itself landed on the backdrop.
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
      handleClose();
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const nextErrors: Errors = {};
    if (trimmedName.length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }
    if (nextErrors.email) {
      document.getElementById(emailId)?.focus();
      return;
    }

    setName(trimmedName);
    setEmail(trimmedEmail);
    const first = trimmedName.split(/\s+/)[0];

    // Honeypot: a filled hidden field means a bot. Look successful, send nothing.
    if (company.trim() !== "") {
      setFirstName(first);
      setStatus("success");
      return;
    }

    setStatus("sending");
    const result = await submitWaitlist({
      name: trimmedName,
      email: trimmedEmail,
      company,
    });
    if (result.ok) {
      setFirstName(first);
      setStatus("success");
    } else {
      setStatus("failure");
    }
  }

  const sending = status === "sending";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={introId}
      onClick={handleDialogClick}
      onClose={handleClose}
      onCancel={handleClose}
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[440px] overflow-y-auto rounded-[28px] border border-primary/20 bg-card p-0 text-body backdrop:bg-background/70"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => {
            dialogRef.current?.close();
            handleClose();
          }}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:text-white"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <h2 id={titleId} className="pr-10 text-2xl font-bold text-white">
          Join the waitlist
        </h2>

        {status === "success" ? (
          <div role="status" className="mt-4">
            <p className="text-lg font-semibold text-white">
              Thanks, {firstName}. You&apos;re on the list.
            </p>
            <p id={introId} className="mt-2 text-base text-muted">
              Check your inbox for a welcome email.
            </p>
          </div>
        ) : (
          <>
            <p id={introId} className="mt-2 text-base text-muted">
              Be first to know when Numbaz opens.
            </p>

            <form noValidate onSubmit={handleSubmit} className="mt-6">
              <div>
                <label
                  htmlFor={nameId}
                  className="block text-sm font-medium text-white"
                >
                  Full name
                </label>
                <input
                  ref={nameRef}
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? nameErrorId : undefined}
                  className={`mt-2 h-12 w-full rounded-xl border bg-background px-4 text-base text-white ${errors.name ? "border-red" : "border-white/12"}`}
                />
                <p
                  id={nameErrorId}
                  aria-live="polite"
                  className="mt-1.5 min-h-5 text-sm text-red"
                >
                  {errors.name}
                </p>
              </div>

              <div className="mt-2">
                <label
                  htmlFor={emailId}
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? emailErrorId : undefined}
                  className={`mt-2 h-12 w-full rounded-xl border bg-background px-4 text-base text-white ${errors.email ? "border-red" : "border-white/12"}`}
                />
                <p
                  id={emailErrorId}
                  aria-live="polite"
                  className="mt-1.5 min-h-5 text-sm text-red"
                >
                  {errors.email}
                </p>
              </div>

              {/* Honeypot: off-screen, out of the tab order, hidden from AT. */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              >
                <input
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-4 h-12 w-full rounded-xl bg-mint text-base font-semibold text-background transition-colors hover:bg-mint/85 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Joining…" : "Join the waitlist"}
              </button>

              <div aria-live="polite" className="min-h-5">
                {status === "failure" && (
                  <p className="mt-3 text-sm text-red">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

              <p className="mt-2 text-sm text-muted">
                We&apos;ll only use your details to tell you about Numbaz. No
                spam.
              </p>
            </form>
          </>
        )}

        {PREVIEW && (
          <p className="mt-4 text-xs text-muted">
            Preview only: signups are not saved yet.
          </p>
        )}
      </div>
    </dialog>
  );
}
