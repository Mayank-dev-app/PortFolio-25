import { projects } from "../../assets/Project/Project";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsBig = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          All Projects
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          A collection of my <span className="text-yellow-300 font-semibold">full-stack projects</span>,
          built with modern technologies and best practices.
          Each project reflects my learning, creativity, and problem-solving skills.
        </p>
        
        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-yellow-400 bg-black text-yellow-400 hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 p-6 flex flex-col hover:scale-105"
            >
              {/* Image */}
              <img
                src={project.image[0]}
                alt={project.title}
                className="rounded-lg mb-4 object-cover w-full h-40"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Short Description */}
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-xs text-gray-500 mb-4">
                <span className="font-bold text-white">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {/* Detail Page */}
                <Link
                  to={`/projects/${project.id}`}
                  className="flex-1 text-center border border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black transition-all duration-500 py-2 rounded-lg text-md"
                >
                  Details
                </Link>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg transition"
                >
                  <Github size={18} />
                </a>

                {/* Live Demo */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBig;
