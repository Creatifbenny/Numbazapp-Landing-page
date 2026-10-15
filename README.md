# Numbaz landing page

One-page site for awareness and waitlist signup (full name and email).
Built from the desktop Figma export and deployed on Vercel.

**Status: in progress.** The desktop page is built top to bottom, all static:
nav, hero with phone mockup, ticker, problem, solution, how-it-works,
features, closing statement, final call to action and footer. Not built: the
signup popup, animations, and mobile and tablet layouts. Design tokens in
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
