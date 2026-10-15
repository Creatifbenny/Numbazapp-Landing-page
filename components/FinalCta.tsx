import { ArrowRight } from "lucide-react";

// Final call-to-action panel. Sizes and spacing were measured from
// desktop.png (1440px design at ~2.685x) and are APPROXIMATE. The green glow
// at the bottom of the section is a radial gradient of the primary colour.

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="final-cta-bg px-6 pt-[106.4px] pb-27"
    >
      <div className="mx-auto max-w-[857.5px] rounded-[28px] border border-primary/20 bg-card px-6 pt-[70px] pb-[70.5px] text-center">
        <h2
          id="final-cta-heading"
          className="mx-auto max-w-[620px] text-[55px] leading-[67.2px] font-extrabold tracking-[-0.015em] text-white"
        >
          Start knowing your Numbaz today.
        </h2>
        <p className="mt-[19.5px] text-xl leading-8 text-muted">
          Join early users and take control of your business records.
        </p>
        <button
          type="button"
          data-waitlist-trigger
          className="mt-[34.3px] inline-flex h-[67.2px] items-center gap-3 rounded-[14px] bg-primary pr-9 pl-10 text-xl font-semibold text-white transition-colors hover:bg-primary/85"
        >
          Get Early Access
          <ArrowRight aria-hidden="true" className="size-5" />
        </button>
        <p className="mx-auto mt-[26.6px] max-w-[700px] text-[15.6px] leading-[22.9px] text-faint">
          Built for small businesses, traders, and everyday entrepreneurs who
          want to grow without stress.
        </p>
      </div>
    </section>
  );
}
