import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./muddirectory.css";

/* Reusable hook: adds "mudDir-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mudDir-visible");
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
  const dirClass = direction === "left" ? "mudDir-reveal-left" : "mudDir-reveal";
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} className={`${dirClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ============================
   LOCATION DATA
   Replace image URLs / text with real MUD content when available.
============================ */
const LOCATIONS = [
  {
    id: 1,
    name: "MUD Los Angeles",
    type: "Campus",
    country: "USA",
    state: "California",
    city: "Burbank",
    closed: false,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80",
    description:
      "Located in downtown Burbank, MUD's Los Angeles Campus is near some of the biggest production studios in the world. Our students can choose from four comprehensive make-up programs or individual courses, learning the basics of beauty, character, or special make-up effects for film, television, fashion, and retail",
  },
  {
    id: 2,
    name: "MUD New York (closed)",
    type: "Campus",
    country: "USA",
    state: "New York",
    city: "New York",
    closed: true,
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=700&q=80",
    description:
      "Our New York Campus Has Closed. After many wonderful years in New York City, our campus has officially closed. We are incredibly grateful to the students, instructors, and industry professionals who helped make it such a vibrant and inspiring place to study makeup artistry. While we say goodbye to",
  },
  {
    id: 3,
    name: "MUD Studio Slovenia",
    type: "Studio",
    country: "Slovenia",
    state: "Ljubljana",
    city: "Ljubljana",
    closed: false,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=700&q=80",
    description:
      "In the heart of Ljubljana, nestled in the vibrant capital of Slovenia, MUD Studio Slovenia is a beacon for those passionate about beauty and creativity. MUD Studio Slovenia is part of the globally acclaimed Make-up Designory network, a leader in makeup education, products, and services.",
  },
  {
    id: 4,
    name: "MUD Studio Berlin",
    type: "Studio",
    country: "Germany",
    state: "Berlin",
    city: "Berlin",
    closed: false,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=700&q=80",
    description:
      "Located in one of the city's most picturesque neighborhoods, MUD Studio Berlin is a hub of creativity and makeup artistry excellence. Set against the backdrop of Berlin's dynamic cultural landscape, our studio in the Prenzlauer Berg district is surrounded by historic charm, artistic flair, and a lively community",
  },
  {
    id: 5,
    name: "MUD Studio Milano",
    type: "Studio",
    country: "Italy",
    state: "Lombardy",
    city: "Milan",
    closed: false,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
    description:
      "In the heart of Fashion, situated in Milan, a city synonymous with high fashion and avant-garde design, MUD Studio Milano is perfectly positioned at the crossroads of cosmetic artistry and haute couture. As a premier makeup school in the fashion capital of the world, our studio offers an",
  },
  {
    id: 6,
    name: "MUD Studio Roma",
    type: "Studio",
    country: "Italy",
    state: "Lazio",
    city: "Rome",
    closed: false,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80",
    description:
      "At the Cultural Crossroads, discover MUD Studio Roma, a distinguished makeup school situated within walking distance to the historic core of Rome. Surrounded by the timeless beauty and classical architecture of one of Rome's most storied districts, our studio harmonizes the city's rich cultural legacy with its iconic",
  },
  {
    id: 7,
    name: "MUD Studio Vienna",
    type: "Studio",
    country: "Austria",
    state: "Vienna",
    city: "Vienna",
    closed: false,
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=700&q=80",
    description:
      "Amidst Vienna's Cultural Flourish, explore MUD Studio Vienna, a distinguished makeup school located only a two minutes walk from the Museums Quartier district, immersed in Vienna's rich historical landmarks and vibrant artistic community. Nestled close to world-famous museums and the iconic architecture that Vienna is celebrated for, our",
  },
  {
    id: 8,
    name: "MUD Studio Cyprus",
    type: "Studio",
    country: "Cyprus",
    state: "Nicosia",
    city: "Nicosia",
    closed: false,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80",
    description:
      "Explore Makeup Artistry at MUD Studio Cyprus. MUD Studio Cyprus is situated in a vibrant locale burgeoning with opportunities in the entertainment and fashion industries. As a crossroads of Mediterranean culture, Cyprus is gaining traction as a favored destination for film productions and fashion events, thanks to its",
  },
  {
    id: 9,
    name: "MUD Studio Paris",
    type: "Studio",
    country: "France",
    state: "Ile-de-France",
    city: "Paris",
    closed: false,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
    description:
      "Set in one of the world's most iconic fashion capitals, MUD Studio Paris blends timeless elegance with cutting-edge makeup artistry, offering students an immersive creative environment in the city of light.",
  },
  {
    id: 10,
    name: "MUD Studio London",
    type: "Studio",
    country: "UK",
    state: "England",
    city: "London",
    closed: false,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
    description:
      "MUD Studio London sits at the crossroads of heritage and innovation, giving students access to a thriving entertainment and fashion industry right on their doorstep.",
  },
  {
    id: 11,
    name: "MUD Studio Barcelona",
    type: "Studio",
    country: "Spain",
    state: "Catalonia",
    city: "Barcelona",
    closed: false,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=700&q=80",
    description:
      "Surrounded by Gaudi's architecture and a thriving arts scene, MUD Studio Barcelona offers a vibrant setting for students to master beauty and character makeup artistry.",
  },
  {
    id: 12,
    name: "MUD Studio Amsterdam",
    type: "Studio",
    country: "Netherlands",
    state: "North Holland",
    city: "Amsterdam",
    closed: false,
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80",
    description:
      "MUD Studio Amsterdam combines the city's rich design heritage with modern makeup artistry training, located in one of Europe's most creative capitals.",
  },
  {
    id: 13,
    name: "MUD Studio Dubai",
    type: "Studio",
    country: "UAE",
    state: "Dubai",
    city: "Dubai",
    closed: false,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
    description:
      "MUD Studio Dubai serves the growing Middle Eastern beauty and entertainment industry, offering world-class training facilities in the heart of the city.",
  },
  {
    id: 14,
    name: "MUD Studio Tokyo",
    type: "Studio",
    country: "Japan",
    state: "Tokyo",
    city: "Tokyo",
    closed: false,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=80",
    description:
      "MUD Studio Tokyo brings together traditional Japanese craftsmanship and modern makeup artistry, situated in one of Asia's most influential fashion capitals.",
  },
  {
    id: 15,
    name: "MUD Retail Partner — Sephora",
    type: "Retail",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    closed: false,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    description:
      "Find a curated selection of MUD professional cosmetics and tools at this authorized retail partner location.",
  },
  {
    id: 16,
    name: "MUD Retail Partner — Nordstrom",
    type: "Retail",
    country: "USA",
    state: "New York",
    city: "New York",
    closed: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    description:
      "Shop the full range of MUD makeup essentials at this authorized retail partner counter.",
  },
  {
    id: 17,
    name: "MUD Studio Toronto",
    type: "Studio",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    closed: false,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    description:
      "MUD Studio Toronto gives students access to Canada's thriving film and television production industry alongside expert makeup artistry training.",
  },
  {
    id: 18,
    name: "MUD Studio Cape Town",
    type: "Studio",
    country: "South Africa",
    state: "Western Cape",
    city: "Cape Town",
    closed: false,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80",
    description:
      "Set against a backdrop of natural beauty, MUD Studio Cape Town trains the next generation of African makeup artists for film, fashion, and beauty.",
  },
];

const LOCATIONS_PER_PAGE = 4;

function MudDirectory() {
  const gridScrollRef = useRef(null);

  const [locationType, setLocationType] = useState("All");
  const [country, setCountry] = useState("All");
  const [stateFilter, setStateFilter] = useState("All");
  const [city, setCity] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);

  const locationTypes = useMemo(
    () => ["All", ...new Set(LOCATIONS.map((l) => l.type))],
    []
  );
  const countries = useMemo(
    () => ["All", ...new Set(LOCATIONS.map((l) => l.country))],
    []
  );
  const states = useMemo(
    () => ["All", ...new Set(LOCATIONS.map((l) => l.state))],
    []
  );
  const cities = useMemo(
    () => ["All", ...new Set(LOCATIONS.map((l) => l.city))],
    []
  );

  const filteredLocations = useMemo(() => {
    let result = LOCATIONS.filter((loc) => {
      return (
        (locationType === "All" || loc.type === locationType) &&
        (country === "All" || loc.country === country) &&
        (stateFilter === "All" || loc.state === stateFilter) &&
        (city === "All" || loc.city === city)
      );
    });

    if (sortBy === "Name A-Z") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Name Z-A") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [locationType, country, stateFilter, city, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLocations.length / LOCATIONS_PER_PAGE)
  );

  const paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * LOCATIONS_PER_PAGE,
    currentPage * LOCATIONS_PER_PAGE
  );

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [locationType, country, stateFilter, city, sortBy]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    gridScrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mudDir-page">
      {/* HERO SECTION */}
      <section className="mudDir-hero">
        <div className="mudDir-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4lFwakn8zT2MjAAs8w_IM-gLPhD278cqkGjWo_pUjpD6D0X4Dmayhhur&s=10"
            alt="MUD global directory map and locations"
          />
        </div>

        <div className="mudDir-hero-content">
          <h1 className="mudDir-hero-title">
            <Reveal as="span" direction="up" className="mudDir-hero-title-dark">
              MUD
            </Reveal>{" "}
            <Reveal
              as="span"
              direction="left"
              delay={200}
              className="mudDir-hero-title-light"
            >
              Directory
            </Reveal>
          </h1>

          <Reveal className="mudDir-hero-text" delay={400}>
            <p className="mudDir-hero-subtitle">
              EXPLORE OUR GLOBAL DIRECTORY
            </p>

            <p className="mudDir-hero-desc">
              Discover the full extent of Make-up Designory's offerings
              through our interactive Directory. Easily navigate
              between our prestigious main campuses, MUD Studios,
              partner schools, and retail locations worldwide.
            </p>

            <a href="#read-more" className="mudDir-read-more">
              READ MORE
            </a>
          </Reveal>
        </div>
      </section>

      {/* FIND A LOCATION - FILTER BAR */}
      <section className="mudDir-filter-section">
        <div className="mudDir-filter-banner">
          <Reveal as="h2" direction="left" className="mudDir-filter-title">
            Find A<br />
            Location
          </Reveal>

          <Reveal as="p" className="mudDir-filter-desc" delay={150}>
            Please use the category filters to find the specific type
            of venue you are interested in, whether you're seeking
            advanced makeup education, exploring our courses at a
            partner school, or shopping for professional-grade MUD
            makeup products. Each category is designed to help
            streamline your search and connect you with our extensive
            global MUD community. To search by post code or by city,
            please use our{" "}
            <a href="#mud-locator" className="mudDir-filter-link">
              MUD Locator
            </a>
            .
          </Reveal>
        </div>

        <div className="mudDir-filter-controls">
          <div className="mudDir-filter-field">
            <label htmlFor="mudDir-location-type">Location Type</label>
            <select
              id="mudDir-location-type"
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
            >
              {locationTypes.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mudDir-filter-field">
            <label htmlFor="mudDir-country">Country</label>
            <select
              id="mudDir-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mudDir-filter-field">
            <label htmlFor="mudDir-state">State</label>
            <select
              id="mudDir-state"
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
            >
              {states.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mudDir-filter-field">
            <label htmlFor="mudDir-city">City</label>
            <select
              id="mudDir-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mudDir-filter-field">
            <label htmlFor="mudDir-sort">Sort by</label>
            <select
              id="mudDir-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="Name A-Z">Name A-Z</option>
              <option value="Name Z-A">Name Z-A</option>
            </select>
          </div>
        </div>
      </section>

      {/* LOCATION CARDS GRID */}
      <section ref={gridScrollRef} className="mudDir-grid-section">
        {paginatedLocations.length === 0 ? (
          <p className="mudDir-no-results">
            No locations match the selected filters.
          </p>
        ) : (
          <div className="mudDir-grid">
            {paginatedLocations.map((loc, idx) => (
              <Reveal
                as="div"
                className="mudDir-card"
                key={loc.id}
                delay={(idx % LOCATIONS_PER_PAGE) * 120}
              >
                <div className="mudDir-card-image">
                  <img src={loc.image} alt={loc.name} />
                </div>
                <div className="mudDir-card-info">
                  <h3 className="mudDir-card-title">{loc.name}</h3>
                  <p className="mudDir-card-desc">
                    {loc.description}
                    {" … "}
                    <a href="#view-location" className="mudDir-card-link">
                      View Location
                    </a>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="mudDir-pagination">
          <button
            className="mudDir-page-arrow"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ‹
          </button>

          {pageNumbers.map((num) => (
            <button
              key={num}
              className={
                "mudDir-page-btn" +
                (num === currentPage ? " mudDir-page-btn-active" : "")
              }
              onClick={() => goToPage(num)}
            >
              {num}
            </button>
          ))}

          <button
            className="mudDir-page-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            »
          </button>
        </div>
      </section>

      {/* GRAY CTA TEXT SECTION */}
      <Reveal as="section" className="mudDir-cta">
        <p className="mudDir-cta-text">
          Explore educational excellence with Make-up Designory (MUD),
          globally recognized for top-tier makeup artistry training.
          Our accredited main campus in Los Angeles, along with MUD
          Studios across Europe, Asia, and South Africa, provide
          advanced programs and state-of-the-art facilities. Through
          our MUD Partnership program, we also partner with select
          cosmetology and esthetician institutes worldwide, enriching
          their offerings with our expert makeup artist courses.
          Discover the perfect makeup school location to advance your
          career in professional makeup artistry.
        </p>
      </Reveal>
    </div>
  );
}

export default MudDirectory;