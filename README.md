# Spryng Ventures

Landing page for spryngventures.com. Vite + React + TypeScript, deployed on Vercel.

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

## Deploy to Vercel

1. Import this GitHub repo at https://vercel.com/new.
2. Vercel auto-detects Vite — no settings to change. Click **Deploy**.
3. Once deployed, you'll get a `*.vercel.app` URL. Visit it to confirm the page loads.

## Connect the domain

In the Vercel project: **Settings → Domains → Add** → `spryngventures.com` (and `www.spryngventures.com`).

Vercel will show the DNS records you need to set at your registrar:

- **Apex (`spryngventures.com`)**: `A` record → `76.76.21.21`
- **`www`**: `CNAME` record → `cname.vercel-dns.com`

(Use whatever values Vercel shows — they're authoritative.)

DNS propagation usually takes minutes; can take up to 24h. Vercel issues the SSL cert automatically once the records resolve.
