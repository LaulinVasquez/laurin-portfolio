import { ArrowUpRight, Code2, Mail, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { site } from '../../data/site'
import Reveal from '../ui/Reveal'

function ContactSection() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`
  }
  return (
    <section id="contact" className="page-section contact-section">
      <Reveal className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s build something great.</h2>
          <p>Have a project, opportunity, or interesting problem in mind? Tell me what you’re working on.</p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}><Mail aria-hidden="true" /><span>Email<small>{site.email}</small></span></a>
            <a href={site.github} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" /><span>GitHub<small>Explore my code</small></span><ArrowUpRight aria-hidden="true" /></a>
            <a href={site.resume} target="_blank" rel="noreferrer"><ArrowUpRight aria-hidden="true" /><span>Résumé<small>View PDF</small></span></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows={6} required /></label>
          <button className="button primary" type="submit">Prepare email <Send aria-hidden="true" /></button>
        </form>
      </Reveal>
    </section>
  )
}

export default ContactSection
