import { useState } from 'react'
import './Blog.css'

const POSTS = [
  {
    id: "01",
    tag: "Frontend",
    title: "Lo que aprendí construyendo mi primer proyecto con React",
    readTime: "4 min",
    color: "#61dafb",
    body: [
      "Mi primer acercamiento real a React fue construyendo FlowBank, una app para administrar fechas de corte y pago de tarjetas. Antes solo conocía HTML, CSS y JavaScript vanilla, y el salto a componentes fue más grande de lo que esperaba.",
      "Lo primero que entendí fue la diferencia entre props y estado. Las props son datos que el padre le pasa al hijo (y que no se deben mutar), mientras que el estado es información interna del componente que sí cambia con la interacción del usuario. Mezclarlos al principio genera bugs confusos: un componente que recibe datos por props y los modifica directamente nunca se comporta como esperás.",
      "El segundo aprendizaje fue la arquitectura por features. En vez de una carpeta de 'components' gigante, organicé el código por módulos: dashboard, tarjetas, facturas, cada uno con sus componentes, hooks y servicios. Esto hizo que cuando la app creció, no me perdiera.",
      "También aprendí que el estado global no es la primera opción. React tiene su propio estado local y el context para casos puntuales; cargar todo en un store global solo complica el código innecesariamente.",
    ],
  },
  {
    id: "02",
    tag: "Backend",
    title: "Entendiendo las capas en una API con .NET",
    readTime: "6 min",
    color: "#512bd4",
    body: [
      "Cuando empecé con .NET, mi instinto era poner todo en el controlador: validaciones, acceso a datos, reglas de negocio. El resultado fue un código imposible de probar y de mantener. La solución fue entender la arquitectura en capas.",
      "Separé el proyecto en tres: Core, Data y WebAPI. Core contiene las entidades del dominio (como Tarjeta o Factura) y las reglas de negocio puras, sin saber nada de bases de datos. Data se encarga del acceso a datos con Entity Framework Core: el DbContext, los repositorios y las migraciones. WebAPI expone los endpoints HTTP y se comunica con las capas internas.",
      "La regla que me cambió: las capas solo dependen hacia adentro. WebAPI conoce a Data y Core, Data conoce a Core, pero Core no conoce a nadie. Así, si mañana cambio de SQL Server a otra base, solo toco la capa Data.",
      "También aprendí la inyección de dependencias. En vez de crear instancias con 'new' dentro de cada clase, registro los servicios en el contenedor y los recibo por el constructor. Esto facilita las pruebas y el mantenimiento.",
    ],
  },
  {
    id: "03",
    tag: "Bases de datos",
    title: "Modelado de datos: de la idea al diagrama",
    readTime: "5 min",
    color: "#cc2927",
    body: [
      "El modelado de datos es la base de cualquier aplicación, y aprender a hacerlo bien me ahorró muchísimas horas de arreglos después. El proceso empieza antes de escribir SQL: se trata de entender qué entidades existen y cómo se relacionan.",
      "Para OpenPaw, el carnet de mascotas, empecé listando las entidades: Usuario, Mascota, Especie, Raza, Servicio, Reseña. Después definí las relaciones: un usuario tiene muchas mascotas, una mascota pertenece a una especie y a una raza, un servicio pertenece a un usuario y puede tener muchas reseñas.",
      "Aprendí a decidir entre 1 a 1, 1 a muchos y muchos a muchos. Un error común es agregar una relación muchos a muchos donde alcanza con una de uno a muchos, o al revés: meter campos repetidos en una tabla en vez de normalizar.",
      "Por último, entendí el valor de las migraciones. Con Entity Framework Core, cada cambio del modelo se convierte en una migración versionada, lo que permite evolucionar la base de datos sin perder datos ni romper lo que ya funciona.",
    ],
  },
]

function Post({ post }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`blog-card${open ? " blog-card--open" : ""}`}>
      <span className="blog-card__num">{post.id}</span>
      <div className="blog-card__tag" style={{ color: post.color }}>
        {post.tag}
      </div>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__excerpt">{post.body[0]}</p>

      <div className="blog-card__content">
        {post.body.slice(1).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="blog-card__meta">
        <span>{post.readTime} de lectura</span>
        <button
          type="button"
          className="blog-card__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Leer menos" : "Leer más"}
          <i className={`fa-solid fa-chevron-down${open ? " blog-card__toggle--open" : ""}`} />
        </button>
      </div>
    </article>
  )
}

export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-head">
          <p className="blog-kicker">Blog</p>
          <h2 className="blog-title">Notes From My Learning</h2>
        </div>

        <div className="blog-grid">
          {POSTS.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
