import React, { useEffect, useRef } from 'react';
import "./becomearetailer.css";

/* Reusable hook: adds "mudRP-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mudRP-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

function BecomeARetailer() {
  const heroTitleRef = useRevealOnScroll();
  const whySectionRef = useRevealOnScroll();
  const infoSectionRef = useRevealOnScroll();

  return (
    <div className="mudRP-page">
      {/* HERO SECTION */}
      <section className="mudRP-hero">
        <div className="mudRP-hero-image">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
            alt="MUD Retailers model"
          />
        </div>

        <div className="mudRP-hero-content">
          <h1
            ref={heroTitleRef}
            className="mudRP-hero-title mudRP-reveal mudRP-reveal-title"
          >
            MUD<br />
            Retailers
          </h1>

          <div className="mudRP-hero-text">
            <p className="mudRP-hero-subtitle">
              BECOME A RETAIL PARTNER WITH MUD: BEAUTY, CHARACTER, AND
              EVERYTHING IN BETWEEN
            </p>

            <p className="mudRP-hero-desc">
              MUD invites you to join our esteemed network of
              retailers, a select group that values excellence and
              innovation in beauty and make-up artistry. By becoming a
              MUD retailer, you align yourself with a brand that is
              revered not only for its commitment to quality but also
              for its comprehensive range of products that cater to
              beauty enthusiasts and professional make-up artists
              alike, including those specializing in character make-up
              and prosthetics.
            </p>

            <a href="#read-more" className="mudRP-read-more">
              READ MORE
            </a>
          </div>
        </div>
      </section>

      {/* HEADING STRIP */}
      <section
        ref={whySectionRef}
        className="mudRP-heading-strip mudRP-reveal"
      >
        <h2 className="mudRP-heading-title">
          Why Become A MUD Retail Partner?
        </h2>
      </section>

      {/* GRAY INFO SECTION */}
      <section
        ref={infoSectionRef}
        className="mudRP-info mudRP-reveal"
      >
        <p className="mudRP-info-text">
          Our partnership extends beyond just selling products; it's
          about joining a community that's at the forefront of the
          beauty industry. MUD supports its retailers with training,
          merchandising solutions, and marketing tools to ensure that
          you are equipped to meet and exceed your customers'
          expectations. Whether you are a large retailer or a small
          beauty salon, partnering with MUD means you are providing
          your clients with the best in beauty and character make-up.
        </p>

        <p className="mudRP-info-text">
          Discover how our retail partnership programs can help you
          attract a diverse clientele, from professionals looking for
          the highest quality make-up tools and products for their
          artistry, to beauty lovers seeking to bring
          professional-level make-up into their everyday lives. Join
          us in our mission to empower individuals through make-up,
          one product at a time.
        </p>

        <p className="mudRP-info-text">
          Fill out our{" "}
          <a href="#wholesale-application" className="mudRP-info-link">
            wholesale application
          </a>{" "}
          and become a retail partner today!
        </p>
      </section>
    </div>
  );
}

export default BecomeARetailer;