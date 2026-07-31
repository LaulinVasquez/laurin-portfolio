import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#090a0a] text-neutral-100">
      <DesktopBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar
          activeAppId={activeAppId}
          onSelectApp={onSelectApp}
        />
        <main className="flex-1 px-3 pb-28 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-32">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={contentKey}
              className="mx-auto flex max-w-6xl flex-col gap-5 sm:gap-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
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
