export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-background">
      <nav
        aria-label="Main"
        className="flex h-19 items-center justify-between px-14"
      >
        <a href="#" className="flex items-center gap-2.5" aria-label="Numbaz home">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-lg bg-primary font-mono text-base font-bold text-white"
          >
            N
          </span>
          <span className="text-[19px] font-bold text-white">Numbaz</span>
        </a>

        <div className="flex items-center gap-9">
          <a
            href="#how-it-works"
            className="text-[15.5px] text-muted transition-colors hover:text-white"
          >
            How it works
          </a>
          <a
            href="#features"
            className="text-[15.5px] text-muted transition-colors hover:text-white"
          >
            Features
          </a>
          <button
            type="button"
            data-waitlist-trigger
            className="h-10 rounded-lg bg-mint px-4.5 text-[15.5px] font-semibold text-background transition-colors hover:bg-mint/85"
          >
            Get Early Access
          </button>
        </div>
      </nav>
    </header>
  );
}
