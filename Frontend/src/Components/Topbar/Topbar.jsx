import { useState, useEffect } from 'react'
import './Topbar.css'
import { Rocket, House, User, Code, FolderOpen, PenNib, Envelope } from '@phosphor-icons/react'

const NAV_LINKS = [
  { href: '#home', label: 'Home', icon: House },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#blog', label: 'Blog', icon: PenNib },
  { href: '#contact', label: 'Contact', icon: Envelope },
]

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  const toggleMenu = () => setMenuOpen(open => !open)
  const closeMenu = () => setMenuOpen(false)

  // Cerrar con Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Bloquear scroll del body mientras el menu esta abierto
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = original }
  }, [menuOpen])

  // Detectar seccion activa con IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.slice(1))
    const observers = []

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    })

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observers.push({ el, id })
      }
    })

    return () => {
      observers.forEach(({ el }) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <section className="topbar">
        <div className="logo">
          <span className="logo-badge">
            <Rocket size={18} weight="fill" className="logo-icon" />
          </span>
          <p>Alex Roblero</p>
        </div>

        <nav className="navbar" aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar-burger"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </section>

      {menuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu} aria-hidden="true" />}

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile menu">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <link.icon size={16} weight="bold" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
