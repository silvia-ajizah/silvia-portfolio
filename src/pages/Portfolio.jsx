import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-white">
      
      {/* HEADER */}
      <div className="bg-blue-600 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg opacity-90">
          Selected projects showcasing my skills & experience
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
          >
            <Link to={`/project/${project.id}`}>
              
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <button className="text-blue-600 font-medium hover:underline">
                  View Details →
                </button>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
