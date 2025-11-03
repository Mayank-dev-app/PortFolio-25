import { useState } from "react";
import { projects } from "../../assets/Project/Project";
import { Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    // Pehle 2 projects hi dikhaye, baaki View More pe
    const visibleProjects = showAll ? projects : projects.slice(0, 2);

    return (
        <section
            id="projects"
            className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6"
        >
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-4">
                Projects
            </h2>

            {/* Intro Paragraph */}
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Here are some of the <span className="text-yellow-300 font-semibold">projects</span>  I’ve worked on — combining creativity with technical skills.  
                Each project reflects my journey as a developer, from designing 
                user-friendly interfaces to building robust backend systems.  
                These are more than just applications; they are solutions crafted 
                to solve real-world problems.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border-2 border-yellow-400 text-yellow-400 hover:shadow-xl hover:shadow-yellow-400/60 transition duration-300 ease-in-out bg-black flex flex-col p-6 hover:scale-105 max-w-sm mx-auto cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src={project.image[0]}
                            alt={project.title}
                            className="rounded-xl mb-4 object-cover w-full h-40"
                        />

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                        {/* Description */}
                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                        {/* Tech Stack */}
                        <p className="text-xs text-gray-500 mb-4">
                            <span className="font-bold text-white">Tech:</span>{" "}
                            {project.tech.join(", ")}
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-auto">
                            <button
                                onClick={() => navigate(`/projects/${project.id}`)}
                                // rel="noopener noreferrer"
                                className="flex-1 text-center border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black transition-all duration-500 py-2 rounded-lg text-md"
                            >
                                Watch It
                            </button>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black transition-all rounded-lg"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/projects"
                    className="px-8 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full shadow-lg transition-all hover:cursor-pointer hover:scale-110 hover:shadow-yellow-400/60"
                >
                    View More
                </Link>
            </div>
        </section>
    );
}
