import React from "react";
import HeroIntro from "./HeroIntro";
import HeroGallery from "./HeroGallery";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <HeroIntro />
        <HeroGallery />
      </div>
    </section>
  );
}