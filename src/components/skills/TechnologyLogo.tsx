import { Bot, Braces, Workflow } from 'lucide-react'
import {
  siExpress,
  siGit,
  siGithub,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

const brandIcons = {
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Tailwind CSS': siTailwindcss,
  'Node.js': siNodedotjs,
  Express: siExpress,
  Python: siPython,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
} as const

function TechnologyLogo({ name }: { name: string }) {
  const brand = brandIcons[name as keyof typeof brandIcons]

  if (brand) {
    const color = brand.hex === '000000' ? 'F4F7F5' : brand.hex
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: `#${color}` }}>
        <path fill="currentColor" d={brand.path} />
      </svg>
    )
  }

  if (name === 'Automation') return <Workflow aria-hidden="true" />
  if (name.startsWith('AI')) return <Bot aria-hidden="true" />
  return <Braces aria-hidden="true" />
}

export default TechnologyLogo
