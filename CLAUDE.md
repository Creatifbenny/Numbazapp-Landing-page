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
footer, plus the waitlist popup (`components/WaitlistDialog.tsx`, UI only).
The popup calls `submitWaitlist` in `lib/waitlist.ts`, a placeholder that
waits 800ms and returns success; the real signup route plugs in there and
nothing is saved yet. The popup shows a "Preview only" note unless
`NEXT_PUBLIC_WAITLIST_LIVE` is `"true"`. Tokens and fonts are provisional
(Inter + Source Code Pro; real names unknown). Responsive work in progress: the nav has
a hamburger menu below 768px (`components/MobileMenu.tsx`) and the hero
stacks below 1024px with the phone centred; later sections are desktop-only
until their responsive commits land. Not built: the signup
backend, animations. Anchors `#how-it-works` and
`#features` have real targets; the sticky-nav offset is the global
`scroll-padding-top` in `app/globals.css`. Design exports are in
`Design exports/` (local only, gitignored).

## Rules
- No secrets in git. `.env` stays gitignored.
- Every push names its remote. No push without the owner's go-ahead.
- Risky changes go on a branch.
- Update this file in the same step as any change that makes it stale.
