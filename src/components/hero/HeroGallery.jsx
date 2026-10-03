import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { galleryColumns } from "../../data/galleryData";
import "./HeroGallery.css";

export default function HeroGallery() {
  const slides = galleryColumns.flat();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 12000);

    return () => window.clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <>
      <div className="hero-gallery hero-gallery-desktop">
        {galleryColumns.map((colImages, index) => (
          <ImageSlider key={index} images={colImages} />
        ))}
      </div>
      <div className="hero-gallery-mobile" aria-hidden="true">
        {slides.map((image, index) => (
          <div
            key={image.src}
            className={`hero-background-slide${index === activeSlide ? " is-active" : ""}`}
            style={{
              backgroundImage: `url("${image.src}")`,
            }}
          />
        ))}
      </div>
    </>
  );
}