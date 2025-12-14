import Card from "./Card"
import { projects } from "../data"

const Projects = () => {
    return (
        <>
            <div id="projects"></div>
            <section className="w-4/5 3xl:w-1/2 mx-auto">
                <h1 className="text-5xl text-center my-12">My Work</h1>

                {/* cards container */}
                <div
                    // className="flex gap-x-4 gap-y-12 overflow-auto py-2 snap-x snap-mandatory"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12 py-2"
                    id="cards-container"
                >
                    {projects.map((item) => (
                        <Card key={item.title} {...item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects
