# Numbaz landing page

One-page Numbaz landing page for awareness and waitlist signup (full name and
email). Built from the desktop Figma export. Deployed on Vercel.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS v4 (config lives in CSS:
`app/tokens.css` `@theme`), `lucide-react` for icons. No database, auth, CMS
or animation library.

## Status
Desktop page built (static, no animation): sticky nav, hero (including the
phone mockup and two floating cards), ticker strip, problem, solution,
how-it-works and features sections, closing statement, final CTA panel and
footer (`components/SiteHeader.tsx`, `Hero.tsx`, `PhoneMockup.tsx`,
`Ticker.tsx`, `Problem.tsx`, `Solution.tsx`, `HowItWorks.tsx`,
`Features.tsx`, `ClosingStatement.tsx`, `FinalCta.tsx`, `SiteFooter.tsx`).
Tokens and fonts are provisional (Inter + Source Code Pro; real names
unknown). Not built: signup popup (three `data-waitlist-trigger` buttons are
in place), animations, mobile and tablet layouts. Anchors `#how-it-works` and
`#features` have real targets; the sticky-nav offset is the global
`scroll-padding-top` in `app/globals.css`. Design exports are in
`Design exports/` (local only, gitignored).

## Rules
- No secrets in git. `.env` stays gitignored.
- Every push names its remote. No push without the owner's go-ahead.
- Risky changes go on a branch.
- Update this file in the same step as any change that makes it stale.
