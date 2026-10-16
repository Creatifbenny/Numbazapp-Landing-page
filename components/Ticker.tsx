// Ticker strip. Measured from desktop.png (APPROXIMATE): 58.5px tall mint
// band, 15.5px monospace text in the page background colour, 56px gaps.
//
// Motion is pure CSS (see .ticker-* in app/globals.css): the track holds two
// identical groups and slides left by exactly one group width, so the loop has
// no seam. Each group repeats the message set three times so a group is wider
// than the viewport; the strip at rest looks like the static design. Only the
// first set is exposed to assistive technology. Under reduced motion
// everything marked ticker-dup is hidden, leaving the message set once.

const MESSAGES = [
  "You made ₦8,500 profit today",
  "Let's record your sales",
  "Nice. You're on track",
  "No sales yet today. Let's fix that.",
];

function MessageSet({ dup = false }: { dup?: boolean }) {
  return (
    <ul
      aria-hidden={dup || undefined}
      className={`flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 ${dup ? "ticker-dup" : ""}`}
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
      className="ticker flex h-12 items-center overflow-hidden bg-mint font-mono text-[13px] text-background sm:h-[58.5px] sm:text-[15.5px]"
    >
      <div className="ticker-track flex w-max">
        <div className="flex min-w-[100vw] shrink-0">
          <MessageSet />
          <MessageSet dup />
          <MessageSet dup />
        </div>
        <div
          aria-hidden="true"
          className="ticker-dup flex min-w-[100vw] shrink-0"
        >
          <MessageSet />
          <MessageSet />
          <MessageSet />
        </div>
      </div>
    </section>
  );
}
