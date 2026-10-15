# Numbaz landing page

One-page site for awareness and waitlist signup (full name and email).
Built from the desktop Figma export and deployed on Vercel.

**Status: in progress.** The desktop page is built top to bottom, all static,
and the waitlist popup opens from every "Get Early Access" button (UI only:
`lib/waitlist.ts` is a placeholder, nothing is saved yet). Responsive layouts are
being added section by section (done: nav, hero and phone, ticker, problem and solution sections; still desktop-only: the how-it-works, features, closing, final CTA and footer sections).
Not built: the signup backend and animations. Design tokens in
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
