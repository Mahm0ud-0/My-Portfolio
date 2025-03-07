import Card from "./Card"
import { projects } from "../data"

const Projects = () => {
    return (
        <section className="w-4/5 mx-auto" id="projects">
            <h1 className="text-5xl text-center my-12">My Work</h1>

            {/* cards container */}
            <div className="flex gap-x-4 gap-y-12 overflow-auto" id="cards-container">
                {projects.map((item) => (
                    <Card key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Projects