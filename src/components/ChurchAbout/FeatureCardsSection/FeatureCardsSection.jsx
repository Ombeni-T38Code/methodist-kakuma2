import React from "react";
import "./FeatureCardsSection.css";

export default function FeatureCardsSection({
  pastors,
  onOpenPastors,
  onOpenChapels,
}) {
  return (
    <div>
      <section className="feature-cards-grid">
        <FeatureCard
          type="amber"
          icon="📖"
          tag="Spiritual Anchor"
          title="Faith"
          description="Rooted in Scripture and Christ, nurturing spiritual maturity, theological reflection, and deep prayer in every season of life."
        />

        <FeatureCard
          type="navy"
          icon="👥"
          tag="One Family"
          title="Fellowship"
          description="United in grace and love across diverse cultures, backgrounds, and generations as one resilient household of God."
        />

        <FeatureCard
          type="amber"
          icon="🤝"
          tag="Christlike Care"
          title="Service"
          description="Hands and feet in the community, caring for vulnerable neighbors, visiting the sick, and carrying hope into Kakuma."
        />
      </section>

      <footer className="action-footer">
        <button
          onClick={onOpenChapels}
          className="btn-primary"
        >
          <span>Explore Our 4 Chapels</span>
          <span>+</span>
        </button>

        <button
          onClick={onOpenPastors}
          className="btn-secondary"
        >
          <div className="avatar-stack-container">
            {pastors.map((pastor) => (
              <img
                key={pastor.id}
                src={pastor.image}
                alt={pastor.name}
                className="btn-pastor-avatar-stack"
              />
            ))}
          </div>

          <span>
            Connect With Pastoral Leadership
          </span>

          <span>→</span>
        </button>
      </footer>
    </div>
  );
}

function FeatureCard({
  type,
  icon,
  tag,
  title,
  description,
}) {
  return (
    <div className="feature-card">
      <div className={`top-accent-line ${type}`} />

      <div className="icon-badge">
        <span>{icon}</span>
      </div>

      <span className="feature-tag">{tag}</span>

      <h3 className="feature-title font-serif-heading">
        {title}
      </h3>

      <p className="feature-description">
        {description}
      </p>
    </div>
  );
}