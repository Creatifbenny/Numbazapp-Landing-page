# Numbaz landing page

One-page Numbaz landing page for awareness and waitlist signup (full name and
email). Built from the desktop Figma export. Deployed on Vercel.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS v4 (config lives in CSS:
`app/tokens.css` `@theme`), `lucide-react` for icons. No database, auth, CMS
or animation library.

## Status
Built so far: sticky nav and hero left column (`components/SiteHeader.tsx`,
`components/Hero.tsx`), with an empty phone slot. Tokens and fonts are
provisional (Inter + Source Code Pro; real names unknown). Later sections,
phone mockup, ticker and signup popup are not built. Anchors `#how-it-works`
and `#features` have no targets yet. Design exports are in `Design exports/`
(local only, gitignored).

## Rules
- No secrets in git. `.env` stays gitignored.
- Every push names its remote. No push without the owner's go-ahead.
- Risky changes go on a branch.
- Update this file in the same step as any change that makes it stale.
