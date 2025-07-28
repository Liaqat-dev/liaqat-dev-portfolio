'use client';

import {resume} from '@/data/resume';
import {motion} from 'framer-motion';
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-black text-white">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="max-w-5xl mx-auto px-4 text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
                    Featured Projects
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {resume.projects.map((project, i) => (
                        <ProjectCard key={project.link} Project={project}/>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
