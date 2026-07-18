import { motion } from 'framer-motion'

interface DesktopBackgroundProps {
  className?: string
  variant?: 'default' | 'subtle'
}

function DesktopBackground({
  className = '',
  variant = 'default',
}: DesktopBackgroundProps) {
  const isSubtle = variant === 'subtle'

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(14,116,144,0.3),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#030712_42%,_#020617_100%)]" />
      <motion.div
        className="absolute left-[-12%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{ x: [0, 16, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: isSubtle ? 16 : 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-10%] h-80 w-80 rounded-full bg-sky-600/20 blur-[140px]"
        animate={{ x: [0, -24, 14, 0], y: [0, 18, -14, 0] }}
        transition={{ duration: isSubtle ? 18 : 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_rgba(148,163,184,0.07)_50%,_transparent_100%)]" />
    </div>
  )
}

export default DesktopBackground
