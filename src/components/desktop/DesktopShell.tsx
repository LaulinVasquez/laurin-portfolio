import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import AppDock from '../navigation/AppDock'
import TopBar from '../navigation/TopBar'
import DesktopBackground from './DesktopBackground'

interface DesktopShellProps {
  children: ReactNode
  contentKey: string
  activeAppId: string
  onSelectApp: (appId: string) => void
}

function DesktopShell({ children, contentKey, activeAppId, onSelectApp }: DesktopShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <DesktopBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar
          brandName="Laurin OS"
          navItems={[
            { label: 'Home', href: '#home' },
            // { label: 'Projects', href: '#projects' },
            // { label: 'Contact', href: '#contact' },
          ]}
          statusText="Available for product teams"
        />
        <main className="flex-1 px-4 pb-28 pt-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={contentKey}
              className="mx-auto flex max-w-6xl flex-col gap-6"
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <AppDock activeAppId={activeAppId} onSelectApp={onSelectApp} />
      </div>
    </div>
  )
}

export default DesktopShell
