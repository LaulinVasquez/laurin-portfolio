import { Code2, FolderKanban, House, Mail } from 'lucide-react'
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
    { id: 'home', label: 'Home', icon: House },
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
      className="pointer-events-none fixed inset-x-0 bottom-4 z-20 flex justify-center px-3 sm:bottom-6"
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-lg border border-white/10 bg-[#111312]/95 p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {apps.map((app) => {
          const Icon = app.icon
          return (
            <IconButton
              key={app.id}
              icon={Icon}
              label={app.label}
              active={activeAppId === app.id}
              onClick={() => onSelectApp?.(app.id)}
              className="group relative"
            />
          )
        })}
      </div>
    </nav>
  )
}

export default AppDock
