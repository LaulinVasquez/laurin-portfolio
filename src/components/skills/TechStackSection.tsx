import { skillGroups } from '../../data/skills'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function TechStackSection() {
  return (
    <section id="skills" className="page-section">
      <Reveal><SectionHeading eyebrow="Toolkit" title="Technologies I work with" description="Verified through the projects I build, grouped by where they fit in the product." /></Reveal>
      <Reveal className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </Reveal>
    </section>
  )
}

export default TechStackSection
