import { useEffect, useRef } from 'react'

function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const move = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--pointer-x', `${event.clientX}px`)
        ref.current?.style.setProperty('--pointer-y', `${event.clientY}px`)
        frame = 0
      })
    }
    const update = () => {
      window.removeEventListener('pointermove', move)
      if (fine.matches && !reduced.matches) window.addEventListener('pointermove', move, { passive: true })
    }
    update()
    fine.addEventListener('change', update)
    reduced.addEventListener('change', update)
    return () => {
      window.removeEventListener('pointermove', move)
      fine.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="ambient-background" aria-hidden="true" />
}

export default AmbientBackground
