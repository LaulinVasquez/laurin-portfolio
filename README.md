# Laurin Vasquez Portfolio

A polished, accessible single-page developer portfolio built with React, TypeScript, Vite, authored CSS, Framer Motion, and Lucide React.

## Live portfolio

[laurin-portfolio.vercel.app](https://laurin-portfolio.vercel.app/)

## Experience

- Sticky section navigation with an Intersection Observer active state
- Accessible mobile menu with Escape handling and focus restoration
- Pointer-follow ambient lighting without pointer-move React renders
- Reduced-motion fallbacks for lighting, scrolling, reveals, and the project carousel
- Rotating featured-project preview with manual controls and pause-on-interaction behavior
- Responsive About, specialization, technology, project, journey, and contact sections
- Mailto-based contact form
- Local résumé and project screenshots

## Featured projects

Project descriptions, technologies, screenshots, and links are centralized in `src/data/projects.ts`.

- Smart Budget Pro
- FlowDesk
- Garden & Landscaping Pros
- Buff Me Up
- Stock Market Dashboard

## Project structure

```text
src/
├── components/
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── hero/
│   ├── layout/
│   ├── navigation/
│   ├── projects/
│   ├── skills/
│   ├── specialization/
│   └── ui/
├── data/
├── hooks/
├── pages/
├── styles/
└── types/
```

## Development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run lint
npm run build
git diff --check
```

## Assets still needed

Replace the explicit placeholder assets when the real files are available:

- Portrait: `public/images/laurin-profile.webp`
- Garden & Landscaping Pros screenshot: `public/projects/landscaping/homepage.webp`
- Buff Me Up screenshot: `public/projects/buff-me-up/dashboard.webp`

Update the matching paths in `src/data/projects.ts` when adding project screenshots.

## Contact

- GitHub: [LaulinVasquez](https://github.com/LaulinVasquez)
- Email: [laurin171125@gmail.com](mailto:laurin171125@gmail.com)
