import React, { useMemo, useState } from "react";
import { CHURCHES_DATA } from "./ChurchesData";

import ChurchesHeader from "./ChurchesHeader";
import ChurchCard from "./ChurchCard";
import ChurchDetails from "./ChurchDetails";
import PrayerModal from "./PrayerModal";

import "./Churches.css";

const Churches = () => {
  const [zone, setZone] = useState("All");

  const [selectedChurch, setSelectedChurch] = useState(null);
  const [prayerChurch, setPrayerChurch] = useState(null);

  const filteredChurches = useMemo(() => {
    return CHURCHES_DATA.filter((church) => {
      const matchesZone =
        zone === "All" || church.zone.includes(zone);

      return matchesZone;
    });
  }, [zone]);

  const resetFilters = () => {
    setZone("All");
  };

  return (
    <main className="churches-page">
      <div className="churches-container">

        <ChurchesHeader />

        <section className="churches-list">

          {filteredChurches.length === 0 ? (
            <div className="no-churches">
              <div className="no-church-icon">ⓘ</div>

              <h3>No churches found</h3>

              <p>
                Try adjusting your search criteria or zone filter.
              </p>

              <button onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            filteredChurches.map((church, index) => (
              <ChurchCard
                key={church.id}
                church={church}
                index={index}
                onView={() => setSelectedChurch(church)}
                onPray={() => setPrayerChurch(church)}
              />
            ))
          )}

        </section>
      </div>

      {selectedChurch && (
        <ChurchDetails
          church={selectedChurch}
          onClose={() => setSelectedChurch(null)}
          onPray={() => {
            setSelectedChurch(null);
            setPrayerChurch(selectedChurch);
          }}
        />
      )}

      {prayerChurch && (
        <PrayerModal
          church={prayerChurch}
          onClose={() => setPrayerChurch(null)}
        />
      )}
    </main>
  );
};

export default Churches;