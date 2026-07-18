import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface PortfolioWindowProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  children: ReactNode
  compact?: boolean
  className?: string
  focusOnMount?: boolean
}

function PortfolioWindow({
  title,
  subtitle,
  icon: Icon,
  children,
  compact = false,
  className = '',
  focusOnMount = false,
}: PortfolioWindowProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (focusOnMount) {
      headingRef.current?.focus()
    }
  }, [focusOnMount])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl ${className}`.trim()}
      aria-label={title}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
              <Icon className="h-4 w-4" />
            </div>
          ) : null}
          <div>
            <h2
              ref={headingRef}
              tabIndex={focusOnMount ? -1 : undefined}
              className="text-sm font-semibold tracking-[0.24em] text-slate-200 uppercase focus-visible:rounded-sm focus-visible:outline-none"
            >
              {title}
            </h2>
            {subtitle ? <p className="text-sm text-slate-400">{subtitle}</p> : null}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
        </div>
      </div>
      <div className={`px-5 py-5 sm:px-6 ${compact ? 'sm:py-6' : 'sm:py-8'}`}>{children}</div>
    </motion.section>
  )
}

export default PortfolioWindow
