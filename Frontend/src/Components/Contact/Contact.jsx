import './Contact.css'
import { Reveal } from '../ui/Reveal/Reveal'

const SOCIALS = [
  {
    id: "01",
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "AlexJRQ32",
    url: "https://github.com/AlexJRQ32",
  },
  {
    id: "02",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "Alex Roblero",
    url: "https://www.linkedin.com/in/alex-roblero-297811301/",
  },
  {
    id: "03",
    icon: "fa-regular fa-envelope",
    label: "Email",
    value: "robleroalex015@icloud.com",
    url: "mailto:robleroalex015@icloud.com",
  },
]

const NAV_LINKS = [
  { label: "Home", url: "#home" },
  { label: "About", url: "#about" },
  { label: "Skills", url: "#skills" },
  { label: "Projects", url: "#projects" },
  { label: "Blog", url: "#blog" },
]

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-grid">
          <Reveal direction="left">
            <div className="contact-brand">
              <div className="contact-brand__logo">
                <i className="fa-solid fa-rocket" />
                <span>Alex Roblero</span>
              </div>
              <p className="contact-brand__tag">
                Frontend &amp; Full-stack developer. I build complete web
                applications with React and .NET.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <nav className="contact-nav" aria-label="Navigation">
              <span className="contact-nav__title">Navigation</span>
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.url}>
                  {l.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="contact-social">
              <span className="contact-social__title">Let's connect</span>
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  className="contact-social__link"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={s.icon} />
                  <span>{s.value}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="contact-bottom">
          <p>© {new Date().getFullYear()} Alex Roblero. All rights reserved.</p>
          <p>Designed &amp; developed by Alex Roblero — San José, Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}
