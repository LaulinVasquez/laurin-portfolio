import { Bot, Layers3, Server, Sparkles } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const specialties = [
  { icon: Layers3, number: '01', title: 'Full-Stack Applications', text: 'End-to-end applications with React, TypeScript, Node.js, and persistent data.' },
  { icon: Server, number: '02', title: 'Backend Systems', text: 'REST APIs, authentication, PostgreSQL, relational design, and dependable workflows.' },
  { icon: Sparkles, number: '03', title: 'Product Experiences', text: 'Responsive interfaces, dashboards, accessible UX, and clear application states.' },
  { icon: Bot, number: '04', title: 'AI Integration', text: 'Exploring AI APIs, agents, tools, and automation grounded in useful product needs.' },
]

function SpecializationSection() {
  return (
    <section className="page-section specialization-section" aria-labelledby="specialization-title">
      <Reveal><div id="specialization-title"><SectionHeading eyebrow="Capabilities" title="What I specialize in" description="A product-minded approach across the stack—from the first interaction to the data behind it." /></div></Reveal>
      <Reveal className="specialization-grid">
        {specialties.map(({ icon: Icon, number, title, text }) => (
          <article className="specialization-card" key={title}>
            <div><Icon aria-hidden="true" /><span>{number}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </Reveal>
    </section>
  )
}

export default SpecializationSection
