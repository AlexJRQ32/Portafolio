import './Projects.css'

const PROJECTS = [
  {
    id: "01",
    title: "FlowBank",
    description:
      "Gestión de fechas de corte y pago de tarjetas de crédito en un solo lugar. Registra tarjetas, escanea facturas y recibe alertas antes de cada fecha.",
    stack: ["devicon-react-original", "devicon-dotnetcore-plain"],
    url: "https://flowbank-three.vercel.app",
  },
  {
    id: "02",
    title: "OpenPaw",
    description:
      "Plataforma de servicios veterinarios y cuidado de mascotas, desarrollada en equipo con metodología Scrum y Azure DevOps.",
    stack: ["devicon-react-original", "devicon-dotnetcore-plain", "devicon-azuredevops-plain"],
    url: "https://openpaw-devs.vercel.app",
  },
  {
    id: "03",
    title: "RappiDoz",
    description:
      "Aplicación de delivery y pedidos para el curso de Diseño de Sistemas, con backend en ASP.NET y SQL Server.",
    stack: ["devicon-dotnetcore-plain"],
    url: "https://github.com/AlexJRQ32/RappiDozApp",
  },
]

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-head">
          <p className="projects-kicker">Featured Projects</p>
          <h2 className="projects-title">Some of My Recent Work</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card">
              <span className="project-card__num">{p.id}</span>

              <div className="project-card__head">
                <div className="project-card__icon">
                  <i className={p.stack[0] + " colored"} />
                </div>
                <h3 className="project-card__title">{p.title}</h3>
              </div>

              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__stack">
                {p.stack.map((s, i) => (
                  <i key={i} className={`${s} colored project-card__stack-icon`} />
                ))}
                {p.title === "RappiDoz" && (
                  <svg className="project-card__stack-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#CC2927" d="M12 2C7 2 3 3.5 3 5.5v13C3 20.5 7 22 12 22s9-1.5 9-3.5v-13C21 3.5 17 2 12 2zm0 2c4.4 0 7 .9 7 1.5S16.4 7 12 7 5 6.1 5 5.5 7.6 4 12 4zm0 16c-4.4 0-7-.9-7-1.5V8.8C6.6 9.9 9.2 10.4 12 10.4s5.4-.5 7-1.6v9.7c0 .6-2.6 1.5-7 1.5z" />
                  </svg>
                )}
              </div>

              <a className="project-card__link" href={p.url} target="_blank" rel="noreferrer">
                View Project
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
