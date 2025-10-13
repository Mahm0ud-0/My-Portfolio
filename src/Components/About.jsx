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
                                    readMore ? "h-[675px]" : "h-72"
                                } overflow-hidden sm:h-fit`}
                            >
                                Full-stack web developer and 4th-year software
                                engineering student with hands-on experience in
                                building dynamic web applications. Skilled in
                                both frontend and backend development, with a
                                passion for coding, problem solving,
                                self-improvement, and continuous learning.
                                <br />
                                <br />I began my programming journey with C++
                                and swiftly transitioned to web development,
                                mastering HTML, CSS, and JavaScript. Enhancing
                                my front-end skills, I mastered ReactJS,
                                developing numerous industry-standard projects.
                                I then ventured into back-end development,
                                mastering PHP and Laravel, to complete my
                                full-stack web development expertise… <br /> I recently
                                learned VueJS improving my front-end skill-set
                                and diving deeper in the web development world…
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
