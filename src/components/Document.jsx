// ================= dokumen.jsx =================
import { useState } from "react";
import "./document.css";

const supportingDocs = [
    {
    title: "SKPL Website Bocah Care",
    company: "Website Bocah Care",
    category: "Sistem Kebutuhan Perangkat Lunak",
    images: [
        "./images/projects/doc/skpl1.png",
        "./images/projects/doc/skpl2.png",
        "./images/projects/doc/skpl3.png",
        "./images/projects/doc/skpl4.png"
    ]
  },
  {
    title: "DPPL Website Bocah Care",
    company: "Website Bocah Care",
    category: "Dokumen Perancangan Perangkat Lunak",
    images: [
        "./images/projects/doc/dppl1.png",
        "./images/projects/doc/dppl2.png"
    ]
  },
  {
    title: "Buku Panduan Website Bocah Care (Admin & User)",
    company: "Project Bocah Care",
    category: "Manual Book",
    images: ["./images/projects/doc/mbook.png"]
  },
  {
    title: "Project Charter Website Company Profile D'Elixir Bracelet",
    company: "Project D'Elixir Bracelet",
    category: "Documentation Project Manager",
    images: ["./images/projects/doc/pc.png"]
},
{
    title: "Project Management Plan Website Company Profile D'Elixir Bracelet",
    company: "Project D'Elixir Bracelet",
    category: "Documentation Project Manager",
    images: ["./images/projects/doc/pmp.png"]
},
{
    title: "Post Project Review Website Company Profile D'Elixir Bracelet",
    company: "Project D'Elixir Bracelet",
    category: "Documentation Project Manager",
    images: ["./images/projects/doc/ppr.png"]
},
  {
    title: "Business Process Management",
    company: "PT. Registra Bunga Wijaya",
    category: "Documentation",
    images: ["./images/projects/doc/mpb.png"]
    },
    {
    title: "Test Plan",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testplan.png"]
    },
    {
    title: "Test Design",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testdesign.png"]
    },
    {
    title: "Test Scenario",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testskenario.png"]
    },
    {
    title: "Test Case",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testcase.png"]
    },
    {
    title: "Test Procedure",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testprocedure.png"]
    },
    {
    title: "Test Log",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testlog.png"]
    },
    {
    title: "Test Incident Report",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testir.png"]
    },
    {
    title: "Test Summary",
    company: "UNUSA Helpdesk",
    category: "Software Testing",
    images: ["./images/projects/doc/testsum.png"]
    },
];

export default function Dokumen() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % selectedDoc.images.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? selectedDoc.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="dokumen-section">
      <h2 className="dokumen-title">Supporting Documents</h2>

      <div className="dokumen-grid">
        {supportingDocs.map((doc, i) => (
          <div
            className="dokumen-card"
            key={i}
            onClick={() => {
              setSelectedDoc(doc);
              setIndex(0);
            }}
          >
            <div className="image-wrapper">
              <img src={doc.images[0]} alt="preview" />
              <div className="overlay">
                <span>Lihat</span>
              </div>
            </div>

            <div className="card-body">
              <span className="dokumen-category">{doc.category}</span>
              <h3>{doc.title}</h3>
              <p className="company">{doc.company}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedDoc && (
        <div className="modal" onClick={() => setSelectedDoc(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="slider">
              <img src={selectedDoc.images[index]} alt="doc" />

              <button className="nav left" onClick={prevSlide}>
                ‹
              </button>
              <button className="nav right" onClick={nextSlide}>
                ›
              </button>

              <div className="dots">
                {selectedDoc.images.map((_, i) => (
                  <span
                    key={i}
                    className={i === index ? "active" : ""}
                    onClick={() => setIndex(i)}
                  ></span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <h2>{selectedDoc.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}