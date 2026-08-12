import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./elovaalocator.css";

/* Reusable hook: adds "elovaaLoc-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("elovaaLoc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/* Reusable wrapper: slides + fades its children in once scrolled into view.
   direction: "up" (default) or "left". delay: stagger delay in ms. */
function Reveal({ children, className = "", as = "div", direction = "up", delay = 0 }) {
  const ref = useRevealOnScroll();
  const Tag = as;
  const dirClass = direction === "left" ? "elovaaLoc-reveal-left" : "elovaaLoc-reveal";
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} className={`${dirClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ============================
   LOCATION DATA
   Replace with real ELOVAA location data / connect to a live API when ready.
============================ */
const LOCATIONS = [
  {
    id: 1,
    name: "Elovaa Park Street — Main Studio",
    category: "Campus",
    address: "14 Park Street",
    city: "Kolkata",
    state: "WB",
    zip: "700016",
    phone: "033-4000-5000",
    distance: 0.0,
    pin: { top: "46%", left: "45%" },
  },
  {
    id: 2,
    name: "Elovaa Salt Lake Campus",
    category: "Campus",
    address: "DA 12, Sector I, Salt Lake",
    city: "Kolkata",
    state: "WB",
    zip: "700064",
    phone: "033-4000-5010",
    distance: 9.4,
    pin: { top: "30%", left: "58%" },
  },
  {
    id: 3,
    name: "Elovaa Studio Ballygunge",
    category: "Studio",
    address: "22 Ballygunge Circular Rd",
    city: "Kolkata",
    state: "WB",
    zip: "700019",
    phone: "033-4000-5020",
    distance: 4.2,
    pin: { top: "52%", left: "42%" },
  },
  {
    id: 4,
    name: "Elovaa Studio Behala",
    category: "Studio",
    address: "88 Diamond Harbour Rd",
    city: "Kolkata",
    state: "WB",
    zip: "700034",
    phone: "033-4000-5030",
    distance: 11.5,
    pin: { top: "64%", left: "30%" },
  },
  {
    id: 5,
    name: "Elovaa Studio Howrah",
    category: "Studio",
    address: "6 Grand Trunk Rd",
    city: "Howrah",
    state: "WB",
    zip: "711101",
    phone: "033-4000-5040",
    distance: 8.7,
    pin: { top: "48%", left: "24%" },
  },
  {
    id: 6,
    name: "Elovaa Retail Partner — Quest Mall",
    category: "Retail",
    address: "33 Syed Amir Ali Ave",
    city: "Kolkata",
    state: "WB",
    zip: "700017",
    phone: "033-4000-5050",
    distance: 3.1,
    pin: { top: "40%", left: "50%" },
  },
  {
    id: 7,
    name: "Elovaa Retail Partner — South City Mall",
    category: "Retail",
    address: "375 Prince Anwar Shah Rd",
    city: "Kolkata",
    state: "WB",
    zip: "700068",
    phone: "033-4000-5060",
    distance: 7.6,
    pin: { top: "70%", left: "50%" },
  },
];

const CATEGORY_OPTIONS = ["Any", "Campus", "Studio", "Retail"];
const RADIUS_OPTIONS = ["5 km", "10 km", "25 km", "50 km"];
const RESULTS_OPTIONS = ["10", "25", "50"];

function ElovaaLocator() {
  const [locationQuery, setLocationQuery] = useState("");
  const [radius, setRadius] = useState("50 km");
  const [resultsCount, setResultsCount] = useState("25");
  const [category, setCategory] = useState("Any");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedQuery(locationQuery.trim().toLowerCase());
  };

  const filteredLocations = useMemo(() => {
    let result = LOCATIONS.filter((loc) => {
      const matchesCategory = category === "Any" || loc.category === category;
      const matchesQuery =
        appliedQuery === "" ||
        loc.city.toLowerCase().includes(appliedQuery) ||
        loc.state.toLowerCase().includes(appliedQuery) ||
        loc.zip.includes(appliedQuery) ||
        loc.name.toLowerCase().includes(appliedQuery);
      return matchesCategory && matchesQuery;
    });

    result = [...result].sort((a, b) => a.distance - b.distance);

    const max = parseInt(resultsCount, 10);
    return result.slice(0, max);
  }, [appliedQuery, category, resultsCount]);

  return (
    <div className="elovaaLoc-page">
      {/* HERO SECTION */}
      <section className="elovaaLoc-hero">
        <div className="elovaaLoc-hero-image">
          <img
            src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80"
            alt="Elovaa storefront signage"
          />
        </div>

        <div className="elovaaLoc-hero-content">
          <h1 className="elovaaLoc-hero-title">
            <Reveal as="span" direction="up" className="elovaaLoc-hero-title-dark">
              ELOVAA
            </Reveal>{" "}
            <Reveal
              as="span"
              direction="left"
              delay={200}
              className="elovaaLoc-hero-title-light"
            >
              Locator
            </Reveal>
          </h1>

          <Reveal className="elovaaLoc-hero-text" delay={400}>
            <p className="elovaaLoc-hero-subtitle">
              FIND AN ELOVAA LOCATION NEAR YOU
            </p>

            <p className="elovaaLoc-hero-desc">
              Main Studio, Elovaa Partner Studios, Elovaa Partner Schools,
              and Retail Locations Across Kolkata
            </p>

            <p className="elovaaLoc-hero-desc">
              Join us at our main studio on Park Street or through
              our network of Elovaa partner studios and schools across
              Kolkata. Find the nearest location to study or buy our
              professional make-up and tools.
            </p>

            <a href="#find-location" className="elovaaLoc-find-btn">
              FIND A LOCATION
            </a>
          </Reveal>
        </div>
      </section>

      {/* SEARCH BAR */}
      <Reveal as="section" id="find-location" className="elovaaLoc-search-bar">
        <form className="elovaaLoc-search-form" onSubmit={handleSearch}>
          <div className="elovaaLoc-search-field">
            <label htmlFor="elovaaLoc-location">Location</label>
            <input
              id="elovaaLoc-location"
              type="text"
              placeholder="City, area, or PIN code"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
          </div>

          <div className="elovaaLoc-search-field">
            <label htmlFor="elovaaLoc-radius">Search radius</label>
            <select
              id="elovaaLoc-radius"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            >
              {RADIUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="elovaaLoc-search-field">
            <label htmlFor="elovaaLoc-results">Results</label>
            <select
              id="elovaaLoc-results"
              value={resultsCount}
              onChange={(e) => setResultsCount(e.target.value)}
            >
              {RESULTS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="elovaaLoc-search-field">
            <label htmlFor="elovaaLoc-category">Category</label>
            <select
              id="elovaaLoc-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="elovaaLoc-search-btn">
            Search
          </button>
        </form>
      </Reveal>

      {/* RESULTS + MAP SPLIT VIEW */}
      <Reveal as="section" className="elovaaLoc-results-wrap" delay={150}>
        {/* LEFT: SCROLLABLE RESULTS LIST */}
        <div className="elovaaLoc-results-list">
          {filteredLocations.length === 0 ? (
            <p className="elovaaLoc-no-results">
              No locations found. Try a different search.
            </p>
          ) : (
            filteredLocations.map((loc, idx) => (
              <div
                key={loc.id}
                className={
                  "elovaaLoc-result-item" +
                  (selectedId === loc.id ? " elovaaLoc-result-item-active" : "")
                }
                onMouseEnter={() => setSelectedId(loc.id)}
              >
                {idx !== 0 && <div className="elovaaLoc-result-divider" />}
                <a href="#location-detail" className="elovaaLoc-result-name">
                  {loc.name}
                </a>
                <p className="elovaaLoc-result-address">
                  {loc.address}
                  <br />
                  {loc.city} {loc.state} {loc.zip}
                  <br />
                  India
                </p>
                <p className="elovaaLoc-result-phone">
                  Phone:{" "}
                  <a href={`tel:${loc.phone}`} className="elovaaLoc-result-link">
                    {loc.phone}
                  </a>
                </p>
                <p className="elovaaLoc-result-distance">
                  {loc.distance} km
                  <br />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.address + " " + loc.city + " " + loc.state
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="elovaaLoc-result-link"
                  >
                    Directions
                  </a>
                </p>
              </div>
            ))
          )}
        </div>

        {/* RIGHT: STYLIZED MAP PANEL WITH PINS
            Swap this block for a real Google Maps / Mapbox embed
            using your API key when ready. */}
        <div className="elovaaLoc-map-panel">
          <div className="elovaaLoc-map-bg">
            {filteredLocations.map((loc) => (
              <button
                key={loc.id}
                className={
                  "elovaaLoc-map-pin" +
                  (selectedId === loc.id ? " elovaaLoc-map-pin-active" : "")
                }
                style={{ top: loc.pin.top, left: loc.pin.left }}
                onMouseEnter={() => setSelectedId(loc.id)}
                title={loc.name}
                type="button"
              >
                <span className="elovaaLoc-map-pin-dot" />
              </button>
            ))}
          </div>
          <div className="elovaaLoc-map-controls">
            <button className="elovaaLoc-map-control-btn" type="button" aria-label="Zoom in">
              +
            </button>
            <button className="elovaaLoc-map-control-btn" type="button" aria-label="Zoom out">
              −
            </button>
          </div>
          <p className="elovaaLoc-map-attribution">Map data ©2026 Google</p>
        </div>
      </Reveal>
    </div>
  );
}

export default ElovaaLocator;