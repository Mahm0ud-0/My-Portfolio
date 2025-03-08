import Apache from "./icons/Apache"
import Css from "./icons/Css"
import Figma from "./icons/Figma"
import Git from "./icons/Git"
import Html from "./icons/Html"
import Js from "./icons/Js"
import Laravel from "./icons/Laravel"
import MySql from "./icons/MySql"
import NodeJS from "./icons/NodeJS"
import Php from "./icons/Php"
import Python from "./icons/Python"
import ReactIcon from "./icons/ReactIcon"
import Tailwind from "./icons/Tailwind"
import Linux from "./icons/Linux"

const Skills = () => {
    return (
        <>
            <div id="skills"></div>
            <section className="w-4/5 3xl:w-1/2 mx-auto">
                <h1 className="text-5xl text-center my-12">Skills</h1>
                {/* icons */}
                <div className="justify-evenly flex flex-wrap space-y-4 gap-x-4">
                    <Js />
                    <Php />
                    <Python />
                    <Html />
                    <Css />
                    <Tailwind />
                    <ReactIcon />
                    <NodeJS />
                    <Laravel />
                    <MySql />
                    <Apache />
                    <Git />
                    <Figma />
                    <Linux />
                </div>
            </section>
        </>
    )
}

export default Skills
