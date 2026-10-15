import { CircleCheckBig } from "lucide-react";

// "The solution" section. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.

const BENEFITS = [
  {
    title: "Add sales in seconds",
    text: "Log what you sold instantly, from anywhere.",
  },
  {
    title: "Record expenses instantly",
    text: "Never forget what you spent — capture it on the spot.",
  },
  {
    title: "See your daily profit automatically",
    text: "Numbaz does the math. You just read the result.",
  },
  {
    title: "Track who still owes you money",
    text: "Manage credit customers without a headache.",
  },
  {
    title: "Understand your business at a glance",
    text: "One screen. Everything you need to know.",
  },
];

const SNAPSHOT_ROWS = [
  { label: "Total Sales", value: "₦112,500", className: "text-white" },
  { label: "Total Expenses", value: "₦65,300", className: "text-orange" },
  { label: "Credit Owed", value: "₦28,000", className: "text-blue" },
];

export default function Solution() {
  return (
    <section
      aria-labelledby="solution-heading"
      className="px-6 py-27 text-center"
    >
      <p className="mx-auto mb-[26px] inline-block rounded-full border border-primary/30 bg-primary/12 px-[15px] py-[5.5px] font-mono text-xs tracking-wider text-primary">
        THE SOLUTION
      </p>

      <h2
        id="solution-heading"
        className="mx-auto max-w-[660px] text-[55px] leading-[67.2px] font-extrabold tracking-[-0.015em] text-white"
      >
        Numbaz makes it simple to track everything.
      </h2>

      <p className="mx-auto mt-[27px] max-w-[640px] text-xl leading-8 text-muted">
        No stress. No accounting knowledge needed. Just open the app and start
        tracking.
      </p>

      <div className="mx-auto mt-[70.2px] grid max-w-[1287px] items-start gap-[27.2px] text-left lg:grid-cols-[minmax(0,1fr)_498.3px]">
        <ul className="flex flex-col gap-[18px]">
          {BENEFITS.map(({ title, text }) => (
            <li
              key={title}
              className="flex items-start gap-[18.3px] rounded-xl border border-white/6 bg-card pt-5 pr-5 pb-[16.3px] pl-[22.4px]"
            >
              <span
                aria-hidden="true"
                className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
              >
                <CircleCheckBig className="size-4" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-base leading-[22px] font-semibold text-white">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-5 text-mint">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="rounded-3xl border border-white/8 bg-card p-[27.5px]">
          <p className="font-mono text-[12.3px] leading-4 tracking-wider text-mint">
            LIVE BUSINESS SNAPSHOT
          </p>
          <div className="mt-2.5 rounded-2xl bg-linear-to-br from-snapshot-from to-snapshot-to px-[18px] pt-[17.1px] pb-[16.6px] text-background">
            <p className="text-[13.5px] leading-5">Weekly Profit</p>
            <p className="mt-[4.3px] font-mono text-[33px] leading-10 font-bold">
              ₦47,200
            </p>
            <p className="mt-[2.8px] text-[13.3px] leading-5">↑ 24% this week</p>
          </div>
          <dl>
            {SNAPSHOT_ROWS.map(({ label, value, className }) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/5 pt-[27.5px] pb-[10.5px]"
              >
                <dt className="text-base leading-5 text-mint">{label}</dt>
                <dd
                  className={`font-mono text-[15.5px] leading-5 font-bold ${className}`}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
