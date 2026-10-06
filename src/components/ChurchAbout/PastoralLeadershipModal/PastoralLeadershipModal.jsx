import React, { useState } from "react";
import "./PastoralLeadershipModal.css";

export default function PastoralLeadershipModal({
  pastors,
  onClose,
  onShowToast,
}) {
  const [selectedPastor, setSelectedPastor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    chapel: "Central Fellowship Chapel",
    message: "",
  });

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    onShowToast(
      `Message sent to ${selectedPastor.name}! We will reach out shortly.`,
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className="category-tag">Direct Communication</span>
        <h2 className="pastoral-heading font-serif-heading">
          Pastoral Leadership Team
        </h2>
        <p className="modal-description">
          Connect with our pastors for spiritual guidance, prayer requests, or
          counseling.
        </p>

        {selectedPastor ? (
          <div className="pastor-contact-area">
            <button
              className="back-button"
              onClick={() => setSelectedPastor(null)}
            >
              ← Back to All Pastors
            </button>
            <div className="pastor-item-card">
              <img
                src={selectedPastor.image}
                alt={selectedPastor.name}
                className="pastor-large-avatar"
              />
              <div>
                <h4>{selectedPastor.name}</h4>
                <p>{selectedPastor.role}</p>
                <strong>{selectedPastor.chapel}</strong>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="pastor-form">
              <input
                name="name"
                type="text"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={updateFormData}
              />
              <div className="form-two-columns">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  required
                  value={formData.phone}
                  onChange={updateFormData}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={formData.email}
                  onChange={updateFormData}
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we pray for or assist you?"
                rows="4"
                required
                value={formData.message}
                onChange={updateFormData}
              />
              <button type="submit" className="btn-primary full-width">
                Send Message to {selectedPastor.name.split(" ")[0]}
              </button>
            </form>
          </div>
        ) : (
          <div className="pastors-list">
            {pastors.map((pastor) => (
              <div key={pastor.id} className="pastor-item-card">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="pastor-large-avatar"
                />
                <div className="pastor-info">
                  <h4>{pastor.name}</h4>
                  <p>{pastor.role}</p>
                  <strong>{pastor.chapel}</strong>
                </div>
                <button
                  onClick={() => setSelectedPastor(pastor)}
                  className="btn-secondary contact-button"
                >
                  Contact
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}