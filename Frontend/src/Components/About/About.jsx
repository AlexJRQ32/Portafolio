import './About.css'
import { Reveal } from '../ui/Reveal/Reveal'
import { ArrowRight } from '@phosphor-icons/react'

const STATS = [
  { value: "9", label: "Technologies in my daily stack" },
  { value: "3", label: "Projects built end to end" },
  { value: "23", label: "GitHub repositories" },
  { value: "3", label: "Years of study" },
]

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <Reveal direction="left">
              <h2 className="about-title">
                I like owning a feature
                <br />
                <span className="about-accent">end to end</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1} direction="left">
              <p className="about-text">
                Systems Engineering student at Universidad Hispanoamericana,
                focused on frontend development and interface design. I like
                working on the whole lifecycle of an app: data model, API,
                UI and deployment. I also work with agile methodologies
                like Scrum.
              </p>
            </Reveal>
            <Reveal delay={0.2} direction="left">
              <a className="btn-about" href="#blog">
                I write about what I learn
                <ArrowRight size={14} weight="bold" />
              </a>
            </Reveal>
          </div>

          <Reveal direction="right">
            <dl className="stats-list">
              {STATS.map((s) => (
                <div key={s.label} className="stats-row">
                  <dt className="stats-value">{s.value}</dt>
                  <dd className="stats-label">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
