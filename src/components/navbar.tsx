'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('#home');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120;
            for (let item of navItems) {
                const section = document.querySelector(item.href);
                if (
                    section &&
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    setActive(item.href);
                }
            }
        };

        const blockScroll = () => {
            document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
        };

        window.addEventListener('scroll', handleScroll);
        blockScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, [isMobileOpen]);

    return (
        <nav className="bg-black bg-opacity-80 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                    Liaqat Ali
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`transition px-2 py-1 rounded ${
                                    active === item.href
                                        ? 'text-blue-400 border-b-2 border-blue-400'
                                        : 'text-gray-300 hover:text-blue-400'
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg absolute top-16 left-0 w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center space-y-6 text-lg font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={`transition ${
                                active === item.href
                                    ? 'text-blue-400 border-b border-blue-400'
                                    : 'text-gray-300 hover:text-blue-400'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
