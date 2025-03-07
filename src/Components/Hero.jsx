import Navbar from "./Navbar"
import cv from "../assets/mahmoud_al_awaj.pdf"

const Hero = () => {
    return (
        <section className="bg-[url(/src/assets/hero.png)] bg-cover bg-no-repeat md:h-screen 3xl:h-[50vh] text-center">
            <div className="bg-black/70 h-full">
                <div className="">
                    <Navbar />
                </div>
                <div className="flex flex-col items-center gap-y-10 mt-12 lg:mt-28">
                    <h1 className="text-4xl md:text-6xl w-full flex flex-col justify-center items-center gap-y-4">
                        <span className="">
                            I'm <b>Mahmoud Al-Awaj</b>
                        </span>
                        <p className="text-xl text-neutral-300 w-3/4 md:w-auto">
                            Full-Stack{" "}
                            <b className="text-neutral-50">WEB DEV</b>. &{" "}
                            <b className="text-neutral-50">
                                Software Engineering
                            </b>{" "}
                            Student
                        </p>
                    </h1>
                    <div className="flex gap-x-10">
                        <a
                            target="_blank"
                            href={cv}
                            className="p-3 border border-white rounded-xl hover:bg-neutral-800"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="p-3 border !text-black bg-white rounded-xl hover:bg-neutral-500"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="flex gap-x-6 pb-8">
                        <a
                            href="https://linkedin.com/in/mahmoud-al-awaj/"
                            target="_blank"
                        >
                            <svg
                                className="w-8 h-8 lg:w-12 lg:h-12 fill-white hover:fill-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Mahm0ud-0" target="_blank">
                            <svg
                                className="w-8 h-8 lg:w-12 lg:h-12 fill-white hover:fill-neutral-500"
                                xmlns="http://www.w3.org/2000/svg"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                imageRendering="optimizeQuality"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                viewBox="0 0 640 640"
                            >
                                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
