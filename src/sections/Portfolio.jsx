import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

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
              <div className="h-48 overflow-hidden">
                <img
                  src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
