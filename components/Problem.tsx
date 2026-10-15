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
      className="px-6 pt-[108.8px] pb-27 text-center"
    >
      <p className="mx-auto mb-[26px] inline-block rounded-full border border-red/30 bg-red/10 px-[15px] py-[5.5px] font-mono text-xs tracking-wider text-red">
        THE PROBLEM
      </p>

      <h2
        id="problem-heading"
        className="mx-auto max-w-[800px] text-[55px] leading-[67.2px] font-extrabold tracking-[-0.015em] text-white"
      >
        Most small businesses don&apos;t really know their numbers.
      </h2>

      <p className="mx-auto mt-9 max-w-[560px] text-xl leading-8 text-muted">
        You sell every day. You spend every day.
        <br />
        But at the end of the week, you&apos;re guessing:
      </p>

      <ul className="mx-auto mt-[47px] grid max-w-[857.5px] grid-cols-1 gap-5 md:grid-cols-3">
        {QUESTIONS.map((question) => (
          <li
            key={question}
            className="rounded-xl border border-white/6 bg-card px-[22.5px] pt-[17.5px] pb-[18.3px] text-left text-base leading-[25.6px] font-semibold text-white"
          >
            {question}
          </li>
        ))}
      </ul>

      <p className="mt-11 text-xl leading-8 text-body">
        Without clear records, your business feels like guesswork.
      </p>
      <p className="mt-3.5 text-[22px] leading-8 font-bold text-white">
        And guesswork kills growth.
      </p>
    </section>
  );
}
