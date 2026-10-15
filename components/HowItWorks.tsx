// "How it works" section. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.
//
// The sticky nav offset for #how-it-works comes from the global
// scroll-padding-top on <html> (app/globals.css); adding scroll-margin here
// as well would double it.

const STEPS = [
  {
    number: "01",
    title: "Add your sales",
    text: "Log what you sold in seconds. Name, amount, done.",
  },
  {
    number: "02",
    title: "Add your expenses",
    text: "Record anything you spend — supplies, transport, everything.",
  },
  {
    number: "03",
    title: "See your profit",
    text: "Numbaz calculates everything automatically. No math required.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="px-5 pt-[72px] pb-[72px] text-center sm:px-8 md:pt-24 md:pb-24 xl:px-6 xl:pt-[107.1px] xl:pb-27"
    >
      <p className="mx-auto mb-5 inline-block sm:mb-[26px] rounded-full border border-blue/30 bg-blue/12 px-[15px] py-[5.5px] font-mono text-xs tracking-wider text-blue">
        HOW IT WORKS
      </p>

      <h2
        id="how-it-works-heading"
        className="mx-auto max-w-[900px] text-fluid-h2 font-extrabold tracking-[-0.015em] text-white"
      >
        Start tracking in 3 simple steps
      </h2>

      <ol className="mx-auto mt-10 grid max-w-[1144px] grid-cols-1 gap-4 text-left md:mt-[71.8px] md:gap-5 lg:grid-cols-3 lg:gap-[25.6px]">
        {STEPS.map(({ number, title, text }) => (
          <li
            key={number}
            className="rounded-2xl border border-white/7 bg-card px-7 pt-[27.6px] pb-[25.8px]"
          >
            <span
              aria-hidden="true"
              className="block font-mono text-[40px] leading-10 font-bold text-primary/20"
            >
              {number}
            </span>
            <h3 className="mt-[23.5px] text-xl leading-7 font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-base leading-[26.1px] text-muted">
              {text}
            </p>
            <span
              aria-hidden="true"
              className="mt-[21.2px] block h-[4.5px] w-[35px] rounded-full bg-primary"
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
