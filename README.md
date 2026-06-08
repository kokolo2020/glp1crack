# GLP1Crack.pro

Free GLP-1 calculators for Ozempic, Wegovy, Mounjaro & Zepbound. Part of the Crack Network.

## Live site
[glp1crack.pro](https://glp1crack.pro)

## What's inside

Single-file HTML site (`glp1crack.html`) with 5 calculators and 5 languages.

**Calculators**
- 💉 Dose — syringe units from mg + concentration
- 📉 Weight Loss — projection based on clinical trial data (STEP-1, SURMOUNT-1)
- 📅 Titration — week-by-week dose schedule for semaglutide, tirzepatide, liraglutide
- 🥗 Macros — TDEE, protein, carbs, fat, fiber targets
- 💊 Compare — side-by-side drug comparison table + FAQ

**Languages**
- 🇺🇸 English
- 🇫🇷 French
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇧🇷 Portuguese (Brazil)

**Modes**
- Simple — dose calculator only, clean output
- Pro — full report: weekly chart, cost per kg, FDA eligibility, lean mass risk, compounded alt price

## Tech stack

| Service | Purpose |
|---------|---------|
| GitHub | Source hosting |
| Netlify | Auto-deploy on push |
| Supabase | Live visitor tracking |
| Google AdSense | Monetization (`ca-pub-5063827367072521`) |
| GA4 | Analytics |

## Supabase setup

Run this SQL in your Supabase project (`mjnigheggxtythytsqle`):

```sql
CREATE TABLE glp1crack_visits (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE glp1crack_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_all" ON glp1crack_visits
  FOR ALL USING (true) WITH CHECK (true);
```

## Deploy

1. Push `glp1crack.html` to this repo
2. Netlify auto-deploys on every push
3. Set custom domain `glp1crack.pro` in Netlify
4. Delete GoDaddy WebsiteBuilder A record (if present)
5. Point DNS to Netlify: `75.2.60.5`

## GA4

Replace `G-PLACEHOLDER` in the HTML with the real GA4 measurement ID after creating a new property for glp1crack.pro.

## Crack Network

| Site | Niche | Theme |
|------|-------|-------|
| [wordcrack.pro](https://wordcrack.pro) | Word games | Purple |
| [loancrack.pro](https://loancrack.pro) | Loans / mortgage | Blue |
| [insurancecrack.pro](https://insurancecrack.pro) | Insurance | Green |
| [glp1crack.pro](https://glp1crack.pro) | GLP-1 / weight loss | Green |
