# Portfolio Redesign — Design Spec

**Date:** 2026-05-19  
**Author:** Kyrylo Karmazin  
**Status:** Approved

---

## Overview

Radical rebuild of the portfolio from a two-column sidebar+tabs layout into a full-width, single-page scroll experience with immersive animations, mouse-reactive interactions, and a dark purple/violet aesthetic. Target: GitHub Pages deployment.

---

## Goals

- Look like a senior full stack developer's portfolio
- Immersive and interactive: cursor effects, mouse-reactive elements, scroll-driven animations
- Dark + purple/violet palette
- Single-page scroll (no tab switching)
- Keep existing content; update role to Full Stack Developer
- Add Parcelgo as flagship project

---

## Tech Stack Changes

### Remove
- `@mui/material`
- `@mui/icons-material`
- `@emotion/react`
- `@emotion/styled`

### Add
- `lucide-react` — lightweight icon library

### Keep & Upgrade
- `framer-motion` — upgrade to latest; use `useScroll`, `useTransform`, `useInView`, `AnimatePresence`, `motion`
- `tailwindcss`
- `classnames`
- `react`, `react-dom`, `typescript`
- `gh-pages`

### Fonts
- Add **Space Grotesk** via Google Fonts `<link>` in `public/index.html` — used for headings
- System sans-serif for body text

---

## Visual Identity

### Color Palette (Tailwind custom tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `bg-base` | `#070714` | Page background |
| `bg-surface` | `#0f0f23` | Card/panel backgrounds |
| `accent` | `#7c3aed` | Primary violet accent |
| `accent-light` | `#a78bfa` | Secondary violet, hover states |
| `text-primary` | `#f8fafc` | Main text |
| `text-muted` | `#94a3b8` | Secondary text, labels |

### Effects
- **Noise/grain texture:** CSS `::after` pseudo-element on `body`, `background-image: url(data:image/png;base64,...)`, `opacity: 0.03`, `pointer-events: none` — premium tactile feel
- **Glassmorphism cards:** `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`, `backdrop-filter: blur(12px)`
- **Radial glow:** blurred `#7c3aed` circle at low opacity, used in hero and contact sections

---

## Layout & Page Structure

Single-page, vertically stacked sections. No tabs, no sidebar.

```
<Nav />           — fixed top, fades in after hero scroll
<Hero />          — 100vh
<About />         — ~80vh
<Skills />        — ~60vh
<Projects />      — auto
<Contact />       — ~50vh
```

---

## Components

### `<CustomCursor />`
- Renders two elements: 8px solid white dot + 32px trailing circle
- Dot follows mouse instantly; circle follows with spring delay (`framer-motion` `useSpring`)
- On hovering interactive elements (buttons, links, cards): trailing circle scales up to ~64px
- Magnetic effect on buttons: `mousemove` listener computes offset from button center, applies `x/y` transform via Framer Motion (max ±8px pull)
- Hidden on touch devices (`@media (hover: none)`)

### `<Nav />`
- `position: fixed`, top-0, full width
- Opacity: 0 at scroll position 0; fades to 1 after scrolling past hero (`useScroll` + `useTransform`)
- Left: "KK" monogram logo
- Right: section links — About, Skills, Projects, Contact
- Smooth-scroll to section on click (`scrollIntoView({ behavior: 'smooth' })`)
- Mobile: hamburger icon (Lucide `Menu`), opens a slide-down menu overlay

### `<Hero />`
- Full viewport (`100vh`), `position: relative`
- **Canvas particle field:** `<canvas>` as absolute background. ~120 particles drift slowly. Particles connect with faint lines when within 120px. Mouse movement gently repels nearby particles. Implemented in a `useEffect` with `requestAnimationFrame` loop. Cleaned up on unmount.
- Centered content stack (z-index above canvas):
  1. Violet pill tag: `"Full Stack Developer"`
  2. Name: `"Kyrylo Karmazin."` — Framer Motion `staggerChildren` 0.05s per character, slide-up + fade
  3. Subtitle: `"Crafting immersive digital experiences"` — fades in after name completes
  4. Two CTA buttons: `"View Work"` (scrolls to Projects) + `"Get in Touch"` (scrolls to Contact) — magnetic hover
- Scroll indicator: bouncing `ChevronDown` (Lucide) at bottom center, fades out on scroll

### `<About />`
- Two-column grid (desktop): left = photo, right = bio + "What I do" cards
- **Photo card:** rounded corners, violet glow behind, CSS 3D tilt on `mousemove` (max ±15° `rotateX/Y` via Framer Motion `useMotionValue` + `useTransform`). Tilt disabled on touch devices.
- Bio paragraphs: each `useInView` triggered, slide up + fade in, 0.1s stagger between paragraphs
- Updated bio copy: role changed to "full stack developer"
- **"What I do" grid:** 2×2 glassmorphism tiles
  - Icons: Lucide (`Monitor`, `Smartphone`, `MousePointerClick`, `Globe`)
  - On hover: subtle 3D tilt + violet border glow
  - Animate in on scroll with stagger

### `<Skills />`
- Section heading: `"Skills"` with a violet underline accent
- Five category groups laid out in a responsive flex-wrap grid:
  1. **Languages:** TypeScript, JavaScript, HTML / CSS
  2. **Frontend:** React.js, Next.js, Redux / RTK, React Query, React Hook Form, Framer Motion, Angular, Vue.js, Tailwind CSS, i18next
  3. **Backend:** NestJS, Node.js, MongoDB / Mongoose, REST APIs, JWT / Auth, AWS S3, Socket.IO, SendGrid, Google APIs
  4. **Testing & QA:** Jest, Playwright, React Testing Library
  5. **Tools & DevOps:** Git, Sentry, ESLint / Prettier, WebRTC, QR / PDF generation
- Each tag: glassmorphism pill, violet border, hover glow pulses once
- Animation: tags pop in with staggered spring (0.03s between each), triggered by `useInView`

### `<Projects />`
Four projects, listed in order:
1. **Parcelgo** — Full stack parcel logistics platform. Stack: Next.js, NestJS, MongoDB, AWS S3, Socket.IO, React Query, Redux. No GitHub link (private/company).
2. **Twitter Clone** — React.js, Redux, Tailwind CSS, Framer Motion, i18n. [GitHub](https://github.com/KirillKrm/twitter-clone)
3. **Video Conferencing** — React.js, Socket.IO, WebRTC. [GitHub](https://github.com/KirillKrm/WebChat_frontend)
4. **Music Player** — Angular, Angular Material, Tailwind CSS. [GitHub](https://github.com/KirillKrm/music-player)

**Card design (horizontal split, desktop):**
- Image left (~55%), content right (~45%)
- Image: parallax scroll effect via `useScroll` + `useTransform` (image moves slower than container)
- Card: 3D tilt on `mousemove`, violet border glow on hover
- Content: project number (large watermark, e.g. `01`), name, description, tech stack pills, GitHub link (magnetic, `ExternalLink` Lucide icon)
- Mobile: image stacks above content

### `<Contact />`
- Centered layout
- Heading: `"Let's build something together."` — "together." in violet gradient text (`bg-clip-text`)
- Email: `kirillkarmazin2301@gmail.com` — click copies to clipboard + shows a toast "Copied!" (`useState` based, no library needed)
- Divider line
- Social buttons: GitHub, LinkedIn, Facebook — icon + label, magnetic hover
- Radial violet glow behind heading (`position: absolute`, blurred `#7c3aed` circle)
- Footer: `© 2025 Kyrylo Karmazin` in muted text

---

## File Structure

```
src/
  components/
    CustomCursor.tsx
    Nav.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    ParticleCanvas.tsx       ← canvas logic extracted from Hero
  hooks/
    useMouseTilt.ts          ← reusable 3D tilt hook
    useMagneticEffect.ts     ← reusable magnetic button hook
  App.tsx                    ← assembles all sections
  index.css                  ← noise texture, custom cursor hide, base styles
```

Old `MainComponent/` directory is fully removed.

---

## Animations Summary

| Element | Trigger | Effect |
|---------|---------|--------|
| Hero name | Mount | Staggered character reveal (slide up + fade) |
| Hero subtitle | After name | Fade in |
| Nav | Scroll past hero | Fade in |
| About bio paragraphs | Scroll into view | Slide up + fade, staggered |
| About photo | Mouse hover | 3D tilt |
| About cards | Mouse hover | 3D tilt + border glow |
| Skills tags | Scroll into view | Spring pop-in, staggered |
| Project cards | Mouse hover | 3D tilt + border glow |
| Project image | Scroll | Parallax |
| CTA / social buttons | Mouse proximity | Magnetic pull |
| Custom cursor | Always | Spring-lag trailing circle, scale on hover |

---

## Constraints & Notes

- GitHub Pages deployment: static only, no SSR
- No contact form (no backend available on GitHub Pages)
- Touch devices: tilt effects and custom cursor disabled
- Parcelgo has no public GitHub link — display description + stack only
- Space Grotesk loaded via Google Fonts CDN (not npm) to avoid bundling the font file
