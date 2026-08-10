import { useState, useEffect } from 'react'
import './Topbar.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home', icon: 'fa-solid fa-house' },
  { href: '#about', label: 'About', icon: 'fa-solid fa-user' },
  { href: '#skills', label: 'Skills', icon: 'fa-solid fa-code' },
  { href: '#projects', label: 'Projects', icon: 'fa-solid fa-folder-open' },
  { href: '#blog', label: 'Blog', icon: 'fa-solid fa-pen-nib' },
  { href: '#contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
]

export function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <>
      <section className='topbar'>
        <div className='logo'>
          <span className='logo-badge'>
            <i className="fa-solid fa-rocket logo-icon" />
          </span>
          <p>Alex Roblero</p>
        </div>

        <nav className='navbar' aria-label='Navegacion principal'>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href='#contact' className='btn-hire'>
          Hire Me
        </a>

        <button
          type='button'
          className='navbar-burger'
          onClick={toggleMenu}
          aria-label='Abrir menu'
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </section>

      {menuOpen && <div className='mobile-menu-backdrop' onClick={closeMenu} aria-hidden='true' />}

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className='mobile-menu__nav' aria-label='Menu movil'>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <i className={link.icon} />
              {link.label}
            </a>
          ))}
          <div className='mobile-menu__divider' />
          <a href='#contact' className='mobile-menu__cta' onClick={closeMenu}>
            Hire Me
            <i className='fa-solid fa-arrow-right' />
          </a>
        </nav>
      </div>
    </>
  )
}