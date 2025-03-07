const Navbar = () => {
    return (
        <header className="text-2xl flex py-8 justify-between w-4/5 mx-auto">
            <p className="font-bold text-3xl">Mahmoud Al-Awaj</p>
            <nav className="flex gap-x-10 fontlg">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
