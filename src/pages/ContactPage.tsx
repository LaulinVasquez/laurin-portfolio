import { Mail, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import PortfolioWindow from '../components/windows/PortfolioWindow'

const contactEmail = 'laurin171125@gmail.com'

function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClassName =
    'mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400'

  return (
    <div id="contact">
      <PortfolioWindow
        title="Contact"
        subtitle="Start a conversation"
        icon={Mail}
        focusOnMount
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Direct channel
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Let’s build something useful.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Share a little about your project or opportunity. Submitting this form opens your
              email application with the message prepared for you to review and send.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-6 inline-flex break-all text-sm font-semibold text-cyan-200 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-100"
            >
              {contactEmail}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[24px] border border-white/10 bg-slate-950/35 p-5 sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">
                Name
                <input className={inputClassName} name="name" type="text" autoComplete="name" required />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Email
                <input className={inputClassName} name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-200">
              Subject
              <input className={inputClassName} name="subject" type="text" required />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Message
              <textarea className={`${inputClassName} min-h-40 resize-y`} name="message" required />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Prepare email
            </button>
          </form>
        </div>
      </PortfolioWindow>
    </div>
  )
}

export default ContactPage
