import { useEffect, useState } from "react";

import centralKakuma1 from "../../assets/Methodist image/churches/Central Kakuma 1.jpg";
import centralKakuma2 from "../../assets/Methodist image/churches/Central Kakuma 2.jpg";
import centralKakuma3 from "../../assets/Methodist image/churches/Central Kakuma 3.jpg";
import centralKakuma4 from "../../assets/Methodist image/churches/Central Kakuma 4.jpg";

import "./Churches.css";

/* =========================================================
   CHURCH DATA
   ========================================================= */

const churchesData = [
  {
    id: "kakuma-1",
    name: "Central Kakuma 1",
    zone: "Kakuma 1",
    community: "Kakuma 1 Community",
    pastor: "Church Leadership",
    members: 340,
    established: "2012",
    image: centralKakuma1,
    description:
      "A welcoming worship community in Kakuma 1, bringing people together through worship, prayer, fellowship, spiritual growth, and service.",
    weeklyServices: [
      { day: "Sunday", title: "Main Service" },
      { day: "Every Thursday", title: "Midweek Service" },
    ],
    programs: [
      "Praise & Worship — Tuesday & Saturday",
      "Uhuru Choir — Monday, Wednesday & Saturday",
      "JC Band — Tuesday & Friday",
      "Fadhili Choir — Tuesday & Friday",
    ],
    needs: [
      "Bibles and Christian literature",
      "Chairs and worship equipment",
      "Support for community activities",
    ],
    contact: "Church Office",
  },
  {
    id: "kakuma-2",
    name: "Central Kakuma 2",
    zone: "Kakuma 2",
    community: "Kakuma 2 Community",
    pastor: "Church Leadership",
    members: 210,
    established: "2015",
    image: centralKakuma2,
    description:
      "A vibrant worship community in Kakuma 2, bringing people together for worship, fellowship, prayer, spiritual growth, and service.",
    weeklyServices: [
      { day: "Sunday", title: "Main Service" },
      { day: "Every Thursday", title: "Midweek Service" },
    ],
    programs: [
      "Praise & Worship — Tuesday & Saturday",
      "Uhuru Choir — Monday, Wednesday & Saturday",
      "JC Band — Tuesday & Friday",
      "Fadhili Choir — Tuesday & Friday",
    ],
    needs: [
      "Chairs and church furniture",
      "Children's ministry materials",
      "Worship equipment",
    ],
    contact: "Church Office",
  },
  {
    id: "kakuma-3",
    name: "Central Kakuma 3",
    zone: "Kakuma 3",
    community: "Kakuma 3 Community",
    pastor: "Church Leadership",
    members: 180,
    established: "2018",
    image: centralKakuma3,
    description:
      "A growing worship community in Kakuma 3 where people gather to worship, fellowship, grow in faith, and serve together.",
    weeklyServices: [
      { day: "Sunday", title: "Main Service" },
      { day: "Every Thursday", title: "Midweek Service" },
    ],
    programs: [
      "Praise & Worship — Tuesday & Saturday",
      "Uhuru Choir — Monday, Wednesday & Saturday",
      "JC Band — Tuesday & Friday",
      "Fadhili Choir — Tuesday & Friday",
    ],
    needs: [
      "Sound system and microphones",
      "Bibles and study materials",
      "Educational supplies",
    ],
    contact: "Church Office",
  },
  {
    id: "kakuma-4",
    name: "Central Kakuma 4",
    zone: "Kakuma 4",
    community: "Kakuma 4 Community",
    pastor: "Church Leadership",
    members: 260,
    established: "2020",
    image: centralKakuma4,
    description:
      "A welcoming worship community in Kakuma 4, centered on worship, fellowship, music ministry, and service to the community.",
    weeklyServices: [
      { day: "Sunday", title: "Main Service" },
      { day: "Every Thursday", title: "Midweek Service" },
    ],
    programs: [
      "Praise & Worship — Tuesday & Saturday",
      "Uhuru Choir — Monday, Wednesday & Saturday",
      "JC Band — Tuesday & Friday",
      "Fadhili Choir — Tuesday & Friday",
    ],
    needs: [
      "Musical instruments and accessories",
      "Worship equipment",
      "Church and hygiene supplies",
    ],
    contact: "Church Office",
  },
];

/* =========================================================
   HEADER
   ========================================================= */

function ChurchesHeader() {
  return (
    <header className="churches-header">
      <h1 className="churches-title">Midweek Services</h1>

      <p className="churches-swahili-subtitle">
        Ibada za Katikati ya Wiki
      </p>

      <div className="churches-divider" aria-hidden="true">
        <span></span>
        <div className="divider-cross-circle">
          <span>†</span>
        </div>
        <span></span>
      </div>

      <p className="churches-description">
        Join us throughout the week for meaningful prayer, fellowship, and uplifting worship. Come and recharge your spirit, deepen your faith, and grow together in God’s grace.
      </p>
    </header>
  );
}

/* =========================================================
   CHURCH CARD (BACKGROUND IMAGE WITH REVEAL OVERLAY)
   ========================================================= */

function ChurchCard({ church, onView, onPray }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <article
      className={`church-card ${isTouched ? "is-touched" : ""}`}
      style={{ backgroundImage: `url(${church.image})` }}
      onTouchStart={() => setIsTouched(!isTouched)}
    >
      {/* TAP HINT BADGE */}
      <div className="touch-hint-badge">
        <span>Tap to view info</span>
      </div>

      {/* FULL OVERLAY CONTAINING ALL HIDDEN COMPONENTS */}
      <div className="church-image-overlay">
        <div className="church-image-overlay-content">
          <span className="church-card-label">METHODIST CHURCH</span>
          <h2>{church.name}</h2>

          <p className="church-card-description">
            {church.description}
          </p>

          {/* INFO ROW */}
          <div className="church-info-row">
            <div className="church-info">
              <div className="church-info-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
              </div>
              <div>
                <small>Location</small>
                <strong>{church.zone}</strong>
              </div>
            </div>

            <div className="church-info">
              <div className="church-info-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M3.5 19c.7-3.1 2.6-4.7 5.5-4.7s4.8 1.6 5.5 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <small>Community</small>
                <strong>{church.community}</strong>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="church-actions">
            <button
              type="button"
              className="view-button"
              onClick={(e) => {
                e.stopPropagation();
                onView();
              }}
            >
              <span>View Church</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              type="button"
              className="pray-button"
              onClick={(e) => {
                e.stopPropagation();
                onPray();
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 20V5M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Pray</span>
            </button>
          </div>

        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CHURCH DETAILS MODAL
   ========================================================= */

function ChurchDetails({ church, onClose, onPray }) {
  const serviceItems = [
    ...(church.weeklyServices || []).map((service) => ({
      id: `${service.day}-${service.title}`,
      label: `${service.day}: ${service.title}`,
    })),
    ...(church.programs || []).map((program) => ({
      id: program,
      label: program,
    })),
  ];

  return (
    <div className="church-modal-overlay" onClick={onClose}>
      <div
        className="church-details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="details-image">
          <img src={church.image} alt={church.name} />
          <div className="details-image-overlay"></div>

          <button
            className="close-details"
            onClick={onClose}
            aria-label="Close details"
          >
            ×
          </button>

          <div className="details-title">
            <span>{church.zone}</span>
            <h2>{church.name}</h2>
          </div>
        </div>

        <div className="details-body">
          <p className="details-description">{church.description}</p>

          <div className="church-stats">
            <div>
              <span>Church Leadership</span>
              <strong>{church.pastor}</strong>
            </div>

            <div>
              <span>Active Members</span>
              <strong>{church.members} Believers</strong>
            </div>

            <div>
              <span>Established</span>
              <strong>{church.established}</strong>
            </div>
          </div>

          <section className="details-section">
            <h3>
              <span>✦</span> Weekly Services &amp; Programs
            </h3>

            <div className="program-list">
              {serviceItems.map((item) => (
                <div className="program-item" key={item.id}>
                  <span>✓</span>
                  {item.label}
                </div>
              ))}
            </div>
          </section>

          <section className="details-section">
            <h3>
              <span>♡</span> Current Ministry Needs
            </h3>

            <div className="needs-list">
              {church.needs.map((need) => (
                <span key={need}>• {need}</span>
              ))}
            </div>
          </section>

          <div className="details-actions">
            <button className="support-button" onClick={onPray}>
              ♡ Send Prayer &amp; Support
            </button>

            <button className="contact-pastor" type="button">
              ☎ Contact Church
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PRAYER MODAL
   ========================================================= */

function PrayerModal({ church, onClose }) {
  const [formData, setFormData] = useState({
    category: "Health & Healing",
    name: "",
    message: "",
    confidential: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const churchName =
    typeof church === "string" ? church : church?.name || "Kakuma Parish";

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.message.trim() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        onClose();
      }, 2200);
    }, 600);
  };

  return (
    <div
      className="prayer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="prayer-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-prayer"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <div className="prayer-header">
              <div className="prayer-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8v4l3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <h3 className="prayer-title">Pray With {churchName}</h3>

            <p className="prayer-subtitle">
              Your prayer request will be confidentially shared with our
              pastoral prayer team.
            </p>

            <form onSubmit={handleSubmit} className="prayer-form">
              <div className="prayer-field">
                <label htmlFor="prayer-category">Category / Intention</label>

                <select
                  id="prayer-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Health & Healing">Health &amp; Healing</option>
                  <option value="Family & Relationships">
                    Family &amp; Relationships
                  </option>
                  <option value="Financial Breakthrough">
                    Financial Breakthrough
                  </option>
                  <option value="Spiritual Growth">Spiritual Growth</option>
                  <option value="Guidance & Direction">
                    Guidance &amp; Direction
                  </option>
                  <option value="Gratitude & Praise">Gratitude &amp; Praise</option>
                </select>
              </div>

              <div className="prayer-field">
                <label htmlFor="prayer-name">Your Name (Optional)</label>

                <input
                  id="prayer-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anonymous or Full Name"
                  autoComplete="off"
                />
              </div>

              <div className="prayer-field">
                <label htmlFor="prayer-message">Prayer Request *</label>

                <textarea
                  id="prayer-message"
                  name="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your prayer request here..."
                />
              </div>

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  name="confidential"
                  checked={formData.confidential}
                  onChange={handleChange}
                />
                <span>
                  Keep confidential (Pastoral care team only)
                </span>
              </label>

              <div className="prayer-actions">
                <button
                  type="button"
                  className="cancel-prayer-btn"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-prayer-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="prayer-success">
            <div className="success-icon">✓</div>
            <h4>Prayer Request Received</h4>
            <p>
              Thank you for trusting us with your request. Our ministry team
              will keep you in prayer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN CHURCHES COMPONENT
   ========================================================= */

export default function Churches() {
  const [selectedChurch, setSelectedChurch] = useState(null);
  const [prayerChurch, setPrayerChurch] = useState(null);

  return (
    <main className="churches-page">
      <div className="churches-container">
        <ChurchesHeader />

        {/* CHURCHES GRID */}
        <section className="churches-grid" aria-label="Our churches">
          {churchesData.map((church) => (
            <ChurchCard
              key={church.id}
              church={church}
              onView={() => setSelectedChurch(church)}
              onPray={() => setPrayerChurch(church)}
            />
          ))}
        </section>

        {/* FOOTER MESSAGE */}
        <div className="churches-grid-footer">
          <span></span>
          <p>One Parish · Four Churches · One Community of Faith</p>
          <span></span>
        </div>
      </div>

      {/* DETAILS MODAL */}
      {selectedChurch && (
        <ChurchDetails
          church={selectedChurch}
          onClose={() => setSelectedChurch(null)}
          onPray={() => {
            setSelectedChurch(null);
            setPrayerChurch(selectedChurch);
          }}
        />
      )}

      {/* PRAYER MODAL */}
      {prayerChurch && (
        <PrayerModal
          church={prayerChurch}
          onClose={() => setPrayerChurch(null)}
        />
      )}
    </main>
  );
}