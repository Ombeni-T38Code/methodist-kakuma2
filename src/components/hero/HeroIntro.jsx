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
        A place to belong, a community to grow, a family pursuing Christ together.
      </h2>

      <p className="hero-copy">
        Whether you're looking for community or exploring faith, you are welcome here. Join us as we gather in worship, dive into Scripture, and pursue Christ together.
      </p>

      <div className="hero-actions">
        <Button variant="primary" href="#services">
          <i className="fas fa-church mr-2" aria-hidden="true"></i>
          Join Us This Sunday
        </Button>
        <Button variant="secondary" href="#about">
          Learn More
          <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}