import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Mayank.dev
          </h2>
          <p className="text-sm leading-relaxed">
            Crafting modern, responsive, and user-friendly web applications
            with passion and precision. 
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="hover:text-yellow-300 transition">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-300 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Connect With Me
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="mailto:mayanksharma@example.com"
              className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Mayank-dev-app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Mayank Sharma. All Rights Reserved.
      </div>
    </footer>
  );
}
