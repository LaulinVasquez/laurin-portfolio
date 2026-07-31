import { Code2, FileText, TerminalSquare } from 'lucide-react'

const sectionLabels: Record<string, string> = {
  home: 'Overview',
  projects: 'Projects',
  contact: 'Contact',
}

interface TopBarProps {
  activeAppId: string
  onSelectApp: (appId: string) => void
}

function TopBar({ activeAppId, onSelectApp }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#090a0a]/90 px-3 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3">
        <div className="flex min-w-0 items-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
            <TerminalSquare className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="ml-3 min-w-0">
            <p className="truncate text-sm font-medium text-neutral-100">Laurin Vasquez</p>
          </div>
          <span className="mx-3 h-5 w-px bg-white/10" aria-hidden="true" />
          <p className="truncate text-xs text-neutral-500">
            {sectionLabels[activeAppId] ?? 'Portfolio'}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <div className="mr-1 hidden items-center gap-2 text-xs text-neutral-400 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(62,207,142,0.55)]" />
            Available
          </div>
          <a
            href="/resume/Laurin-vasquez-resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Laurin Vasquez résumé in a new tab"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none sm:w-auto sm:gap-2 sm:px-2.5"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden text-xs sm:inline">Résumé</span>
          </a>
          <button
            type="button"
            onClick={() => onSelectApp('code')}
            aria-label="Open Laurin Vasquez GitHub profile in a new tab"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-neutral-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none sm:w-auto sm:gap-2 sm:px-2.5"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden text-xs sm:inline">GitHub</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar
