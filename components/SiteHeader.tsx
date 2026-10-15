import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-background">
      <nav
        aria-label="Main"
        className="flex h-19 items-center justify-between px-5 sm:px-8 xl:px-14"
      >
        <a
          href="#"
          className="flex min-h-11 items-center gap-2.5"
          aria-label="Numbaz home"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-lg bg-primary font-mono text-base font-bold text-white"
          >
            N
          </span>
          <span className="text-[19px] font-bold text-white">Numbaz</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#how-it-works"
            className="inline-flex min-h-11 items-center text-[15.5px] text-muted transition-colors hover:text-white"
          >
            How it works
          </a>
          <a
            href="#features"
            className="inline-flex min-h-11 items-center text-[15.5px] text-muted transition-colors hover:text-white"
          >
            Features
          </a>
          <button
            type="button"
            data-waitlist-trigger
            className="h-11 rounded-lg bg-mint px-4.5 text-[15.5px] font-semibold text-background transition-colors hover:bg-mint/85 xl:h-10"
          >
            Get Early Access
          </button>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
