import { projects } from '../../data/projects'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  const featured = projects.find((project) => project.featured) ?? projects[0]
  const supporting = projects.filter((project) => project !== featured)
  return (
    <section id="projects" className="page-section projects-section">
      <Reveal><SectionHeading eyebrow="Selected work" title="Projects built to be used" description="Full-stack products, focused interfaces, and practical systems—each grounded in a real repository." /></Reveal>
      {featured ? <Reveal><FeaturedProject project={featured} /></Reveal> : null}
      <Reveal className="project-grid">{supporting.map((project) => <ProjectCard key={project.id} project={project} />)}</Reveal>
    </section>
  )
}

export default ProjectsSection
