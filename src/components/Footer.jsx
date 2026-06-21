import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Silvia Ajizah</h2>
      <p className="footer-role">
        System Analyst | IT | Data | Web Developer
      </p>

      <div className="footer-social">

        <a href="www.linkedin.com/in/silvia-ajizah-b0b832296">
          <FaLinkedin />
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=silviaajizahh@gmail.com&su=Job%20Opportunity&body=Halo%20Silvia">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Silvia Ajizah. All rights reserved.
      </p>
    
    <button
    className="back-top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
        ↑
        </button>
    </footer>
  );
}

export default Footer;