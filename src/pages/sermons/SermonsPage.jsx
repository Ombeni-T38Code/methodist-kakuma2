import React, { useState } from 'react';
import { Search, Filter, Play, Calendar, Clock, User, Download, Share2, BookOpen } from 'lucide-react';
import './SermonsPage.css';

const sermonsData = [
  {
    id: 1,
    title: "Walking in Divine Purpose and Authority",
    speaker: "Pastor John Doe",
    series: "Unshakable Faith",
    date: "October 4, 2026",
    duration: "45 mins",
    category: "Sunday Service",
    description: "Discover how to align your daily walk with God's ultimate calling and step into the authority He has given every believer.",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Sarah Jenkins",
    series: "The Prayer Life",
    date: "September 27, 2026",
    duration: "38 mins",
    category: "Midweek Service",
    description: "An encouraging look at how persistent, faith-filled prayer moves mountains and transforms our personal relationship with God.",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 3,
    title: "Grace That Overcomes Fear",
    speaker: "Elder Michael Smith",
    series: "Unshakable Faith",
    date: "September 20, 2026",
    duration: "42 mins",
    category: "Sunday Service",
    description: "Fear can paralyze our spiritual growth, but God's abundant grace provides the courage we need to face tomorrow.",
    thumbnail: "https://images.unsplash.com/photo-1519834785168-9fbeae57380c?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 4,
    title: "Building Generational Legacies",
    speaker: "Pastor John Doe",
    series: "Family & Home",
    date: "September 13, 2026",
    duration: "50 mins",
    category: "Special Event",
    description: "Practical biblical principles for raising godly families and instilling lasting values in the next generation.",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 5,
    title: "Living Out True Compassion",
    speaker: "Minister Chloe Vance",
    series: "Kingdom Values",
    date: "September 6, 2026",
    duration: "35 mins",
    category: "Sunday Service",
    description: "Reflecting Christ's love through practical acts of service and kindness within our local communities.",
    thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Joy in the Midst of Trials",
    speaker: "Pastor Sarah Jenkins",
    series: "Unshakable Faith",
    date: "August 30, 2026",
    duration: "40 mins",
    category: "Sunday Service",
    description: "How to maintain unwavering spiritual joy and peace even when facing unexpected hardships and life storms.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    featured: false,
  }
];

const SermonsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  const categories = ["All", "Sunday Service", "Midweek Service", "Special Event"];

  const filteredSermons = sermonsData.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredSermon = sermonsData.find(s => s.featured) || sermonsData[0];

  return (
    <div className="sermons-page">
      
      {/* Hero Section */}
      <section className="sermons-hero">
        <div className="hero-content">
          <span className="hero-badge">Messages & Teachings</span>
          <h1 className="hero-title">Explore Our Sermons</h1>
          <p className="hero-description">
            Catch up on past messages, dive deeper into series teachings, and grow your faith wherever you are.
          </p>

          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by title, speaker, or series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="sermons-main">

        {/* Featured Sermon Hero Card */}
        {!searchQuery && selectedCategory === "All" && (
          <div className="featured-section">
            <h2 className="section-heading">
              <BookOpen size={24} /> Featured Message
            </h2>
            <div className="featured-card">
              <div className="featured-image-wrapper" onClick={() => setActiveModalVideo(featuredSermon)}>
                <img src={featuredSermon.thumbnail} alt={featuredSermon.title} className="featured-img" />
                <div className="play-overlay">
                  <div className="play-btn-circle">
                    <Play size={24} fill="currentColor" style={{ marginLeft: '2px' }} />
                  </div>
                </div>
              </div>
              <div className="featured-details">
                <div>
                  <div className="card-tags">
                    <span className="series-tag">{featuredSermon.series}</span>
                    <span className="category-text">{featuredSermon.category}</span>
                  </div>
                  <h3 className="featured-title">{featuredSermon.title}</h3>
                  <p className="featured-desc">{featuredSermon.description}</p>
                </div>
                <div>
                  <div className="card-meta">
                    <span><User size={14} /> {featuredSermon.speaker}</span>
                    <span><Calendar size={14} /> {featuredSermon.date}</span>
                    <span><Clock size={14} /> {featuredSermon.duration}</span>
                  </div>
                  <button onClick={() => setActiveModalVideo(featuredSermon)} className="watch-btn">
                    <Play size={16} fill="currentColor" /> Watch Sermon
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="filter-bar">
          <h2 className="section-heading" style={{ margin: 0 }}>Recent Sermons</h2>
          <div className="filter-buttons">
            <Filter size={16} style={{ color: '#64748b' }} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sermons Grid */}
        {filteredSermons.length > 0 ? (
          <div className="sermons-grid">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="sermon-card">
                <div className="card-img-wrapper" onClick={() => setActiveModalVideo(sermon)}>
                  <img src={sermon.thumbnail} alt={sermon.title} className="card-img" />
                  <div className="play-overlay">
                    <div className="play-btn-circle small">
                      <Play size={18} fill="currentColor" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                  <span className="duration-badge">{sermon.duration}</span>
                </div>

                <div className="card-body">
                  <div>
                    <div className="card-tags">
                      <span className="series-tag">{sermon.series}</span>
                      <span className="date-text">{sermon.date}</span>
                    </div>
                    <h4 onClick={() => setActiveModalVideo(sermon)} className="card-title">
                      {sermon.title}
                    </h4>
                    <p className="card-desc">{sermon.description}</p>
                  </div>

                  <div className="card-footer">
                    <div className="speaker-info">
                      <User size={14} style={{ color: '#3b82f6' }} /> {sermon.speaker}
                    </div>
                    <div className="card-actions">
                      <button onClick={() => setActiveModalVideo(sermon)} className="action-watch-btn">
                        <Play size={14} fill="currentColor" /> Watch
                      </button>
                      <button className="icon-btn" title="Download Audio">
                        <Download size={14} />
                      </button>
                      <button className="icon-btn" title="Share Message">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No sermons found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="clear-filter-btn">
              Clear filters and view all sermons
            </button>
          </div>
        )}
      </main>

      {/* Video Modal Player */}
      {activeModalVideo && (
        <div className="modal-backdrop" onClick={() => setActiveModalVideo(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-video-preview">
              <img src={activeModalVideo.thumbnail} alt="preview" className="modal-bg-blur" />
              <div className="modal-center-play" onClick={() => alert("Playing video stream...")}>
                <div className="play-btn-circle large">
                  <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
                </div>
                <h4>Now Playing: {activeModalVideo.title}</h4>
                <p>{activeModalVideo.speaker} • {activeModalVideo.series}</p>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <h5>{activeModalVideo.title}</h5>
                <p>{activeModalVideo.date} | {activeModalVideo.duration}</p>
              </div>
              <button onClick={() => setActiveModalVideo(null)} className="modal-close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SermonsPage;