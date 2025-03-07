const Navbar = () => {
    return (
        <header className="md:text-2xl flex flex-col lg:flex-row items-center space-y-4 py-8 justify-between w-4/5 mx-auto">
            <p className="font-bold text-3xl">Mahmoud Al-Awaj</p>
            <nav className="flex gap-x-10">
                <a href="#about" className="hover:text-neutral-500">About</a>
                <a href="#skills" className="hover:text-neutral-500">Skills</a>
                <a href="#projects" className="hover:text-neutral-500">Projects</a>
                <a href="#contact" className="hover:text-neutral-500">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
