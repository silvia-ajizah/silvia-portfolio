import { motion } from "framer-motion";
import { useState } from "react";
import ActivityCarousel from "./ActivityGallery";
import "./education.css";

/* ================= GALLERY SKRIPSI ================= */
function ThesisGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "./skripsi/dataset.png",
    "./skripsi/hasilfuzzy.png",
    "./skripsi/hasilnn.png",
    "./skripsi/hasil.png",
    
  ];

  return (
    <>
      <div className="thesis-gallery">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <motion.img
            src={selectedImg}
            className="modal-content"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}
    </>
  );
}

/* ================= EDUCATION ================= */
function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
        >

          {/* LEFT */}
          <div className="education-left">

            <div className="univ-header">
              <img src="./education/unusa.png" className="univ-logo" />
              <h3>Universitas Nahdlatul Ulama Surabaya</h3>
            </div>

            <span className="edu-year">2021 - 2025</span>
            <p className="major">S1 Sistem Informasi</p>
            <p className="gpa">IPK 3.67 / 4.00</p>

            {/* ================= TUGAS AKHIR ================= */}
            <div className="thesis">
            <h4>Bachelor's Thesis</h4>

            <p className="thesis-title">
              Detection of Healthy and Chronic Kidney Disease Using Fuzzy Logic and Backpropagation Neural Network Methods
            </p>

              {/* FOTO */}
              <ThesisGallery />

              {/* TIMELINE */}
              <div className="thesis-timeline">
                {["Dataset","Fuzzy","Neural Network","Result"].map((step, i) => (
                  <motion.div
                    className="timeline-item"
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                  >
                    <div className="timeline-circle"></div>
                    <p>{step}</p>
                  </motion.div>
                ))}
              </div>

              {/* INFO BADGE */}
              <div className="thesis-info">
                <div className="info-badge">
                  <img src="./icons/fuzzy.jpg" />
                  <span>Fuzzy Logic</span>
                </div>

                <div className="info-badge">
                  <img src="./icons/nn.png" />
                  <span>Neural Network</span>
                </div>

                <div className="info-badge">
                  <img src="./icons/gc.png" />
                  <span>Google Colab</span>
                </div>

                <div className="info-badge">
                  <img src="./icons/python.png" />
                  <span>Python</span>
                </div>

                <div className="info-badge">
                  <img src="./icons/acc.png" />
                  <span>Accuracy 92%</span>
                </div>
              </div>

            </div>
          </div>

          {/* FOTO KANAN */}
          <motion.div 
            className="education-photo-wrapper"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="photo-blob"></div>
            <div className="photo-ring"></div>
            <img src="./education/wisuda.png" alt="profile" className="education-photo" />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;