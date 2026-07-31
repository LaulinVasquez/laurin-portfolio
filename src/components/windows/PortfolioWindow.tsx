import { motion, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (focusOnMount) {
      headingRef.current?.focus()
    }
  }, [focusOnMount])

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: 'easeOut' }}
      className={`w-full overflow-hidden rounded-xl border border-white/[0.09] bg-[#111312]/90 shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${className}`.trim()}
      aria-label={title}
    >
      <div className="flex min-h-14 items-center justify-between border-b border-white/[0.08] bg-white/[0.015] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
          ) : null}
          <div>
            <h2
              ref={headingRef}
              tabIndex={focusOnMount ? -1 : undefined}
              className="text-xs font-medium tracking-[0.16em] text-neutral-200 uppercase focus-visible:rounded-sm focus-visible:outline-none"
            >
              {title}
            </h2>
            {subtitle ? <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p> : null}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.12em] text-neutral-600 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Active
        </div>
      </div>
      <div className={`p-4 sm:p-6 ${compact ? '' : 'lg:p-7'}`}>{children}</div>
    </motion.section>
  )
}

export default PortfolioWindow
