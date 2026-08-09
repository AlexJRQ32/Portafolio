import { useState } from 'react'
import './Blog.css'
import { Reveal } from '../ui/Reveal/Reveal'

const POSTS = [
  {
    id: "01",
    tag: "Frontend",
    title: "What I learned building my first project with React",
    readTime: "4 min",
    color: "#61dafb",
    body: [
      "My first real approach to React was building FlowBank, an app to manage credit card billing and payment dates. Before that I only knew HTML, CSS and vanilla JavaScript, and the jump to components was bigger than I expected.",
      "The first thing I understood was the difference between props and state. Props are data the parent passes to the child (and shouldn't be mutated), while state is internal component information that changes with user interaction. Mixing them up at first creates confusing bugs: a component that receives data via props and modifies it directly never behaves the way you expect.",
      "The second lesson was feature-based architecture. Instead of a giant 'components' folder, I organized the code into modules: dashboard, cards, invoices, each with its own components, hooks and services. This made the app easy to navigate as it grew.",
      "I also learned that global state is not the first option. React has its own local state and context for specific cases; loading everything into a global store only complicates the code unnecessarily.",
    ],
  },
  {
    id: "02",
    tag: "Backend",
    title: "Understanding layers in a .NET API",
    readTime: "6 min",
    color: "#512bd4",
    body: [
      "When I started with .NET, my instinct was to put everything in the controller: validation, data access, business rules. The result was code that was impossible to test and maintain. The solution was understanding layered architecture.",
      "I split the project into three: Core, Data and WebAPI. Core contains the domain entities (like Card or Invoice) and pure business rules, without knowing anything about databases. Data handles data access with Entity Framework Core: the DbContext, repositories and migrations. WebAPI exposes the HTTP endpoints and communicates with the inner layers.",
      "The rule that changed me: layers only depend inward. WebAPI knows about Data and Core, Data knows about Core, but Core knows nobody. So if tomorrow I switch from SQL Server to another database, I only touch the Data layer.",
      "I also learned dependency injection. Instead of creating instances with 'new' inside each class, I register services in the container and receive them through the constructor. This makes testing and maintenance easier.",
    ],
  },
  {
    id: "03",
    tag: "Databases",
    title: "Data modeling: from idea to diagram",
    readTime: "5 min",
    color: "#cc2927",
    body: [
      "Data modeling is the foundation of any application, and learning to do it well saved me tons of hours of fixing things later. The process starts before writing SQL: it's about understanding what entities exist and how they relate.",
      "For OpenPaw, the pet card, I started by listing the entities: User, Pet, Species, Breed, Service, Review. Then I defined the relationships: a user has many pets, a pet belongs to a species and a breed, a service belongs to a user and can have many reviews.",
      "I learned to decide between 1 to 1, 1 to many and many to many. A common mistake is adding a many-to-many relationship where a one-to-many is enough, or the opposite: putting repeated fields in a table instead of normalizing.",
      "Finally, I understood the value of migrations. With Entity Framework Core, every model change becomes a versioned migration, letting the database evolve without losing data or breaking what already works.",
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
          {open ? "Read less" : "Read more"}
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
        <Reveal>
          <div className="blog-head">
            <p className="blog-kicker">Blog</p>
            <h2 className="blog-title">Notes From My Learning</h2>
          </div>
        </Reveal>

        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Post post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
