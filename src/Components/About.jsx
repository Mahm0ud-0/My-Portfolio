import { useState } from "react"
import me from "../assets/me.webp"
const About = () => {
    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <div id="about"></div>
            <section className="w-4/5 3xl:w-1/2 mx-auto">
                <h1 className="text-5xl text-center my-12">About Me</h1>
                <div className="flex flex-col lg:flex-row space-y-4 justify-between items-center gap-x-10">
                    <div className="aspect-square flex-1">
                        <img
                            src={me}
                            className="aspect-square object-cover rounded-2xl flex-1"
                            alt=""
                        />
                    </div>

                    <article className="text-justify flex-1 text-xl flex flex-col justify-between gap-y-20">
                        <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="backdrop-blur-3xl bg-gray-200/5 border border-white p-4 text-center text-2xl font-bold rounded-2xl flex-1">
                                <h3>Education</h3>
                                <p className="text-neutral-300 font-light text-lg">
                                    4'th year
                                </p>
                                <p className="text-neutral-300 font-light text-lg">
                                    Software Engineering at Homs University
                                </p>
                            </div>
                            <div className="backdrop-blur-3xl bg-gray-200/5 border border-white p-4 text-center text-2xl font-bold rounded-2xl flex-1">
                                <h3>Experience</h3>
                                <p className="text-neutral-300 font-light text-lg">
                                    +1 year
                                </p>
                                <p className="text-neutral-300 font-light text-lg">
                                    Web Development
                                </p>
                            </div>
                        </div>
                        <div>
                            <p
                                className={`text-lg ${
                                    readMore ? "h-[700px]" : "h-72"
                                } overflow-hidden sm:h-fit`}
                            >
                                Final year software engineering student,
                                <br />
                                with 2+ years of experience in Full-Stack Web
                                Development and Backend Engineering. I'm focused
                                on building scalable backends and applications,
                                using Clean Architecture principles to build
                                reliable systems from the Database up to the
                                User Interface.
                                <br />
                                <br />
                                Actively involved in organizing tech events and
                                courses at my college, helping fellow students
                                to dive into software engineering and IT.
                                <br />
                                Always eager to learn, take on new challenges
                                and solve new problems, and collaborate with
                                teams to build useful solutions.
                                <br />
                                <br />
                                Core Tech Stack:
                                <br />
                                - Frontend: React.js, Vue.js, JavaScript,
                                TailwindCSS
                                <br />
                                - Backend: PHP, Laravel, Node.js, NestJS
                                <br />
                                - Databases: PostgreSQL, MySQL
                                <br />
                                - Tools: Git,GitHub, Postman, Figma
                                <br />
                            </p>
                            <p
                                className="text-sm text-neutral-300 mt-6 sm:hidden "
                                onClick={() => setReadMore((prev) => !prev)}
                            >
                                {readMore ? "read less..." : "raed more..."}
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default About
