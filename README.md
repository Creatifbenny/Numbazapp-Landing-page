# Numbaz landing page

One-page site for awareness and waitlist signup (full name and email).
Built from the desktop Figma export and deployed on Vercel.

**Status: in progress.** The desktop page is built top to bottom, all static,
and the waitlist popup opens from every "Get Early Access" button (UI only:
`lib/waitlist.ts` is a placeholder, nothing is saved yet). Responsive layouts are
added for every section (done: nav, hero and phone, ticker, problem, solution, how-it-works, features, closing, final CTA and footer sections).
The nav and footer use the real Numbaz logo from `public/brand/` (raster
PNGs; do not scale them up). Page metadata, favicon, Apple touch icon and a
share image are set up (`app/layout.tsx`, `app/icon.png`, `app/apple-icon.png`,
`app/opengraph-image.tsx`); set `NEXT_PUBLIC_SITE_URL` when the domain changes.
Motion is pure CSS (ticker marquee, floating-card bob, pill-dot pulse) and is
off under `prefers-reduced-motion: reduce`. Not built: the signup backend. Design tokens in
`app/tokens.css` are provisional (sampled from PNGs) and the fonts are
provisional stand-ins.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, lucide-react.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # typecheck
```

Local design exports live in `Design exports/` and are gitignored.
