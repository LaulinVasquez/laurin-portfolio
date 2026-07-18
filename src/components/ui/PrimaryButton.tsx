import type { LucideIcon } from 'lucide-react'

interface PrimaryButtonProps {
  label: string
  href?: string
  onClick?: () => void
  icon?: LucideIcon
  className?: string
  target?: string
  rel?: string
}

function PrimaryButton({
  label,
  href,
  onClick,
  icon: Icon,
  className = '',
  target,
  rel,
}: PrimaryButtonProps) {
  const content = (
    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
      {Icon ? <Icon className="h-4 w-4" /> : null}
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
