import React, { useEffect, useRef } from 'react';
import "./becomearetailer.css";

/* Reusable hook: adds "elovaaRP-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("elovaaRP-visible");
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
    <div className="elovaaRP-page">
      {/* HERO SECTION */}
      <section className="elovaaRP-hero">
        <div className="elovaaRP-hero-image">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
            alt="Elovaa Retailers model"
          />
        </div>

        <div className="elovaaRP-hero-content">
          <h1
            ref={heroTitleRef}
            className="elovaaRP-hero-title elovaaRP-reveal elovaaRP-reveal-title"
          >
            ELOVAA<br />
            Retailers
          </h1>

          <div className="elovaaRP-hero-text">
            <p className="elovaaRP-hero-subtitle">
              BECOME A RETAIL PARTNER WITH ELOVAA: BEAUTY, CHARACTER, AND
              EVERYTHING IN BETWEEN
            </p>

            <p className="elovaaRP-hero-desc">
              Elovaa invites you to join our growing network of
              retailers across Kolkata, a select group that values
              excellence and craft in beauty and make-up artistry. By
              becoming an Elovaa retailer, you align yourself with a
              brand known for its commitment to quality and for a range
              of products that cater to beauty enthusiasts and
              professional make-up artists alike, including those
              specializing in character make-up and prosthetics.
            </p>

            <a href="#read-more" className="elovaaRP-read-more">
              READ MORE
            </a>
          </div>
        </div>
      </section>

      {/* HEADING STRIP */}
      <section
        ref={whySectionRef}
        className="elovaaRP-heading-strip elovaaRP-reveal"
      >
        <h2 className="elovaaRP-heading-title">
          Why Become A ELOVAA Retail Partner?
        </h2>
      </section>

      {/* GRAY INFO SECTION */}
      <section
        ref={infoSectionRef}
        className="elovaaRP-info elovaaRP-reveal"
      >
        <p className="elovaaRP-info-text">
          Our partnership extends beyond just selling products; it's
          about joining a community that's part of Kolkata's growing
          beauty scene. Elovaa supports its retailers with training,
          merchandising solutions, and marketing tools to ensure that
          you are equipped to meet and exceed your customers'
          expectations. Whether you are a large retailer or a small
          beauty salon, partnering with Elovaa means you are providing
          your clients with the best in beauty and character make-up.
        </p>

        <p className="elovaaRP-info-text">
          Discover how our retail partnership programs can help you
          attract a diverse clientele, from professionals looking for
          quality make-up tools and products for their artistry, to
          beauty lovers seeking to bring professional-level make-up
          into their everyday lives. Join us in our mission to
          empower Kolkata's beauty community, one product at a time.
        </p>

        <p className="elovaaRP-info-text">
          Fill out our{" "}
          <a href="#wholesale-application" className="elovaaRP-info-link">
            wholesale application
          </a>{" "}
          and become a retail partner today!
        </p>
      </section>
    </div>
  );
}

export default BecomeARetailer;