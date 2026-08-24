# Paragon Network — Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 site for Paragon Network.

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

For the live player count, copy `.env.example` to `.env.local` and fill in the two bot variables (see **Server status** below). Without them the status card shows a "not connected" state — everything else works.

## Pages
- `/` — homepage: hero with copy-to-clipboard server IP, stats, game modes, partnerships, connect grid, CTA
- `/services` — live server status + how to connect
- `/partners` — partner directory
- `/vote` — all 13 vote links

## Structure
- `app/globals.css` — the design system: color tokens, fonts, keyframes and shared component classes (`.btn`, `.card`, `.container-page`, `.section`, `.eyebrow`, `.h-section`, `.lede`, `.pill`)
- `app/layout.tsx` — fonts, header, footer, toast provider
- `components/` — `Header` (with mobile menu), `Footer`, `Aurora` (ambient background), `PageHero`, `SectionHeading`, `Reveal` (scroll reveal), `CopyButton` + `ToastProvider`, `ServerStatus`, `icons.tsx`
- `lib/data.ts` — all site content: game modes, stats, connect cards, vote links, partners, nav links, and the shared constants (`SERVER_IP`, `DISCORD_URL`, `STORE_URL`, `STAFF_FORM_URL`)
- `lib/serverStatus.ts` — fetches status from the Discord bot; used by both the Services page and the API route
- `public/logo.png`, `public/partners/` — images

## Editing content
Nearly everything lives in [lib/data.ts](lib/data.ts):
- **Server IP / Discord / store / staff form** — the constants at the top; changing one updates every usage across the site.
- **Game modes** — the `gameModes` array. Each needs a `key` that has a matching icon in [components/icons.tsx](components/icons.tsx) and a matching `--color-<key>` token in [app/globals.css](app/globals.css).
- **Connect cards, vote links, partners, nav** — the `connectCards`, `voteLinks`, `partners` and `navLinks` arrays.

Brand colors and all other design tokens are set once in the `@theme` block at the top of [app/globals.css](app/globals.css).

## Server status
The site never talks to Discord directly. A separate bot polls the Minecraft server and exposes `GET /status` returning `{ online, players, maxPlayers }`; the site reads that through [lib/serverStatus.ts](lib/serverStatus.ts).

- `BOT_STATUS_URL` — the bot's status endpoint
- `BOT_STATUS_TOKEN` — shared secret, sent as `Authorization: Bearer <token>`; must match the bot's own token

Requests are cached server-side for 10s, so the bot is hit at most once per 10s no matter how many people press Refresh (which additionally has a 15s client-side cooldown).

## Still placeholder — needs real values before launch
- **Wiki link**: `href: "#"` on the Wiki entry in `connectCards` ([lib/data.ts](lib/data.ts)).
- **Partnership copy**: the pitch paragraph in the partnerships section of [app/page.tsx](app/page.tsx).

## Adding another partner
Add an object to the `partners` array in [lib/data.ts](lib/data.ts) and drop the banner image in `public/partners/`. It renders automatically in the grid.

## Note on local dev
This repo sits inside a OneDrive-synced folder. OneDrive can lock files in `.next/`, which makes `next dev` fail with `EPERM ... rename` errors and serve a bare `500` on some routes. If that happens, restart the dev server (delete `.next` if it persists). `npm run build` is unaffected.

## Deploying
Standard Next.js app — deploy to [Vercel](https://vercel.com/new) or any Node host running `npm run build && npm run start`. Set `BOT_STATUS_URL` and `BOT_STATUS_TOKEN` in the host's environment variables.
