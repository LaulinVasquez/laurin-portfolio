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
      className={`flex h-10 min-w-10 items-center justify-center rounded-md border border-transparent px-2 text-neutral-400 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none ${
        active ? 'border-emerald-400/20 bg-emerald-400/[0.09] text-emerald-300' : ''
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`.trim()}
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
    </button>
  )
}

export default IconButton
