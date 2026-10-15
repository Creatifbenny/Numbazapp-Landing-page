import { ChartColumn, CreditCard, TrendingUp, Users } from "lucide-react";

// "Features" section. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.
//
// The sticky nav offset for #features comes from the global
// scroll-padding-top on <html> (app/globals.css); adding scroll-margin here
// as well would double it.

const FEATURES = [
  {
    title: "Know your profit daily",
    text: "See exactly how much you made each day — no guessing, no calculator needed.",
    Icon: ChartColumn,
    tile: "bg-primary/10 text-primary",
  },
  {
    title: "Track expenses easily",
    text: "Never lose track of what you spend. Every naira, recorded in seconds.",
    Icon: CreditCard,
    tile: "bg-orange/10 text-orange",
  },
  {
    title: "Remember who owes you",
    text: "Keep track of customers who buy on credit. Chase the right people.",
    Icon: Users,
    tile: "bg-blue/10 text-blue",
  },
  {
    title: "Grow with clarity",
    text: "Make better decisions with real numbers — not gut feelings.",
    Icon: TrendingUp,
    tile: "bg-primary/10 text-primary",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="px-6 pt-[105.5px] pb-27 text-center"
    >
      <h2
        id="features-heading"
        className="mx-auto max-w-[900px] text-[55px] leading-[67.2px] font-extrabold tracking-[-0.015em] text-white"
      >
        Stop guessing. Start knowing.
      </h2>

      <p className="mx-auto mt-[18px] max-w-[640px] text-xl leading-8 text-muted">
        Everything your business needs to grow with confidence.
      </p>

      <ul className="mx-auto mt-[71.1px] grid max-w-[1144px] grid-cols-1 gap-x-[27.4px] gap-y-[26.1px] text-left md:grid-cols-2">
        {FEATURES.map(({ title, text, Icon, tile }) => (
          <li
            key={title}
            className="rounded-2xl border border-white/7 bg-card px-7 pt-[27.6px] pb-[28.1px]"
          >
            <span
              aria-hidden="true"
              className={`flex size-11 items-center justify-center rounded-xl ${tile}`}
            >
              <Icon className="size-7" strokeWidth={2} />
            </span>
            <h3 className="mt-[20.7px] text-xl leading-7 font-semibold text-white">
              {title}
            </h3>
            <p className="mt-[4.6px] text-[15.6px] leading-[25.3px] text-muted">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
