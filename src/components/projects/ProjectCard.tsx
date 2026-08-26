import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '../../types/project'
import TechBadge from '../ui/TechBadge'

function ProjectCard({ project }: { project: Project }) {
  const github = project.links.find((link) => link.kind === 'github')
  const demo = project.links.find((link) => link.kind === 'demo')
  return (
    <article className="project-card" data-project={project.id} data-status={project.status}>
      <div className="project-card-image">
        <img src={project.image} alt={project.imageAlt} width="1280" height="720" loading="lazy" />
      </div>
      <div className="project-card-content">
        <div className="project-title-row"><h3>{project.title}</h3><span>{project.status}</span></div>
        <p>{project.description}</p>
        <div className="badge-list">{project.techStack.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
        <div className="project-links">
          {demo ? <a href={demo.href} target="_blank" rel="noreferrer" aria-label={`View live ${project.title} project`}>Live demo <ArrowUpRight aria-hidden="true" /></a> : null}
          {github ? <a href={github.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>GitHub <Code2 aria-hidden="true" /></a> : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
