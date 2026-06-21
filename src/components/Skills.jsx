import { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";

function Skills() {
  const [active, setActive] = useState("All");

  const skills = [
    { name: "HTML", icon: "./skills/html.png", category: "Programming" },
    { name: "CSS", icon: "./skills/css.png", category: "Programming" },
    { name: "JavaScript", icon: "./skills/javascript.png", category: "Programming" },
    { name: "Python", icon: "./skills/python.png", category: "Programming" },
    { name: "PHP", icon: "./skills/php.png", category: "Programming" },
    { name: "Java", icon: "./skills/java.png", category: "Programming" },

    { name: "React", icon: "./skills/react.png", category: "Framework" },
    { name: "Vue.js", icon: "./skills/Vue.png", category: "Framework" },
    { name: "Laravel", icon: "./skills/laravel.png", category: "Framework" },
    { name: "Node.js", icon: "./skills/Node.png", category: "Framework" },
    { name: "Tailwind CSS", icon: "./skills/Tailwind.png", category: "Framework" },

    { name: "MySQL", icon: "./skills/mysql.png", category: "Database" },
    { name: "Oracle", icon: "./skills/oracle.png", category: "Database" },

    { name: "Visual Studio Code", icon: "./skills/vscode.png", category: "Tools" },

    { name: "Figma", icon: "./skills/figma.png", category: "Design" },
    { name: "Canva", icon: "./skills/canva.png", category: "Design" },

    { name: "Microsoft Word", icon: "./skills/word.png", category: "Office" },
    { name: "Microsoft Excel", icon: "./skills/excel.png", category: "Office" }
  ];

  const categories = ["All", "Programming", "Framework", "Database", "Tools", "Design", "Office"];

  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      {/* Tabs */}
      <div className="skill-tabs">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, i) => (
          <motion.div
            className="skill-item"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
          >
            <img src={skill.icon} alt="" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;