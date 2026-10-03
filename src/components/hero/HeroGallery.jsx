import React from "react";
import ImageSlider from "./ImageSlider";
import { galleryColumns } from "../../data/galleryData";
import "./HeroGallery.css";

export default function HeroGallery() {
  return (
    <div className="hero-gallery">
      {galleryColumns.map((colImages, index) => (
        <ImageSlider key={index} images={colImages} />
      ))}
    </div>
  );
}