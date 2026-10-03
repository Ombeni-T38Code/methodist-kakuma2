import React from "react";
import Button from "../ui/Button";
import "./HeroIntro.css";

export default function HeroIntro() {
  return (
    <div className="hero-intro">
      <h1>
        Methodist 
        <span>Church</span>
      </h1>
      <span>Experience the power of God's word</span>
      <p className="hero-copy">
        A welcoming community of faith, worship, and fellowship. Join us as we
        grow together in Christ, support one another, and serve our community
        with love and hope.
      </p>
      <div className="hero-actions">
        <Button variant="primary" href="#">
          <i className="fas fa-church mr-2"></i>
          Find a Church
        </Button>
        <Button variant="secondary" href="#">
          Learn More
          <i className="fas fa-arrow-right ml-2"></i>
        </Button>
      </div>
    </div>
  );
}