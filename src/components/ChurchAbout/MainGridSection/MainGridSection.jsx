import React from "react";
import "./MainGridSection.css";

export default function MainGridSection({
  galleryPhotos,
  pastor,
  onOpenPastors,
  onOpenPhoto,
}) {
  return (
    <section className="main-grid">
      <div className="gallery-column">
        <div className="top-photo-grid">
          {galleryPhotos.slice(0, 2).map((photo) => (
            <div
              key={photo.id}
              className={`photo-wrapper ${photo.class}`}
              onClick={() => onOpenPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="photo-img"
              />

              <div className="photo-hover-overlay">
                <span>🔍 Click to View</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`photo-wrapper ${galleryPhotos[2].class}`}
          onClick={() => onOpenPhoto(galleryPhotos[2])}
        >
          <img
            src={galleryPhotos[2].url}
            alt={galleryPhotos[2].caption}
            className="photo-img"
          />

          <div className="photo-hover-overlay">
            <span>🔍 Click to View</span>
          </div>

          <div className="overlay-badge">
            <span className="badge-number font-serif-heading">
              25+
            </span>

            <div>
              <span className="badge-title">
                Years of Ministry
              </span>

              <span className="badge-subtitle">
                in Kakuma & Turkana
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome-column">
        <div className="accent-border-left" />

        <div>
          <div className="card-top-header">
            <span className="category-tag">
              Pastoral Welcome
            </span>

            <span className="quote-mark font-serif-heading">
              ”
            </span>
          </div>

          <h2 className="pastoral-heading font-serif-heading">
            You're Welcome to Worship With Us
          </h2>

          <div className="body-content">
            <p>
              As pastors and servant leaders of the
              Methodist Church in Kakuma, we are honored
              in this divine moment to share God's calling
              upon our hearts. We believe every person is
              created for His glory, and in this appointed
              time, He has gathered us together to walk
              with you in faith, reconciliation, and
              enduring love.
            </p>

            <p>
              Whether you are seeking spiritual
              breakthrough, a place for quiet prayer, or a
              vibrant family of faith, our doors and hearts
              are open to you.
            </p>
          </div>
        </div>

        <button
          className="author-footer"
          onClick={onOpenPastors}
        >
          <img
            src={pastor.image}
            alt={pastor.name}
            className="author-avatar-img"
          />

          <div>
            <h4 className="author-name">
              {pastor.name}
            </h4>

            <p className="author-role">
              {pastor.role}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}