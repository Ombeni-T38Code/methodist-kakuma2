// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";

// Page Components from individual page folders
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import EventsPage from "./pages/events/EventsPage";
import SermonsPage from "./pages/sermons/SermonsPage";
import MinistriesPage from "./pages/ministries/MinistriesPage";
import GivePage from "./pages/give/GivePage";
import ResourcesPage from "./pages/resources/ResourcesPage";
import ContactPage from "./pages/contact/ContactPage";
import PrayerRequestPage from "./pages/prayer-request/PrayerRequestPage";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-ink text-panel font-sans antialiased">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/prayer-request" element={<PrayerRequestPage />} />
        </Routes>
      </main>
    </div>
  );
}