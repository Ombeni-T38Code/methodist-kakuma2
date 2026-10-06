import React from "react";
import "./ChurchCard.css";

const ChurchCard = ({
  church,
  index,
  onView,
  onPray,
}) => {
  const isFeatured = index % 3 === 0;

  return (
    <article
      className={`church-card ${
        isFeatured ? "church-horizontal" : "church-grid-card"
      }`}
    >

      <div className="church-top-line"></div>

      <div className="church-card-content">

        <div className="church-image-wrapper">
          <img
            src={church.image}
            alt={church.name}
          />
        </div>

        <div className="church-card-info">

          <div>

            <span className="church-zone">
              ✦ {church.zone}
            </span>

            <h2>
              {church.name}
            </h2>

            <p>
              {church.description}
            </p>

          </div>

          <div className="church-actions">

            <button
              className="view-button"
              onClick={onView}
            >
              View Church
              <span>→</span>
            </button>

            <button
              className="pray-button"
              onClick={onPray}
            >
              ♡
              <span>Pray</span>
            </button>

          </div>

        </div>

      </div>

    </article>
  );
};

export default ChurchCard;