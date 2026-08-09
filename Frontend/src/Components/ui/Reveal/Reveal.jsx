import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

export function Reveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction}${visible ? " reveal--visible" : ""}`}
      style={visible ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
