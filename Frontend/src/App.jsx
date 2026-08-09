import { Topbar } from "./Components/Topbar/Topbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./Components/About/About"
import { Skills } from "./Components/Skills/Skills"
import { Projects } from "./Components/Projects/Projects"
import './App.css'

function App() {
  return (
    <main className="page">
      <Topbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
