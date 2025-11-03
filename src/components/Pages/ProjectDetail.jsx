import { useParams, Link } from "react-router-dom";
import { projects } from "../../assets/Project/Project";
import {
  Code,
  ListChecks,
  Rocket,
  Wrench,
  ArrowLeft,
  ExternalLink,
  Github,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-400">
        <h2 className="text-2xl font-bold mb-4">❌ Project Not Found</h2>
        <Link
          to="/projects"
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          {project.title}
        </h1>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Screenshots */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {project.image.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover"
            />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 flex items-center gap-2 mb-4">
            <Code size={22} /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-300 flex items-center gap-2 mb-4">
            <ListChecks size={22} /> Key Features
          </h2>
          <ul className="space-y-3 text-gray-300">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Rocket className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
