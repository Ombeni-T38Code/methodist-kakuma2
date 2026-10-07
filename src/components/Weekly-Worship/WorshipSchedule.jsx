import React from "react";
import "./WorshipSchedule.css";

const servicesTop = [
  {
    day: "Sunday",
    badge: "Principal Service",
    secondaryBadge: "Celebration",
    title: "Sunday Main Worship Service",
    location: "Kakuma 2 Methodist Church (Main Circuit)",
    description:
      "Divine worship, Eucharistic celebration, Holy Communion, uplifting choral anthems by Uhuru & Fadhili choirs, and biblical preaching.",
    footerLeft: "Holy Communion & Sunday School",
    footerRight: "All Welcome",
    icon: "✦",
  },
  {
    day: "Wednesday",
    badge: "Midweek",
    title: "Prayer Room Services",
    location: "Kakuma 2",
    description:
      "Dedicated evening intercession, scripture contemplation, and communal burdens laid before God in fervent fellowship.",
    footerLeft: "Evening Intercession",
    footerRight: "Open Sanctuary",
    icon: "◐",
  },
];

const servicesBottom = [
  {
    day: "Friday",
    badge: "Vigil",
    title: "Prayer Room Services",
    location: "Kakuma 2",
    description:
      "Fervent healing prayer, repentance, individual pastoral counsel, and spiritual rejuvenation for all believers and seekers.",
    footerLeft: "Healing & Repentance",
    footerRight: "Confidential Counsel",
    icon: "♥",
  },
  {
    day: "Saturday",
    badge: "Fellowship",
    title: "Prayer Room Services",
    location: "Kakuma 2",
    description:
      "Preparatory weekend prayer, youth devotionals, choir rehearsal dedication, and joyful songs of praise and gratitude.",
    footerLeft: "Youth & Choir Dedication",
    footerRight: "God-Exalted Worship",
    icon: "♟",
  },
];

const churches = ["Kakuma 1", "Kakuma 2", "Kakuma 3", "Kakuma 4"];

const ServiceCard = ({
  day,
  badge,
  secondaryBadge,
  title,
  location,
  description,
  footerLeft,
  footerRight,
  icon,
}) => {
  return (
    <article className="worship-card">
      <div>
        <div className="worship-card-header">
          <div className="worship-day-group">
            <h2>{day}</h2>

            <span className="worship-badge worship-badge-amber">
              {badge}
            </span>
          </div>

          {secondaryBadge && (
            <span className="worship-badge worship-badge-gray">
              ✦ {secondaryBadge}
            </span>
          )}
        </div>

        <h3 className="worship-service-title">{title}</h3>

        <div className="worship-location">
          <span className="worship-location-icon">⌖</span>

          <span>
            Location:{" "}
            <span className="worship-location-text">{location}</span>
          </span>
        </div>

        <p className="worship-description">{description}</p>
      </div>

      <div className="worship-card-footer">
        <div className="worship-footer-left">
          <span className="worship-footer-icon">{icon}</span>
          <span>{footerLeft}</span>
        </div>

        <span className="worship-footer-right">{footerRight}</span>
      </div>
    </article>
  );
};

const FeaturedThursday = () => {
  return (
    <article className="worship-featured">
      <div className="worship-watermark">✝</div>

      <div className="worship-featured-content">
        <div className="worship-featured-header">
          <div className="worship-day-group">
            <h2>Thursday</h2>

            <span className="worship-badge worship-badge-gold">
              👥 Communal Assembly
            </span>
          </div>

          <span className="worship-badge worship-badge-navy">
            All 4 Stations Gather
          </span>
        </div>

        <h3 className="worship-featured-title">
          Four Churches Service
        </h3>

        <div className="worship-featured-location">
          <span className="worship-location-icon">⌖</span>

          <div className="worship-stations">
            {churches.map((church) => (
              <span className="worship-station-pill" key={church}>
                {church}
              </span>
            ))}
          </div>
        </div>

        <p className="worship-featured-description">
          Communal weekly worship service across all four church stations
          with joint choir presentations, combined praise by Uhuru and
          Fadhili choirs, prayer, and uplifting preaching.
        </p>
      </div>

      <div className="worship-featured-footer">
        <div className="worship-featured-tags">
          <div className="worship-featured-item">
            <span>👥</span>
            <span>Combined Congregation & Ministers</span>
          </div>

          <div className="worship-featured-item">
            <span>♪</span>
            <span>Joint Choirs Presentation</span>
          </div>
        </div>

        <span className="worship-badge worship-badge-flagship">
          Flagship Weekly Assembly
        </span>
      </div>
    </article>
  );
};

const WorshipSchedule = () => {
  return (
    <section className="worship-section">
      <div className="worship-container">

        {/* Header */}
        <header className="worship-header">
         
          <h1 className="worship-title font-serif-heading">
        Weekly Worship & {" "}
        <span className="worship-title-accent">
          Prayer
        </span>
      </h1>
          <p>
            Gather with us throughout the week across Kakuma for communal
            intercession, teaching, and joyful adoration.
          </p>
        </header>

        {/* Sunday + Wednesday */}
        <div className="worship-grid">
          {servicesTop.map((service) => (
            <ServiceCard
              key={service.day}
              {...service}
            />
          ))}
        </div>

        {/* Thursday Featured */}
        <FeaturedThursday />

        {/* Friday + Saturday */}
        <div className="worship-grid">
          {servicesBottom.map((service) => (
            <ServiceCard
              key={service.day}
              {...service}
            />
          ))}
        </div>

        {/* Notice */}
        <footer className="worship-notice-wrapper">
          <div className="worship-notice">
            <div className="worship-info">i</div>

            <p>
              <strong>Important Notice:</strong>{" "}
              Specific service start times are coordinated seasonally.
              Please consult with your local parish pastor or administrator
              for this week's exact hour confirmation.
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default WorshipSchedule;