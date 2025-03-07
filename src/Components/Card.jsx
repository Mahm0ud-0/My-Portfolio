const Card = ({ title, img, demo, github }) => {
    return (
        <div className="rounded-2xl flex flex-col space-y-4 overflow-hidden relative group min-w-[600px]">
            <h2 className="text-center text-2xl">{title}</h2>
            <div className="relative">
                <div className="flex justify-center items-center gap-x-10 absolute top-0 left-0 right-0 h-full bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                    {github && (
                        <a
                            target="_blank"
                            href={github}
                            className="p-3 border border-white rounded-xl"
                        >
                            github repo
                        </a>
                    )}
                    {demo && (
                        <a
                            target="_blank"
                            href={demo}
                            className="p-3 border !text-black bg-white rounded-xl"
                        >
                            live demo
                        </a>
                    )}
                </div>
                <img
                    src={`src/assets/projects/${img}`}
                    alt={title}
                    className="rounded-2xl"
                />
                {/* <div className="px-4 text-justify">
                <p>{desc}</p>
            </div> */}
            </div>
        </div>
    )
}

export default Card
