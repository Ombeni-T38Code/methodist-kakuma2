import React from "react";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Worship Services</h1>
      <p className="page-description">
        Join us for our weekly worship services and spiritual gatherings.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <h3 className="text-xl font-bold text-accent mb-2">Sunday Worship</h3>
          <p className="text-sm text-gray-300">Every Sunday from 9:00 AM – 12:00 PM</p>
        </div>
        <div className="service-card">
          <h3 className="text-xl font-bold text-accent mb-2">Mid-Week Bible Study</h3>
          <p className="text-sm text-gray-300">Every Wednesday from 5:00 PM – 6:30 PM</p>
        </div>
      </div>
    </div>
  );
}