"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

// Hamburger button and dropdown panel for widths below 768px. The desktop
// nav in SiteHeader shows from 768px up. No scroll lock and no animation.

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonId = useId();
  const panelId = useId();

  // Esc closes the menu and returns focus to the hamburger.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close the menu if the viewport grows to the desktop nav width. Both the
  // media query change and the window resize are watched, so it still closes
  // where one of the two is not delivered.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    function closeIfWide() {
      if (query.matches) setOpen(false);
    }
    query.addEventListener("change", closeIfWide);
    window.addEventListener("resize", closeIfWide);
    return () => {
      query.removeEventListener("change", closeIfWide);
      window.removeEventListener("resize", closeIfWide);
    };
  }, []);

  function choose() {
    setOpen(false);
    // Fragment navigation moves focus after the click handler, so return
    // focus to the hamburger on the next task.
    window.setTimeout(() => {
      buttonRef.current?.focus({ preventScroll: true });
    }, 0);
  }

  const linkClass =
    "flex min-h-11 items-center rounded-lg px-3 text-base text-muted transition-colors hover:text-white";

  return (
    <>
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 items-center justify-center rounded-lg text-white md:hidden"
      >
        {open ? (
          <X aria-hidden="true" className="size-6" />
        ) : (
          <Menu aria-hidden="true" className="size-6" />
        )}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-[calc(100%+1px)] border-b border-white/6 bg-background px-5 pt-2 pb-5 sm:px-8 md:hidden"
      >
        <a href="#how-it-works" onClick={choose} className={linkClass}>
          How it works
        </a>
        <a href="#features" onClick={choose} className={`${linkClass} mt-1`}>
          Features
        </a>
        <button
          type="button"
          data-waitlist-trigger
          data-waitlist-return-to={buttonId}
          onClick={() => setOpen(false)}
          className="mt-3 h-12 w-full rounded-lg bg-mint text-[15.5px] font-semibold text-background transition-colors hover:bg-mint/85"
        >
          Get Early Access
        </button>
      </div>
    </>
  );
}
