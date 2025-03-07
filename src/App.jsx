import "./App.css"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

function App() {
    return (
        <div className="space-y-20 text-neutral-50">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
