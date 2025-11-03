import { useState } from "react";
import { Home, User, Briefcase, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-yellow-400">Mayank.dev</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
                        <li>
                            <Link to="/" className="flex items-center gap-2 hover:text-yellow-400 transition">
                                <Home size={18} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutme" className="flex items-center gap-2 hover:text-yellow-400 transition">
                                <User size={18} /> About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="flex items-center gap-2 hover:text-yellow-400 transition">
                                <Briefcase size={18} /> Projects
                            </Link>
                        </li>
                    </ul>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-yellow-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black text-gray-300 px-6 py-6 space-y-6">
                        <Link
                            to="/"
                            className="flex items-center gap-2 hover:text-yellow-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <Home size={18} /> Home
                        </Link>
                        <Link
                            to="/aboutme"
                            className="flex items-center gap-2 hover:text-yellow-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <User size={18} /> About Me
                        </Link>
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 hover:text-yellow-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <Briefcase size={18} /> Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone size={18} /> Contact Me
                        </Link>
                    </div>
                )}
            </nav>
            <div className="pt-15">   {/* To Give space at Navbar */}
            </div>
        </>
    );
}
