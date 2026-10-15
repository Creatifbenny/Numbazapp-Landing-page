import { ArrowRight } from "lucide-react";

// Final call-to-action panel. Sizes and spacing were measured from
// desktop.png (1440px design at ~2.685x) and are APPROXIMATE. The green glow
// at the bottom of the section is a radial gradient of the primary colour.

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="final-cta-bg px-5 pt-[72px] pb-[72px] sm:px-8 md:pt-24 md:pb-24 xl:px-6 xl:pt-[106.4px] xl:pb-27"
    >
      <div className="mx-auto max-w-[857.5px] rounded-[20px] border border-primary/20 bg-card p-6 text-center sm:px-8 sm:py-12 md:rounded-3xl md:px-6 md:pt-[70px] md:pb-[70.5px] xl:rounded-[28px]">
        <h2
          id="final-cta-heading"
          className="mx-auto max-w-[620px] text-fluid-h2 font-extrabold tracking-[-0.015em] text-white"
        >
          Start knowing your Numbaz today.
        </h2>
        <p className="mt-4 text-[17px] leading-7 text-muted sm:text-xl sm:leading-8 md:mt-[19.5px]">
          Join early users and take control of your business records.
        </p>
        <button
          type="button"
          data-waitlist-trigger
          className="mt-7 inline-flex h-[67.2px] w-full items-center justify-center gap-3 rounded-[14px] bg-primary px-6 text-xl font-semibold text-white sm:w-auto sm:pr-9 sm:pl-10 md:mt-[34.3px] transition-colors hover:bg-primary/85"
        >
          Get Early Access
          <ArrowRight aria-hidden="true" className="size-5" />
        </button>
        <p className="mx-auto mt-5 max-w-[700px] text-[15.6px] leading-[22.9px] text-faint md:mt-[26.6px]">
          Built for small businesses, traders, and everyday entrepreneurs who
          want to grow without stress.
        </p>
      </div>
    </section>
  );
}
