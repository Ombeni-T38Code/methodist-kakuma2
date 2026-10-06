import React, { useState } from "react";
import "./ChapelsModal.css";

export default function ChapelsModal({ chapels, onClose }) {
  const [activeTab, setActiveTab] = useState(chapels[0].id);
  const selectedChapel = chapels.find((chapel) => chapel.id === activeTab);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className="category-tag">Worship Locations</span>
        <h2 className="pastoral-heading font-serif-heading">
          Our 4 Fellowship Chapels
        </h2>
        <p className="modal-description">
          Select a chapel to view Sunday service hours, locations, and leadership.
        </p>

        <div className="tab-bar">
          {chapels.map((chapel) => (
            <button
              key={chapel.id}
              className={`tab-btn ${activeTab === chapel.id ? "active" : ""}`}
              onClick={() => setActiveTab(chapel.id)}
            >
              {chapel.name.split(" ")[0]} Chapel
            </button>
          ))}
        </div>

        {selectedChapel && (
          <div className="chapel-details-box">
            <h3 className="font-serif-heading">{selectedChapel.name}</h3>
            <p>{selectedChapel.desc}</p>
            <div className="chapel-details-list">
              <p>
                📍 <strong>Location:</strong> {selectedChapel.location}
              </p>
              <p>
                ⏰ <strong>Service Times:</strong> {selectedChapel.serviceTime}
              </p>
              <p>
                👤 <strong>Resident Pastor:</strong> {selectedChapel.leader}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}