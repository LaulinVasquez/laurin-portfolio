import { ArrowUpRight, Code2, Cpu, Sparkles } from 'lucide-react'
import PrimaryButton from '../ui/PrimaryButton'
import PortfolioWindow from './PortfolioWindow'

function HeroWindow() {
  return (
    <PortfolioWindow
      title="Mission Control"
      subtitle="Building calm, reliable product experiences"
      icon={Cpu}
      className="relative"
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Full stack Frontend Engineer • React • TypeScript
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              I turn complex product ideas into polished, dependable interfaces.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I build mission-critical web experiences with thoughtful UX, strong collaboration,
              and a focus on clarity for both users and teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton label="View projects" href="#projects" icon={ArrowUpRight} />
            <PrimaryButton label="Open resume" href="#contact" icon={Code2} />
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              Current focus
            </p>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
              2026
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {[
              'Design systems with reusable UI primitives',
              'Performance-focused React and TypeScript delivery',
              'Accessible, recruiter-friendly product storytelling',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <p className="text-sm leading-7 text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioWindow>
  )
}

export default HeroWindow
