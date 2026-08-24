# Paragon Network — Website

Next.js (App Router) + TypeScript + Tailwind CSS site for Paragon Network.

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Structure
- `app/page.tsx` — homepage (hero, game modes, partnerships teaser, connect)
- `app/partners/page.tsx` — partners directory page
- `app/layout.tsx` — root layout: fonts, header, footer, toast provider, cursor glow
- `app/globals.css` — Tailwind theme tokens (colors, fonts, keyframes) and shared component classes
- `components/` — `Header`, `Footer`, `Starfield` (hero canvas), `CursorGlow`, `Reveal` (scroll-reveal), `CopyButton` + `ToastProvider` (copy-to-clipboard), `icons.tsx` (game mode icons)
- `lib/data.ts` — content data: game modes, connect cards, partners
- `public/logo.png` — Paragon Network logo
- `public/partners/otherworlds-awakening.png` — banner image for the OtherWorlds Awakening partner card

## Editing content later
- Connect section cards (IP, Discord, Store, Wiki, Vote, Email) live in the `connectCards` array in [lib/data.ts](lib/data.ts).
- Game mode cards live in the `gameModes` array in [lib/data.ts](lib/data.ts) — icons are defined per mode key in [components/icons.tsx](components/icons.tsx).
- Category colors (`--color-survival`, `--color-lifesteal`, etc.) and the overall brand color (`--color-paragon` / `--color-paragon-glow`) are set once in `@theme` at the top of [app/globals.css](app/globals.css).
- Partnerships pitch copy lives directly in [app/page.tsx](app/page.tsx) under the "PARTNERSHIPS" section.

## Still placeholder — needs real values before launch
- **Wiki link**: `href: "#"` on the Wiki entry in `connectCards` ([lib/data.ts](lib/data.ts)) — swap in the real wiki URL once it exists.
- **Vote link**: `href: "#"` on the Vote entry in `connectCards` — swap in the real server-list voting URL.
- **Partnerships pitch copy**: the paragraph in the partnerships section of [app/page.tsx](app/page.tsx) is placeholder text — replace with the client's final pitch once they've written it.

## Adding another partner
Add a new object to the `partners` array in [lib/data.ts](lib/data.ts) (name, tagline, banner path, tags, IP, Discord + visit links), and drop the banner image in `public/partners/`. It renders automatically in the partner grid next to the existing card.

## Deploying
This is a standard Next.js app — deploy to [Vercel](https://vercel.com/new) (recommended, zero config) or any Node hosting that runs `npm run build && npm run start`.
