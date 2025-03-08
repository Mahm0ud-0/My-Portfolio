const Footer = () => {
    return (
        <footer className="text-lg md:text-2xl flex flex-col items-center pt-8 justify-between w-4/5 mx-auto border-t-[0.5px] border-neutral-500">
            <nav className="flex gap-x-10 gap-y-4 mb-4 flex-wrap justify-center text-sm md:text-lg">
                <a href="#about" className="hover:text-neutral-500">
                    About
                </a>
                <a href="#skills" className="hover:text-neutral-500">
                    Skills
                </a>
                <a href="#projects" className="hover:text-neutral-500">
                    Projects
                </a>
                <a href="#contact" className="hover:text-neutral-500">
                    Contact
                </a>
            </nav>
            <p className="font-light md:text-lg my-4 text-center text-xs">
                Copyright © <b className="font-extrabold">2025</b> All Rights
                Reserved | Developed By{" "}
                <b className="font-extrabold">Mahmoud Al-Awaj</b>
            </p>
        </footer>
    )
}

export default Footer
