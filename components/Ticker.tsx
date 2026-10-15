// Static ticker strip. Measured from desktop.png (APPROXIMATE): 58.5px tall
// mint band, 15.5px monospace text in the page background colour, 56px gaps.
// The frame is a still taken mid-scroll with the first message flush left.
// The marquee animation is a later step; the list is repeated so it can be
// scrolled without a visible seam.

const MESSAGES = [
  "You made ₦8,500 profit today",
  "Let's record your sales",
  "Nice. You're on track",
  "No sales yet today. Let's fix that.",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
    >
      {MESSAGES.map((message) => (
        <li key={message} className="whitespace-nowrap">
          {message}
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <section
      aria-label="Sample messages from the Numbaz app"
      className="flex h-12 items-center overflow-hidden bg-mint font-mono text-[13px] text-background sm:h-[58.5px] sm:text-[15.5px]"
    >
      <Row />
      <Row hidden />
    </section>
  );
}
