import type { CSSProperties } from "react";

// Hero headline with a one-time reveal, word by word (pure CSS, see
// .reveal-word in app/globals.css). Server-rendered: the real text stays in
// the DOM, each word is a nowrap inline-block so it never breaks across lines,
// and its index is in --i. The heading's aria-label reads it as one sentence.
//
// The reveal is per word, not per letter: wrapping every letter in an
// inline-block loses the font's kerning and changed line widths by up to
// about 4px, so the static design would no longer match.

const LINES: { words: string[]; accent?: boolean }[] = [
  { words: ["Know", "your"] },
  { words: ["Numbaz."], accent: true },
  { words: ["Grow", "your"] },
  { words: ["business."] },
];

export default function HeroHeadline() {
  let index = 0;

  return (
    <h1
      id="hero-heading"
      aria-label="Know your Numbaz. Grow your business."
      className="text-fluid-h1 font-extrabold tracking-[-0.015em] text-white"
    >
      {LINES.map((line, lineIndex) => {
        const words = line.words.map((word, wordIndex) => {
          const style = { "--i": index++ } as CSSProperties;
          return (
            <span key={word + wordIndex}>
              {wordIndex > 0 ? " " : null}
              <span
                aria-hidden="true"
                className="reveal-word whitespace-nowrap"
                style={style}
              >
                {word}
              </span>
            </span>
          );
        });
        return (
          <span key={lineIndex}>
            {line.accent ? <span className="text-mint">{words}</span> : words}
            {lineIndex < LINES.length - 1 ? (
              <>
                {" "}
                <br />
              </>
            ) : null}
          </span>
        );
      })}
    </h1>
  );
}
