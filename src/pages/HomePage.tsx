import FeaturedProjects from '../components/projects/FeaturedProjects'
import HeroWindow from '../components/windows/HeroWindow'
import type { Project } from '../types/project'

interface HomePageProps {
  onOpenProject: (project: Project) => void
  onViewProjects: () => void
  focusProjectId?: string | null
}

function HomePage({ onOpenProject, onViewProjects, focusProjectId = null }: HomePageProps) {
  return (
    <section id="home" className="flex w-full flex-col gap-5 sm:gap-6">
      <HeroWindow onViewProjects={onViewProjects} />
      <FeaturedProjects onOpenProject={onOpenProject} focusProjectId={focusProjectId} />
    </section>
  )
}

export default HomePage
