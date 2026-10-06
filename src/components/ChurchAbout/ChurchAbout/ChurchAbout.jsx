import React, { useState } from "react";
import "./ChurchAbout.css";

import pastorMsenwaAsumani from "../../../assets/brand/Leadership/Pastor Msenwa Asumani.png";
import pastorGraceEkai from "../../../assets/brand/Leadership/Rev. Grace Ekai.jpg";
import pastorDanielEkorot from "../../../assets/brand/Leadership/Pastor Daniel Ekorot.jpg";
import galleryGathering from "../../../assets/brand/view/Community gathering and fellowship after Sunday service.jpg";
import galleryStudy from "../../../assets/brand/view/Bible study and discipleship session in Kakuma..jpg";
import galleryCommunity from "../../../assets/brand/view/IMG_20241020_090244723_HDR.jpg";

import HeaderSection from "../HeaderSection/HeaderSection";
import MainGridSection from "../MainGridSection/MainGridSection";
import FeatureCardsSection from "../FeatureCardsSection/FeatureCardsSection";
import PastoralLeadershipModal from "../PastoralLeadershipModal/PastoralLeadershipModal";
import ChapelsModal from "../ChapelsModal/ChapelsModal";
import LightboxModal from "../LightboxModal/LightboxModal";

const PASTORS_DATA = [
  {
    id: 1,
    name: "Pastor Msenwa Asumani",
    role: "Lead Pastor & Superintendent",
    chapel: "Central Fellowship Chapel",
    phone: "+254 700 123 456",
    email: "m.asumani@kakumamethodist.org",
    image: pastorMsenwaAsumani,
    bio: "Serving in Kakuma for over 12 years, focused on discipleship and community peacebuilding.",
  },
  {
    id: 2,
    name: "Rev. Grace Ekai",
    role: "Associate Pastor - Youth & Women",
    chapel: "Kakuma 1 Grace Chapel",
    phone: "+254 711 987 654",
    email: "g.ekai@kakumamethodist.org",
    image: pastorGraceEkai,
    bio: "Passionate about youth empowerment, choir ministry, and women spiritual leadership.",
  },
  {
    id: 3,
    name: "Pastor Daniel Ekorot",
    role: "Outreach & Missions Director",
    chapel: "Hong Kong Community Chapel",
    phone: "+254 722 456 789",
    email: "d.ekorot@kakumamethodist.org",
    image: pastorDanielEkorot,
    bio: "Coordinates community relief, new chapel plants, and local evangelism outreach.",
  },
];

const CHAPELS_DATA = [
  {
    id: "central",
    name: "Central Fellowship Chapel",
    location: "Kakuma Town Center (Near Main Market)",
    serviceTime: "Sundays 9:00 AM - 11:30 AM",
    leader: "Pastor Msenwa Asumani",
    desc: "The central hub for main district gatherings, conferences, and Sunday worship.",
  },
  {
    id: "grace",
    name: "Grace Community Chapel",
    location: "Kakuma Camp 1, Zone 3",
    serviceTime: "Sundays 10:00 AM - 12:30 PM",
    leader: "Rev. Grace Ekai",
    desc: "A vibrant multicultural fellowship serving refugee families and youth groups.",
  },
  {
    id: "hope",
    name: "Hope & Reconciliation Chapel",
    location: "Kalobeyei Integrated Settlement",
    serviceTime: "Sundays 9:30 AM - 11:45 AM",
    leader: "Pastor Daniel Ekorot",
    desc: "Dedicated to peacebuilding, spiritual healing, and community support in Kalobeyei.",
  },
  {
    id: "ebenezer",
    name: "Ebenezer Methodist Chapel",
    location: "Kakuma 4 Sector 2",
    serviceTime: "Sundays 11:00 AM - 1:00 PM",
    leader: "Lay Minister James Lual",
    desc: "A growing neighborhood congregation with active children and prayer ministries.",
  },
];

const GALLERY_PHOTOS = [
  {
    id: 1,
    url: galleryGathering,
    caption: "Community gathering and fellowship after Sunday service.",
    class: "photo-wrapper-4-3",
  },
  {
    id: 2,
    url: galleryCommunity,
    caption: "Youth choir leading joyful praise and worship.",
    class: "photo-wrapper-4-3",
  },
  {
    id: 3,
    url: galleryStudy,
    caption: "Bible study and discipleship session in Kakuma.",
    class: "photo-wrapper-16-9",
  },
];

export default function ChurchAbout() {
  const [showPastorModal, setShowPastorModal] =
    useState(false);

  const [showChapelModal, setShowChapelModal] =
    useState(false);

  const [selectedPhoto, setSelectedPhoto] =
    useState(null);

  const [toastMessage, setToastMessage] =
    useState(null);

  const handleShowToast = (message) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <section className="church-about-wrapper">
      <main className="church-about-container">
        <HeaderSection />

        <MainGridSection
          galleryPhotos={GALLERY_PHOTOS}
          pastor={PASTORS_DATA[0]}
          onOpenPastors={() => setShowPastorModal(true)}
          onOpenPhoto={setSelectedPhoto}
        />

        <FeatureCardsSection
          pastors={PASTORS_DATA}
          onOpenPastors={() => setShowPastorModal(true)}
          onOpenChapels={() => setShowChapelModal(true)}
        />
      </main>

      {showPastorModal && (
        <PastoralLeadershipModal
          pastors={PASTORS_DATA}
          onClose={() => setShowPastorModal(false)}
          onShowToast={handleShowToast}
        />
      )}

      {showChapelModal && (
        <ChapelsModal
          chapels={CHAPELS_DATA}
          onClose={() => setShowChapelModal(false)}
        />
      )}

      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

      {toastMessage && (
        <div className="toast-notification">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}