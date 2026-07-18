# Laurin OS Portfolio

Laurin OS is my personal software engineering portfolio. It presents selected work through a responsive, desktop-inspired interface built with React and TypeScript.

Instead of traditional portfolio pages, the site uses reusable application windows and a functional dock to move between the home screen, featured projects, individual project workspaces, source code, and contact form.

## Live Portfolio

Visit the deployed portfolio at [laurin-portfolio.vercel.app](https://laurin-portfolio.vercel.app/).

## Current Features

- Desktop-inspired interface with translucent windows and a fixed application dock
- Responsive layouts for desktop, tablet, and mobile screens
- Data-driven featured project cards
- Dedicated project detail windows using the shared `PortfolioWindow` component
- Smooth view transitions powered by Framer Motion
- GitHub and live-demo links when available
- Contact form that prepares an email addressed to `laurin171125@gmail.com`
- Downloadable résumé
- Keyboard-accessible navigation and project controls
- Focus movement and restoration when opening and closing project windows
- Reduced-motion support through the user's operating-system preference

## Featured Projects

### Smart Budget Pro

A full-stack personal finance application for managing transactions, budgets, financial goals, and advisor requests through role-based workflows.

**Technologies:** Node.js, Express, PostgreSQL, EJS, CSS

### Stock Market Dashboard

A deployed Streamlit dashboard for comparing stock tickers, reviewing current market metrics, and exploring interactive price charts.

**Technologies:** Python, Streamlit, yfinance, Plotly

### OTP Bank

An Elixir bank account simulator built around OTP processes for account creation, deposits, withdrawals, balances, and transaction history.

**Technologies:** Elixir, OTP, GenServer, DynamicSupervisor, Registry

### Garden & Landscaping Pros

A responsive service website with an Express backend and validated quote-request workflow capable of delivering structured emails.

**Technologies:** Node.js, Express, EJS, Nodemailer, CSS

Project titles, descriptions, statuses, technology stacks, and links are maintained in `src/data/projects.ts`.

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Oxlint

## Project Structure

```text
src/
├── components/
│   ├── desktop/       # Desktop shell and background
│   ├── navigation/    # Top bar and application dock
│   ├── projects/      # Project cards, grid, and detail window
│   ├── ui/            # Reusable buttons
│   └── windows/       # Shared portfolio window components
├── data/              # Project, skill, and experience content
├── layouts/           # Desktop view state and application composition
├── pages/             # Home and contact views
├── styles/            # Global styles and animations
└── types/             # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/LaulinVasquez/laurin-portfolio.git
cd laurin-portfolio
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

The portfolio is deployed on Vercel:

- [https://laurin-portfolio.vercel.app/](https://laurin-portfolio.vercel.app/)

## Validation

Run the repository checks before committing changes:

```bash
npm run lint
npm run build
git diff --check
```

`git diff --check` is a Git command. Running `npm diff --check` instead makes npm search its public registry for a package named `laurin-portfolio` and results in a 404 because this project is private and unpublished.

## Navigation and Accessibility

The application dock switches between in-page desktop views without introducing routing or a complex window manager. Project cards use a dedicated Open Project button so their external links remain separate, valid interactive controls.

When a project opens, focus moves to the project window heading. The visible Back button or `Escape` key closes the window and restores focus to the matching project card. External destinations include descriptive labels and indicate that they open in a new tab.

## Contact Form

The Contact dock item opens a form for entering a name, email address, subject, and message. Submitting the form launches the visitor's configured email application with a prepared message addressed to Laurin. This approach does not require API credentials or expose email-service secrets in the frontend.

## Author

Laurin Vasquez

- [GitHub](https://github.com/LaulinVasquez)
- Email: [laurin171125@gmail.com](mailto:laurin171125@gmail.com)
