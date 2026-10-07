import {
  CalendarDays,
  Disc,
  Heart,
  MapPin,
  Mic,
  Play,
  Radio,
  Send,
  Users,
} from "lucide-react";
import "./VocalFellowship.css";

const groups = [
  {
    id: "uhuru",
    badge: "Gospel Choir",
    badgeClass: "badge-crimson",
    title: "UHURU CHOIR",
    leader: "Led by Minister Joseph Ochieng",
    location: "Main Sanctuary Hall, Block B (Kakuma 2)",
    description:
      "Uhuru Choir leads our congregational worship with rich, multi-part choral arrangements, joyful anthems, and spirit-filled gospel music that celebrates freedom, faith, and unity.",
    schedule: "Mon, Wed, & Sat",
    scheduleTime: "2:00 PM – 5:00 PM",
    membershipLabel: "Open Auditions",
    membershipDetail: "Weekly vocal practice sessions",
    buttonLabel: "Submit Request",
    buttonClass: "btn btn-crimson",
    sampleLabel: "Listen Sample",
    primaryImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      {
        src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
        label: "Sunday Praise",
      },
      {
        src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80",
        label: "Rehearsal Session",
      },
    ],
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "— Philippians 4:6",
    icon: Mic,
    accent: "crimson",
  },
  {
    id: "fadhili",
    badge: "Gospel Choir & Outreach",
    badgeClass: "badge-amber",
    title: "FADHILI CHOIR",
    leader: "Led by Sister Grace Wanjiku",
    location: "Grace Prayer Chapel & Community Center",
    description:
      "Fadhili Choir focuses on contemplative praise, acoustic gospel melodies, and community outreach, sharing comfort and intercessory prayer through music.",
    schedule: "Tue & Fri",
    scheduleTime: "2:00 PM – 5:00 PM",
    membershipLabel: "Community Visits",
    membershipDetail: "Monthly praise singings",
    buttonLabel: "Submit Request",
    buttonClass: "btn btn-amber",
    sampleLabel: "Listen Sample",
    primaryImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      {
        src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
        label: "Acoustic Worship",
      },
      {
        src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80",
        label: "Outreach Praise",
      },
    ],
    verse: "Shout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs.",
    reference: "— Psalm 100:1-2",
    icon: Heart,
    accent: "amber",
  },
  {
    id: "jc-band",
    badge: "Instrumental & Praise Band",
    badgeClass: "badge-blue",
    title: "JC BAND",
    leader: "Led by Music Director David Kilonzo",
    location: "Music & Audio Studio, Room 104",
    description:
      "JC Band delivers energetic live instrumentation, modern praise, drums, guitars, and brass accompaniment for congregational worship services and youth rallies.",
    schedule: "Tue & Fri",
    scheduleTime: "2:00 PM – 5:00 PM",
    membershipLabel: "Full Live Band",
    membershipDetail: "Keys, Bass, Drums, Guitars",
    buttonLabel: "Submit Request",
    buttonClass: "btn btn-blue",
    sampleLabel: "Listen Sample",
    primaryImage:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      {
        src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
        label: "Live Worship Concert",
      },
      {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
        label: "Sound Check Session",
      },
    ],
    verse: "Praise him with the sounding of the trumpet, praise him with the harp and lyre, praise him with timbrel and dancing...",
    reference: "— Psalm 150:3-4",
    icon: Radio,
    accent: "blue",
  },
];

const socialLinks = [
  { label: "Listen", href: "#", icon: Play },
  { label: "Prayer", href: "#", icon: Heart },
  { label: "Community", href: "#", icon: Users },
];

function MinistryGroup({ item, reverse = false }) {
  const Icon = item.icon;

  return (
    <article className={`ministry-panel ${reverse ? "reverse" : ""}`}>
      <div className="ministry-copy">
        <div className="ministry-heading-wrap">
          <span className={`ministry-badge ${item.badgeClass}`}>
            <Icon size={14} />
            <span>{item.badge}</span>
          </span>
          <h2>{item.title}</h2>
          <p className="ministry-leader">{item.leader}</p>
        </div>

        <div className="ministry-location">
          <MapPin size={18} />
          <span>
            <strong>Location:</strong> {item.location}
          </span>
        </div>

        <p className="ministry-description">{item.description}</p>

        <div className="ministry-meta-grid">
          <div className="meta-card">
            <div className="meta-label">
              <CalendarDays size={15} />
              <span>Practice Schedule</span>
            </div>
            <p>{item.schedule}</p>
            <small>{item.scheduleTime}</small>
          </div>

          <div className="meta-card">
            <div className="meta-label">
              {item.accent === "amber" ? (
                <Heart size={15} />
              ) : item.accent === "blue" ? (
                <Disc size={15} />
              ) : (
                <Users size={15} />
              )}
              <span>
                {item.accent === "amber"
                  ? "Outreach Ministry"
                  : item.accent === "blue"
                    ? "Setup & Tech"
                    : "Membership"}
              </span>
            </div>
            <p>{item.membershipLabel}</p>
            <small>{item.membershipDetail}</small>
          </div>
        </div>

        <div className="ministry-actions">
          <button type="button" className={item.buttonClass}>
            <Send size={15} />
            <span>{item.buttonLabel}</span>
          </button>

          <button type="button" className="btn btn-ghost">
            <Play size={15} />
            <span>{item.sampleLabel}</span>
          </button>

          <div className="social-links" aria-label="Social media links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} title={label}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="ministry-gallery">
        <div className="gallery-primary">
          <img src={item.primaryImage} alt={`${item.title} main`} />
          <div className="gallery-overlay">
            <blockquote>{item.verse}</blockquote>
            <p>{item.reference}</p>
          </div>
        </div>

        <div className="gallery-secondary">
          {item.secondaryImages.map(({ src, label }) => (
            <div key={label} className="gallery-thumb">
              <img src={src} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function VocalFellowship() {
  return (
    <section className="vocal-fellowship" aria-label="Vocal fellowship ministries">
      <div className="vocal-fellowship__inner">
        {groups.map((group, index) => (
          <div key={group.id} className="ministry-wrapper">
            <MinistryGroup item={group} reverse={index % 2 === 1} />
            {index < groups.length - 1 && <div className="ministry-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
