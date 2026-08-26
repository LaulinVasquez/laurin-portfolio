import { Bot, Braces, Workflow } from 'lucide-react'
import {
  siCss,
  siEjs,
  siExpress,
  siGit,
  siGithub,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siPlotly,
  siStreamlit,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTypescript,
  siXcode,
} from 'simple-icons'

const brandIcons = {
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Tailwind CSS': siTailwindcss,
  'Node.js': siNodedotjs,
  Express: siExpress,
  EJS: siEjs,
  CSS: siCss,
  Python: siPython,
  Streamlit: siStreamlit,
  Plotly: siPlotly,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  Swift: siSwift,
  Xcode: siXcode,
} as const

interface TechnologyLogoProps {
  name: string
  tone?: 'brand' | 'portfolio'
}

function TechnologyLogo({ name, tone = 'brand' }: TechnologyLogoProps) {
  const brand = brandIcons[name as keyof typeof brandIcons]

  if (brand) {
    const color = tone === 'portfolio'
      ? 'currentColor'
      : `#${brand.hex === '000000' ? 'F4F7F5' : brand.hex}`
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color }}>
        <path fill="currentColor" d={brand.path} />
      </svg>
    )
  }

  if (name === 'Automation') return <Workflow aria-hidden="true" />
  if (name.startsWith('AI')) return <Bot aria-hidden="true" />
  return <Braces aria-hidden="true" />
}

export default TechnologyLogo
