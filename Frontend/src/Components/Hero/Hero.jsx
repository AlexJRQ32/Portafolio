import './Hero.css'
import { Reveal } from '../ui/Reveal/Reveal'
import { ArrowRight, Download } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <Reveal>
              <p className="hero-badge">Frontend &amp; Full-stack Developer</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title">
                Hi, I'm <span className="hero-name">Alex Roblero</span>
                <br />
                I build web apps <span className="hero-accent">end to end</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="hero-sub">
                Systems Engineering student at Universidad Hispanoamericana.
                I build complete web apps, from database to deployment.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="hero-actions">
                <a className="btn-primary" href="#projects">
                  View My Work
                  <ArrowRight size={16} weight="bold" />
                </a>
                <a className="btn-glass" href="/cv-alex-roblero.pdf" download="CV - Alex Roblero.pdf">
                  Download CV
                  <Download size={16} weight="bold" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-visual">
            <Reveal delay={0.2} direction="zoom">
              <div className="code-card">
                <div className="code-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <p><span className="kw">const</span> <span className="var">developer</span> <span className="op">=</span> {'{'}</p>
                <p className="indent-1">name: <span className="str">"Alex Roblero"</span>,</p>
                <p className="indent-1">role: <span className="str">"Full-stack Developer"</span>,</p>
                <p className="indent-1">skills: [<span className="str">"React"</span>, <span className="str">".NET"</span>,</p>
                <p className="indent-2"><span className="str">"TypeScript"</span>, <span className="str">"SQL"</span>],</p>
                <p className="indent-1">passion: <span className="str">"Building things"</span></p>
                <p>{'}'}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
