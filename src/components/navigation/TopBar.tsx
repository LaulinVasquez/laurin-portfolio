import { Menu, Sparkles, TerminalSquare } from 'lucide-react'
import IconButton from '../ui/IconButton'

interface NavItem {
  label: string
  href: string
}

interface TopBarProps {
  brandName?: string
  navItems?: NavItem[]
  statusText?: string
}

function TopBar({
  brandName = 'Laurin OS',
  navItems = [{ label: 'Home', href: '#home' }],
  statusText = 'Available for product teams',
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <TerminalSquare className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-slate-300 uppercase">
              {brandName}
            </p>
            <p className="text-xs text-slate-400">{statusText}</p>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200 sm:flex">
            <Sparkles className="h-4 w-4" />
            <span>Mission-ready</span>
          </div>
          <IconButton icon={Menu} label="Open navigation" className="md:hidden" />
        </div>
      </div>
    </header>
  )
}

export default TopBar
