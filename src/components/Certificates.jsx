import { useState, useEffect } from "react";
import "./certificates.css";

function Certificates() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const certificates = [
    {
      title: "Sertifikat Kompetensi System Analyst",
      issuer: "Lembaga Sertifikasi Profesi BNSP",
      year: "2025",
      images: [
        "./images/certificates/ukom1.jpg",
        "./images/certificates/ukom2.jpg"
      ]
    },
    {
      title: "Hak Kekayaan Intelektual Sistem Operasi Teknologi",
      issuer: "Kementerian Hukum dan HAM",
      year: "2022",
      images: ["./images/certificates/hki.jpg"]
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2020",
      images: ["./images/certificates/dicoding.jpg"]
    },
    {
      title: "Microsoft Excel",
      issuer: "Skill Academy",
      year: "2020",
      images: ["./images/certificates/excel.jpg"]
    },
    {
      title: "Python with AI",
      issuer: "DQLab",
      year: "2023",
      images: ["./images/certificates/dqlab1.jpg"]
    },
    {
      title: "Data Science with Python",
      issuer: "DQLab",
      year: "2023",
      images: ["./images/certificates/dqlab2.jpg"]
    }
  ];

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  const openModal = (cert) => {
    setSelected(cert);
    setCurrentImg(0);
  };

  const nextImg = () => {
    setCurrentImg((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImg = () => {
    setCurrentImg((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">Certificates</h2>

      {/* GRID */}
      <div className="cert-grid">
        {visibleCertificates.map((cert, i) => (
          <div
            className="cert-card"
            key={i}
            onClick={() => openModal(cert)}
          >
            <img src={cert.images[0]} alt={cert.title} />

            <div className="cert-overlay">
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="cert-modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.images[currentImg]}
              alt={selected.title}
            />

            {/* SLIDER BUTTON */}
            {selected.images.length > 1 && (
              <div className="slider-controls">
                <button onClick={prevImg}>⟨</button>
                <button onClick={nextImg}>⟩</button>
              </div>
            )}

            <div className="cert-info">
              <h3>{selected.title}</h3>
              <p>{selected.issuer}</p>
              <span>{selected.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;