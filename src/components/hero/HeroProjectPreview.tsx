import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { projects } from '../../data/projects'
import TechBadge from '../ui/TechBadge'

const slides = projects.filter((project) => project.heroEligible)

function HeroProjectPreview() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const project = slides[index]

  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  if (!project) return null
  const move = (amount: number) => setIndex((value) => (value + amount + slides.length) % slides.length)
  const github = project.links.find((link) => link.kind === 'github')
  const demo = project.links.find((link) => link.kind === 'demo')

  return (
    <div
      className="project-window"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Featured build</span>
        <span>{index + 1}/{slides.length}</span>
      </div>
      <div className="window-image">
        <img key={project.id} src={project.image} alt={project.imageAlt} width="1280" height="720" />
      </div>
      <div className="window-content" aria-live="polite">
        <div>
          <p className="eyebrow">Selected project</p>
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        <div className="badge-list">
          {project.techStack.slice(0, 4).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}
        </div>
        <div className="window-footer">
          <div className="project-links">
            {demo ? <a href={demo.href} target="_blank" rel="noreferrer">Live demo <ArrowUpRight aria-hidden="true" /></a> : null}
            {github ? <a href={github.href} target="_blank" rel="noreferrer">GitHub <Code2 aria-hidden="true" /></a> : null}
          </div>
          <div className="carousel-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous featured project"><ArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next featured project"><ArrowRight aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroProjectPreview
