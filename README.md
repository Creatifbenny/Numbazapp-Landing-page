# Numbaz landing page

One-page site for awareness and waitlist signup (full name and email).
Built from the desktop Figma export and deployed on Vercel.

**Status: in progress.** The desktop page is built top to bottom, all static,
and the waitlist popup opens from every "Get Early Access" button. The popup
posts to the server route `app/api/waitlist/route.ts`, which forwards signups
to a Google Apps Script web app; it is tested against a local fake of that
script only. The real script URL and secret are not set, so nothing is saved
yet, and the "Preview only" note stays until the client approves going live.
Vercel Web Analytics counts page views only (no custom events on the Hobby
plan; signups are counted from the Google Sheet); it collects once enabled in
the Vercel dashboard.
The hero has no social-proof row: the unverified waitlist-count claim was
removed before launch, and no user counts, avatars or testimonials should be
added unless the client confirms they are true.
The welcome-email footer image is `public/email/numbaz-email-footer.png` (1200x600, 57 KB).
Responsive layouts are
added for every section (done: nav, hero and phone, ticker, problem, solution, how-it-works, features, closing, final CTA and footer sections).
The nav and footer use the real Numbaz logo from `public/brand/` (raster
PNGs; do not scale them up). Page metadata, favicon, Apple touch icon and a
share image are set up (`app/layout.tsx`, `app/icon.png`, `app/apple-icon.png`,
`app/opengraph-image.tsx`); set `NEXT_PUBLIC_SITE_URL` when the domain changes.
Motion is pure CSS (ticker marquee, floating-card bob, pill-dot pulse, one-time
hero headline reveal) and is
off under `prefers-reduced-motion: reduce`. Design tokens in
`app/tokens.css` are provisional (sampled from PNGs) and the fonts are
provisional stand-ins.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, lucide-react.

## Environment variables

Server-only, read at request time (see `.env.example`); set both in Vercel
when the client's Apps Script is deployed. The build passes without them.

- `WAITLIST_SCRIPT_URL`: the Apps Script web app URL.
- `WAITLIST_SECRET`: the shared secret the script checks.

Without them `/api/waitlist` answers 503 `not_configured`.
`NEXT_PUBLIC_WAITLIST_LIVE` is a separate flag that hides the "Preview only"
note; leave it unset until the client approves going live.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # typecheck
```

Local design exports live in `Design exports/` and are gitignored.
