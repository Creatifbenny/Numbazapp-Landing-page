// "The problem" section. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.

const QUESTIONS = [
  "\"Did I make profit or loss?\"",
  "\"Where did my money go?\"",
  "\"How much do people still owe me?\"",
];

export default function Problem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="px-5 pt-[72px] pb-[72px] text-center sm:px-8 md:pt-24 md:pb-24 xl:px-6 xl:pt-[108.8px] xl:pb-27"
    >
      <p className="mx-auto mb-5 inline-block sm:mb-[26px] rounded-full border border-red/30 bg-red/10 px-[15px] py-[5.5px] font-mono text-xs tracking-wider text-red">
        THE PROBLEM
      </p>

      <h2
        id="problem-heading"
        className="mx-auto max-w-[800px] text-fluid-h2 font-extrabold tracking-[-0.015em] text-white"
      >
        Most small businesses don&apos;t really know their numbers.
      </h2>

      <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-7 text-muted sm:text-xl sm:leading-8 md:mt-9">
        You sell every day. You spend every day.
        <br />
        But at the end of the week, you&apos;re guessing:
      </p>

      <ul className="mx-auto mt-8 grid max-w-[857.5px] grid-cols-1 gap-4 md:mt-[47px] md:grid-cols-3 md:gap-5">
        {QUESTIONS.map((question) => (
          <li
            key={question}
            className="rounded-xl border border-white/6 bg-card px-[22.5px] pt-[17.5px] pb-[18.3px] text-left text-base leading-[25.6px] font-semibold text-white"
          >
            {question}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[17px] leading-7 text-body sm:text-xl sm:leading-8 md:mt-11">
        Without clear records, your business feels like guesswork.
      </p>
      <p className="mt-3.5 text-[19px] leading-7 font-bold text-white sm:text-[22px] sm:leading-8">
        And guesswork kills growth.
      </p>
    </section>
  );
}
