import React, { useState, useEffect } from "react";
import "./PrayerModal.css";

const PrayerModal = ({ church, onClose }) => {
  const [formData, setFormData] = useState({
    category: "Health & Healing",
    name: "",
    message: "",
    confidential: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Safely normalize church name string or object
  const churchName = typeof church === "string" ? church : church?.name || "Kakuma Parish";

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        onClose();
      }, 2200);
    }, 600);
  };

  return (
    <div className="prayer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="prayer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-prayer" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="prayer-header">
              <div className="prayer-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
            </div>

            <h3 className="prayer-title">Pray With {churchName}</h3>
            <p className="prayer-subtitle">
              Your prayer request will be confidentially shared with our pastoral prayer team.
            </p>

            <form onSubmit={handleSubmit} className="prayer-form">
              <div className="prayer-field">
                <label htmlFor="category">Category / Intention</label>
                <div className="custom-select-wrap">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Health & Healing">Health &amp; Healing</option>
                    <option value="Family & Relationships">Family &amp; Relationships</option>
                    <option value="Financial Breakthrough">Financial Breakthrough</option>
                    <option value="Spiritual Growth">Spiritual Growth</option>
                    <option value="Guidance & Direction">Guidance &amp; Direction</option>
                    <option value="Gratitude & Praise">Gratitude &amp; Praise</option>
                  </select>
                </div>
              </div>

              <div className="prayer-field">
                <label htmlFor="name">Your Name (Optional)</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anonymous or Full Name"
                  autoComplete="off"
                />
              </div>

              <div className="prayer-field">
                <label htmlFor="message" className="label-with-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Prayer Request *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your prayer request here..."
                />
              </div>

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  name="confidential"
                  checked={formData.confidential}
                  onChange={handleChange}
                />
                <span>Keep confidential (Pastoral care team only)</span>
              </label>

              <div className="prayer-actions">
                <button
                  type="button"
                  className="cancel-prayer-btn"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>Cancel</span>
                </button>

                <button
                  type="submit"
                  className="submit-prayer-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <svg className="btn-send-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="prayer-success">
            <div className="success-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4>Prayer Request Received</h4>
            <p>
              Thank you for trusting us with your request. Our ministry team will keep you in prayer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerModal;