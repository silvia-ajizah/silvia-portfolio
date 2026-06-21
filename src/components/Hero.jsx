import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import "./hero.css";
import profile from "../assets/profile.png";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const typingRef = useRef(null);
  const imageRef = useRef(null);

  /* ================= TYPING ================= */
  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "System Analyst",
        "Web Developer",
        "Database Management",
        "System Design",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  /* ================= PARALLAX ================= */
  useEffect(() => {
    const moveImage = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", moveImage);
    return () => window.removeEventListener("mousemove", moveImage);
  }, []);

  /* ================= CURSOR GLOW ================= */
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-glow");
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.body.removeChild(cursor);
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section className="hero">

      {/* PARTICLES */}
      <Particles
        className="particles"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* BACKGROUND SHAPES */}
      <div className="hero-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-container">

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span className="gradient-text">Silvia Ajizah</span>
          </h1>

          <h2 ref={typingRef}></h2>

          <p>
            Information Systems graduate, experienced as a system analyst and web developer in web application development, has web programming certification and system analyst competency, and is an expert in system and database design.
          </p>

          <div className="hero-buttons">
            <a href="https://drive.google.com" className="btn">View CV</a>
            <a href="#projects" className="btn-outline">View Project</a>
          </div>

          <div className="hero-social">
            <a href="https://wa.me/62895627564402?text=Halo%20Silvia,%20saya%20tertarik%20dengan%20portfolio%20Anda"
            target="_blank"
            rel="noopener noreferrer"  
            className="social-icon" 
            ><FaWhatsapp className="icon"/><span>WhatsApp</span></a>
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=silviaajizahh@gmail.com&su=Job%20Opportunity&body=Halo%20Silvia"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            ><FaEnvelope className="icon"/><span>Email</span></a>
            <a href="https://www.linkedin.com/in/silvia-ajizah-b0b832296"
            target="_blank"
            className="social-icon"
            ><FaLinkedin className="icon"/><span>LinkedIn</span></a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-blob"></div>
          <div className="hero-ring"></div>
          <img ref={imageRef} src={profile} alt="profile" />
        </motion.div>

      </div>

      {/* SCROLL */}
      <div className="scroll-down"></div>

    </section>
  );
}

export default Hero;