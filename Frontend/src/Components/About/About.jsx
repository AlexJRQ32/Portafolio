import './About.css'
import { Reveal } from '../ui/Reveal/Reveal'

const STATS = [
  { id: "01", icon: "fa-solid fa-layer-group", iconClass: "stat-icon--purple", value: "9", label: "Technologies I use" },
  { id: "02", icon: "fa-solid fa-code", iconClass: "stat-icon--blue", value: "3", label: "Completed projects" },
  { id: "03", icon: "fa-brands fa-github", iconClass: "stat-icon--green", value: "23", label: "GitHub repositories" },
  { id: "04", icon: "fa-solid fa-graduation-cap", iconClass: "stat-icon--yellow", value: "3", label: "Years of study" },
]

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <Reveal direction="left">
              <p className="about-kicker">About Me</p>
              <h2 className="about-title">
                I'm passionate about
                <br />
                <span className="gradient-text">creating digital solutions</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} direction="left">
              <p className="about-text">
                Systems Engineering student at Universidad Hispanoamericana,
                focused on frontend development and interface design. I like to
                cover the whole cycle of an application: from the data model to
                deployment, working with agile methodologies like Scrum.
              </p>
            </Reveal>
            <Reveal delay={0.2} direction="left">
              <a className="btn-about" href="#">
                Learn More About Me
                <i className="fa-regular fa-user" />
              </a>
            </Reveal>
          </div>

          <div className="stats-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1} direction="right">
                <div className="stat-card">
                  <div className={`stat-icon ${s.iconClass}`}>
                    <i className={s.icon} />
                  </div>
                  <div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
