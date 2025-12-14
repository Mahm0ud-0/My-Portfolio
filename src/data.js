import littleLemon from "./assets/projects/little_lemon.png"
import moiveo from "./assets/projects/moiveo.png"
import react_ecommerce from "./assets/projects/react_ecommerce.png"
import multi_step_form from "./assets/projects/multi_step_form.png"
import pixel_position from "./assets/projects/pixel_position.png"
import countries_info from "./assets/projects/countries_info.png"
import todo_list from "./assets/projects/todo_list.png"
import php_todo from "./assets/projects/php_todo.png"
import quiz_app from "./assets/projects/quiz_app.png"
import calculator from "./assets/projects/calculator.png"
import rsm_blog from "./assets/projects/rsm_blog.png"
import tailwind_ecommerce from "./assets/projects/tailwind_ecommerce.png"
import hoobank from "./assets/projects/hoobank.png"
import travel_journal from "./assets/projects/travel_journal.png"
import advice_app from "./assets/projects/advice_app.png"
import editor from "./assets/projects/jsimg-editor.png"
import vblog from "./assets/projects/vue-blog.png"

export const projects = [
    {
        title: "Moiveo",
        img: moiveo,
        desc: "A movies and series app similar to IMDB, developed using ReactJS and the TMDB API. Users can search for their favorite movies or series, access detailed information and statistics, and watch trailers from YouTube.",
        technologies: [
            "React",
            "TMDB API",
            "React Router",
            "Context API",
            "TailwindCSS",
        ],
        demo: "https://moiveo.netlify.app",
        github: "https://github.com/Mahm0ud-0/moiveo",
    },
    {
        title: "Little Lemon Resturant Web App",
        img: littleLemon,
        desc: "A restaurant website built as a capstone project for the Meta Frontend Developer program. Features include online table reservations, menu browsing and online ordering.",
        technologies: [
            "React",
            "React Router",
            "tailwindCSS",
            "Formik",
            "Yup Validation",
        ],
        demo: "https://littlellemon.netlify.app",
        github: "https://github.com/Mahm0ud-0/Little-Lemon-Restaurant-Web-App",
    },
    {
        title: "e-Commerce Website",
        img: react_ecommerce,
        desc: "A full-stack responsive e-commerce platform for fashion and accessories. Includes user authentication, product catalog, shopping cart, checkout process, and admin panel for inventory management.",
        technologies: ["React", "Laravel", "MySQL", "REST API"],
        github: "https://github.com/Mahm0ud-0/e-commerce-website",
        demo: null,
    },
    {
        title: "Multi-Step Form",
        img: multi_step_form,
        desc: "An interactive multi-step form with form validation and progress tracking. Users can navigate between steps while their data is preserved, with a summary page at the end to review all entered information.",
        technologies: [
            "React",
            "tailwindCSS",
            "Formik",
            "Yup  Validation",
            "Local Storage",
        ],
        github: "https://github.com/Mahm0ud-0/multi-step-form",
        demo: "https://multistp-form.netlify.app/",
    },
    {
        title: "Pixel Position",
        img: pixel_position,
        desc: "Job posting website with Authentication and Roles (empleyer & user) where an employer can post jobs with details and users can browse them.",
        technologies: ["laravel", "blade", "tailwind", "mySQL"],
        github: "https://github.com/Mahm0ud-0/pixel-position",
        demo: null,
    },
    {
        title: "Countries Info",
        img: countries_info,
        desc: "A country information application that displays details about countries worldwide.",
        technologies: ["React", "CSS", "REST Countries API"],
        github: "https://github.com/Mahm0ud-0/Countries-Info",
        demo: "https://countriesiinfo.netlify.app/",
    },
    {
        title: "To-Do App",
        img: php_todo,
        desc: "A To-Do application built with PHP and MySQL.",
        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "tailwindCSS",
            "CRUD Operations",
        ],
        github: "https://github.com/Mahm0ud-0/PHP-ToDo-App",
        demo: null,
    },
    {
        title: "Vue Blog",
        img: vblog,
        desc: "Blog website built with Vue.js.",
        technologies: ["Vue.js", "Vue Router", "pinia", "tailwindCSS"],
        github: "https://github.com/Mahm0ud-0/vue-blog",
        demo: "https://vublog.netlify.app/",
    },
    {
        title: "To-Do App",
        img: todo_list,
        desc: "Vanilla JavaScript To-Do application with local storage persistence. Features task creation, completion tracking, and a clean with minimalist user interface.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Local Storage",
            "DOM Manipulation",
        ],
        github: null,
        demo: null,
    },
    {
        title: "Calculator",
        img: calculator,
        desc: "Fully functional simple calculator application built with vanilla JavaScript. Supports basic arithmetic operations, decimal calculations, and includes a clear visual display with error handling.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "DOM Manipulation",
            "Event Handling",
            "Math Operations",
        ],
        github: "https://github.com/Mahm0ud-0/JS-Calculator",
        demo: "https://js-super-calculator.netlify.app",
    },
    {
        title: "JS Image Editor",
        img: editor,
        desc: "Browser-based image editing tool that allows users to apply filters, adjust brightness/contrast.",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/Mahm0ud-0/JS-Image-Editor",
        demo: "https://jsimg-editor.netlify.app",
    },
    {
        title: "Quiz App",
        img: quiz_app,
        desc: "An interactive quiz application with multiple categories, and scoring system.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Local Storage",
            "API Integration",
        ],
        github: null,
        demo: null,
    },
    {
        title: "HooBank Website",
        img: hoobank,
        desc: "Banking landing page with Modern UI components, gradient backgrounds, and responsive design.",
        technologies: ["React", "TailwindCSS", "Responsive Design"],
        github: "https://github.com/Mahm0ud-0/Modern-UI-Bank-Website",
        demo: null,
    },
]
