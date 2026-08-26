import TechnologyLogo from '../skills/TechnologyLogo'

function TechBadge({ children }: { children: string }) {
  return (
    <span className="tech-badge">
      <span className="tech-badge-logo"><TechnologyLogo name={children} tone="portfolio" /></span>
      {children}
    </span>
  )
}

export default TechBadge
