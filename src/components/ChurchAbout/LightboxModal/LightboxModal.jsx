import React from "react";
import "./LightboxModal.css";

export default function LightboxModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card lightbox-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img
          src={photo.url}
          alt={photo.caption}
          className="lightbox-image"
        />
        <p className="lightbox-caption">{photo.caption}</p>
      </div>
    </div>
  );
}