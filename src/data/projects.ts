import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'smart-budget-pro',
    title: 'Smart Budget Pro',
    description:
      'A full-stack personal finance app for managing transactions, budgets, goals, and advisor requests through role-based workflows.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'CSS'],
    status: 'In development',
    image: '/projects/smart-budget-pro/dashboard.png',
    imageAlt: 'Smart Budget Pro financial dashboard showing budgets and account activity',
    featured: true,
    heroEligible: true,
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/LaulinVasquez/smartbudget-pro',
        kind: 'github',
      },
      {
        label: 'Live demo',
        href: 'https://smartbudget-pro.onrender.com/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'flowdesk',
    title: 'FlowDesk',
    description:
      'A responsive task-management dashboard with projects, filtering, natural-language search, keyboard shortcuts, and authenticated persistence.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    status: 'Live',
    image: '/projects/flowdesk/dashboard.png',
    imageAlt: 'FlowDesk task management dashboard on a desktop screen',
    heroEligible: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/LaulinVasquez/FlowDesk', kind: 'github' },
      { label: 'Live demo', href: 'https://flow-desk-fawn.vercel.app', kind: 'demo' },
    ],
  },
  {
    id: 'buff-me-up',
    title: 'Buff Me Up',
    description:
      'A mobile-first gym tracker for workout plans, exercise logging, workout history, consistency, and Google-authenticated accounts.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    status: 'Live',
    image: '/projects/buff-me-up/placeholder.svg',
    imageAlt: 'Buff Me Up project preview placeholder',
    heroEligible: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/LaulinVasquez/Buff-me-up', kind: 'github' },
      { label: 'Live demo', href: 'https://buff-me-up.vercel.app', kind: 'demo' },
    ],
  },
  {
    id: 'stock-market-dashboard',
    title: 'Stock Market Dashboard',
    description:
      'A deployed Streamlit dashboard for comparing stock tickers, reviewing current market metrics, and exploring interactive price charts.',
    techStack: ['Python', 'Streamlit', 'yfinance', 'Plotly'],
    status: 'Live',
    image: '/projects/stock-dashboard/dashboard.png',
    imageAlt: 'Stock Market Dashboard showing ticker metrics and an interactive price chart',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/LaulinVasquez/stock-dashboard',
        kind: 'github',
      },
      {
        label: 'Live demo',
        href: 'https://stock-dashboard-juz4at5enzs6k4gwsi3yxp.streamlit.app/',
        kind: 'demo',
      },
    ],
  },
  {
    id: 'garden-landscaping-pros',
    title: 'Garden & Landscaping Pros',
    description:
      'A responsive marketing and lead-generation website that presents landscaping services, project work, and a clear path to request a quote.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    image: '/projects/landscaping/placeholder.svg',
    imageAlt: 'Garden and Landscaping Pros website preview placeholder',
    heroEligible: true,
    links: [
      {
        label: 'View source code',
        href: 'https://github.com/LaulinVasquez/garden-landscaping-pros-website',
        kind: 'github',
      },
      {
        label: 'View live site',
        href: 'https://garden-landscaping-pros-website.vercel.app/',
        kind: 'demo',
      },
    ],
  },
]
