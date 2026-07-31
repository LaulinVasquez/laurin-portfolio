import { ArrowRight, Bot, Code2, Cpu, FileText } from 'lucide-react'
import PrimaryButton from '../ui/PrimaryButton'
import PortfolioWindow from './PortfolioWindow'

interface HeroWindowProps {
  onViewProjects: () => void
}

const technologies = ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', "Next.js" , "Python", "REST APIs"]

function HeroWindow({ onViewProjects }: HeroWindowProps) {
  return (
    <PortfolioWindow
      title="Developer overview"
      subtitle="Profile / current focus"
      icon={Cpu}
      className="relative"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/[0.07] px-2.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for software opportunities
            </div>
            <div className="mt-6">
              <p className="font-mono text-xs tracking-[0.14em] text-neutral-500 uppercase">
                Laurin Vasquez
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.08]">
                Computer Science student building practical full-stack software.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
                I build accessible web applications with React, TypeScript, Node.js,
                Express, and PostgreSQL, and I’m especially interested in AI agents
                and software that runs reliably in production.
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <PrimaryButton label="View projects" onClick={onViewProjects} icon={ArrowRight} />
            <PrimaryButton
              label="GitHub"
              href="https://github.com/LaulinVasquez"
              icon={Code2}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            />
            <PrimaryButton
              label="Open resume"
              href="/resume/Laurin-vasquez-resume.pdf"
              icon={FileText}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            />
          </div>
        </div>

        <aside className="rounded-lg border border-white/[0.09] bg-black/20 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
              Current focus
            </p>
            <Bot className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          </div>
          <div className="mt-5 space-y-3">
            {[
              'AI agents and applied automation',
              'Production-ready full-stack systems',
              'Accessible, reusable interface architecture',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 border-b border-white/[0.07] pb-3 last:border-0 last:pb-0">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                <p className="text-sm leading-6 text-neutral-300">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-white/[0.08] pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-600">
              Core stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Core technology stack">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-xs text-neutral-400"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </PortfolioWindow>
  )
}

export default HeroWindow
