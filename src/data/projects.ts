import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'smart-budget-pro',
    title: 'Smart Budget Pro',
    description:
      'A full-stack personal finance app for managing transactions, budgets, goals, and advisor requests through role-based workflows.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'CSS'],
    status: 'In development',
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
    id: 'stock-market-dashboard',
    title: 'Stock Market Dashboard',
    description:
      'A deployed Streamlit dashboard for comparing stock tickers, reviewing current market metrics, and exploring interactive price charts.',
    techStack: ['Python', 'Streamlit', 'yfinance', 'Plotly'],
    status: 'Live',
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
    id: 'otp-bank',
    title: 'OTP Bank',
    description:
      'An Elixir bank account simulator that uses OTP processes to create accounts, handle deposits and withdrawals, and retain transaction history.',
    techStack: ['Elixir', 'OTP', 'GenServer', 'DynamicSupervisor', 'Registry'],
    status: 'Complete',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/LaulinVasquez/otp-bank',
        kind: 'github',
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
