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
    'mt-2 w-full rounded-md border border-white/10 bg-black/25 px-3.5 py-3 text-neutral-100 placeholder:text-neutral-600 focus:border-emerald-400/45 focus:outline-none focus:ring-2 focus:ring-emerald-400/15'

  return (
    <div id="contact">
      <PortfolioWindow
        title="Contact"
        subtitle="Email workflow / available for opportunities"
        icon={Mail}
        focusOnMount
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-white/[0.09] bg-black/15 p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-300">
              Direct channel
            </p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-white">Let’s build something useful.</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Share a little about your project or opportunity. Submitting this form opens your
              email application with the message prepared for you to review and send.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-6 inline-flex break-all text-sm font-medium text-emerald-300 underline decoration-emerald-400/30 underline-offset-4 hover:text-emerald-200"
            >
              {contactEmail}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-lg border border-white/[0.09] bg-black/20 p-5 sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-neutral-300">
                Name <span className="text-emerald-400" aria-hidden="true">*</span>
                <input className={inputClassName} name="name" type="text" autoComplete="name" required />
              </label>
              <label className="text-sm font-medium text-neutral-300">
                Email <span className="text-emerald-400" aria-hidden="true">*</span>
                <input className={inputClassName} name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label className="block text-sm font-medium text-neutral-300">
              Subject <span className="text-emerald-400" aria-hidden="true">*</span>
              <input className={inputClassName} name="subject" type="text" required />
            </label>
            <label className="block text-sm font-medium text-neutral-300">
              Message <span className="text-emerald-400" aria-hidden="true">*</span>
              <textarea className={`${inputClassName} min-h-40 resize-y`} name="message" required />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/[0.12] px-4 py-2.5 text-sm font-medium text-emerald-200 transition hover:border-emerald-300/45 hover:bg-emerald-400/[0.17] focus-visible:outline-none"
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
