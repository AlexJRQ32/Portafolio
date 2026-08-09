import { Topbar } from "./Components/Topbar/Topbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./Components/About/About"
import './App.css'

function App() {
  return (
    <main className="page">
      <Topbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
