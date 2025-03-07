const About = () => {
    return (
        <section className="w-4/5 mx-auto">
            <h1 className="text-5xl text-center my-12">About Me</h1>
            <div className="flex justify-between items-center gap-x-10">
                <div className="aspect-square flex-1">
                    <img
                        src="/src/assets/me.jpg"
                        className="aspect-square rounded-2xl flex-1"
                        alt=""
                    />
                </div>

                <article className="text-justify flex-1 text-xl flex flex-col gap-y-20">
                    <div className="flex justify-between gap-4">
                        <div className="border border-white p-4 text-center text-2xl font-bold rounded-2xl flex-1">
                            <h3>Education</h3>
                            <p className="text-neutral-300 font-light text-lg">
                                3'rd year
                            </p>
                            <p className="text-neutral-300 font-light text-lg">
                                Software Engineering at Homs University
                            </p>
                        </div>
                        <div className="border border-white p-4 text-center text-2xl font-bold rounded-2xl flex-1">
                            <h3>Experience</h3>
                            <p className="text-neutral-300 font-light text-lg">
                                1+ year
                            </p>
                            <p className="text-neutral-300 font-light text-lg">
                                Web Development
                            </p>
                        </div>
                    </div>
                    <p className="">
                        Aspiring full-stack web developer and 3rd-year software
                        engineering student with hands-on experience in building
                        dynamic web applications. Skilled in both frontend and
                        backend development, with a passion for coding, problem
                        solving, self-improvement, and continuous learning.
                        <br />
                        <br />
                        I began my programming journey with C++ and swiftly
                        transitioned to web development, mastering HTML, CSS,
                        and JavaScript. Enhancing my front-end skills, I became
                        proficient in ReactJS, developing numerous
                        industry-standard projects. I then ventured into
                        back-end development, mastering PHP and frameworks like
                        Laravel, to complete my full-stack web development
                        expertise…
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
