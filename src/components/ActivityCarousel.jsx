import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./carousel.css";

const images = [
  { src: "./kegiatan/kegiatan1.jpg", title: "Program pengabdian kepada masyarakat berupa implementasi website pemantauan gizi balita dalam upaya penanganan kasus stunting di Desa Pongangan, Gresik." },
  { src: "./kegiatan/kegiatan2.jpg", title: "Sosialisasi teknologi kepada masyarakat melalui website “BocahCare” untuk Posyandu Ceria di Kelurahan Babatan, Surabaya." },
  { src: "./kegiatan/kegiatan3.jpg", title: "Program pendampingan bagi penyandang disabilitas dalam rangka memperingati Hari Disabilitas di Dinas Sosial Provinsi Jawa Timur." },
  { src: "./kegiatan/kegiatan4.jpg", title: "Rapat koordinasi kegiatan maintenance (pemeliharaan) website e-Disabilitas." },
  { src: "./kegiatan/kegiatan5.jpg", title: "Penyusunan daftar kebutuhan untuk maintenance (pemeliharaan) website." },
  { src: "./kegiatan/kegiatan6.jpg", title: "Rapat koordinasi antar divisi Rehabilitasi Sosial dengan perwakilan 38 kabupaten/kota di Jawa Timur." },
  { src: "./kegiatan/kegiatan7.jpg", title: "Kegiatan kuliah lapangan di Universitas Amikom Yogyakarta." },
  { src: "./kegiatan/kegiatan8.jpg", title: "Presentasi capstone project untuk bidang Posyandu." },
  { src: "./kegiatan/kegiatan9.jpg", title: "Pendamping kelompok dalam kegiatan PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru)." },
  { src: "./kegiatan/kegiatan10.jpg", title: "Panitia Program Kerja Universitas Nahdlatul Ulama Surabaya." },
  { src: "./kegiatan/kegiatan11.jpg", title: "Anggota Himpunan Mahasiswa Sistem Informasi." },
  { src: "./kegiatan/kegiatan12.jpg", title: "Panitia LKMM-TD (Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar) Sistem Informasi." },
  { src: "./kegiatan/kegiatan13.JPG", title: "Panitia PKKMB Program Studi Sistem Informasi." },
  { src: "./kegiatan/kegiatan14.JPG", title: "Sosialisasi website “BocahCare” kepada mahasiswa UNUSA yang berkunjung ke booth." }

];

function ActivityCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="carousel">

      <button className="nav left" onClick={prevSlide}>‹</button>

      <div className="carousel-track">
        {images.map((item, i) => {
          let position = "next";
          if (i === index) position = "active";
          if (i === (index - 1 + images.length) % images.length)
            position = "prev";

          return (
            <motion.div
              className={`carousel-item ${position}`}
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.src} alt="" />
              <div className="caption-overlay">
                <p>{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button className="nav right" onClick={nextSlide}>›</button>

      {/* DOT INDICATOR */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active-dot" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default ActivityCarousel;