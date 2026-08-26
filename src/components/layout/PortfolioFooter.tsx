import { ArrowUp } from 'lucide-react'
import { site } from '../../data/site'

function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <p>© 2026 {site.name}. Built with React + TypeScript.</p>
      <a href="#home">Back to top <ArrowUp aria-hidden="true" /></a>
    </footer>
  )
}

export default PortfolioFooter
