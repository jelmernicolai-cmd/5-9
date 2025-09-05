# PharmaGtN (Next.js 14, App Router)

Productiesjabloon voor een NL‑gerichte farma‑website met:
- **Responsive navigatie**
- **SEO‑metadata + JSON‑LD**
- **Login via NextAuth (Google/GitHub)** en beveiligde **/portal**
- **Contactformulier** (server route)
- **Sitemap & robots.txt**
- **Templates** download

## Snel starten

```bash
pnpm i   # of npm i / yarn
cp .env.example .env
pnpm dev
```

Ga naar http://localhost:3000

## Vereiste omgevingsvariabelen

Zie `.env.example` en vul in:

- `NEXTAUTH_SECRET` — een random 32+ chars string
- `NEXTAUTH_URL` — bv. `http://localhost:3000` (lokaal) of je productie‑URL
- Optioneel providers:
  - `GOOGLE_ID` / `GOOGLE_SECRET`
  - `GITHUB_ID` / `GITHUB_SECRET`
- Stripe (optioneel): `STRIPE_SECRET_KEY`

## Deploy (Vercel)

1. Push deze map naar een nieuwe GitHub‑repo (de inhoud van deze map is de repo‑root).
2. **Vercel → New Project → Import Repository**.
3. Voeg **Environment Variables** toe zoals hierboven.
4. Deploy. Test `/api/health`.

## Beveiliging

- /portal is serverside beschermd met `getServerSession` en redirect niet‑ingelogde gebruikers naar `/login`.
- Zet HTTPS en domein in Vercel. Voeg eventueel cookie‑instellingen toe voor productieniveau security.
