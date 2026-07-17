import type { LucideIcon } from 'lucide-react'

interface IconButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
  className?: string
}

function IconButton({
  icon: Icon,
  label,
  onClick,
  active = false,
  disabled = false,
  className = '',
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        active ? 'border-cyan-400/40 bg-cyan-400/15 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.16)]' : ''
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`.trim()}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}

export default IconButton
