import { ArrowRight } from "lucide-react";
import HeroHeadline from "./HeroHeadline";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-bg">
      <div className="mx-auto grid max-w-[1328px] grid-cols-[minmax(0,1fr)] items-center gap-y-14 px-5 pt-14 pb-[72px] sm:px-8 sm:pt-[72px] lg:grid-cols-[minmax(0,1fr)_clamp(360px,47.5vw,608px)] lg:gap-y-0 lg:pt-[90px] lg:pb-[109.4px] xl:px-6">
        <div className="min-w-0">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/12 px-4 py-1.75 font-mono text-xs tracking-wider text-mint">
            <span
              aria-hidden="true"
              className="pill-dot relative size-1.5 rounded-full bg-mint"
            />
            EARLY ACCESS OPEN
          </p>

          <HeroHeadline />

          <p className="mt-6 max-w-[640px] text-[17px] leading-7 text-body sm:text-xl sm:leading-8">
            Track your daily sales, expenses, and profit in seconds — so you
            always know how your business is doing.
          </p>
          <p className="mt-3.5 text-base leading-6 text-dim xl:text-[15.5px]">
            No spreadsheets. No confusion. Just simple business tracking on your
            phone.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              data-waitlist-trigger
              className="inline-flex h-15 w-full items-center justify-center gap-3 rounded-xl bg-mint pr-6 pl-8 sm:w-auto text-lg font-semibold text-background transition-colors hover:bg-mint/85"
            >
              Get Early Access
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex h-15 w-full items-center justify-center rounded-xl border border-white/12 px-7 sm:w-auto text-lg font-semibold text-white transition-colors hover:border-white/30"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
