import { Code2, FolderKanban, Mail, MonitorPlay } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import IconButton from '../ui/IconButton'

interface DockApp {
  id: string
  label: string
  icon: LucideIcon
}

interface AppDockProps {
  apps?: DockApp[]
  activeAppId?: string
  onSelectApp?: (appId: string) => void
}

function AppDock({
  apps = [
    { id: 'home', label: 'Home', icon: MonitorPlay },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'code', label: 'Code', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ],
  activeAppId = 'home',
  onSelectApp,
}: AppDockProps) {
  return (
    <nav
      aria-label="Application dock"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-20 flex justify-center px-4"
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-2 py-2 shadow-[0_16px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        {apps.map((app) => {
          const Icon = app.icon
          return (
            <IconButton
              key={app.id}
              icon={Icon}
              label={app.label}
              active={activeAppId === app.id}
              onClick={() => onSelectApp?.(app.id)}
              className="rounded-full border border-transparent bg-white/5 p-3"
            />
          )
        })}
      </div>
    </nav>
  )
}

export default AppDock
