'use client';

import {resume} from '@/data/resume';
import {motion} from 'framer-motion';

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-black text-white">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="max-w-4xl mx-auto px-4 text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {resume.skills.map((skill, i) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={i}
                                whileHover={{scale: 1.05}}
                                className="flex gap-2 align-middle items-center justify-center bg-gradient-to-tr from-gray-800 to-gray-900 border border-blue-600/20 rounded-xl px-4 py-6 text-sm sm:text-base font-medium text-blue-200 hover:border-blue-500 transition"
                            >
                                <Icon size={28}  style={{ color: skill.color }} />
                                {skill.name}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
