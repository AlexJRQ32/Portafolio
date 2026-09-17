import { useLayoutEffect, useRef, useState } from 'react'
import './Reveal.css'

/**
 * Reveal: entrada con fade/translate SOLO cuando el usuario baja
 * y el elemento entra al viewport desde abajo.
 * - Once: tras la primera interseccion se desconecta el observer, por lo que
 *   al subir (scroll up) los elementos permanecen visibles sin re-animarse.
 * - Elementos ya dentro o por encima del viewport al montar: el primer
 *   callback del observer llega con isIntersecting=true y se marcan con
 *   `reveal--instant` (aparecen sin transicion, sin flash de opacity 0).
 * - prefers-reduced-motion: visible directo, sin animacion.
 */
export function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [reduceMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [visible, setVisible] = useState(reduceMotion)
  const [instant, setInstant] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return

    let first = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Primer disparo con el elemento ya visible = estado inicial (no anima)
          if (first) setInstant(true)
          setVisible(true)
          observer.disconnect()
        }
        first = false
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduceMotion])

  const classes = [
    'reveal',
    `reveal--${direction}`,
    visible ? 'reveal--visible' : '',
    instant ? 'reveal--instant' : '',
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={ref}
      className={classes}
      style={visible ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
