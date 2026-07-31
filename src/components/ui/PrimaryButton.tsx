import type { LucideIcon } from 'lucide-react'

interface PrimaryButtonProps {
  label: string
  href?: string
  onClick?: () => void
  icon?: LucideIcon
  className?: string
  target?: string
  rel?: string
  variant?: 'primary' | 'secondary'
}

function PrimaryButton({
  label,
  href,
  onClick,
  icon: Icon,
  className = '',
  target,
  rel,
  variant = 'primary',
}: PrimaryButtonProps) {
  const variantClassName =
    variant === 'primary'
      ? 'border-emerald-400/30 bg-emerald-400/[0.12] text-emerald-200 hover:border-emerald-300/45 hover:bg-emerald-400/[0.17]'
      : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white'

  const content = (
    <span className={`inline-flex items-center justify-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition ${variantClassName}`}>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {label}
    </span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={`inline-flex ${className}`.trim()}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`inline-flex ${className}`.trim()}>
      {content}
    </button>
  )
}

export default PrimaryButton
