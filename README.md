# Paws & Purpose — Animal Care With a Mission

A production-ready, SEO-optimized React SPA focused on raising awareness for street animal welfare in Pakistan. Features 19 original vet-aware articles across 5 categories, 3 free pet care tools, Google AdSense integration (GDPR-compliant), and full Schema.org structured data for Google Search indexing.

**Live Site:** [pawsandpurpose.com](https://pawsandpurpose.com)
**Author:** Syed Farjaad Raza Rizvi — Karachi, Pakistan

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS + custom CSS (scrapbook/torn-paper design system) |
| UI Components | Radix UI primitives (shadcn/ui pattern) |
| Routing | React Router v7 (`BrowserRouter` for SEO-friendly clean URLs) |
| SEO | `react-helmet-async` (per-page meta, Open Graph, Twitter Cards, JSON-LD) |
| Ads | Google AdSense (`ca-pub-9475460975059195`) with cookie-gated script injection |
| Hosting | Netlify (SPA wildcard rewrite + security headers via `netlify.toml`) |

---

## Project Structure

```
app/
├── public/
│   ├── ads.txt                          # AdSense publisher verification
│   ├── googlee12e98bb30a9fb8c.html      # Google Search Console verification
│   ├── robots.txt
│   └── sitemap.xml                      # 31 URLs with lastmod + changefreq
├── src/
│   ├── components/
│   │   ├── SEO.tsx                      # Centralized meta/schema component
│   │   ├── AdSlot.tsx                   # Cookie-gated AdSense ad units
│   │   ├── CookieConsent.tsx            # GDPR/CCPA consent banner
│   │   ├── Header.tsx                   # Sticky nav + mobile hamburger
│   │   ├── Footer.tsx                   # 5-column footer with Legal section
│   │   ├── LegalShell.tsx               # Shared layout for Privacy/Terms
│   │   ├── ToolShell.tsx               # Shared layout for tools
│   │   ├── ArticleBody.tsx             # Article content renderer
│   │   ├── ArticleCard.tsx              # Blog list card
│   │   └── ...                          # TornEdge, PawStamp, Icons, etc.
│   ├── pages/
│   │   ├── Home.tsx                     # Hero + featured + latest + tools
│   │   ├── Blog.tsx                     # Article list with category filter
│   │   ├── ArticlePage.tsx              # Full article + FAQ schema + breadcrumbs
│   │   ├── About.tsx                    # Mission + story + photo band
│   │   ├── Contact.tsx                  # WhatsApp-based contact
│   │   ├── Tools.tsx                    # Tool directory
│   │   ├── DogAge.tsx                  # Dog age calculator (size-adjusted)
│   │   ├── PetCost.tsx                 # Monthly pet cost estimator
│   │   ├── FoodChecker.tsx             # Food safety checker (35+ foods)
│   │   ├── Privacy.tsx                  # Privacy Policy (mentions AdSense cookies)
│   │   ├── Terms.tsx                   # Terms of Service
│   │   └── NotFound.tsx                # 404 with noindex + suggestion links
│   ├── data/
│   │   ├── articles.ts                 # 19 articles across 5 categories
│   │   └── foods.ts                    # 35+ human food safety database
│   └── main.tsx                        # HelmetProvider + BrowserRouter entry
├── index.html                          # Static meta + AdSense script + JSON-LD
├── netlify.toml                        # SPA rewrite + security headers + snippet disable
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## SEO Features

- **Per-page meta tags** via `react-helmet-async` — unique title, description, canonical URL, Open Graph, Twitter Card on every route
- **Schema.org JSON-LD** — WebSite (with SearchAction), Organization, Article, FAQPage, BreadcrumbList, WebApplication schemas
- **Sitemap** — 31 URLs in `public/sitemap.xml` with `<lastmod>` and `<changefreq>`
- **Google Search Console** verification via meta tag + HTML file
- **Clean URLs** — `BrowserRouter` (not `HashRouter`) for proper Googlebot indexing
- **404 page** with `noindex` to preserve crawl budget
- **Legal pages** (Privacy, Terms) with `noindex`
- **Lazy loading** + explicit `width`/`height` on all below-the-fold images (CLS prevention)
- **Font display swap** via Google Fonts `&display=swap`

---

## AdSense Integration

- **Publisher ID:** `ca-pub-9475460975059195`
- **ads.txt:** `public/ads.txt` → served at `/ads.txt`
- **GDPR compliance:** AdSense script only loads after user clicks "Accept all" in cookie banner
- **Cookie-gated loader:** `index.html` inline script checks `localStorage` before injecting `adsbygoogle.js`
- **Reload-on-accept:** Ensures clean script initialization (avoids race conditions)
- **Placeholder UI:** Non-consenting users see a styled placeholder instead of ads

---

## Content

### Articles (19 total)

| Category | Count | Topics |
|---|---|---|
| Dog Care | 7 | Grass eating, bathing, human foods, puppy feeding, panting, nail trimming, dehydration |
| Cat Care | 4 | Not eating, sick signs, indoor vs outdoor, purring |
| Pet Health | 3 | Skin problems, vet visit checklist, dehydration |
| Street Animals | 3 | Stray dog help, TNVR guide, stray cat care |
| Donkey Welfare | 2 | Working donkey welfare, animal welfare in Pakistan |

### Free Tools (3)

1. **Dog Age Calculator** — Size-adjusted age conversion (not the "multiply by 7" myth)
2. **Monthly Pet Cost Estimator** — Budget builder for food, vet, grooming, insurance
3. **Food Safety Checker** — Search 35+ human foods for dog safety

---

## Legal Pages

| Page | Route | Content |
|---|---|---|
| Privacy Policy | `/privacy` | Data collection, Google AdSense cookies, GDPR/CCPA rights, cookie types |
| Terms of Service | `/terms` | Veterinary disclaimer, accuracy, IP, liability, governing law |
| Contact Us | `/contact` | WhatsApp contact + operator info |
| About Us | `/about` | Mission, story, founder bio |

All linked in the footer's dedicated **Legal** column.

---

## Build & Deploy

```bash
# Install dependencies
npm install --no-package-lock --registry=https://registry.npmjs.org/

# Development server (port 3000)
npm run dev

# Production build → dist/
npm run build

# Preview production build
npm run preview
```

### Netlify Deploy

The `netlify.toml` configures:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA wildcard rewrite: `/* → /index.html` (status 200)
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- `DISABLE_NETLIFY_UI_SNIPPETS = true` (prevents Netlify branding injection)

---

## Post-Deploy Checklist

- [ ] Replace AdSense placeholder slot IDs (`XXXXXXXXXX` in `AdSlot.tsx`) with real slot IDs from AdSense console
- [ ] Verify domain in Google Search Console
- [ ] Submit `sitemap.xml` in GSC
- [ ] Request indexing for homepage
- [ ] Apply for Google AdSense approval
- [ ] Add real OG images (`/og-default.png`, `/og-about.png`, 1200x630)
- [ ] Add real favicon (`/favicon.svg`, `/apple-touch-icon.png`, `/site.webmanifest`)

---

## License

All content, articles, illustrations, design, and tools are the original work of Paws & Purpose and are protected by copyright. Content is provided for free educational use.

---

## Author

**Syed Farjaad Raza Rizvi**
Growth Engineer · Digital Marketer · Animal Lover
Karachi, Pakistan
