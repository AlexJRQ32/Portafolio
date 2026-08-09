import './Skills.css'
import { Reveal } from '../ui/Reveal/Reveal'

const SKILLS = [
  { id: "01", icon: "devicon-react-original", color: "#61dafb", name: "React", value: 70 },
  { id: "02", icon: "devicon-javascript-plain", color: "#f7df1e", name: "JavaScript", value: 90 },
  { id: "03", icon: "devicon-html5-plain", color: "#e34c26", name: "HTML", value: 90 },
  { id: "04", icon: "devicon-css3-plain", color: "#264de4", name: "CSS", value: 90 },
  { id: "05", icon: "devicon-dotnetcore-plain", color: "#512bd4", name: "C# / .NET / ASP.NET", value: 75 },
  { id: "06", icon: "devicon-git-plain", color: "#f05032", name: "Git", value: 70 },
]

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <Reveal>
          <div className="skills-head">
            <p className="skills-kicker">My Skills</p>
            <h2 className="skills-title">Technologies I Master</h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.1}>
              <div className="skill-item">
                <div className="skill-meta">
                  <div className="skill-name">
                    <i
                      className={`${s.icon} colored`}
                      style={{ color: s.color }}
                    />
                    <span>{s.name}</span>
                  </div>
                  <span className="skill-value">{s.value}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${s.value}%`, background: s.color }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
