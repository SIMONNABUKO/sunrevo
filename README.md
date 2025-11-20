# SunRevo Solar (Vue 3 + Vite)

SunRevo Solar is a one-page marketing experience built with Vue 3 and Vite that showcases the companys offerings with a modern glassmorphism-inspired UI, animated hero, service highlights, case studies, and inquiry/contact flows.

## Features

- Fully componentized Vue 3 layout with `TelBar`, `NavBar`, `Footer`, and content routes (`Home`, `Services`, `Projects`, `About`, `Contact`, `Inquire`).
- Premium visual system: radial gradients, glass panels, accent buttons, statistics, and responsive cards.
- Smooth `IntersectionObserver` reveal animation combined with `scroll-behavior: smooth` for polished navigation and route transitions.
- Sticky navigation with in-page CTA buttons plus accessible mobile menu and inquiry/action forms.
- Responsive forms and CTA band for quick lead capture and follow-up.

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) for fast dev builds and HMR
- Tailwind CSS (base imports) complemented by custom utility classes for gradients, layout, and animation
- Pure CSS/JavaScript (no additional UI kit)

## Getting started

```bash
npm ci   # install dependencies (or `npm install` if you prefer)
npm run dev   # run the dev server (hot reload on code changes)
```

The app mounts at `http://localhost:5173/` (or the port Vite prints). Navigate the header links to jump between sections.

## Build

```bash
npm run build
```

This produces a `dist` folder suitable for static hosting. You can run `npm run preview` to serve the built output locally.

## Project layout

```
src/
├── assets/          # imagery used inside hero/services/projects cards
├── components/
│   ├── App.vue      # high-level layout + global scroll observer
│   ├── TelBar.vue   # top contact/status ribbon
│   ├── NavBar.vue   # sticky navigation with mobile drawer
│   ├── Footer.vue   # brand/contact footer
│   ├── Hero.vue      # animated hero with stats/highlights
│   ├── Home.vue      # sections describing offerings + CTA
│   ├── Services.vue
│   ├── Projects.vue
│   ├── AboutUs.vue
│   ├── Contact.vue
│   └── Inquire.vue
├── router.js        # hash-based routing setup (scroll behavior included)
├── style.css        # tailwind imports + site-wide custom variables & animations
└── main.js          # app bootstrap
```

## Visual and UX highlights

- Section cards, CTA band, and nav all share the same dark gradient palette with amber/orange accents for hierarchy.
- Reveal animations use an `IntersectionObserver` so each route populates content immediately while still animating on scroll.
- Mobile-friendly forms and CTA buttons maintain consistent spacing and focus styles.

## Release notes

All production commits should ensure `npm run build` completes successfully. Assets remain static and are optimized during the build step.

## Contact

- `info@sunrevo.com`
- +254 780 818 238
