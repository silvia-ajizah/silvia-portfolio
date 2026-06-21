import { useState, useEffect, useRef } from "react";
import "./projects.css";

function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
 
  const startX = useRef(0);

  /* ================= PROJECT DATA (ASLI + TAMBAHAN docs) ================= */
  const projects = [
    {
    title: "BocahCare: Sistem Informasi Posyandu Anak & Ibu",
    category: "Web",
    duration: "3 Months",
    year: "2024",
    role: "System Analyst & Fullstack Developer",
    status: "Completed",
    desc: "Platform web untuk digitalisasi layanan Posyandu yang memudahkan pencatatan, pemantauan, dan konsultasi kesehatan ibu dan anak secara terintegrasi.",
    
    challenges: "Mengintegrasikan berbagai fitur layanan kesehatan dalam satu sistem yang mudah digunakan oleh kader Posyandu dengan tingkat literasi digital yang beragam.",
    
    results: "Meningkatkan efisiensi pencatatan data, mempermudah pemantauan kesehatan, serta mempercepat komunikasi antara kader dan tenaga kesehatan.",

    images: [
      "./images/projects/web/bocahcare.png"
    ],

    features: [
      "Autentikasi & manajemen pengguna",
      "Jadwal Posyandu & imunisasi",
      "Pencatatan data kesehatan ibu & anak",
      "Pengelolaan vitamin",
      "Konsultasi daring",
      "Dashboard informatif",
      "Riwayat kesehatan",
      "Notifikasi pengingat"
    ],

    techStack: [
      { name: "PHP", logo: "./skills/php.png" },
      { name: "Laravel", logo: "./skills/laravel.png" },
      { name: "Boostrap", logo: "./skills/boostrap.png" },
      { name: "HTML", logo: "./skills/html.png" },
      { name: "CSS", logo: "./skills/css.png" },
      { name: "JavaScript", logo: "./skills/javascript.png" },
      { name: "MySQL", logo: "./skills/mysql.png" }
    ]
  },

    {
    title: "OptiHPP: Aplikasi Perhitungan Harga Pokok Produksi",
    category: "Web",
    duration: "1 Months",
    year: "2023",
    role: "System Analyst & Web Developer",
    status: "Completed",
    desc: "Aplikasi berbasis web untuk menghitung Harga Pokok Produksi (HPP) secara otomatis guna membantu pelaku usaha dalam mengontrol biaya dan menentukan harga jual yang optimal.",
    
    challenges: "Mengelola berbagai komponen biaya produksi (bahan baku, tenaga kerja, overhead) agar terintegrasi dalam satu sistem yang akurat dan mudah digunakan.",
    
    results: "Meningkatkan akurasi perhitungan HPP, membantu analisis keuntungan, serta mempermudah pengambilan keputusan dalam penentuan harga jual.",

    images: [
      "./images/projects/web/hpp.png"
    ],

    features: [
      "Input biaya bahan baku",
      "Input biaya tenaga kerja",
      "Input biaya overhead",
      "Perhitungan HPP otomatis",
      "Laporan HPP terstruktur",
      "Manajemen hak akses pengguna",
      "Rekap dan riwayat perhitungan",
      "Dashboard ringkasan biaya produksi"
    ],

    techStack: [
      { name: "PHP", logo: "./skills/php.png" },
      { name: "Laravel", logo: "./skills/laravel.png" },
      { name: "HTML", logo: "./skills/html.png" },
      { name: "CSS", logo: "./skills/css.png" },
      { name: "JavaScript", logo: "./skills/javascript.png" },
      { name: "PHP", logo: "./skills/php.png" },
      { name: "MySQL", logo: "./skills/mysql.png" }
    ]
  },

    {
    title: "Website Company Profile D'Elixir Bracelet",
    category: "Web",
    duration: "1 Months",
    year: "2023",
    role: "web Developer",
    status: "Completed",
    desc: "Website company profile untuk brand D'Elixir Bracelet yang dikembangkan melalui dua pendekatan, yaitu website statis berbasis HTML & CSS serta implementasi menggunakan platform Odoo untuk kebutuhan manajemen dan skalabilitas bisnis.",
    
    challenges: "Menyesuaikan desain agar konsisten dengan identitas brand pada dua platform berbeda (custom website dan Odoo) serta memastikan keduanya tetap responsif dan mudah digunakan.",
    
    results: "Berhasil menghadirkan dua versi implementasi website yang fleksibel, meningkatkan profesionalitas brand, serta memberikan opsi pengelolaan website yang lebih scalable melalui Odoo.",

    images: [
      "./images/projects/web/delixir.png"
    ],

    features: [
      "Halaman Home sebagai landing utama",
      "Halaman About Us untuk profil perusahaan",
      "Halaman Services untuk layanan/produk",
      "Halaman Contact dengan informasi kontak",
      "Desain responsif di berbagai perangkat",
      "Navigasi sederhana dan user-friendly",
      "Implementasi dual platform (HTML & CSS dan Odoo)",
      "Struktur konten yang mudah dikelola"
    ],

    techStack: [
      { name: "HTML", logo: "./skills/html.png" },
      { name: "CSS", logo: "./skills/css.png" },
      { name: "Odoo", logo: "./skills/odoo.png" }
    ]
  },

    {
    title: "UI/UX Design Website PPDB MA Abadiyah",
    category: "UI/UX",
    duration: "1 Month",
    year: "2022",
    role: "UI/UX Designer",
    status: "Completed",
    desc: "Perancangan desain UI/UX untuk website PPDB MA Abadiyah guna memberikan pengalaman pengguna yang intuitif, informatif, dan sesuai dengan identitas sekolah.",
    
    challenges: "Menyusun alur navigasi yang jelas agar calon siswa dapat dengan mudah mengakses informasi dan melakukan pendaftaran secara efisien.",
    
    results: "Menghasilkan desain yang terstruktur, mudah digunakan, serta meningkatkan kenyamanan pengguna dalam mengakses informasi dan proses pendaftaran.",

    images: [
      "./images/projects/web/abadiyah.png"
    ],

    features: [
      "Desain halaman utama (homepage)",
      "Desain form pendaftaran online",
      "Desain dashboard admin",
      "Alur navigasi yang terstruktur dan mudah dipahami",
      "Tampilan visual sesuai identitas sekolah",
      "Desain modern dan user-friendly"
    ],

    techStack: [
      { name: "Figma", logo: "./skills/figma.png" }
    ]
  },

    {
    title: "I-Pray Application (UI/UX Design)",
    category: "UI/UX",
    duration: "1 Month",
    year: "2022",
    role: "UI/UX Designer",
    status: "Completed",
    desc: "Perancangan antarmuka aplikasi pengingat ibadah (I-Pray) yang menyediakan fitur dzikir, jadwal sholat, arah kiblat, dan lokasi tempat ibadah terdekat.",
    
    challenges: "Mendesain tampilan yang sederhana namun informatif agar pengguna dapat dengan mudah mengakses berbagai fitur ibadah dalam satu aplikasi.",
    
    results: "Menghasilkan desain yang intuitif dan konsisten, sehingga meningkatkan kenyamanan pengguna serta pengalaman penggunaan aplikasi secara keseluruhan.",

    images: [
      "./images/projects/web/ipray.png"
    ],

    features: [
      "Desain fitur dzikir harian",
      "Desain jadwal sholat",
      "Desain penunjuk arah kiblat",
      "Desain lokasi tempat ibadah terdekat",
      "Navigasi yang sederhana dan mudah digunakan",
      "Tampilan konsisten dan modern"
    ],

    techStack: [
      { name: "Figma", logo: "./skills/figma.png" }
    ]
  }
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % selected.images.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );

  useEffect(() => {
    if (!selected) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [selected, index]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      {/* FILTER */}
      <div className="filter">
        {["All", "Web", "UI/UX"].map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => {
              setSelected(p);
              setIndex(0);
            }}
          >
            <img src={p.images[0]} alt="" />
            <span className="project-badge">{}</span>

            <div className="project-overlay">
              <h3>{p.title}</h3>
              <p>{p.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL (SEMUA ASLI TETAP ADA) */}
      {selected && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="modal-content flip" onClick={(e) => e.stopPropagation()}>

            <div className="slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <img src={selected.images[index]} alt="" />
              <button onClick={prevSlide}>‹</button>
              <button onClick={nextSlide}>›</button>

              <div className="dots">
                {selected.images.map((_, i) => (
                  <span key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)}></span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <h2 className="project-title">{selected.title}</h2>
              <p className="project-desc">{selected.desc}</p>

              <div className="info-grid">
                <div><span>Role</span><p>{selected.role}</p></div>
                <div><span>Duration</span><p>{selected.duration}</p></div>
                <div><span>Year</span><p>{selected.year}</p></div>
                <div><span>Status</span><p>{selected.status}</p></div>
              </div>

              <div className="detail-card">
                <h3>Features</h3>
                <ul>
                  {selected.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-flex">
                <div className="detail-card">
                  <h3>Challenges</h3>
                  <p>{selected.challenges}</p>
                </div>

                <div className="detail-card">
                  <h3>Results</h3>
                  <p>{selected.results}</p>
                </div>
              </div>

              <div className="tech-stack">
                {selected.techStack.map((t, i) => (
                  <div className="tech-item" key={i}>
                    <img src={t.logo} alt="" />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;