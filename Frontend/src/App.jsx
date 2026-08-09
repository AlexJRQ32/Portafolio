import { Topbar } from "./Components/Topbar/Topbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./Components/About/About"
import { Skills } from "./Components/Skills/Skills"
import { Projects } from "./Components/Projects/Projects"
import { Blog } from "./Components/Blog/Blog"
import { Contact } from "./Components/Contact/Contact"
import './App.css'

function App() {
  return (
    <main className="page">
      <Topbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}

export default App
