import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* FOTO */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-blob"></div>
          <div className="about-ring"></div>

          <motion.img
            src="./education/diri.png"
            alt="profile"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>

          <p>
            I am an Information Systems graduate with experience as a systems analyst and web developer in designing and developing web-based applications, supported by real-life projects and comprehensive documentation such as test plans, test cases, and project management. I also hold professional certifications in web programming, Microsoft Excel, and systems analyst competencies, as well as expertise in system design, database management, and web technology development.
          </p>

          {/* INFO */}
          <div className="about-info">
            <span>Information Systems</span>
            <span>Surabaya, Indonesia</span>
            <span className="active">Open to Work</span>
          </div>

          {/* STATS */}
          <div className="about-stats">
            <motion.div 
              className="stat"
              whileHover={{ y: -8 }}
            >
              <h3>10+</h3>
              <p>Projects</p>
            </motion.div>

            <motion.div 
              className="stat"
              whileHover={{ y: -8 }}
            >
              <h3>8+</h3>
              <p>Skills</p>
            </motion.div>

            <motion.div 
              className="stat"
              whileHover={{ y: -8 }}
            >
              <h3>3+</h3>
              <p>Experience</p>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;