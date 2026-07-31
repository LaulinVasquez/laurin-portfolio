import { ArrowLeft, ArrowUpRight, Code2, FolderKanban } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../../types/project'
import PortfolioWindow from '../windows/PortfolioWindow'

interface ProjectDetailWindowProps {
  project: Project
  onClose: () => void
}

function ProjectDetailWindow({ project, onClose }: ProjectDetailWindowProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <PortfolioWindow
      title={project.title}
      subtitle={`Project record / ${project.id}`}
      icon={FolderKanban}
      focusOnMount
    >
      <div className="space-y-5">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </button>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-white/[0.09] bg-black/15 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                Project overview
              </p>
              <span className="rounded border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-xs font-medium text-emerald-300">
                {project.status}
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-neutral-300">{project.description}</p>
          </div>

          <aside className="rounded-lg border border-white/[0.09] bg-black/20 p-5 sm:p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
              Technology stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((technology) => (
                <li
                  key={technology}
                  className="rounded border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-sm text-neutral-300"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="flex flex-wrap gap-3" aria-label={`${project.title} project links`}>
          {project.links.map((link) => {
            const Icon = link.kind === 'github' ? Code2 : ArrowUpRight
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                className="inline-flex items-center gap-2 rounded-md border border-emerald-400/25 bg-emerald-400/[0.1] px-3.5 py-2.5 text-sm font-medium text-emerald-200 transition hover:border-emerald-300/40 hover:bg-emerald-400/[0.15] focus-visible:outline-none"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </PortfolioWindow>
  )
}

export default ProjectDetailWindow
