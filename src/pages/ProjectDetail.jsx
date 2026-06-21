import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h1 className="text-3xl font-bold mb-6">
            {project.title}
          </h1>

          <img
            src={`${project.image}?auto=format&fit=crop&w=1200&q=80`}
            alt={project.title}
            className="rounded-2xl shadow-lg mb-6"
          />

          <p className="text-gray-700 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
