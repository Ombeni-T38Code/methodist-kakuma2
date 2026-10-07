import React from "react";
import Button from "../ui/Button";
import "./HeroIntro.css";

export default function HeroIntro() {
  return (
    <div className="hero-intro">
      <span className="hero-kicker">
        Worship together • Grow in truth • Walk in faith
      </span>

      <h1 className="hero-title">
        Methodist <span>Church</span>
      </h1>

      <h2 className="hero-slogan">
        Faith, Peace, and Hope in the Desert.
      </h2>

      <p className="hero-copy">
        Find trusted information about worship, prayer, and community life in
        the Kakuma Knowledge Base.
      </p>

      <div className="hero-actions">
        <Button variant="primary" href="#services">
          <i className="fas fa-church mr-2" aria-hidden="true"></i>
          Join Us This Sunday
        </Button>
        <Button variant="secondary" href="/resources">
          Ask Church AI
          <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}