import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigation, site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = navigation.map((item) => item.id)

function PortfolioHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key === 'Tab') {
        const focusable = Array.from(
          navRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
        )
        const first = focusable[0]
        const last = focusable.at(-1)

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`portfolio-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={close} aria-label="Laurin Vasquez, home">
          <span className="brand-mark" aria-hidden="true">LV</span>
          <span>{site.name}</span>
        </a>
        {open ? (
          <button
            className="menu-backdrop"
            type="button"
            tabIndex={-1}
            aria-label="Close navigation menu"
            onClick={() => {
              close()
              menuButtonRef.current?.focus()
            }}
          />
        ) : null}
        <nav
          ref={navRef}
          id="mobile-navigation"
          className={`site-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item, index) => (
            <a
              key={item.id}
              ref={index === 0 ? firstLinkRef : undefined}
              href={`#${item.id}`}
              onClick={close}
              className={active === item.id ? 'active' : ''}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="resume-link mobile-resume" href={site.resume} target="_blank" rel="noreferrer">
            Résumé <FileText aria-hidden="true" />
          </a>
        </nav>
        <div className="nav-actions">
          <a className="resume-link desktop-resume" href={site.resume} target="_blank" rel="noreferrer">
            Résumé <FileText aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default PortfolioHeader
