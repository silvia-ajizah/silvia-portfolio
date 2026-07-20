import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./gallery.css";

const activities = [
  {
    id: 1,
    image: "./kegiatan/kegiatan1.jpg",
    category: "Community Service",
    title: "Website Monitoring Gizi Balita",
    location: "Gresik",
    year: "2024",
    description:
      "Community service program through the implementation of the BocahCare website to monitor child nutrition and support stunting prevention in Pongangan Village, Gresik.",
  },
  {
    id: 2,
    image: "./kegiatan/kegiatan2.jpg",
    category: "Community Service",
    title: "BocahCare Socialization",
    location: "Surabaya",
    year: "2024",
    description:
      "Socialization of the BocahCare website for Posyandu Ceria to introduce digital health monitoring for children and mothers.",
  },
  {
    id: 3,
    image: "./kegiatan/kegiatan3.jpg",
    category: "Internship",
    title: "Disability Assistance Program",
    location: "Dinas Sosial Jawa Timur",
    year: "2024",
    description:
      "Participated in disability assistance activities during National Disability Day while supporting data collection and program evaluation.",
  },
  {
    id: 4,
    image: "./kegiatan/kegiatan4.jpg",
    category: "Internship",
    title: "e-Disability Maintenance Meeting",
    location: "Surabaya",
    year: "2024",
    description:
      "Coordination meeting regarding maintenance planning and system improvements for e-Disability.",
  },
  {
    id: 5,
    image: "./kegiatan/kegiatan5.jpg",
    category: "Internship",
    title: "System Requirement Discussion",
    location: "Surabaya",
    year: "2024",
    description:
      "Preparing requirement lists for maintenance and improvement of the e-Disability system.",
  },
  {
    id: 6,
    image: "./kegiatan/kegiatan6.jpg",
    category: "Internship",
    title: "Coordination Meeting",
    location: "Surabaya",
    year: "2024",
    description:
      "Coordination meeting with representatives from 38 regencies/cities in East Java regarding disability services.",
  },
  {
    id: 7,
    image: "./kegiatan/magang1.jpg",
    category: "Internship",
    title: "Assistive Device Distribution Monitoring",
    location: "UPT PSTW Banyuwangi",
    year: "2024",
    description:
      "Participated in the distribution of assistive devices to beneficiaries at UPT PSTW Banyuwangi while supporting data verification, beneficiary validation, and ensuring the distribution process aligned with program requirements."
},
{
    id: 8,
    image: "./kegiatan/magang2.jpg",
    category: "Internship",
    title: "Assistive Device Distribution Program",
    location: "UPT PSTW Jember",
    year: "2024",
    description:
      "Supported the implementation of assistive device distribution at UPT PSTW Jember through beneficiary data validation, distribution monitoring, and administrative documentation to ensure accurate and accountable service delivery."
},
{
    id: 9,
    image: "./kegiatan/magang4.jpg",
    category: "Internship",
    title: "International Day of Persons with Disabilities",
    location: "East Java Province",
    year: "2024",
    description:
      "Contributed to the organization of the International Day of Persons with Disabilities by supporting participant data management, administrative coordination, event documentation, and operational activities involving representatives from all districts and cities across East Java."
},
  {
    id: 10,
    image: "./kegiatan/kegiatan7.jpg",
    category: "Workshop",
    title: "Field Study",
    location: "Universitas Amikom Yogyakarta",
    year: "2023",
    description:
      "Academic field study to explore technology implementation and innovation in higher education.",
  },
  {
    id: 11,
    image: "./kegiatan/kegiatan8.jpg",
    category: "Workshop",
    title: "Capstone Project Presentation",
    location: "UNUSA",
    year: "2024",
    description:
      "Presented the BocahCare capstone project before lecturers and students.",
  },
  {
    id: 12,
    image: "./kegiatan/kegiatan9.jpg",
    category: "Organization",
    title: "PKKMB Mentor",
    location: "UNUSA",
    year: "2022",
    description:
      "Mentored new students during university orientation activities.",
  },
  {
    id: 13,
    image: "./kegiatan/kegiatan10.jpg",
    category: "Organization",
    title: "University Committee",
    location: "UNUSA",
    year: "2022",
    description:
      "Committee member responsible for organizing university activities.",
  },
  {
    id: 14,
    image: "./kegiatan/kegiatan11.jpg",
    category: "Organization",
    title: "Information Systems Association",
    location: "UNUSA",
    year: "2022",
    description:
      "Active member of the Information Systems Student Association.",
  },
  {
    id: 15,
    image: "./kegiatan/kegiatan12.jpg",
    category: "Organization",
    title: "LKMM-TD Committee",
    location: "UNUSA",
    year: "2023",
    description:
      "Committee member of the Basic Student Management Skills Training.",
  },
  {
    id: 16,
    image: "./kegiatan/kegiatan13.JPG",
    category: "Organization",
    title: "PKKMB Committee",
    location: "UNUSA",
    year: "2023",
    description:
      "Committee member for the Information Systems orientation program.",
  },
  {
    id: 17,
    image: "./kegiatan/kegiatan14.JPG",
    category: "Community Service",
    title: "BocahCare Exhibition",
    location: "UNUSA",
    year: "2024",
    description:
      "Introducing the BocahCare website to students visiting the exhibition booth.",
  },
];

const filters = [
  "All",
  "Community Service",
  "Internship",
  "Organization",
  "Workshop",
];

function ActivityGallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredActivities = useMemo(() => {
    if (filter === "All") return activities;

    return activities.filter(
      (item) => item.category === filter
    );
  }, [filter]);

  const selectedIndex = filteredActivities.findIndex(
    (item) => item.id === selected?.id
  );

  const nextActivity = () => {
    if (selectedIndex === -1) return;

    const next =
      (selectedIndex + 1) % filteredActivities.length;

    setSelected(filteredActivities[next]);
  };

  const prevActivity = () => {
    if (selectedIndex === -1) return;

    const prev =
      (selectedIndex - 1 + filteredActivities.length) %
      filteredActivities.length;

    setSelected(filteredActivities[prev]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selected) return;

      if (e.key === "Escape") setSelected(null);

      if (e.key === "ArrowRight") nextActivity();

      if (e.key === "ArrowLeft") prevActivity();
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [selected, selectedIndex]);

    return (
    <section id="activities" className="activity-section">

      {/* ================= HEADER ================= */}

      <motion.div
        className="activity-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
      >

        <span className="section-tag">
          Activities & Achievements
        </span>

        <h2>Professional Journey</h2>

        <p>
          A collection of academic, professional, and community
          activities that have strengthened my technical,
          organizational, and collaborative skills.
        </p>

      </motion.div>

      {/* ================= FILTER ================= */}

      <div className="activity-filter">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={
              filter === item
                ? "filter-btn active"
                : "filter-btn"
            }
          >
            {item}
          </button>

        ))}

      </div>

      {/* ================= GRID ================= */}

      <motion.div
        layout
        className="activity-grid"
      >

        <AnimatePresence>

          {filteredActivities.map((activity) => (

            <motion.div

              layout

              key={activity.id}

              className="activity-card"

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: .9,
              }}

              transition={{
                duration: .35,
              }}

              whileHover={{
                y: -10,
              }}

              onClick={() => setSelected(activity)}

            >

              {/* IMAGE */}

              <div className="activity-image">

                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="image-overlay">

                  <button className="view-btn">

                    View Details →

                  </button>

                </div>

                <span
                  className={`badge ${activity.category
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {activity.category}
                </span>

              </div>

              {/* CONTENT */}

              <div className="activity-content">

                <h3>
                  {activity.title}
                </h3>

                <div className="activity-meta">

                  <span>
                    📍 {activity.location}
                  </span>

                  <span>
                    📅 {activity.year}
                  </span>

                </div>

                <p>
                  {activity.description.length > 110
                    ? activity.description.substring(0, 110) +
                      "..."
                    : activity.description}
                </p>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

            {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}

              <button
                className="close-btn"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* IMAGE */}

              <div className="lightbox-image">

                <img
                  src={selected.image}
                  alt={selected.title}
                />

              </div>

              {/* DETAIL */}

              <div className="lightbox-info">

                <span
                  className={`badge ${selected.category
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {selected.category}
                </span>

                <h2>
                  {selected.title}
                </h2>

                <div className="lightbox-meta">

                  <span>
                    📍 {selected.location}
                  </span>

                  <span>
                    📅 {selected.year}
                  </span>

                </div>

                <p>
                  {selected.description}
                </p>

                <div className="lightbox-navigation">

                  <button
                    className="nav-btn"
                    onClick={prevActivity}
                  >
                    ← Previous
                  </button>

                  <span>

                    {selectedIndex + 1}

                    {" / "}

                    {filteredActivities.length}

                  </span>

                  <button
                    className="nav-btn"
                    onClick={nextActivity}
                  >
                    Next →
                  </button>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default ActivityGallery;