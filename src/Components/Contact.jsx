const Contact = () => {
    return (
        <>
            <div id="contact"></div>
            <section className="w-4/5 mx-auto">
                <h1 className="text-5xl text-center my-12">Contact Me</h1>
                <div className="w-1/3 mx-auto flex justify-center gap-x-10">
                    <a
                        target="_blank"
                        href="https://linkedin.com/in/mahmoud-al-awaj/"
                        className="flex items-center gap-x-4 min-w-fit"
                    >
                        <svg
                            className="w-8 h-8 fill-white hover:fill-neutral-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2 -2 28 28"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                    <a
                        target="_blank"
                        href="mailto:mahmoud.al.awaj.1@gmail.com"
                        className="flex items-center gap-x-4"
                    >
                        <svg
                            className="w-8 h-8 lg:w-12 lg:h-12 fill-white hover:fill-neutral-500 group"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="_x32_"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    className="w-8 h-8 lg:w-12 lg:h-12 fill-white group-hover:fill-neutral-500"
                                    fill="white"
                                    d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083   h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92   c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87   C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024   c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674   l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469   c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599   C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92   c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92   C462.107,387.195,462.94,397.75,456.948,404.771z"
                                />
                            </g>
                        </svg>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contact
