import FeaturedProjects from '../components/projects/FeaturedProjects'
import HeroWindow from '../components/windows/HeroWindow'
import type { Project } from '../types/project'

interface HomePageProps {
  onOpenProject: (project: Project) => void
  focusProjectId?: string | null
}

function HomePage({ onOpenProject, focusProjectId = null }: HomePageProps) {
  return (
    <section id="home" className="flex w-full flex-col gap-6">
      <HeroWindow />
      <FeaturedProjects onOpenProject={onOpenProject} focusProjectId={focusProjectId} />
    </section>
  )
}

export default HomePage
