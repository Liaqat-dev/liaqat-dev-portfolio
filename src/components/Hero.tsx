'use client';

import {motion} from 'framer-motion';
import {LuDownload} from "react-icons/lu";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 text-white"
        >
            <div className="text-center max-w-2xl">
                <motion.h1
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Liaqat Ali
                </motion.h1>

                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-xl sm:text-2xl font-medium mt-4 text-gray-300"
                >
                    Full-Stack Developer | Tech Enthusiast
                </motion.h2>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed "
                >
                    Passionate about building fast, clean, and scalable web applications.
                    I specialize in Node.js, React, and MongoDB, blending functionality with
                    elegant UI. Let&apos;s build something remarkable.
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.6}}
                    className="mt-8 flex justify-center gap-4 flex-wrap"
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="flex flex-row gap-2  items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition hover:cursor-not-allowed"
                    >
                        <LuDownload/>
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-600/10 transition"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
