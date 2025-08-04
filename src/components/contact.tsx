'use client';

import {
    FaWhatsapp,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaRegClock,
} from 'react-icons/fa';
import {motion} from 'framer-motion';
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen  py-24 bg-black text-white flex items-center"
        >
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="max-w-3xl mx-auto px-4 text-center"
            >
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
                    Get In Touch
                </h2>

                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                    I’m open to freelance work, full-time opportunities, and collaboration on exciting side projects.
                    Let’s create something amazing together.
                </p>

                <div className="flex justify-center gap-6 text-2xl mb-6">
                    <a
                        href="https://wa.me/+923044016143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-125 transition hover:opacity-80"
                    >
                        <FaWhatsapp className="text-green-500"/>
                    </a>
                    <a
                        href="https://instagram.com/liaqat_ali6143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-125 transition hover:opacity-80"
                    >
                        <FaInstagram className="text-pink-500"/>
                    </a>
                    <a
                        href="https://github.com/liaqat-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-125 transition hover:opacity-80"
                    >
                        <FaGithub className="text-white"/>
                    </a>
                    <a
                        href="https://linkedin.com/in/dev-liaqat-ali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-125 transition hover:opacity-80"
                    >
                        <FaLinkedin className="text-blue-500"/>
                    </a>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.6}}
                    className="mt-8 flex justify-center gap-4 flex-wrap"
                >
                        <a
                            href="mailto:dev.liaqat13@gmail.com"
                            className="flex flex-row gap-2 items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition mx-auto"
                        >
                            <MdEmail size={25} />
                            Send Message
                        </a>
                </motion.div>
                <div className="flex max-sm:flex-col items-center justify-center  gap-6 text-sm mx-auto text-gray-400 mt-4">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-400"/>
                        Based in Pakistan
                      </span>
                    <span className="flex items-center gap-2">
                        <FaRegClock className="text-yellow-400"/>
                        Available: Full-time / Freelance
                      </span>
                </div>

                <blockquote className="mt-10 italic text-gray-500 text-sm sm:text-base">
                    “The best way to predict the future is to build it.”
                </blockquote>
            </motion.div>
        </section>
    );
}
