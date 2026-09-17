import './Skills.css'
import { Reveal } from '../ui/Reveal/Reveal'

const SKILLS = [
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-typescript-plain", name: "TypeScript" },
  { icon: "devicon-html5-plain", name: "HTML" },
  { icon: "devicon-css3-plain", name: "CSS" },
  { icon: "devicon-dotnetcore-plain", name: "C# / .NET" },
  { icon: "devicon-microsoftsqlserver-plain", name: "SQL Server" },
  { icon: "devicon-git-plain", name: "Git" },
  { icon: "devicon-azuredevops-plain", name: "Azure DevOps" },
]

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <Reveal>
          <h2 className="skills-title">My stack</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="skills-list">
            {SKILLS.map((s) => (
              <li key={s.name} className="skill-chip">
                <i className={`${s.icon} colored`} aria-hidden="true" />
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
