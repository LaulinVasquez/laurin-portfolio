import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

interface MousePositionStyles extends CSSProperties {
  '--mouse-x': string
  '--mouse-y': string
}

function DesktopBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 3

    const paint = () => {
      frameId = 0
      backgroundRef.current?.style.setProperty('--mouse-x', `${pointerX}px`)
      backgroundRef.current?.style.setProperty('--mouse-y', `${pointerY}px`)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (!frameId) frameId = window.requestAnimationFrame(paint)
    }

    const updateListener = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (finePointer.matches && !reducedMotion.matches) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true })
      }
    }

    updateListener()
    finePointer.addEventListener('change', updateListener)
    reducedMotion.addEventListener('change', updateListener)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      finePointer.removeEventListener('change', updateListener)
      reducedMotion.removeEventListener('change', updateListener)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const initialPosition: MousePositionStyles = {
    '--mouse-x': '50vw',
    '--mouse-y': '30vh',
  }

  return (
    <div
      ref={backgroundRef}
      style={initialPosition}
      className="pointer-events-none fixed inset-0 overflow-hidden bg-[#090a0a]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(33,54,45,0.32),_transparent_48%),linear-gradient(180deg,_rgba(17,19,18,0.7),_#090a0a_70%)]" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(62,207,142,0.105),_transparent_68%)] motion-safe:block [@media(pointer:coarse)]:hidden" />
      <div className="absolute inset-0 opacity-[0.17] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
    </div>
  )
}

export default DesktopBackground
