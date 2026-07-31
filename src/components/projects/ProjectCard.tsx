import { ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  onOpen?: (project: Project) => void
  focusOpenButton?: boolean
}

const statusStyles: Record<Project['status'], string> = {
  Live: 'border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300',
  'In development': 'border-amber-400/20 bg-amber-400/[0.07] text-amber-300',
  Complete: 'border-white/10 bg-white/[0.04] text-neutral-300',
}

function ProjectCard({ project, onOpen, focusOpenButton = false }: ProjectCardProps) {
  const openButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (focusOpenButton) openButtonRef.current?.focus()
  }, [focusOpenButton])

  return (
    <article className="flex h-full min-h-[330px] flex-col rounded-lg border border-white/[0.09] bg-black/15 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:bg-white/[0.025] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-600">
            Project / {project.id}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`rounded border px-2 py-1 text-[11px] font-medium ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-neutral-400">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.title} technology stack`}>
        {project.techStack.map((technology) => (
          <li
            key={technology}
            className="rounded border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-xs text-neutral-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
        {onOpen ? (
          <button
            ref={openButtonRef}
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-400/25 bg-emerald-400/[0.1] px-3 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-300/40 hover:bg-emerald-400/[0.15] focus-visible:outline-none"
            aria-label={`Open details for ${project.title}`}
          >
            Open project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}

        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-2" aria-label={`${project.title} links`}>
            {project.links.map((link) => {
              const Icon = link.kind === 'github' ? Code2 : ArrowUpRight

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              )
            })}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
