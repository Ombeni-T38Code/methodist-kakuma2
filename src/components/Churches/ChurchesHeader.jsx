
import React from "react";
import "./ChurchesHeader.css";

const ChurchesHeader = () => {
  return (
    <header className="churches-header">
      <h1 className="churches-title">Midweek Services</h1>

      <p className="churches-swahili-subtitle">
        Ibada za Katikati ya Wiki
      </p>

      <div className="churches-divider" aria-hidden="true">
        <span className="divider-line"></span>
        <span className="divider-cross">✝</span>
        <span className="divider-line"></span>
      </div>

      <p className="churches-description">
        Join us throughout the week for meaningful prayer, fellowship, and
        uplifting worship. Come and recharge your spirit, deepen your faith,
        and grow together in God’s grace.
      </p>
    </header>
  );
};

export default ChurchesHeader;
