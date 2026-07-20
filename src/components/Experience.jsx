import { useState } from "react";
import "./experience.css";

function Experience() {
  const [mainTab, setMainTab] = useState("work");
  const [workTab, setWorkTab] = useState("freelance");
  const [selectedImage, setSelectedImage] = useState(null);

  const workingData = {
  freelance: [
  {
    date: "Jan 2026 - Jul 2026",
    title: "Freelance IT Trainer",
    company: "Flashcom Indonesia",
    desc: [
      "Delivered web programming training covering the complete software development lifecycle, from requirements analysis and system design to application implementation.",
      "Provided one-on-one training in Microsoft Office applications (Word, Excel, and PowerPoint) with practical, job-oriented learning materials tailored to individual learning needs.",
      "Designed structured training materials and guided participants through hands-on exercises and real-world case studies.",
      "Evaluated learning progress through practical assignments and project-based assessments while providing technical guidance and problem-solving support.",
      "Successfully mentored and trained five participants across web programming and office administration courses, helping them develop practical technical and administrative skills."
    ],
    achievements: [
    {
      img: "./kegiatan/flashcom1.jpeg",
      caption:
        "Personalized Microsoft Office training (Word, Excel, and PowerPoint) for office administration."
    },
    {
      img: "./kegiatan/flashcom2.jpeg",
      caption:
        "Hands-on Microsoft Word and Excel training focused on practical office and data management tasks."
    },
    {
      img: "./kegiatan/flashcom3.png",
      caption:
        "Arduino Uno programming training through practical microcontroller and embedded system projects."
    }
  ]
  },
    {
    date: "Jan 2026 - Jul 2026",
    title: "Freelance Admin & Data Management",
    company: "CV Anak Pintar Plus",
    desc: [
      "Prepared and managed delivery orders and shipping documents for product distribution to multiple companies.",
      "Verified the accuracy and consistency of inventory records against shipping documentation.",
      "Prepared inventory reports to support stock monitoring and administrative control.",
      "Managed, validated, and maintained operational data using Microsoft Excel to ensure data accuracy and efficiency."
    ]
  },
  ],

    fulltime: [
    {
      date: "Jan 2021 - Jun 2021",
      title: "Administrative Staff",
      company: "CV Maju Jaya Komputer",
      desc: [
        "Managed and maintained sales transaction data, including data entry, validation, and preparation of sales reports using Microsoft Excel.",
        "Organized and maintained company administrative documents, records, and filing systems to support daily operational activities.",
        "Coordinated with operational teams to ensure smooth administrative processes and business activities.",
        "Prepared periodic recapitulation reports of sales and administrative data for internal monitoring purposes."
      ]
    }
    ],

    internship: [
      {
  date: "Apr 2024 - Jun 2024",
  title: "Data and System Analyst",
  company: "Dinas Sosial Provinsi Jawa Timur",
  desc: [
    "Managed and analyzed province-wide data through the e-Disabilitas information system to support program evaluation.",
    "Conducted system requirements analysis, evaluation, and information system development processes.",
    "Coordinated disability assistive device distribution and prepared data collection socialization materials for disability assistants across East Java."
  ],
  achievements: [
    {
      img: "./images/experience/magang1.jpg",
      caption: "Distribution of assistive devices for persons with disabilities in Banyuwangi."
    },
    {
      img: "./images/experience/magang2.jpg",
      caption: "Distribution of assistive devices for persons with disabilities in Jember."
    },
    {
      img: "./images/experience/magang3.jpg",
      caption: "Socialization activities and social interaction with elderly communities in Jember."
    },
    {
      img: "./images/experience/magang4.jpg",
      caption: "Involvement in the implementation of the International Day of Persons with Disabilities event at the East Java Provincial Social Service."
    },
    {
      img: "./images/experience/magang5.jpg",
      caption: "e-Disabilitas website maintenance meeting to discuss system issues and development improvements."
    },
    {
      img: "./images/experience/magang6.jpg",
      caption: "Coordination meeting for the preparation of the International Day of Persons with Disabilities event."
    },
    {
      img: "./images/experience/magang7.jpg",
      caption: "Participant registration and preparation for social rehabilitation activities."
    },
    {
      img: "./images/experience/magang8.jpg",
      caption: "Internship evaluation activities."
    }
  ]
}
    ]
  };

const organizationData = [
  {
    date: "2022 – 2023",
    title: "Human Resource Development Division Staff",
    company: "Information Systems Student Association",
    desc: [
      "Managed and implemented student development programs through training activities and student events such as PKKMB, LKMMTD, Formoster, Gathering, Workshops, and Study Visits.",
      "Contributed as a committee member in the implementation of various organizational programs and activities."
    ],
    achievements: [
      {
        img: "./images/organization/hima1.jpg",
        caption: "Documentation of student training activities."
      },
      {
        img: "./images/organization/hima2.jpg",
        caption: "Information Systems student workshop activities."
      },
      {
        img: "./images/organization/hima3.jpg",
        caption: "Documentation of student training activities."
      },
      {
        img: "./images/organization/hima4.jpg",
        caption: "Documentation of student training activities."
      },
      {
        img: "./images/organization/hima5.JPG",
        caption: "Documentation of student training activities."
      },
    ]
  },
  {
    date: "2022/2023 – 2023/2024",
    title: "Admission Support Staff",
    company: "UNUSA Academic and Student Affairs - Scholarship Admission Team",
    desc: [
      "Managed communication and administrative verification for approximately 40 scholarship applicant candidates.",
      "Provided assistance throughout the selection process until student re-registration."
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