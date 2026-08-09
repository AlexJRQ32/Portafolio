import './Hero.css'
import { Reveal } from '../ui/Reveal/Reveal'

const TECH = [
  "devicon-javascript-plain",
  "devicon-css3-plain",
  "devicon-html5-plain",
  "devicon-git-plain",
  "devicon-react-original",
  "devicon-csharp-plain",
  "devicon-dotnetcore-plain",
]

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <Reveal>
              <div className="badge-hero">
                <span className="badge-dot" />
                <p>Frontend &amp; Full-stack Developer</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text glow-text">Alex Roblero</span>
                <br />
                I build things for the web.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="info">
                Systems Engineering student at Universidad Hispanoamericana.
                I'm passionate about frontend and interface design: I build complete
                web applications, from the data model to deployment.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="hero-actions">
                <a className="btn-primary" href="#projects">
                  View My Work
                  <i className="fa-solid fa-arrow-right-long" />
                </a>
                <a className="btn-glass" href="#">
                  Download CV
                  <i className="fa-solid fa-download" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="tech-stack">
                <p className="tech-label">Technologies I Work With</p>
                <div className="tech-icons">
                  {TECH.map((icon) => (
                    <div key={icon} className="tech-icon">
                      <i className={`${icon} colored`} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="hero-visual">
            <Reveal delay={0.2} direction="zoom">
              <div className="hero-image-glow" />
              <div className="hero-scene">
                <div className="scene-particles" />

                <div className="blackhole">
                  <div className="blackhole__disc" />
                  <div className="blackhole__lens" />
                </div>

                <div className="scene-orbit scene-orbit--outer">
                  <span className="scene-satellite scene-satellite--react">
                    <i className="devicon-react-original colored" />
                  </span>
                  <span className="scene-satellite scene-satellite--dotnet">
                    <i className="devicon-dotnetcore-plain colored" />
                  </span>
                  <span className="scene-satellite scene-satellite--js">
                    <i className="devicon-javascript-plain colored" />
                  </span>
                  <span className="scene-satellite scene-satellite--csharp">
                    <i className="devicon-csharp-plain colored" />
                  </span>
                </div>

                <div className="scene-orbit scene-orbit--inner">
                  <span className="scene-dot scene-dot--purple" />
                  <span className="scene-dot scene-dot--blue" />
                </div>
              </div>
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
