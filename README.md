# Numbaz landing page

One-page site for awareness and waitlist signup (full name and email).
Built from the desktop Figma export and deployed on Vercel.

**Status: scaffold only.** No sections are built. Design tokens in
`app/tokens.css` are provisional (sampled from PNGs). Fonts are not chosen.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # typecheck
```

Local design exports live in `Design exports/` and are gitignored.
