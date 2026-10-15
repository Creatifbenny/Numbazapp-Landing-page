// Closing statement. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.

export default function ClosingStatement() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="px-6 pt-[105.6px] pb-27 text-center"
    >
      <h2
        id="closing-heading"
        className="mx-auto max-w-[900px] text-[55px] leading-[67.2px] font-extrabold tracking-[-0.015em] text-white"
      >
        Your business deserves clarity.
      </h2>

      <p className="mx-auto mt-[27.5px] max-w-[640px] text-xl leading-8 text-body">
        You work hard every day.
        <br />
        But hard work without clear numbers can still lead to loss.
      </p>
      <p className="mx-auto mt-[19px] max-w-[900px] text-xl leading-8 font-semibold text-white">
        Numbaz helps you see the truth of your business — so you can grow with
        confidence.
      </p>
    </section>
  );
}
