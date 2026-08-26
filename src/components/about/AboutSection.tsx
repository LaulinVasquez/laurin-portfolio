import { Bot, Code2, GraduationCap, Radio } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'BYU–Idaho · Computer Science' },
  { icon: Code2, label: 'Focus', value: 'Full-Stack Development' },
  { icon: Bot, label: 'Currently learning', value: 'AI Agents & Automation' },
  { icon: Radio, label: 'Availability', value: 'Open to Software Opportunities' },
]

function AboutSection() {
  return (
    <section id="about" className="page-section">
      <Reveal className="about-grid">
        <SectionHeading eyebrow="About me" title="More than code. Driven by purpose." />
        <div className="about-copy">
          <p>I’m a Computer Science student at BYU–Idaho who enjoys turning real problems into useful software.</p>
          <p>My work spans responsive interfaces, backend systems, databases, and complete product workflows. I care about learning deeply, solving the right problem, and making every build clearer than the last.</p>
        </div>
      </Reveal>
      <Reveal className="fact-grid">
        {facts.map(({ icon: Icon, label, value }) => (
          <article className="fact-card" key={label}>
            <Icon aria-hidden="true" />
            <p>{label}</p>
            <h3>{value}</h3>
          </article>
        ))}
      </Reveal>
    </section>
  )
}

export default AboutSection
