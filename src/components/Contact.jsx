import "./contact.css";
import profile from "../assets/profile.png";

import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-left">
          <img src={profile} alt="profile" />
        </div>

        <div className="contact-right">
          <h1>Let's Work Together</h1>

          <p className="contact-desc">
            Passionate about system analysis, data, and web development, I am a detail-oriented individual ready to contribute to impactful projects and open to opportunities.
          </p>

          <p className="contact-location">
          <FaMapMarkerAlt className="location-icon" />
          Surabaya, Indonesia
          </p>

          <div className="contact-buttons">
            <a href="https://wa.me/62895627564402?text=Halo%20Silvia,%20saya%20tertarik%20dengan%20portfolio%20Anda" className="btn whatsapp">
              <FaWhatsapp className="icon" />
              WhatsApp
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=silviaajizah16@gmail.com&su=Job%20Opportunity&body=Halo%20Silvia" className="btn email">
              <FaEnvelope className="icon" />
              Email
            </a>

            <a href="https://linkedin.com/in/silvia-ajizah-b0b832296" className="btn linkedin">
              <FaLinkedin className="icon" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;