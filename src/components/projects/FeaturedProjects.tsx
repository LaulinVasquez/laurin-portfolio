import { FolderKanban } from 'lucide-react'
import { projects } from '../../data/projects'
import PortfolioWindow from '../windows/PortfolioWindow'
import ProjectCard from './ProjectCard'

function FeaturedProjects() {
  return (
    <div id="projects" className="scroll-mt-20">
      <PortfolioWindow
        title="Featured Projects"
        subtitle="Selected builds from concept to deployment"
        icon={FolderKanban}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PortfolioWindow>
    </div>
  )
}

export default FeaturedProjects
