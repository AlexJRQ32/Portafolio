import './About.css'

const STATS = [
  { id: "01", icon: "fa-solid fa-layer-group", iconClass: "stat-icon--purple", value: "9", label: "Tecnologías que manejo" },
  { id: "02", icon: "fa-solid fa-code", iconClass: "stat-icon--blue", value: "3", label: "Proyectos completados" },
  { id: "03", icon: "fa-brands fa-github", iconClass: "stat-icon--green", value: "23", label: "Repos en GitHub" },
  { id: "04", icon: "fa-solid fa-graduation-cap", iconClass: "stat-icon--yellow", value: "3", label: "Años de carrera" },
]

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <p className="about-kicker">About Me</p>
            <h2 className="about-title">
              I'm passionate about
              <br />
              <span className="gradient-text">creating digital solutions</span>
            </h2>
            <p className="about-text">
              Estudiante de Ingeniería en Sistemas en la Universidad Hispanoamericana,
              enfocado en el desarrollo frontend y el diseño de interfaces. Me gusta
              abarcar todo el ciclo de una aplicación: desde el modelo de datos hasta
              el despliegue, trabajando con metodologías ágiles como Scrum.
            </p>
            <a className="btn-about" href="#">
              Learn More About Me
              <i className="fa-regular fa-user" />
            </a>
          </div>

          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.id} className="stat-card">
                <div className={`stat-icon ${s.iconClass}`}>
                  <i className={s.icon} />
                </div>
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
