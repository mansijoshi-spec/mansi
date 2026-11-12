# Mansi Joshi — UX/UI Portfolio

A personal portfolio website built from Figma designs using React and Tailwind CSS.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 (CRA) | UI framework |
| Tailwind CSS | v3 | Styling |
| React Router | v6 | Client-side routing |
| lucide-react | latest | Icons |

---

## Project Structure

```
mansi-portfolio/
├── public/                      # Static HTML shell
├── src/
│   ├── App.js                   # Root — BrowserRouter + all Routes
│   ├── index.css                # Tailwind directives + Google Fonts import
│   │
│   ├── components/              # Shared / page-level components
│   │   ├── Navbar.jsx           # Fixed top nav, active link indicator, mobile hamburger
│   │   ├── Hero.jsx             # Home page: title, intro, 2 project previews, about teaser
│   │   ├── Work.jsx             # Work page: 5-project list with alternating layout
│   │   ├── About.jsx            # About page: bio, stats, skills, experience, story
│   │   ├── Connect.jsx          # CTA section (email + LinkedIn) — reused on every page
│   │   └── Footer.jsx           # Copyright bar — reused on every page
│   │
│   ├── pages/                   # Individual project detail pages
│   │   ├── CloutPage.jsx        # Project #1 — gold accent #ad8c49
│   │   ├── RDACTDPage.jsx       # Project #2 — red accent #e84536
│   │   ├── MatrisakhiPage.jsx   # Project #3 — orange accent #f38500
│   │   └── LeadnicsPage.jsx     # Project #4 — grey accent, serif italic title
│   │
│   └── assets/
│       ├── images/              # All raster images (PNGs downloaded from Figma)
│       └── svgs/                # All vector assets (gradients, masks, decorations)
│
├── tailwind.config.js           # Custom design tokens
├── postcss.config.js            # PostCSS config for Tailwind
└── package.json
```

---

## Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | `Hero` | Home page |
| `/work` | `Work` | All projects list |
| `/about` | `About` | About Mansi |
| `/work/clout` | `CloutPage` | CLOUT project detail |
| `/work/rdactd` | `RDACTDPage` | RDACTD project detail |
| `/work/matrisakhi` | `MatrisakhiPage` | MatriSakhi project detail |
| `/work/leadnics` | `LeadnicsPage` | Leadnics project detail |

Every route wraps its main component with `Connect` + `Footer`.

---

## Design Tokens (`tailwind.config.js`)

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#fff8ed` | Page background (warm off-white) |
| `primary` | `#2273f3` | Blue — headings, links, active nav |
| `pink-stroke` | `#fda8ab` | Borders, button outlines |
| `powder-pink` | `#ffe5e6` | Soft pink backgrounds, hover states |
| `powder-blue` | `#e5eeff` | Soft blue backgrounds |
| `dark-grey` | `#46484c` | Body text |
| `black` | `#09111e` | Dark text |
| `sans` | Inter | Body font |
| `serif` | Playfair Display | Italic headings (e.g. *Portfolio*, *work*) |

---

## Figma Source

- **File key:** `nGDCpn25nx5MSMs8KqEELO`
- **URL:** `https://www.figma.com/design/nGDCpn25nx5MSMs8KqEELO/`
- All assets were downloaded locally — Figma URLs expire after 7 days so never use them as runtime `src` values.

---

## Key Patterns

### Section headings
Every major section uses a two-line heading — large sans on line 1, italic serif on line 2:
```jsx
<p className="font-normal text-[72px] leading-none text-primary">My</p>
<p className="font-serif italic text-[76px] leading-none text-primary">work</p>
```

### CSS mask (shaped image containers)
Project image cards use `clout-mask.svg` as a CSS mask to get the rounded/irregular shape:
```jsx
style={{
  WebkitMaskImage: `url(${cloutMask})`,
  maskImage: `url(${cloutMask})`,
  WebkitMaskSize: "659px 421px",
  maskRepeat: "no-repeat",
}}
```

### Gradient backgrounds
Each page uses absolute-positioned SVGs behind content with `-z-10`:
```jsx
<div className="absolute top-0 left-[-145px] w-[1730px] h-[1397px] pointer-events-none -z-10">
  <img src={gradientTop} alt="" className="w-full h-full" />
</div>
```

### Adding a new project page
1. Add images to `src/assets/images/`
2. Create `src/pages/YourProjectPage.jsx` (use an existing page as template)
3. Add a route in `src/App.js`:
   ```jsx
   <Route path="/work/your-project" element={<ProjectPage><YourProjectPage /></ProjectPage>} />
   ```
4. Add the project entry to the `PROJECTS` array in `src/components/Work.jsx`
5. Update the prev/next nav links in adjacent project pages

---

## Assets Reference

### Images (`src/assets/images/`)

| File | Used in |
|------|---------|
| `logo.png` | Navbar |
| `mansi-hero.png` | Hero intro section |
| `mansi-about.png` | Hero about teaser |
| `about-photo.png` | About page bio |
| `video-decoration.png` | About page quote strip |
| `clout-web.png` | Hero + Work card + CloutPage |
| `clout-mobile.png` | Hero + Work card |
| `clout-hero.png` | CloutPage hero |
| `clout-persona.png` | CloutPage problem section |
| `clout-solution.png` | CloutPage solution section |
| `clout-competitive.png` | CloutPage competitive analysis |
| `clout-wireframes.png` | CloutPage wireframes |
| `clout-ui1–4.png` | CloutPage UI grid |
| `rdactd.png` | Hero + Work card |
| `rdactd-hero.png` | RDACTDPage hero |
| `rdactd-solution.png` | RDACTDPage solution |
| `rdactd-wire1–4.png` | RDACTDPage wireframes grid |
| `rdactd-ui1–4.png` | RDACTDPage UI grid |
| `work-matrisakhi.png` | Work page card (Matrisakhi) |
| `matri-hero.png` | MatrisakhiPage hero |
| `matri-problem.png` | MatrisakhiPage problem |
| `matri-client.png` | MatrisakhiPage client request |
| `matri-screens1.png` | MatrisakhiPage early screens |
| `matri-solution.png` | MatrisakhiPage solution |
| `matri-ui1–2.png` | MatrisakhiPage UI showcase |
| `work-leadnics.png` | Work page card (Leadnics) |
| `lead-hero.png` | LeadnicsPage hero |
| `lead-challenge.png` | LeadnicsPage challenge |
| `lead-solution.png` | LeadnicsPage solution |
| `lead-ui1–2.png` | LeadnicsPage UI showcase |
| `work-4dcareer.png` | Work page card (4D Career) |

### SVGs (`src/assets/svgs/`)

| File | Used in |
|------|---------|
| `gradient-top.svg` | All pages — top gradient bg |
| `gradient-middle.svg` | Home, About, Matrisakhi — mid gradient bg |
| `gradient-bottom.svg` | Available but not currently used |
| `clout-mask.svg` | All project image cards (CSS mask shape) |
| `ellipse.svg` | Hero about teaser — circle border decoration |
| `mansi-mask.svg` | Hero about teaser — photo mask |
| `stat-circle-1.svg` | About + CloutPage stats |
| `stat-circle-2.svg` | About + CloutPage stats |
| `stat-circle-gold.svg` | CloutPage stats |
| `matri-decoration.svg` | MatrisakhiPage hero decoration |
