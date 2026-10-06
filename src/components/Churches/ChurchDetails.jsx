import React from "react";
import "./ChurchDetails.css";

const ChurchDetails = ({
  church,
  onClose,
  onPray,
}) => {
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
    <div
      className="church-modal-overlay"
      onClick={onClose}
    >

      <div
        className="church-details-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="details-image">

          <img
            src={church.image}
            alt={church.name}
          />

          <button
            className="close-details"
            onClick={onClose}
          >
            ×
          </button>

          <div className="details-title">

            <span>
              {church.zone}
            </span>

            <h2>
              {church.name}
            </h2>

          </div>

        </div>

        <div className="details-body">

          <p className="details-description">
            {church.description}
          </p>

          <div className="church-stats">

            <div>
              <span>Resident Pastor</span>
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
              📅 Weekly Services & Programs
            </h3>

            <div className="program-list">

              {serviceItems.map((item) => (
                <div
                  className="program-item"
                  key={item.id}
                >
                  <span>✓</span>
                  {item.label}
                </div>
              ))}

            </div>

          </section>

          <section className="details-section">

            <h3>
              ⚠ Current Ministry Needs
            </h3>

            <div className="needs-list">

              {church.needs.map((need) => (
                <span key={need}>
                  • {need}
                </span>
              ))}

            </div>

          </section>

          <div className="details-actions">

            <button
              className="support-button"
              onClick={onPray}
            >
              ♡ Send Prayer & Support
            </button>

            <a
              href={`tel:${church.contact}`}
              className="contact-pastor"
            >
              ☎ Contact Pastor
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChurchDetails;