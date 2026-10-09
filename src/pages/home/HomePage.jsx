import HeroSection from "../../components/hero/HeroSection";
import "./HomePage.css";
import ChurchAbout from "../../components/ChurchAbout";
import Churches from "../../components/Churches/Churches";
import WorshipSchedule from "../../components/Weekly-Worship/WorshipSchedule";
import PrayerRoom from "../../components/PrayerRoom/PrayerRoom";
import Sermons from "../../components/Sermons/Sermons";
import ServingOur from "../../components/ServingOur/ServingOur";
import VocalFellowship from "../../components/Featured/VocalFellowship";

import ChurchAssistant from "../../components/ChurchAssistant/ChurchAssistant";
import OurMinistries from "../../components/OurMinistries/OurMinistries";
import ChurchEvents from "../../components/ChurchEvents/ChurchEvents";
export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <ChurchAbout />
      <Churches />
      <WorshipSchedule />
      <PrayerRoom />
      <Sermons />
      <VocalFellowship />
      <OurMinistries />
      <ChurchEvents />
      <ServingOur />


      <ChurchAssistant />
    </div>
  );
}