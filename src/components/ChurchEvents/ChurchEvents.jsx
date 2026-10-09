import { useState } from "react";
import { Bell, CalendarDays, CheckCircle2, X } from "lucide-react";
import "./ChurchEvents.css";

const categories = [
  "All",
  "Worship",
  "Prayer",
  "Bible Study",
  "Youth",
  "Choir",
  "Fellowship",
  "Outreach",
  "Conference",
];

export default function ChurchEvents() {
  const [contact, setContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contact.trim()) {
      setIsSubmitted(true);
      setContact("");
    }
  };

  return (
    <div className="church-events">
      <main className="events-container">
        <header className="events-header">
          <span className="events-eyebrow">Fellowship Calendar</span>
          <h1>Upcoming Church Events</h1>
          <p>Stay connected with gatherings, revivals, and community dates.</p>
        </header>

        <nav className="events-filters" aria-label="Filter events by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`events-filter${activeCategory === category ? " is-active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <section className="events-empty-card" aria-labelledby="events-empty-title">
          <div className="events-icon-box" aria-hidden="true">
            <CalendarDays className="calendar-icon" />
            <span className="calendar-empty-mark">
              <X size={11} strokeWidth={3} />
            </span>
          </div>

          <h2 id="events-empty-title">No upcoming events have been published yet.</h2>

          <p className="events-description">
            The church administration is currently compiling the calendar for
            the coming season. Join our notification circle to receive schedule
            updates.
          </p>

          {!isSubmitted ? (
            <form className="events-notification-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                required
                placeholder="Enter your email or phone number"
                aria-label="Email address or phone number"
              />

              <button type="submit">
                <Bell size={17} aria-hidden="true" />
                <span>Notify Me of Events</span>
              </button>
            </form>
          ) : (
            <div className="events-success-message" role="status">
              <CheckCircle2 size={21} aria-hidden="true" />
              <span>
                Thank you! You have been successfully added to our notification
                circle.
              </span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
