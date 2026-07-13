"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";

const attorneys = [
  {
    name: "Temilorun F. Komolafe, Esq.",
    credentials: "LL.M, ACIARB, MIMA (UK)",
    title: "Principal Counsel",
    image: "/Media.jpeg",
    admissions: [
      "Solicitor of the Senior Courts of England and Wales (SRA)",
      "Barrister and Solicitor of the Supreme Court of Nigeria",
    ],
    education: [
      "LL.B, University of Ibadan",
      "B.L (Second Class Upper), Nigerian Law School",
      "LL.M with Merit, Manchester Metropolitan University, UK",
      "Money Advice Practice Certificate (MIMA), Institute of Money Advisers",
    ],
    practiceAreas: [
      "Immigration Law",
      "Family Law",
      "Employment Law",
      "Housing Law",
      "Maritime Law",
      "Entertainment Law",
      "Debt Advisory",
    ],
    bio: [
      "Temilorun Komolafe is a dual-qualified legal practitioner admitted as a Solicitor of the Senior Courts of England and Wales and as a Barrister and Solicitor of the Supreme Court of Nigeria. He qualified in England and Wales through the Solicitors Qualifying Examination (SQE) and is regulated by the Solicitors Regulation Authority (SRA), holding a valid practising certificate.",
      "Through his work in both Nigeria and the United Kingdom, he has advised and supported over 3,800 individuals and businesses, providing practical, commercially focused, and solution-oriented legal services.",
      "As a Solicitor at Amas & Rhod Law, he advises clients on employment, family, housing, and immigration matters, manages complex legal caseloads, conducts legal research, drafts legal documents, and advocates on behalf of clients.",
      "In the United Kingdom, Temilorun has held several roles within Citizens Advice, including Generalist Adviser, Immigration, Family, Employment and Housing Adviser, Debt Adviser, and Money Advice Caseworker. Prior to this, he served as Director of Legal for the Council of Maritime Transport Unions and Associations (COMTUA).",
      "Beyond legal practice, Temilorun serves as the Artistic and Programme Director of ATML Choir CIC, United Kingdom, contributing to initiatives that promote music, culture, wellbeing, inclusion, and community cohesion.",
    ],
    memberships: [
      "Solicitors Regulation Authority",
      "The Law Society of England and Wales",
      "Institute of Money Advisers",
      "Nigerian Bar Association",
    ],
  },
  {
    name: "Nancy C. Muojekwu, Esq.",
    credentials: "",
    title: "Associate",
    image: "/lawyer.png",
    admissions: ["Barrister and Solicitor of the Supreme Court of Nigeria"],
    education: [
      "LL.B (Second Class Upper), Nnamdi Azikiwe University",
      "B.L (Second Class Upper), Nigerian Law School",
    ],
    practiceAreas: [
      "Entertainment Law",
      "Maritime Law",
      "Property Law",
      "Family Law",
      "Immigration Law",
      "Corporate Advisory",
    ],
    bio: [
      "Nancy C. Muojekwu is a Legal Practitioner with experience spanning Entertainment Law, Maritime Law, Property Law, Family Law, Immigration Law, and Corporate Advisory.",
      "Nancy has advised individuals, startups, creative professionals, and businesses on a wide range of legal and commercial matters, providing practical solutions tailored to their unique needs. Her experience includes contract review and drafting, legal advisory services, policy development, legal research, compliance support, and the preparation of legal documentation across diverse sectors.",
      "A skilled legal writer and researcher, Nancy has authored and contributed to several articles on emerging legal issues, demonstrating a strong commitment to thought leadership and public legal education. She is particularly passionate about making the law accessible and understandable.",
      "Beyond her legal practice, Nancy is a digital content creator and legal educator who leverages social media platforms to simplify legal concepts for everyday audiences, promoting legal awareness and bridging the gap between legal professionals and the public — particularly within the creative, remote work, and digital business sectors.",
    ],
    memberships: ["Nigerian Bar Association"],
  },
];

export default function Attorneys() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const openModal = (attorney) => {
    setSelected(attorney);
    setVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelected(null), 300);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Amas & Rhod Law | Attorneys</title>
      </Head>

      <style>{`
        .atty-page {
          background: #f3f4f6;
          min-height: 100vh;
          padding: 80px 16px;
        }
        .atty-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .atty-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .atty-header h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-family: 'Garamond', 'Georgia', serif;
          font-weight: 700;
          color: #111827;
          margin: 0 0 12px;
        }
        .atty-header p {
          font-size: 1.05rem;
          color: #6b7280;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .atty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          justify-items: center;
        }
        .atty-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 360px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid #e5e7eb;
        }
        .atty-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.14);
        }
        .atty-card:focus-visible {
          outline: 3px solid #6366f1;
          outline-offset: 2px;
        }
        .atty-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #e5e7eb;
        }
        .atty-card-body {
          padding: 20px 20px 24px;
          text-align: center;
        }
        .atty-card-name {
          font-family: 'Garamond', 'Georgia', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px;
        }
        .atty-card-creds {
          font-size: 0.78rem;
          color: #6b7280;
          margin: 0 0 6px;
          font-style: italic;
        }
        .atty-card-title {
          font-size: 0.85rem;
          color: #6366f1;
          font-style: italic;
          margin: 0 0 14px;
        }
        .atty-card-btn {
          display: inline-block;
          padding: 8px 22px;
          background: #111827;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 0.82rem;
          font-family: inherit;
          cursor: pointer;
          letter-spacing: 0.04em;
          transition: background 0.2s;
        }
        .atty-card-btn:hover { background: #374151; }

        /* Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 1000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 0;
        }
        .modal-overlay.open { opacity: 1; }

        @media (min-width: 640px) {
          .modal-overlay {
            align-items: center;
            padding: 24px;
          }
        }

        .modal-box {
          background: #fff;
          width: 100%;
          max-width: 680px;
          max-height: 92vh;
          border-radius: 20px 20px 0 0;
          overflow-y: auto;
          transform: translateY(60px);
          transition: transform 0.3s ease;
          position: relative;
        }
        .modal-overlay.open .modal-box {
          transform: translateY(0);
        }
        @media (min-width: 640px) {
          .modal-box {
            border-radius: 20px;
            transform: scale(0.95);
          }
          .modal-overlay.open .modal-box {
            transform: scale(1);
          }
        }

        .modal-top {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 28px 20px;
          border-bottom: 1px solid #f3f4f6;
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 10;
        }
        .modal-thumb {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background: #e5e7eb;
        }
        .modal-top-text { flex: 1; min-width: 0; }
        .modal-top-name {
          font-family: 'Garamond', 'Georgia', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 2px;
        }
        .modal-top-creds {
          font-size: 0.75rem;
          color: #9ca3af;
          font-style: italic;
          margin: 0 0 4px;
        }
        .modal-top-title {
          font-size: 0.82rem;
          color: #6366f1;
          font-style: italic;
          margin: 0;
        }
        .modal-close {
          background: #f3f4f6;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .modal-close:hover { background: #e5e7eb; }

        .modal-body { padding: 24px 28px 32px; }

        .modal-section { margin-bottom: 24px; }
        .modal-section:last-child { margin-bottom: 0; }
        .modal-section-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin: 0 0 10px;
        }
        .modal-section p {
          font-size: 0.9rem;
          color: #374151;
          line-height: 1.7;
          margin: 0 0 10px;
        }
        .modal-section p:last-child { margin-bottom: 0; }
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .modal-tag {
          background: #f3f4f6;
          color: #374151;
          font-size: 0.78rem;
          padding: 4px 12px;
          border-radius: 99px;
          border: 1px solid #e5e7eb;
        }
        .modal-tag.accent {
          background: #eef2ff;
          color: #4338ca;
          border-color: #c7d2fe;
        }
        .modal-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .modal-list li {
          font-size: 0.88rem;
          color: #374151;
          padding: 5px 0;
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }
        .modal-list li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: #9ca3af;
        }
      `}</style>

      <div className="atty-page">
        <div className="atty-inner">
          <div className="atty-header">
            <h1>Meet Our Attorneys</h1>
            <p>A team of passionate legal professionals committed to excellence and justice.</p>
          </div>

          <div className="atty-grid">
            {attorneys.map((a) => (
              <div
                key={a.name}
                className="atty-card"
                onClick={() => openModal(a)}
                onKeyDown={(e) => e.key === "Enter" && openModal(a)}
                tabIndex={0}
                role="button"
                aria-label={`View profile of ${a.name}`}
              >
                <div className="atty-img-wrap">
                  <Image src={a.image} alt={a.name}  style={{ objectFit: "cover" }} width={600}
                                      height={500}
                                    className="object-cover w-full h-full"
                                    unoptimized />
                </div>
                <div className="atty-card-body">
                  <h3 className="atty-card-name">{a.name}</h3>
                  {a.credentials && <p className="atty-card-creds">{a.credentials}</p>}
                  <p className="atty-card-title">{a.title}</p>
                  <button className="atty-card-btn" onClick={(e) => { e.stopPropagation(); openModal(a); }}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className={`modal-overlay${visible ? " open" : ""}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Profile of ${selected.name}`}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {/* Sticky header */}
            <div className="modal-top">
              <div className="modal-thumb">
                <Image src={selected.image} alt={selected.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="modal-top-text">
                <p className="modal-top-name">{selected.name}</p>
                {selected.credentials && <p className="modal-top-creds">{selected.credentials}</p>}
                <p className="modal-top-title">{selected.title}</p>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close profile">✕</button>
            </div>

            {/* Body */}
            <div className="modal-body">

              <div className="modal-section">
                <p className="modal-section-label">About</p>
                {selected.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="modal-section">
                <p className="modal-section-label">Admissions</p>
                <ul className="modal-list">
                  {selected.admissions.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>

              <div className="modal-section">
                <p className="modal-section-label">Education</p>
                <ul className="modal-list">
                  {selected.education.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </div>

              <div className="modal-section">
                <p className="modal-section-label">Practice Areas</p>
                <div className="modal-tags">
                  {selected.practiceAreas.map((area, i) => (
                    <span key={i} className="modal-tag accent">{area}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <p className="modal-section-label">Professional Memberships</p>
                <div className="modal-tags">
                  {selected.memberships.map((m, i) => (
                    <span key={i} className="modal-tag">{m}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}