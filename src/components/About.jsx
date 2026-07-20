import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* ================= FOTO ================= */}
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
            alt="Silvia Ajizah"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* ================= CONTENT ================= */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            Get To Know Me
          </span>

          <h2>About Me</h2>

          <p>
            I am an Information Systems graduate from Nahdlatul Ulama University
            Surabaya with a strong interest in system analysis, data management,
            and digital solution development.
          </p>

          <p>
            Throughout my academic journey and professional experience, I have
            gained hands-on experience in analyzing business requirements,
            preparing system documentation, managing and validating data using
            Microsoft Excel, and developing web-based applications to support
            organizational operations.
          </p>

          <p>
            I believe technology is not only about building software, but also
            about creating solutions that simplify business processes, improve
            efficiency, and provide meaningful value for users.
          </p>

          {/* INFO */}

          <div className="about-info">

            <span>📍 Surabaya, Indonesia</span>

            <span>🎓 Information Systems Graduate</span>

            <span>💼 System Analyst</span>

            <span className="active">
              🟢 Open to Work
            </span>

          </div>

          {/* CARD */}

          <div className="about-cards">

            <motion.div
              whileHover={{ y: -8 }}
              className="card"
            >
              <div className="icon">🎓</div>

              <h4>Education</h4>

              <p>S1 Information Systems</p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="card"
            >
              <div className="icon">💼</div>

              <h4>Experience</h4>

              <p>System Analyst, Administration & Data Management</p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="card"
            >
              <div className="icon">📜</div>

              <h4>Certification</h4>

              <p>BNSP System Analyst</p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="card"
            >
              <div className="icon">💻</div>

              <h4>Tech Stack</h4>

              <p>Laravel, MySQL, Excel, React, Figma</p>

            </motion.div>

          </div>

          {/* BUTTON */}

          <div className="about-buttons">

            <a href="/cv.pdf" className="btn-primary">
              Download CV
            </a>

            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;