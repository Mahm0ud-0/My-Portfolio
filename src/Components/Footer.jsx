const Footer = () => {
    return (
        <footer className="text-2xl flex flex-col items-center pt-8 justify-between w-4/5 mx-auto border-t-[0.5px] border-neutral-500">
            <nav className="flex gap-x-10 mb-4">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <p className="font-light text-lg my-4">
              Copyright © <b className="font-extrabold">2025</b> All Rights Reserved | Developed By <b className="font-extrabold">Mahmoud Al-Awaj</b>
            </p>
        </footer>
    )
}

export default Footer
