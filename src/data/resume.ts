import {
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiPostman,
    SiFigma,
} from "react-icons/si";

export const resume = {
    skills: [
        {name: "JavaScript", icon: SiJavascript, color: "#f7df1e"},
        {name: "TypeScript", icon: SiTypescript, color: "#3178c6"},
        {name: "Node.js", icon: SiNodedotjs, color: "#68a063"},
        {name: "Express.js", icon: SiExpress, color: "#ffffff"},
        {name: "React", icon: SiReact, color: "#61dafb"},
        {name: "Next.js", icon: SiNextdotjs, color: "#ffffff"},
        {name: "MongoDB", icon: SiMongodb, color: "#4db33d"},
        {name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},
        {name: "Git", icon: SiGit, color: "#f1502f"},
        {name: "Postman", icon: SiPostman, color: "#ff6c37"},
        {name: "Figma", icon: SiFigma, color: "#a259ff"},
    ],

    projects: [
        {
            name: "Blog App",
            description:
                "A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Features include JWT-based authentication, rich text post creation, image uploads via ImgBB, tag-based filtering, like system, and user dashboards. Admins can manage users and content. Deployed on Vercel and MongoDB Atlas.",
            link: "https://github.com/Liaqat-dev/RISEBLOG",
            skills: [
                {name: "MongoDB", icon: SiMongodb, color: "#4db33d"},
                {name: "Express.js", icon: SiExpress, color: "#ffffff"},
                {name: "React", icon: SiReact, color: "#61dafb"},
                {name: "Node.js", icon: SiNodedotjs, color: "#68a063"},
                {name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},
            ]
        },
        {
            name: "Image Converter",
            description:
                "A command-line utility built with Node.js and Sharp that converts JPEG, PNG, and other image formats to WebP. Supports batch conversion, size optimization, and drag-and-drop folder input. Designed for developers and designers aiming for modern web image standards. Configurable via JSON or CLI flags.",
            link: "https://github.com/Liaqat-dev/ImgToWebp",
            skills: [
                {name: "Express.js", icon: SiExpress, color: "#ffffff"},
                {name: "Node.js", icon: SiNodedotjs, color: "#68a063"},
            ]
        },
        {
            name: "Portfolio",
            description:
                "A single-page resume site with a hidden `/admin` panel to dynamically add and edit skills and projects. Built with Next.js App Router, MongoDB, Tailwind, and React Hook Form. Admin dashboard is protected and uses client-side validation for clean UX. Deployed on Vercel with serverless functions.",
            link: "https://github.com/yourusername/resume-cms",
            skills: [
                {name: "Next.js", icon: SiNextdotjs, color: "#ffffff"},
                {name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8"},

            ]
        },
    ],
}
