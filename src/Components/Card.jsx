import { useState } from "react"

const Card = ({ title, img, desc, technologies, demo, github }) => {
    const [flipped, setFlipped] = useState(false)

    const toggleFlipped = () => setFlipped((prev) => !prev)

    return (
        // <div className="rounded-2xl aspect-[4/5] perspective-midrange flex flex-col space-y-4 overflow-hidden relative group min-w-full lg:min-w-[600px] snap-start">
        //     <h2 className="text-center text-lg overflow-ellipsis text-nowrap">
        //         {title}
        //     </h2>
        //     <div className="relative">
        //         <div className="hidden lg:flex justify-center items-center gap-x-10 absolute top-0 left-0 right-0 h-full bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
        //             {github && (
        //                 <a
        //                     target="_blank"
        //                     href={github}
        //                     className="p-3 border border-white rounded-xl hover:bg-neutral-800"
        //                 >
        //                     github repo
        //                 </a>
        //             )}
        //             {demo && (
        //                 <a
        //                     target="_blank"
        //                     href={demo}
        //                     className="p-3 border !text-black bg-white rounded-xl border-none hover:bg-neutral-500"
        //                 >
        //                     live demo
        //                 </a>
        //             )}
        //         </div>
        //         <img src={img} alt={title} className="rounded-2xl" />
        //         <div className="lg:hidden flex justify-center gap-x-4 py-4">
        //             {github && (
        //                 <a
        //                     target="_blank"
        //                     href={github}
        //                     className="p-3 border border-white rounded-xl flex-1 text-center hover:text-neutral-800"
        //                 >
        //                     github repo
        //                 </a>
        //             )}
        //             {demo && (
        //                 <a
        //                     target="_blank"
        //                     href={demo}
        //                     className="p-3 border !text-black bg-white rounded-xl flex-1 text-center hover:text-neutral-500"
        //                 >
        //                     live demo
        //                 </a>
        //             )}
        //         </div>
        //         {/* <div className="px-4 text-justify">
        //         <p>{desc}</p>
        //     </div> */}
        //     </div>
        // </div>

        // container
        <div
            onClick={toggleFlipped}
            className="rounded-2xl perspective-midrange relative cursor-pointer min-w-fit min-h-[400px] group  transition-transform duration-300 ease-in-out"
        >
            {/* card flip */}
            <div
                id="card-flip"
                className={`absolute w-full h-full transform-3d transition-transform ease-in-out duration-300 rounded-2xl z-[1] ${
                    flipped && "rotate-y-180"
                }`}
            >
                {/* front */}
                <div
                    className={`absolute flex justify-end items-end  w-full h-full backface-hidden rounded-lg bg-cover bg-center shadow-2xl shadow-white/20  border border-gray-400 `}
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <span
                        href={github}
                        className="animate-pulse px-6 py-2 m-4 border border-gray-300 rounded-full text-center bg-gray-800 transition-colors duration-300 flex items-center gap-1"
                    >
                        Flip
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="!w-4 !h-4 "
                        >
                            <path d="M8 3 4 7l4 4" />
                            <path d="M4 7h16" />
                            <path d="m16 21 4-4-4-4" />
                            <path d="M20 17H4" />
                        </svg>
                    </span>
                </div>

                {/* back */}
                <div
                    className="px-4 absolute w-full h-full backface-hidden rounded-lg bg-neutral-700 rotate-y-180 bg-cover bg-center flex flex-col justify-between shadow-2xl shadow-white/20 border border-gray-400 "
                    style={{ backgroundImage: `url(${img})` }}
                >
                    {/* blur effect */}
                    <div className="absolute w-full h-full left-0 z-[-1] bg-neutral-900/70 backdrop-blur-[4px] rounded-lg" />

                    <div className="flex flex-col justify-evenly gap-2">
                        <h2 className="text-center pt-4 md:text-xl overflow-ellipsis text-nowrap z-10">
                            {title}
                        </h2>

                        <ul className="flex gap-1 flex-wrap mt-4">
                            {technologies &&
                                technologies.map((tech) => (
                                    <span
                                        className="p-2 text-xs rounded-full bg-slate-800/60 text-white font-semibold capitalize"
                                        key={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                        </ul>

                        <p className="mt-4 text-ellipsis">{desc}</p>
                    </div>
                    {/* buttons (demo & repo) */}
                    <div className="flex gap-2 justify-end mb-4 text-xs">
                        {github && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={github}
                                className=" p-3 border border-gray-300 rounded-xl text-center hover:bg-gray-800 transition-colors duration-300 flex items-center gap-1"
                            >
                                GitHub
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="!w-4 !h-4"
                                >
                                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                    <path d="m21 3-9 9" />
                                    <path d="M15 3h6v6" />
                                </svg>
                            </a>
                        )}
                        {demo && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={demo}
                                className=" p-3 bg-white text-black rounded-xl text-center hover:bg-gray-200 transition-colors duration-300 font-medium flex items-center gap-1"
                            >
                                Live Demo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="!w-4 !h-4"
                                >
                                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                    <path d="m21 3-9 9" />
                                    <path d="M15 3h6v6" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
