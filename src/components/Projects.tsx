'use client';

import {resume} from '@/data/resume';
import {motion} from 'framer-motion';

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
                        <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.02}}
                            whileTap={{scale: 0.98}}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 rounded-xl p-6 text-left transition-shadow duration-300 shadow hover:shadow-blue-500/30"
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                            <span className="inline-block mt-4 text-sm text-blue-500 hover:underline">
                View Project →
              </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
