import { useState } from "react";
import { 
  Mic, 
  Heart, 
  Radio, 
  MapPin, 
  Calendar, 
  Users, 
  HeartHandshake, 
  Disc, 
  Send, 
  Play, 
  Music, 
  X, 
  Check 
} from "lucide-react";
import styles from "./VocalFellowship.module.css";

// Custom inline Facebook SVG to avoid missing export issues in lucide-react
const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export default function VocalFellowship() {
  const [activeModalGroup, setActiveModalGroup] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [playingTrack, setPlayingTrack] = useState(null);

  const handlePlaySample = (trackName) => {
    setPlayingTrack(trackName);
    setTimeout(() => {
      setPlayingTrack(null);
    }, 6000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setActiveModalGroup(null);
    setFormSubmitted(false);
  };

  return (
    <div className={styles.container}>
      {/* Main Header Banner */}
      <section className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <span className={styles.bannerBadge}>
            Voices of Harmony & Praise
          </span>
          <h1 className={styles.bannerTitle}>
            Featured Vocal Fellowship
          </h1>
          <p className={styles.bannerDesc}>
            Discover our praise and worship teams leading congregational services, community outreach, and live musical worship through choral harmony and band accompaniment.
          </p>
        </div>
      </section>

      {/* Main Showcase Container */}
      <main className={styles.mainShowcase}>

        {/* GROUP 1: UHURU CHOIR */}
        <section id="uhuru-choir" className={styles.groupGrid}>
          <div className={styles.colLeft}>
            <div className={styles.groupHeader}>
              <div className={`${styles.groupBadge} ${styles.badgeCrimson}`}>
                <Mic className="w-3.5 h-3.5" />
                <span>Gospel Choir</span>
              </div>
              <h2 className={styles.groupTitle}>
                UHURU CHOIR
              </h2>
              <p className={styles.groupSubtitle}>
                Led by Minister Joseph Ochieng
              </p>
            </div>

            <div className={styles.locationBadge}>
              <MapPin className={`w-5 h-5 ${styles.textCrimson}`} />
              <span><strong>Location:</strong> Main Sanctuary Hall, Block B (Kakuma 2)</span>
            </div>

            <p className={styles.description}>
              Uhuru Choir leads our congregational worship with rich, multi-part choral arrangements, joyful anthems, and spirit-filled gospel music that celebrates freedom, faith, and unity.
            </p>

            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <Calendar className="w-4 h-4" />
                  <span>Practice Schedule</span>
                </div>
                <p className={styles.scheduleTitle}>Mon, Wed, & Sat</p>
                <p className={`${styles.scheduleTime} ${styles.textCrimson}`}>2:00 PM – 5:00 PM</p>
              </div>

              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <Users className="w-4 h-4" />
                  <span>Membership</span>
                </div>
                <p className={styles.scheduleTitle}>Open Auditions</p>
                <p className={styles.scheduleSubtext}>Weekly vocal practice sessions</p>
              </div>
            </div>

            <div className={styles.actionsRow}>
              <button 
                onClick={() => setActiveModalGroup('Uhuru Choir')} 
                className={`${styles.btnPrimary} ${styles.btnRed}`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              <button 
                onClick={() => handlePlaySample('Uhuru Choir Anthem')} 
                className={styles.btnSecondary}
              >
                <Play className={`w-4 h-4 ${styles.textAmber}`} />
                <span>Listen Sample</span>
              </button>

              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}><YouTubeIcon className="w-4 h-4" /></a>
                <a href="#" className={styles.socialLink}><FacebookIcon className="w-4 h-4" /></a>
                <a href="#" className={styles.socialLink}><InstagramIcon className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <div className={styles.colRight}>
            <div className={styles.collageMain}>
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80" alt="Uhuru Choir Main" className={styles.mainImage} />
              <div className={styles.imageOverlay}>
                <blockquote className={styles.quoteText}>
                  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                </blockquote>
                <p className={styles.quoteRef}>— Philippians 4:6</p>
              </div>
            </div>

            <div className={styles.subGrid}>
              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" alt="Uhuru Choir Performance" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Sunday Praise</span>
                </div>
              </div>

              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80" alt="Uhuru Choir Rehearsal" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Rehearsal Session</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* GROUP 2: FADHILI CHOIR */}
        <section id="fadhili-choir" className={styles.groupGrid}>
          <div className={`${styles.colRight} ${styles.orderImages}`}>
            <div className={styles.collageMain}>
              <img src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80" alt="Fadhili Choir Main" className={styles.mainImage} />
              <div className={styles.imageOverlay}>
                <blockquote className={styles.quoteText}>
                  "Shout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs."
                </blockquote>
                <p className={styles.quoteRef}>— Psalm 100:1-2</p>
              </div>
            </div>

            <div className={styles.subGrid}>
              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80" alt="Fadhili Fellowship" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Acoustic Worship</span>
                </div>
              </div>

              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80" alt="Fadhili Choir Session" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Outreach Praise</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.colLeft} ${styles.orderText}`}>
            <div className={styles.groupHeader}>
              <div className={`${styles.groupBadge} ${styles.badgeAmber}`}>
                <Heart className="w-3.5 h-3.5" />
                <span>Gospel Choir & Outreach</span>
              </div>
              <h2 className={styles.groupTitle}>
                FADHILI CHOIR
              </h2>
              <p className={styles.groupSubtitle}>
                Led by Sister Grace Wanjiku
              </p>
            </div>

            <div className={styles.locationBadge}>
              <MapPin className={`w-5 h-5 ${styles.textAmber}`} />
              <span><strong>Location:</strong> Grace Prayer Chapel & Community Center</span>
            </div>

            <p className={styles.description}>
              Fadhili Choir focuses on contemplative praise, acoustic gospel melodies, and community outreach, sharing comfort and intercessory prayer through music.
            </p>

            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <Calendar className="w-4 h-4" />
                  <span>Practice Schedule</span>
                </div>
                <p className={styles.scheduleTitle}>Tue & Fri</p>
                <p className={`${styles.scheduleTime} ${styles.textAmber}`}>2:00 PM – 5:00 PM</p>
              </div>

              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <HeartHandshake className="w-4 h-4" />
                  <span>Outreach Ministry</span>
                </div>
                <p className={styles.scheduleTitle}>Community Visits</p>
                <p className={styles.scheduleSubtext}>Monthly praise singings</p>
              </div>
            </div>

            <div className={styles.actionsRow}>
              <button 
                onClick={() => setActiveModalGroup('Fadhili Choir')} 
                className={`${styles.btnPrimary} ${styles.btnAmber}`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              <button 
                onClick={() => handlePlaySample('Fadhili Hymn Medley')} 
                className={styles.btnSecondary}
              >
                <Play className={`w-4 h-4 ${styles.textAmber}`} />
                <span>Listen Sample</span>
              </button>

              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}><YouTubeIcon className="w-4 h-4" /></a>
                <a href="#" className={styles.socialLink}><FacebookIcon className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* GROUP 3: JC BAND */}
        <section id="jc-band" className={styles.groupGrid}>
          <div className={styles.colLeft}>
            <div className={styles.groupHeader}>
              <div className={`${styles.groupBadge} ${styles.badgeBlue}`}>
                <Radio className="w-3.5 h-3.5" />
                <span>Instrumental & Praise Band</span>
              </div>
              <h2 className={styles.groupTitle}>
                JC BAND
              </h2>
              <p className={styles.groupSubtitle}>
                Led by Music Director David Kilonzo
              </p>
            </div>

            <div className={styles.locationBadge}>
              <MapPin className={`w-5 h-5 ${styles.textBlue}`} />
              <span><strong>Location:</strong> Music & Audio Studio, Room 104</span>
            </div>

            <p className={styles.description}>
              JC Band delivers energetic live instrumentation, modern praise, drums, guitars, and brass accompaniment for congregational worship services and youth rallies.
            </p>

            <div className={styles.scheduleGrid}>
              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <Calendar className="w-4 h-4" />
                  <span>Practice Schedule</span>
                </div>
                <p className={styles.scheduleTitle}>Tue & Fri</p>
                <p className={`${styles.scheduleTime} ${styles.textBlue}`}>2:00 PM – 5:00 PM</p>
              </div>

              <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                  <Disc className="w-4 h-4" />
                  <span>Setup & Tech</span>
                </div>
                <p className={styles.scheduleTitle}>Full Live Band</p>
                <p className={styles.scheduleSubtext}>Keys, Bass, Drums, Guitars</p>
              </div>
            </div>

            <div className={styles.actionsRow}>
              <button 
                onClick={() => setActiveModalGroup('JC Band')} 
                className={`${styles.btnPrimary} ${styles.btnBlue}`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              <button 
                onClick={() => handlePlaySample('JC Band Praise Groove')} 
                className={styles.btnSecondary}
              >
                <Play className={`w-4 h-4 ${styles.textAmber}`} />
                <span>Listen Sample</span>
              </button>

              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}><YouTubeIcon className="w-4 h-4" /></a>
                <a href="#" className={styles.socialLink}><InstagramIcon className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <div className={styles.colRight}>
            <div className={styles.collageMain}>
              <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80" alt="JC Band Main" className={styles.mainImage} />
              <div className={styles.imageOverlay}>
                <blockquote className={styles.quoteText}>
                  "Praise him with the sounding of the trumpet, praise him with the harp and lyre, praise him with timbrel and dancing..."
                </blockquote>
                <p className={styles.quoteRef}>— Psalm 150:3-4</p>
              </div>
            </div>

            <div className={styles.subGrid}>
              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80" alt="JC Band Live" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Live Worship Concert</span>
                </div>
              </div>

              <div className={styles.subCard}>
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80" alt="JC Band Studio" className={styles.subImage} />
                <div className={styles.subOverlay}>
                  <span className={styles.subBadge}>Sound Check Session</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Audio Sample Playing Toast */}
      {playingTrack && (
        <div className={styles.audioToast}>
          <div className={styles.toastIconBox}>
            <Music className="w-5 h-5" />
          </div>
          <div>
            <p className={styles.toastSubtext}>Now Playing Preview</p>
            <p className={styles.toastTrack}>{playingTrack}</p>
          </div>
          <button onClick={() => setPlayingTrack(null)} className={styles.toastCloseBtn}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Booking / Request Modal */}
      {activeModalGroup && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <button onClick={closeModal} className={styles.modalCloseBtn}>
              <X className="w-5 h-5" />
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalBadge}>Special Request / Invitation</span>
              <h3 className={styles.modalTitle}>
                Contact {activeModalGroup}
              </h3>
              <p className={styles.modalSubtitle}>Send a performance invitation, join inquiry, or prayer/praise request.</p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className={styles.formStack}>
                <div>
                  <label className={styles.inputLabel}>Your Full Name</label>
                  <input type="text" required placeholder="John Doe" className={styles.inputField} />
                </div>

                <div>
                  <label className={styles.inputLabel}>Email or Phone</label>
                  <input type="text" required placeholder="contact@example.com" className={styles.inputField} />
                </div>

                <div>
                  <label className={styles.inputLabel}>Message / Event Details</label>
                  <textarea rows={3} required placeholder="Specify date, location, or special song request..." className={styles.inputField}></textarea>
                </div>

                <button type="submit" className={`${styles.btnPrimary} ${styles.btnRed} ${styles.btnFull}`}>
                  Submit Request
                </button>
              </form>
            ) : (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <Check className="w-6 h-6" />
                </div>
                <h4 className={styles.successTitle}>Request Received!</h4>
                <p className={styles.successSubtitle}>Thank you for reaching out. The leadership team will get in touch with you shortly.</p>
                <button onClick={closeModal} className={styles.successCloseBtn}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}