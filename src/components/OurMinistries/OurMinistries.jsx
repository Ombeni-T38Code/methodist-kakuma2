import React from 'react';
import { 
  Zap, 
  Smile, 
  HeartHandshake, 
  Shield, 
  Flame, 
  Music, 
  Megaphone, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import styles from './OurMinistries.module.css';

const ministriesData = [
  {
    id: 'youth',
    title: 'Youth Ministry',
    icon: Zap,
    description: 'Empowering youth through Bible discipleship, leadership development, talents, and fellowship.',
    images: [
      { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', alt: 'Outdoor youth fellowship' },
      { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80', alt: 'Youth singing and praise' },
      { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Youth building church benches' }
    ]
  },
  {
    id: 'children',
    title: 'Children Ministry',
    icon: Smile,
    description: 'Sunday school, Scripture memorization, songs, and nurturing tender hearts to know and trust Jesus.',
    images: [
      { src: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80', alt: 'Sunday school classroom' },
      { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80', alt: 'Children playing Bible games' },
      { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', alt: 'Children choir singing' }
    ]
  },
  {
    id: 'women',
    title: 'Women Ministry',
    icon: HeartHandshake,
    description: 'Fostering sisterhood, prayer partnerships, family guidance, and community home visits.',
    images: [
      { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', alt: 'Women fellowship in traditional attire' },
      { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80', alt: 'Women sharing tea and fellowship' },
      { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80', alt: 'Women kneeling in prayer circle' }
    ]
  },
  {
    id: 'men',
    title: 'Men Ministry',
    icon: Shield,
    description: 'Building godly men, fathers, and church pillars through accountability, service, and prayer.',
    images: [
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', alt: 'Men fellowship gathering' },
      { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', alt: 'Men praying together' },
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', alt: 'Men working on church repairs' }
    ]
  },
  {
    id: 'prayer',
    title: 'Prayer Ministry',
    icon: Flame,
    description: 'Anchoring all 6 churches in intercessory warfare, vigils, and running the Kakuma Town Prayer Room.',
    images: [
      { src: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80', alt: 'Hands joined holding open Bible' },
      { src: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&w=600&q=80', alt: 'Quiet church prayer room' },
      { src: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80', alt: 'Church elders in fervent prayer' }
    ]
  },
  {
    id: 'music',
    title: 'Music Ministry',
    icon: Music,
    description: 'Comprising Uhuru Choir, Fadhili Choir, and JC Band, leading praises into God’s presence.',
    images: [
      { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80', alt: 'Uhuru Choir singing' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', alt: 'Worship instrumental band' },
      { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80', alt: 'Choir smiling and singing in sanctuary' }
    ]
  },
  {
    id: 'evangelism',
    title: 'Evangelism',
    icon: Megaphone,
    description: 'Sharing the Good News of Christ in Kakuma villages, open-air missions, and personal witnessing.',
    images: [
      { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80', alt: 'Outreach team sharing Bibles' },
      { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80', alt: 'Kakuma mission gospel gathering' },
      { src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80', alt: 'Pastor preaching outdoors' }
    ]
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    icon: Heart,
    description: 'Assisting vulnerable families, widows, orphans, and welcoming new residents with compassionate hands.',
    images: [
      { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80', alt: 'Outreach medical checkups' },
      { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=600&q=80', alt: 'Community gathering and care' },
      { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', alt: 'Food and water distribution' }
    ]
  }
];

export default function OurMinistries() {
  return (
    <section className={styles.sectionContainer}>
      {/* Header Banner */}
      <div className={styles.header}>
        <span className={styles.headerSubtitle}>BODY OF CHRIST</span>
        <h2 className={styles.headerTitle}>Our Ministries</h2>
        <p className={styles.headerDescription}>Everyone Has a Place to Serve</p>
      </div>

      {/* Grid of 8 Ministries */}
      <div className={styles.grid}>
        {ministriesData.map((ministry) => {
          const IconComponent = ministry.icon;
          return (
            <div key={ministry.id} className={styles.card}>
              {/* Image Triptych Collage */}
              <div className={styles.imageGrid}>
                <div className={styles.topRow}>
                  <div className={styles.imgWrapper}>
                    <img src={ministry.images[0].src} alt={ministry.images[0].alt} className={styles.image} />
                  </div>
                  <div className={styles.imgWrapper}>
                    <img src={ministry.images[1].src} alt={ministry.images[1].alt} className={styles.image} />
                  </div>
                </div>
                <div className={styles.bottomRow}>
                  <div className={styles.imgWrapper}>
                    <img src={ministry.images[2].src} alt={ministry.images[2].alt} className={styles.image} />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <div className={styles.iconCircle}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{ministry.title}</h3>
                <p className={styles.cardText}>{ministry.description}</p>
                <a href={`#${ministry.id}`} className={styles.learnMore}>
                  <span>Learn More</span>
                  <ArrowRight className={styles.arrow} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}