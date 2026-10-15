// Closing statement. Sizes and spacing were measured from desktop.png
// (1440px design at ~2.685x) and are APPROXIMATE.

export default function ClosingStatement() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="px-5 pt-[72px] pb-[72px] text-center sm:px-8 md:pt-24 md:pb-24 xl:px-6 xl:pt-[105.6px] xl:pb-27"
    >
      <h2
        id="closing-heading"
        className="mx-auto max-w-[900px] text-fluid-h2 font-extrabold tracking-[-0.015em] text-white"
      >
        Your business deserves clarity.
      </h2>

      <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-7 text-body sm:text-xl sm:leading-8 md:mt-[27.5px]">
        You work hard every day.
        <br />
        But hard work without clear numbers can still lead to loss.
      </p>
      <p className="mx-auto mt-4 max-w-[900px] text-[17px] leading-7 font-semibold text-white sm:text-xl sm:leading-8 md:mt-[19px]">
        Numbaz helps you see the truth of your business — so you can grow with
        confidence.
      </p>
    </section>
  );
}
