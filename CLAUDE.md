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

## State for a fresh session
### Where things stand
- Work is on branch `v1` (`main` only holds the scaffold). Nothing on `v1` is
  pushed; the owner decides when.
- Page order (`app/page.tsx`): sticky nav (`SiteHeader`, hamburger below 768px)
  -> Hero (pill, headline, lead, two buttons, waitlist proof, phone mockup with
  two floating cards) -> Ticker -> Problem -> Solution -> How it works
  (`#how-it-works`) -> Features (`#features`) -> closing statement -> final CTA
  panel -> footer. `WaitlistDialog` is mounted once after the footer.
- Popup: native `<dialog>`, opened by any `[data-waitlist-trigger]` (nav, hero,
  final CTA, menu button). UI only. It calls the stub `submitWaitlist` in
  `lib/waitlist.ts` (waits 800ms, returns ok, saves nothing). A honeypot field
  `company` is built in. "Preview only" note shows unless
  `NEXT_PUBLIC_WAITLIST_LIVE` is `"true"`.
- Real logo: `public/brand/logo-lockup.png` (775x156) and `logo-mark.png`
  (138x138), raster. Nav shows the lock-up 28px high (24px on mobile), footer
  the mark at 27px.
- Metadata in `app/layout.tsx` (title, description, Open Graph, Twitter,
  theme colour; `NEXT_PUBLIC_SITE_URL`, default `https://numbazapp.vercel.app`).
  `app/icon.png` (48), `app/apple-icon.png` (180), `app/opengraph-image.tsx`
  (1200x630, regular-weight text; a bold look would need a font file).
- Motion (pure CSS in `app/globals.css`, transform and opacity only, all off
  under reduced motion): ticker marquee (45s loop, pauses on hover and focus),
  floating cards (A bobs up, B bobs down; 10px below 1024px, 12px from 1024px
  up; 3.4s and 4s cycles), pill-dot pulse, headline word-by-word reveal
  (150ms apart, 450ms each; per word because per-letter lost kerning).
- Responsive: breakpoints 640/768/1024/1280. Desktop (1280px and up) is the
  approved design and must not change. Fluid type tokens are in `tokens.css`.
- Not built: the real signup backend (storage, welcome email), analytics, any
  footer links, any API route or env file. Tokens and fonts are provisional.

### The 1440px baseline (layout width 1440, animations at rest)
- `scrollHeight` 5523; header 77 tall; hero bottom 965.7.
- Ticker 0, 965.7, 1440 x 58.5. Headline `<h1>` 80, 227, 672 x 334 (68px/83.5px).
- Phone body 910, 183.7, 292 x 656. Floating cards at rest: top 1078.4, 264.5,
  155.3 x 54.4; bottom 874.3, 676.3, 179.5 x 55.1.
- Final CTA panel 291.3, 4813.7, 857.5 x 502.3. Footer top 5424, height 99.
- Section tops: solution 1788.4, how it works 2828.5, features 3470.3,
  closing 4284, final CTA 4707.3.

### How we work
- Start every change by inspecting the repo: report `git status`, the branch and
  recent `git log`. Stop if the tree is not clean or the branch is wrong.
- Measure at 1440 before and after and confirm nothing else moved. Check
  `scrollWidth` equals the layout width at 320, 375, 768, 1024 and 1440.
- Run build, lint and typecheck and report the output verbatim. Confirm `/` is
  still listed as static in the build.
- One concern per commit. Update the status lines here and in `README.md` in
  the same commit. Never push, fetch or touch a remote.
- Add no dependencies without asking. Stop and list an OPEN DECISION instead of
  guessing. Finish with an honest "not checked" list.
- Browser pane tips: width 1455 gives a layout width of 1440 (15px scrollbar);
  animations only advance after a screenshot, so seek them with
  `document.getAnimations()`; restart `next dev` if new CSS is not served.

### Things never to do
- Run `npm audit fix --force`. Commit anything from `Design exports/` or any
  `.env` file. Scale the logo above its native size. Add entrance or scroll
  animations. Restyle the approved desktop design. Hardcode hex values in
  components (use tokens; add a PROVISIONAL token if one is missing).

### Known small issues, accepted
- At 320px wide the top floating card overlaps the "Emeka shops" text on the
  phone mockup (decorative, rare width).

### Open decisions
- Where signups are stored, how the welcome email is sent, and analytics:
  decided in the chat project, not in this repo.
