import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import "./HomePage.css";
import ChurchAbout from "../../components/ChurchAbout";
import Churches from "../../components/Churches/Churches";
import WorshipSchedule from "../../components/Weekly-Worship/WorshipSchedule";
import PrayerRoom from "../../components/PrayerRoom/PrayerRoom";
export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <ChurchAbout />
      <Churches />
      <WorshipSchedule />
      <PrayerRoom />
    </div>
  );
}