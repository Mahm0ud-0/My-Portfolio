const Card = ({ title, img, demo, github }) => {
    return (
        <div className="rounded-2xl flex flex-col space-y-4 overflow-hidden relative group min-w-[300px] lg:min-w-[600px]">
            <h2 className="text-center text-lg overflow-ellipsis text-nowrap">
                {title}
            </h2>
            <div className="relative">
                <div className="hidden lg:flex justify-center items-center gap-x-10 absolute top-0 left-0 right-0 h-full bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                    {github && (
                        <a
                            target="_blank"
                            href={github}
                            className="p-3 border border-white rounded-xl hover:bg-neutral-800"
                        >
                            github repo
                        </a>
                    )}
                    {demo && (
                        <a
                            target="_blank"
                            href={demo}
                            className="p-3 border !text-black bg-white rounded-xl border-none hover:bg-neutral-500"
                        >
                            live demo
                        </a>
                    )}
                </div>
                <img src={img} alt={title} className="rounded-2xl" />
                <div className="lg:hidden flex justify-center gap-x-4 py-4">
                    {github && (
                        <a
                            target="_blank"
                            href={github}
                            className="p-3 border border-white rounded-xl flex-1 text-center hover:text-neutral-800"
                        >
                            github repo
                        </a>
                    )}
                    {demo && (
                        <a
                            target="_blank"
                            href={demo}
                            className="p-3 border !text-black bg-white rounded-xl flex-1 text-center hover:text-neutral-500"
                        >
                            live demo
                        </a>
                    )}
                </div>
                {/* <div className="px-4 text-justify">
                <p>{desc}</p>
            </div> */}
            </div>
        </div>
    )
}

export default Card
