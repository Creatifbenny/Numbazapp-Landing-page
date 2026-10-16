# Numbaz landing page

One-page Numbaz landing page for awareness and waitlist signup (full name and
email). Built from the desktop Figma export. Deployed on Vercel.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS v4 (config lives in CSS:
`app/tokens.css` `@theme`), `lucide-react` for icons. No database, auth, CMS
or animation library.

## Status
Page built (statically rendered): sticky nav, hero (including the
phone mockup and two floating cards), ticker strip, problem, solution,
how-it-works and features sections, closing statement, final CTA panel and
footer, plus the waitlist popup (`components/WaitlistDialog.tsx`, UI only).
The popup calls `submitWaitlist` in `lib/waitlist.ts`, a placeholder that
waits 800ms and returns success; the real signup route plugs in there and
nothing is saved yet. The popup shows a "Preview only" note unless
`NEXT_PUBLIC_WAITLIST_LIVE` is `"true"`. Tokens and fonts are provisional
(Inter + Source Code Pro; real names unknown). Responsive at every width from 320px up: nav (hamburger menu below
768px, `components/MobileMenu.tsx`), hero and phone (stacks below 1024px,
phone centred), ticker, problem, solution, how-it-works, features, closing, final CTA and footer sections. Desktop (1280px and up) is the unchanged design.
The nav and footer use the client's real logo
(`public/brand/logo-lockup.png` 775x156 and `logo-mark.png` 138x138; raster,
never scale up). Page metadata is in `app/layout.tsx` (title, description,
Open Graph and Twitter cards, theme colour; site URL from
`NEXT_PUBLIC_SITE_URL`, default `https://numbazapp.vercel.app`, switch to
`https://numbazapp.com` once live). `app/icon.png` (48), `app/apple-icon.png`
(180) and `app/opengraph-image.tsx` (1200x630, static) are built from the logo
mark and lock-up. Motion is pure CSS in `app/globals.css` (transform and opacity only, all off
under `prefers-reduced-motion: reduce`): the ticker marquee (45s loop, pauses
on hover and focus), a bob on the two floating phone cards (10px below 1024px, 12px from 1024px up,
3.4s and 4s cycles), and a pulse
on the hero pill dot, plus a one-time word-by-word reveal of the hero headline (150ms apart, 450ms each,
1.2s in total)
(`components/HeroHeadline.tsx`; per word, not per letter, because per-letter
splitting lost kerning and changed line widths by up to about 4px). Not built: the signup backend. Anchors `#how-it-works` and
`#features` have real targets; the sticky-nav offset is the global
`scroll-padding-top` in `app/globals.css`. Design exports are in
`Design exports/` (local only, gitignored).

## Rules
- No secrets in git. `.env` stays gitignored.
- Every push names its remote. No push without the owner's go-ahead.
- Risky changes go on a branch.
- Update this file in the same step as any change that makes it stale.
