import { ArrowDown, Code2, Mail } from 'lucide-react'
import { site } from '../../data/site'
import AvailabilityBadge from './AvailabilityBadge'
import HeroProjectPreview from './HeroProjectPreview'

function HeroSection() {
  return (
    <section id="home" className="hero-section page-section">
      <div className="hero-copy">
        <AvailabilityBadge />
        <p className="hero-kicker">Hi, I’m</p>
        <h1>Laurin <span>Vasquez.</span></h1>
        <p className="hero-role">Full-Stack Developer</p>
        <p className="hero-description">
          Computer Science student building practical, accessible software from thoughtful interfaces to dependable backend systems.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View my work <ArrowDown aria-hidden="true" /></a>
          <a className="button secondary" href="#contact">Let’s connect <Mail aria-hidden="true" /></a>
          <a className="icon-link" href={site.github} target="_blank" rel="noreferrer" aria-label="Laurin Vasquez on GitHub"><Code2 aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Laurin Vasquez">
            <span>LV</span>
            <small>Portrait coming soon</small>
          </div>
        </div>
        <HeroProjectPreview />
      </div>
    </section>
  )
}

export default HeroSection
