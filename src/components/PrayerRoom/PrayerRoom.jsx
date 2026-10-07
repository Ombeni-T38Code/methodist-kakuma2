
import React, { useEffect, useState } from "react";
import sanctuaryImage from "../../assets/PrayerRoom/Sanctuary of Peace.jpg";
import reflectionImage from "../../assets/PrayerRoom/Personal reflection.jpg";
import intercessionImage from "../../assets/PrayerRoom/Communal intercession.jpg";
import "./PrayerRoom.css";

const PrayerRoom = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const openModal = (modal) => {
    setActiveModal(modal);
    setSubmitted(false);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSubmitted(false);
  };

  const handlePrayerSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setActiveModal(null);
      setSubmitted(false);
      event.target.reset();
    }, 1800);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section className="prayer-room">
      <main className="prayer-room-container">
        {/* LEFT CONTENT */}
        <section className="prayer-room-content">
          <div>
            <span className="schedule-badge">
              Every Wednesday / Friday / Saturday
            </span>
          </div>

          <div className="prayer-heading">
            <h1>Prayer Room</h1>

            <h2>
              <span className="prayer-heading-accent">
                A Place for Prayer, Reflection and Fellowship
              </span>
            </h2>
          </div>

          <div className="location-box">
            <div className="location-icon">⌖</div>

            <div>
              <span>Location: </span>
              <strong>Kakuma 2</strong>
              <span className="location-note">
                {" "}
                (Accessible to all seekers and believers)
              </span>
            </div>
          </div>

          <p className="prayer-description">
            The Mungu Ni Jibu Prayer Room is an open spiritual sanctuary
            dedicated to quiet reflection, intense communal intercession,
            pastoral encouragement, and personal spiritual breakthrough.
            Here, heavy burdens are unburdened, hearts are renewed, and
            faith is strengthened in the living God.
          </p>

          <div className="prayer-actions">
            <button
              className="btn btn-dark"
              onClick={() => openModal("schedule")}
            >
              Prayer Schedule
            </button>

            <button
              className="btn btn-gold"
              onClick={() => openModal("request")}
            >
              <span>➤</span>
              Submit Prayer Request
            </button>

            <button
              className="btn btn-outline"
              onClick={() => openModal("location")}
            >
              Find Prayer Room
            </button>
          </div>
        </section>

        {/* RIGHT CARDS */}
        <section className="prayer-cards">
          {/* FEATURED CARD */}
          <button
            className="prayer-card featured-card"
            onClick={() => openModal("mainCard")}
            type="button"
          >
            <img
              src={sanctuaryImage}
              alt="Prayer sanctuary"
            />

            <div className="card-overlay" />

            <div className="featured-content">
              <div className="sanctuary-label">
                <span>♨</span>
                SANCTUARY OF PEACE
              </div>

              <blockquote>
                “Do not be anxious about anything, but in every situation,
                by prayer and petition, with thanksgiving, present your
                requests to God.”
              </blockquote>

              <div className="scripture-meta">
                <span>— Philippians 4:6</span>

                <span className="confidential">
                  <span>🔒</span>
                  Confidential Pastoral Counsel
                </span>
              </div>
            </div>
          </button>

          {/* REFLECTION */}
          <button
            className="prayer-card small-card"
            onClick={() => openModal("reflection")}
            type="button"
          >
            <img
              src={reflectionImage}
              alt="Personal reflection"
            />

            <div className="small-card-overlay" />

            <div className="small-card-title">
              <span>▤</span>
              Personal Reflection
            </div>
          </button>

          {/* INTERCESSION */}
          <button
            className="prayer-card small-card"
            onClick={() => openModal("intercession")}
            type="button"
          >
            <img
              src={intercessionImage}
              alt="Communal intercession"
            />

            <div className="small-card-overlay" />

            <div className="small-card-title">
              <span>♧</span>
              Communal Intercession
            </div>
          </button>
        </section>
      </main>

      {/* BACKDROP */}
      {activeModal && (
        <div
          className="prayer-modal-backdrop"
          onClick={closeModal}
          aria-hidden="true"
        />
      )}

      {/* SCHEDULE MODAL */}
      {activeModal === "schedule" && (
        <div className="prayer-modal schedule-modal">
          <div className="modal-header">
            <h3>
              <span>◷</span>
              Prayer Room Weekly Schedule
            </h3>

            <button onClick={closeModal} type="button">
              ×
            </button>
          </div>

          <div className="modal-body">
            <div className="open-policy">
              <strong>Open Doors Policy</strong>
              <p>
                All sessions are free to attend. Pastoral guidance is
                always available.
              </p>
            </div>

            <div className="schedule-list">
              <div className="schedule-item">
                <div>
                  <strong>Wednesday</strong>
                  <span>Mid-Week Spiritual Breakthrough</span>
                </div>

                <time>9:00 AM – 2:00 PM</time>
              </div>

              <div className="schedule-item">
                <div>
                  <strong>Friday</strong>
                  <span>Morning Vigil & Communal Intercession</span>
                </div>

                <time>9:00 AM – 2:00 PM</time>
              </div>
              <div className="schedule-item">
                <div>
                  <strong>Friday</strong>
                  <span>Night Vigil & Communal Intercession</span>
                </div>

                <time>9:00 PM – 3:00 PM</time>
              </div>
              <div className="schedule-item">
                <div>
                  <strong>Saturday</strong>
                  <span>Quiet Reflection & Individual Prayer</span>
                </div>

                <time>9:00 AM – 2:00 PM</time>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={closeModal} type="button">
              Close
            </button>
          </div>
        </div>
      )}

      {/* PRAYER REQUEST MODAL */}
      {activeModal === "request" && (
        <div className="prayer-modal request-modal">
          <div className="modal-header">
            <div>
              <h3>Submit Prayer Request</h3>

              <p>
                Our team and elders will pray over your request.
              </p>
            </div>

            <button onClick={closeModal} type="button">
              ×
            </button>
          </div>

          <form
            className="prayer-request-form"
            onSubmit={handlePrayerSubmit}
          >
            <div className="form-group">
              <label htmlFor="prayer-name">
                Your Name (Optional)
              </label>

              <input
                id="prayer-name"
                type="text"
                placeholder="Anonymous or Full Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prayer-intention">
                Prayer Intentions / Needs *
              </label>

              <textarea
                id="prayer-intention"
                required
                rows="4"
                placeholder="Share your burdens, thanksgiving, or specific prayers..."
              />
            </div>

            {submitted && (
              <div className="submit-success">
                ✓ Your prayer request has been received with peace and
                care.
              </div>
            )}

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LOCATION MODAL */}
      {activeModal === "location" && (
        <div className="prayer-modal location-modal">
          <div className="modal-header">
            <h3>
              <span>⌖</span>
              Location Details
            </h3>

            <button onClick={closeModal} type="button">
              ×
            </button>
          </div>

          <div className="modal-body">
            <div className="location-preview">
              <div>
                <span className="large-location-icon">⌖</span>

                <strong>Kakuma Town Sanctuary</strong>

                <p>Central Town Main Road, Kakuma</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={closeModal} type="button">
              Close
            </button>
          </div>
        </div>
      )}

      {/* SANCTUARY MODAL */}
      {activeModal === "mainCard" && (
        <FeatureModal
          icon="♨"
          title="Sanctuary of Peace"
          text="Philippians 4:6 serves as our core foundation. Rest in divine communion with complete confidentiality and pastoral care."
          buttonText="Understood"
          buttonClass="gold-modal-btn"
          onClose={closeModal}
        />
      )}

      {/* REFLECTION MODAL */}
      {activeModal === "reflection" && (
        <FeatureModal
          icon="▤"
          title="Personal Reflection"
          text="Quiet solitude space with Bibles and devotional guides for personal meditation and communion."
          buttonText="Close"
          buttonClass="blue-modal-btn"
          onClose={closeModal}
        />
      )}

      {/* INTERCESSION MODAL */}
      {activeModal === "intercession" && (
        <FeatureModal
          icon="♧"
          title="Communal Intercession"
          text="Gather with leaders and believers to intercede together for families, the community, and personal prayer needs."
          buttonText="Close"
          buttonClass="purple-modal-btn"
          onClose={closeModal}
        />
      )}
    </section>
  );
};

const FeatureModal = ({
  icon,
  title,
  text,
  buttonText,
  buttonClass,
  onClose,
}) => {
  return (
    <div className="prayer-modal feature-modal">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <button
        type="button"
        className={buttonClass}
        onClick={onClose}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PrayerRoom;
