Read AGENTS.md and inspect the entire repository.

Do not edit any files yet.

I am building a professional developer portfolio called “Laurin OS.”

The portfolio should feel like a polished desktop operating system or developer mission-control interface, while remaining clean, accessible, responsive, and recruiter-friendly.

You must preserve the existing architecture:

- src/components/desktop
- src/components/windows
- src/components/projects
- src/components/navigation
- src/components/ui
- src/data
- src/layouts
- src/pages
- src/styles
- src/types

For Milestone 1, propose an implementation plan using these files:

- src/components/desktop/DesktopShell.tsx
- src/components/desktop/DesktopBackground.tsx
- src/components/windows/PortfolioWindow.tsx
- src/components/windows/HeroWindow.tsx
- src/components/navigation/TopBar.tsx
- src/components/navigation/AppDock.tsx
- src/components/ui/IconButton.tsx
- src/components/ui/PrimaryButton.tsx
- src/layouts/PortfolioLayout.tsx
- src/pages/HomePage.tsx
- src/styles/globals.css
- src/styles/animations.css
- src/App.tsx

Milestone 1 must include:

1. A full-screen desktop environment
2. A subtle dark background with blue lighting effects
3. A professional top navigation bar
4. A reusable portfolio window component
5. A hero introduction window
6. A bottom application dock
7. A responsive mobile foundation
8. Keyboard accessibility
9. Reduced-motion support
10. Clean TypeScript interfaces

Use:

- React
- TypeScript
- TSX
- Tailwind CSS
- Framer Motion
- Lucide React

The component hierarchy should follow this structure:

App
└── PortfolioLayout
    └── DesktopShell
        ├── TopBar
        ├── HomePage
        │   └── HeroWindow
        │       └── PortfolioWindow
        └── AppDock

For every component, explain:

- Its responsibility
- Its TypeScript props
- Its child components
- Its responsive behavior
- Its accessibility considerations

Also list every file that will be created or changed.

Do not implement anything until I approve the plan.