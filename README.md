# sysTROL Engineering & Consultancy Pvt. Ltd.
## Corporate Website — Phase 1: Frontend Architecture & Design System

Official web platform for **sysTROL Engineering & Consultancy Pvt. Ltd.**, a Bengaluru-based industrial engineering firm delivering high-performance Level-2 (L2) automation software (C#) for process industries with deep specialization in **steel rolling mills**, alongside an international **trading division** supplying OEM-grade imported machinery, spares, and consumables.

---

## 🚀 Technology Stack (Locked & Production-Stable)

- **Framework:** Next.js `15.2.0` (App Router, LTS track)
- **UI Library:** React `19.0.0` & React-DOM `19.0.0`
- **Language:** TypeScript `~5.7.2` (Strict mode)
- **Styling:** **Vanilla CSS Modules** (`ComponentName.module.css`) backed by global CSS custom properties (`styles/tokens.css`). Zero utility-class framework overhead (No Tailwind).
- **Icons:** `lucide-react@0.475.0`
- **Animation & Transitions:** `motion@12.4.7`
- **Forms & Validation:** `react-hook-form@7.54.2`, `zod@3.24.2`, `@hookform/resolvers@3.10.0`
- **Package Management:** `pnpm@11.25.0` with deterministic `pnpm-lock.yaml`

---

## 🎨 Design System & Token Architecture

The design system translates the official sysTROL brand identity—featuring industrial gear mechanics, global reach, and electric engineering intelligence—into a clean, authoritative B2B digital experience.

All tokens are defined in `styles/tokens.css` and consumed via CSS custom properties (`var(--token-name)`):

| Category | Token Group | Key Values / Usage |
|---|---|---|
| **Colors** | `--color-brand-green-600` / `700` | `#1F7A4D` / `#166339` (Brand wordmark accent & primary CTAs) |
| | `--color-brand-navy-900` / `800` | `#0A0F1D` / `#111827` (Industrial headers, footers & hero backdrops) |
| | `--color-accent-teal-500` / `600` | `#0EA5A5` / `#0B8686` (Circuit motifs, technical tags & highlights) |
| | `--color-ink-900` / `700` / `500` | Charcoal slate typography scale (WCAG AA compliant contrast) |
| | `--color-surface-0` / `50` / `100` | Base white, section alternate grey, and card base |
| **Typography** | Space Grotesk (`--font-heading`) | Geometric, technical headings |
| | Inter (`--font-body`) | Precision UI and tabular data legibility |
| | JetBrains Mono (`--font-mono`) | Engineering specs, C# code tokens, and system statuses |
| | Fluid Type Scale | `clamp()` based: `--text-xs` (12px) to `--text-5xl` (64px) |
| **Spacing** | `--space-1` to `--space-32` | 4px base mathematical scale (`4px` to `128px`) |
| **Borders** | `--radius-sm` to `--radius-full` | `6px` tags, `10px` cards/inputs, `16px` feature panels, `999px` pills |
| **Shadows** | `--shadow-sm`, `--shadow-md`, `--shadow-lg` | Restrained elevations with subtle hover lift transitions |

---

## 📁 Project Architecture & Folder Conventions

Every reusable component resides in its own isolated folder named identically to the component, containing exactly `ComponentName.tsx` and `ComponentName.module.css`:

```
sysTrol/
├── app/
│   ├── layout.tsx                                → Root layout with fonts & Organization JSON-LD
│   ├── page.tsx                                  → / (Homepage with Hero, TrustStrip, WhyUs, etc.)
│   ├── about/page.tsx                            → /about (Story, Mission, Metrics, Location)
│   ├── services/
│   │   ├── page.tsx                              → /services (Division overview)
│   │   ├── automation-consultancy/page.tsx       → /services/automation-consultancy (L2 C# & Stepper)
│   │   └── trading/page.tsx                      → /services/trading (Imported spares & origins)
│   ├── projects/
│   │   ├── page.tsx                              → /projects (Client-side filtered grid)
│   │   └── [slug]/page.tsx                       → /projects/:slug (SSG Case study details)
│   ├── clients/page.tsx                          → /clients (Sector directory & NDA notice)
│   ├── contact/page.tsx                          → /contact (Validated form + direct tel/wa.me links)
│   ├── careers/page.tsx                          → /careers (Engineering roles placeholder)
│   ├── not-found.tsx                             → Custom branded 404 page
│   ├── robots.ts                                 → robots.txt generator
│   └── sitemap.ts                                → sitemap.xml generator
├── components/
│   ├── layout/                                   → Navbar, Footer, MobileDrawer, Container, FloatingContact
│   ├── ui/                                       → Button, Badge, Card, Stepper, StatCounter, Toast, Forms/
│   └── sections/                                 → Hero, TrustStrip, WhatWeDo, WhyUs, FeaturedProjects, CTASection
├── content/                                      → Typed dummy data (services.ts, projects.ts, clients.ts)
├── lib/                                          → Zod validation schemas
├── public/                                       → Official logo (public/images/systrol-logo.jpeg)
├── styles/                                       → tokens.css, globals.css
└── types/                                        → Domain TypeScript interfaces
```

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- Node.js `v20+` or `v22+`
- `pnpm` (version `9+` / `11+`)

### Installation
```bash
# Clone the repository
git clone https://github.com/ADI-2707/sysTrol.git
cd sysTrol

# Install locked dependencies
pnpm install
```

### Running Locally
```bash
# Start Next.js development server
pnpm dev
# App will be accessible at http://localhost:3000
```

### Production Build & SSG Verification
```bash
# Build optimized static and server pages
pnpm build

# Run production server
pnpm start -p 3000
```

---

## 🗺️ Roadmap Beyond Phase 1

- **Phase 1 (Completed):** Design token system, responsive UI components, client-side routing across all 21 pages, typed dummy data layer, interactive form validation, direct contact deep links (`tel:`, `mailto:`, `wa.me`), and dynamic XML sitemap.
- **Phase 2:** Backend API integration (Node/Nest or serverless functions), PostgreSQL database for enquiries, live SMTP email dispatch, and Headless CMS (Sanity/Strapi) integration into the existing data contracts.
- **Phase 3:** Plant telemetry analytics dashboard, client portal for spares tracking, and multi-language support (English/Arabic/German).