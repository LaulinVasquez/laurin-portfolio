import { journey } from '../../data/experience'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function ExperienceSection() {
  return (
    <section id="experience" className="page-section">
      <Reveal><SectionHeading eyebrow="Journey" title="Learning by building" description="A development path shaped by education, hands-on projects, and steadily broader product responsibility." /></Reveal>
      <Reveal className="timeline">
        {journey.map((item, index) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div><p>{item.label}</p><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}

export default ExperienceSection
