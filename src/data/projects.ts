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
    id: 'campus-companion',
    title: 'Campus Companion',
    description:
      'An early Expo and React Native prototype establishing the mobile foundation for a future campus classes, events, and maps companion.',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    status: 'Prototype',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/LaulinVasquez/Campus-Companion',
        kind: 'github',
      },
    ],
  },
]
