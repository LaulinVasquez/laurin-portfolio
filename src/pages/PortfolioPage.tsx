import AboutSection from '../components/about/AboutSection'
import ContactSection from '../components/contact/ContactSection'
import ExperienceSection from '../components/experience/ExperienceSection'
import HeroSection from '../components/hero/HeroSection'
import AmbientBackground from '../components/layout/AmbientBackground'
import PortfolioFooter from '../components/layout/PortfolioFooter'
import PortfolioHeader from '../components/navigation/PortfolioHeader'
import ProjectsSection from '../components/projects/ProjectsSection'
import TechStackSection from '../components/skills/TechStackSection'
import SpecializationSection from '../components/specialization/SpecializationSection'

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <AmbientBackground />
      <PortfolioHeader />
      <main id="main-content" className="page-shell">
        <HeroSection /><AboutSection /><SpecializationSection /><TechStackSection />
        <ProjectsSection /><ExperienceSection /><ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}

export default PortfolioPage
