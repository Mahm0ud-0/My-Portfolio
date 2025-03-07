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
        <section className="w-4/5 mx-auto" id="skills">
            <h1 className="text-5xl text-center my-12">Skills</h1>
            {/* icons */}
            <div className="flex justify-between flex-wrap">
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
    )
}

export default Skills