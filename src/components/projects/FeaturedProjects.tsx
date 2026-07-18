import { FolderKanban } from 'lucide-react'
import { projects } from '../../data/projects'
import type { Project } from '../../types/project'
import PortfolioWindow from '../windows/PortfolioWindow'
import ProjectCard from './ProjectCard'

interface FeaturedProjectsProps {
  onOpenProject?: (project: Project) => void
  focusOnMount?: boolean
  focusProjectId?: string | null
}

function FeaturedProjects({
  onOpenProject,
  focusOnMount = false,
  focusProjectId = null,
}: FeaturedProjectsProps) {
  return (
    <div id="projects" className="scroll-mt-20">
      <PortfolioWindow
        title="Featured Projects"
        subtitle="Selected builds from concept to deployment"
        icon={FolderKanban}
        focusOnMount={focusOnMount}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
              focusOpenButton={focusProjectId === project.id}
            />
          ))}
        </div>
      </PortfolioWindow>
    </div>
  )
}

export default FeaturedProjects
