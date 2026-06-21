import { useState } from "react";
import "./experience.css";

function Experience() {
  const [mainTab, setMainTab] = useState("work");
  const [workTab, setWorkTab] = useState("freelance");
  const [selectedImage, setSelectedImage] = useState(null);

  const workingData = {
    freelance: [
      {
        date: "Jan 2026 - Present",
        title: "Trainer Web Programming",
        company: "Flashcom Indonesia",
        desc: [
          "Memberikan pelatihan pengembangan aplikasi web dari tahap perancangan hingga implementasi.",
          "Membimbing peserta dalam praktik pembuatan website secara langsung.",
          "Menyusun materi pelatihan dan melakukan evaluasi berbasis proyek."
        ]
        },
      {
        date: "Jan 2026 - Present",
        title: "Freelance Admin & Data Management",
        company: "CV Anak Pintar Plus",
        desc: [
          "Melakukan pencatatan barang masuk dan keluar dengan rapi dan akurat.",
          "Membuat rekap dan laporan stok barang secara berkala.",
          "Mengelola data dan dokumen administrasi menggunakan Microsoft Excel."
        ]
      }
    ],

    fulltime: [
      {
        date: "Jan 2021 - Jun 2021",
        title: "Staff Administrasi",
        company: "CV Maju Jaya Komputer",
        desc: [
          "Menginput dan mengelola data transaksi penjualan serta menyusun laporan penjualan.",
          "Mengelola dokumen administrasi dan arsip perusahaan secara rapi dan terstruktur.",
          "Berkoordinasi dengan tim operasional untuk memastikan kelancaran kegiatan operasional."
        ]
      
      }
    ],

    internship: [
      {
        date: "Apr 2024 - Jun 2024",
        title: "Data dan Sistem Analis",
        company: "Dinas Sosial Provinsi Jawa Timur",
        desc: [
          "Mengelola dan menganalisis data skala provinsi melalui sistem informasi e-Disabilitas untuk evaluasi program.",
          "Melakukan analisis kebutuhan sistem serta evaluasi dan pengembangan sistem informasi.",
          "Mengkoordinasikan distribusi alat bantu disabilitas dan menyusun materi sosialisasi pendataan bagi pendamping disabilitas se-Jawa Timur."
        ],
        achievements: [
        {
          img: "./images/experience/magang1.jpg",
          caption: "Distribusi alat bantu bagi penyandang disabilitas di Banyuwangi."
        },
        {
          img: "./images/experience/magang2.jpg",
          caption: "Distribusi alat bantu bagi penyandang disabilitas di Jember."
        },
        {
          img: "./images/experience/magang3.jpg",
          caption: "Kegiatan sosialisasi dan interaksi sosial bersama para lansia di Jember."
        },
        {
          img: "./images/experience/magang4.jpg",
          caption: "Keterlibatan dalam pelaksanaan acara peringatan Hari Disabilitas di Dinas Sosial Provinsi Jawa Timur."
        },
        {
          img: "./images/experience/magang5.jpg",
          caption: "Rapat maintenance website e-Disabilitas terkait kendala dan pengembangan sistem."
        },
        {
          img: "./images/experience/magang6.jpg",
          caption: "Rapat koordinasi persiapan acara peringatan Hari Disabilitas."
        },
        {
          img: "./images/experience/magang7.jpg",
          caption: "Registrasi peserta dan persiapan kegiatan rehabilitasi sosial."
        },
        {
          img: "./images/experience/magang8.jpg",
          caption: "DKegiatan evaluasi mahasiswa magang."
        }
      ]
      }
    ]
  };

const organizationData = [
  {
    date: "2022 – 2023",
    title: "Staff Divisi PSDM",
    company: "Himpunan Mahasiswa Sistem Informasi",
    desc: [
      "Mengelola dan melaksanakan program pengembangan sumber daya mahasiswa melalui kegiatan pelatihan dan kegiatan kemahasiswaan seperti PKKMB, LKMMTD, Formoster, Gathering, Workshop, dan Studi Banding.",
      "Berperan sebagai panitia dalam pelaksanaan berbagai program kerja dan kegiatan organisasi."
    ],
    achievements: [
      {
        img: "./images/organization/hima1.jpg",
        caption: "Dokumentasi kegiatan pelatihan mahasiswa."
      },
      {
        img: "./images/organization/hima2.jpg",
        caption: "Kegiatan workshop mahasiswa Sistem Informasi."
      },
      {
        img: "./images/organization/hima3.jpg",
        caption: "Dokumentasi kegiatan pelatihan mahasiswa."
      },
      {
        img: "./images/organization/hima4.jpg",
        caption: "Dokumentasi kegiatan pelatihan mahasiswa."
      },
      {
        img: "./images/organization/hima5.JPG",
        caption: "Dokumentasi kegiatan pelatihan mahasiswa."
      },
    ]
  },
  {
    date: "2022/2023 – 2023/2024",
    title: "Admission Support Staff",
    company: "Akademik Kemahasiswaan UNUSA - Tim Penerimaan Mahasiswa Baru Jalur Beasiswa",
    desc: [
      "Mengelola komunikasi dan verifikasi administrasi ±40 calon mahasiswa penerima beasiswa.",
      "Melakukan pendampingan proses seleksi hingga registrasi ulang mahasiswa."
    ],
  }
];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      {/* MAIN TAB */}
      <div className="exp-tabs">
        <button
          className={mainTab === "work" ? "active" : ""}
          onClick={() => setMainTab("work")}
        >
          Working Experience
        </button>
        <button
          className={mainTab === "org" ? "active" : ""}
          onClick={() => setMainTab("org")}
        >
          Organization
        </button>
      </div>

      {/* WORKING */}
      {mainTab === "work" && (
        <>
          <div className="exp-subtabs">
            <button
              className={workTab === "freelance" ? "active" : ""}
              onClick={() => setWorkTab("freelance")}
            >
              Freelance
            </button>
            <button
              className={workTab === "fulltime" ? "active" : ""}
              onClick={() => setWorkTab("fulltime")}
            >
              Full Time
            </button>
            <button
              className={workTab === "internship" ? "active" : ""}
              onClick={() => setWorkTab("internship")}
            >
              Internship
            </button>
          </div>

          <div className="timeline">
            {workingData[workTab].map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>

                <div className="exp-card">
                  <div className="exp-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <ul className="exp-list">
                    {Array.isArray(item.desc) ? (
                      item.desc.map((d, i) => <li key={i}>{d}</li>)
                    ) : (
                    <li>{item.desc}</li>
                    )}
                    </ul>

                  {item.achievements && (
                    <div className="achievement-gallery">
                  {item.achievements.map((itemImg, i) => (
                    <img
                      src={itemImg.img}
                      key={i}
                      alt=""
                      onClick={() => setSelectedImage(itemImg)}
                    />
                  ))}
                </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ORGANIZATION */}
      {mainTab === "org" && (
      <div className="timeline">
        {organizationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="exp-card">
              <div className="exp-date">{item.date}</div>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>

              <ul className="exp-list">
                {item.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {item.achievements && (
                <div className="achievement-gallery">
                  {item.achievements.map((img, i) => (
                    <img
                      src={img.img}
                      key={i}
                      alt=""
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
      {selectedImage && (
      <div className="image-modal" onClick={() => setSelectedImage(null)}>
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage.img} alt="" />
          <p>{selectedImage.caption}</p>
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      </div>
    )}
    </section>
  );
}

export default Experience;