import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./elovaadirectory.css";

/* Reusable hook: adds "elovaaDir-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("elovaaDir-visible");
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
  const dirClass = direction === "left" ? "elovaaDir-reveal-left" : "elovaaDir-reveal";
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} className={`${dirClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* ============================
   LOCATION DATA
   Replace image URLs / text with real ELOVAA content when available.
============================ */
const LOCATIONS = [
  {
    id: 1,
    name: "Elovaa Park Street",
    type: "Campus",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80",
    description:
      "Located on Park Street, Elovaa's main campus is close to Kolkata's biggest studios and event venues. Our students can choose from four comprehensive make-up programs or individual courses, learning the basics of beauty, character, or special make-up effects for film, television, fashion, and retail",
  },
  {
    id: 2,
    name: "Elovaa Salt Lake",
    type: "Campus",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=700&q=80",
    description:
      "Our Salt Lake campus is purpose-built for hands-on training, with dedicated studio space for fashion, bridal, and event makeup. Students here work closely with our senior instructors across a full range of Elovaa programs",
  },
  {
    id: 3,
    name: "Elovaa Studio Behala",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=700&q=80",
    description:
      "In the heart of Behala, Elovaa Studio Behala is a neighbourhood favourite for those passionate about beauty and creativity. It's part of the wider Elovaa network, our home-grown leader in makeup education, products, and services.",
  },
  {
    id: 4,
    name: "Elovaa Studio Ballygunge",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=700&q=80",
    description:
      "Located in one of the city's most sought-after neighbourhoods, Elovaa Studio Ballygunge is a hub of creativity and makeup artistry. Surrounded by heritage buildings and a lively local community",
  },
  {
    id: 5,
    name: "Elovaa Studio Howrah",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Howrah",
    closed: false,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
    description:
      "Just across the river from central Kolkata, Elovaa Studio Howrah is perfectly positioned to serve students from across the twin cities. Our studio offers a full range of bridal and beauty programs",
  },
  {
    id: 6,
    name: "Elovaa Studio New Town",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80",
    description:
      "Set in New Town's growing residential belt, Elovaa Studio New Town is a modern makeup school built for students who want flexible weekend and evening batches close to home.",
  },
  {
    id: 7,
    name: "Elovaa Studio Rashbehari",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=700&q=80",
    description:
      "Along Rashbehari Avenue, explore Elovaa Studio Rashbehari, a well-known makeup school within easy reach of south Kolkata's shopping and entertainment districts. Our students benefit from being close to the city's fashion and event circuit, our",
  },
  {
    id: 8,
    name: "Elovaa Studio Durgapur",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Durgapur",
    closed: false,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80",
    description:
      "Explore Makeup Artistry at Elovaa Studio Durgapur. This studio is situated in a growing locale with opportunities in local events and bridal work. As West Bengal's industrial belt grows, Durgapur is gaining traction as a favoured base for beauty professionals, thanks to its",
  },
  {
    id: 9,
    name: "Elovaa Studio Siliguri",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Siliguri",
    closed: false,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
    description:
      "Set in North Bengal's largest city, Elovaa Studio Siliguri blends local bridal traditions with modern makeup artistry, offering students an immersive creative environment close to the hills.",
  },
  {
    id: 10,
    name: "Elovaa Studio Asansol",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Asansol",
    closed: false,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
    description:
      "Elovaa Studio Asansol sits close to the city centre, giving students access to a growing local wedding and events industry right on their doorstep.",
  },
  {
    id: 11,
    name: "Elovaa Studio Barasat",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Barasat",
    closed: false,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=700&q=80",
    description:
      "Surrounded by a busy local market and residential neighbourhoods, Elovaa Studio Barasat offers an accessible setting for students to master beauty and bridal makeup artistry.",
  },
  {
    id: 12,
    name: "Elovaa Studio Rajarhat",
    type: "Studio",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80",
    description:
      "Elovaa Studio Rajarhat combines the area's newer residential developments with modern makeup artistry training, located in one of Kolkata's fastest-growing neighbourhoods.",
  },
  {
    id: 13,
    name: "Elovaa Retail Partner — Quest Mall",
    type: "Retail",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
    description:
      "Elovaa Retail Partner at Quest Mall serves shoppers in the eastern part of the city, offering a full range of makeup training accessories and beauty products.",
  },
  {
    id: 14,
    name: "Elovaa Retail Partner — South City Mall",
    type: "Retail",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=700&q=80",
    description:
      "Elovaa Retail Partner at South City Mall brings together everyday shoppers and Elovaa's own product line, situated in one of south Kolkata's busiest retail hubs.",
  },
  {
    id: 15,
    name: "Elovaa Retail Partner — Nykaa Store, Camac Street",
    type: "Retail",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    description:
      "Find a curated selection of Elovaa professional cosmetics and tools at this authorized retail partner location on Camac Street.",
  },
  {
    id: 16,
    name: "Elovaa Retail Partner — Gariahat Market",
    type: "Retail",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    closed: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    description:
      "Shop the full range of Elovaa makeup essentials at this authorized retail partner counter near Gariahat Market.",
  },
];

const LOCATIONS_PER_PAGE = 4;

function ElovaaDirectory() {
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
    <div className="elovaaDir-page">
      {/* HERO SECTION */}
      <section className="elovaaDir-hero">
        <div className="elovaaDir-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4lFwakn8zT2MjAAs8w_IM-gLPhD278cqkGjWo_pUjpD6D0X4Dmayhhur&s=10"
            alt="Elovaa Kolkata directory map and locations"
          />
        </div>

        <div className="elovaaDir-hero-content">
          <h1 className="elovaaDir-hero-title">
            <Reveal as="span" direction="up" className="elovaaDir-hero-title-dark">
              ELOVAA
            </Reveal>{" "}
            <Reveal
              as="span"
              direction="left"
              delay={200}
              className="elovaaDir-hero-title-light"
            >
              Directory
            </Reveal>
          </h1>

          <Reveal className="elovaaDir-hero-text" delay={400}>
            <p className="elovaaDir-hero-subtitle">
              EXPLORE OUR KOLKATA DIRECTORY
            </p>

            <p className="elovaaDir-hero-desc">
              Discover the full extent of Elovaa's offerings
              through our interactive Directory. Easily navigate
              between our main studio, partner studios,
              partner schools, and retail locations across Kolkata.
            </p>

            <a href="#read-more" className="elovaaDir-read-more">
              READ MORE
            </a>
          </Reveal>
        </div>
      </section>

      {/* FIND A LOCATION - FILTER BAR */}
      <section className="elovaaDir-filter-section">
        <div className="elovaaDir-filter-banner">
          <Reveal as="h2" direction="left" className="elovaaDir-filter-title">
            Find A<br />
            Location
          </Reveal>

          <Reveal as="p" className="elovaaDir-filter-desc" delay={150}>
            Please use the category filters to find the specific type
            of venue you are interested in, whether you're seeking
            advanced makeup education, exploring our courses at a
            partner school, or shopping for professional-grade Elovaa
            makeup products. Each category is designed to help
            streamline your search and connect you with our Kolkata
            Elovaa community. To search by pin code or by locality,
            please use our{" "}
            <a href="#elovaa-locator" className="elovaaDir-filter-link">
              Elovaa Locator
            </a>
            .
          </Reveal>
        </div>

        <div className="elovaaDir-filter-controls">
          <div className="elovaaDir-filter-field">
            <label htmlFor="elovaaDir-location-type">Location Type</label>
            <select
              id="elovaaDir-location-type"
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

          <div className="elovaaDir-filter-field">
            <label htmlFor="elovaaDir-country">Country</label>
            <select
              id="elovaaDir-country"
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

          <div className="elovaaDir-filter-field">
            <label htmlFor="elovaaDir-state">State</label>
            <select
              id="elovaaDir-state"
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

          <div className="elovaaDir-filter-field">
            <label htmlFor="elovaaDir-city">City</label>
            <select
              id="elovaaDir-city"
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

          <div className="elovaaDir-filter-field">
            <label htmlFor="elovaaDir-sort">Sort by</label>
            <select
              id="elovaaDir-sort"
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
      <section ref={gridScrollRef} className="elovaaDir-grid-section">
        {paginatedLocations.length === 0 ? (
          <p className="elovaaDir-no-results">
            No locations match the selected filters.
          </p>
        ) : (
          <div className="elovaaDir-grid">
            {paginatedLocations.map((loc, idx) => (
              <Reveal
                as="div"
                className="elovaaDir-card"
                key={loc.id}
                delay={(idx % LOCATIONS_PER_PAGE) * 120}
              >
                <div className="elovaaDir-card-image">
                  <img src={loc.image} alt={loc.name} />
                </div>
                <div className="elovaaDir-card-info">
                  <h3 className="elovaaDir-card-title">{loc.name}</h3>
                  <p className="elovaaDir-card-desc">
                    {loc.description}
                    {" … "}
                    <a href="#view-location" className="elovaaDir-card-link">
                      View Location
                    </a>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="elovaaDir-pagination">
          <button
            className="elovaaDir-page-arrow"
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
                "elovaaDir-page-btn" +
                (num === currentPage ? " elovaaDir-page-btn-active" : "")
              }
              onClick={() => goToPage(num)}
            >
              {num}
            </button>
          ))}

          <button
            className="elovaaDir-page-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            »
          </button>
        </div>
      </section>

      {/* GRAY CTA TEXT SECTION */}
      <Reveal as="section" className="elovaaDir-cta">
        <p className="elovaaDir-cta-text">
          Explore hands-on education with Elovaa, a known name in
          Kolkata makeup artistry training. Our main studio on Park
          Street, along with our partner studios across the city and
          West Bengal, provide practical programs and proper working
          facilities. Through our Elovaa Partnership program, we also
          partner with select beauty and cosmetology institutes across
          Kolkata, enriching their offerings with our expert makeup
          artist courses. Discover the perfect makeup school location
          to advance your career in professional makeup artistry.
        </p>
      </Reveal>
    </div>
  );
}

export default ElovaaDirectory;