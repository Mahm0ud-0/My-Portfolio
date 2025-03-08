import "./App.css"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"

function App() {
    return (
        <main className="space-y-32 text-neutral-50 snap-mandatory snap-y">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}

export default App
