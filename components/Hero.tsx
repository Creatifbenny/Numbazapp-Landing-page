import { ArrowRight } from "lucide-react";

const AVATARS = [
  { letter: "A", className: "bg-primary" },
  { letter: "K", className: "bg-blue" },
  { letter: "T", className: "bg-orange" },
  { letter: "M", className: "bg-red" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-bg">
      <div className="mx-auto grid max-w-[1328px] items-center px-6 pt-[90px] pb-[108px] lg:grid-cols-[minmax(0,1fr)_608px]">
        <div>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/12 px-4 py-1.75 font-mono text-xs tracking-wider text-mint">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-mint"
            />
            EARLY ACCESS OPEN
          </p>

          <h1
            id="hero-heading"
            className="text-[68px] leading-[83.5px] font-extrabold tracking-[-0.015em] text-white"
          >
            Know your
            <br />
            <span className="text-mint">Numbaz.</span>
            <br />
            Grow your
            <br />
            business.
          </h1>

          <p className="mt-6 max-w-[640px] text-xl leading-8 text-body">
            Track your daily sales, expenses, and profit in seconds — so you
            always know how your business is doing.
          </p>
          <p className="mt-3.5 text-[15.5px] leading-6 text-dim">
            No spreadsheets. No confusion. Just simple business tracking on your
            phone.
          </p>

          <div className="mt-9 flex items-center gap-3.5">
            <button
              type="button"
              data-waitlist-trigger
              className="inline-flex h-15 items-center gap-3 rounded-xl bg-mint pr-6 pl-8 text-lg font-semibold text-background transition-colors hover:bg-mint/85"
            >
              Get Early Access
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex h-15 items-center rounded-xl border border-white/12 px-7 text-lg font-semibold text-white transition-colors hover:border-white/30"
            >
              See how it works
            </a>
          </div>

          <div className="mt-[34px] flex items-center gap-4">
            <ul className="flex" aria-hidden="true">
              {AVATARS.map(({ letter, className }, i) => (
                <li
                  key={letter}
                  className={`flex size-9 items-center justify-center rounded-full border-2 border-ink text-sm font-bold text-white ${className} ${i > 0 ? "-ml-2.25" : ""}`}
                >
                  {letter}
                </li>
              ))}
            </ul>
            <div>
              <p className="text-[15.5px] leading-snug font-bold text-white">
                500+ on the waitlist
              </p>
              <p className="text-[13.3px] leading-[18px] text-dim">
                Small biz owners ready to grow
              </p>
            </div>
          </div>
        </div>

        {/* Empty slot for the phone mockup (added in a later step). */}
        <div className="hidden lg:flex lg:justify-center" aria-hidden="true">
          <div data-phone-slot className="h-[656px] w-[292px]" />
        </div>
      </div>
    </section>
  );
}
