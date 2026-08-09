import { Topbar } from "./Components/Topbar/Topbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./Components/About/About"
import { Skills } from "./Components/Skills/Skills"
import './App.css'

function App() {
  return (
    <main className="page">
      <Topbar />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}

export default App
