import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

const statusStyles: Record<Project['status'], string> = {
  Live: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  'In development': 'border-amber-400/25 bg-amber-400/10 text-amber-200',
  Complete: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200',
  Prototype: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-1 hover:border-cyan-400/25 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
        {project.techStack.map((technology) => (
          <li
            key={technology}
            className="rounded-lg border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3" aria-label={`${project.title} links`}>
          {project.links.map((link) => {
            const Icon = link.kind === 'github' ? Code2 : ArrowUpRight

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </div>
      ) : null}
    </article>
  )
}

export default ProjectCard
