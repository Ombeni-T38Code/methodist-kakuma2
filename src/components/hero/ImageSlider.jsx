import React from "react";
import "./ImageSlider.css";

export default function ImageSlider({ images }) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="hero-gallery-column">
      <div className="imageSlider">
        {duplicatedImages.map((img, index) => (
          <div key={index} className="hero-image-card">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}