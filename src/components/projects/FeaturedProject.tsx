import type { Project } from '../../types/project'
import ProjectCard from './ProjectCard'

function FeaturedProject({ project }: { project: Project }) {
  return <div className="featured-project"><ProjectCard project={project} /></div>
}

export default FeaturedProject
