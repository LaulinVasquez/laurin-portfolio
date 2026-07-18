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
      subtitle="Project workspace"
      icon={FolderKanban}
      focusOnMount
    >
      <div className="space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </button>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Project overview
              </p>
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                {project.status}
              </span>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>
          </div>

          <aside className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Technology stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
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
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/15 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
