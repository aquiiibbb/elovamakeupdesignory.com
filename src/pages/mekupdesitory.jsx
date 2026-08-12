import React, { useEffect, useRef, useState } from 'react';
import './mekupdesitory.css';

/* ---------- Scroll-reveal helper ---------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`am-reveal ${visible ? 'am-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

const STATS = [
  { value: '8+', label: 'Years Of Makeup Education' },
  { value: '1,200+', label: 'Graduates In Kolkata' },
  { value: '3', label: 'Studios Across The City' },
  { value: '1', label: 'City We Call Home' },
];

const VALUES = [
  {
    title: 'Education',
    text: 'Rigorous, industry-aligned training taught by working professionals, not just theory.',
  },
  {
    title: 'Artistry',
    text: 'Technique paired with creative freedom — every student develops a voice, not just a skill set.',
  },
  {
    title: 'Community',
    text: 'A Kolkata network of alumni, educators, and artists who keep learning from one another long after graduation.',
  },
  {
    title: 'Innovation',
    text: 'Curriculum that evolves with the industry, from beauty basics to the latest in prosthetics and SFX.',
  },
];

function AboutELOVAA() {
  return (
    <div className="am-page">
      {/* ===== HERO SECTION ===== */}
      <section className="am-hero">
        <div className="am-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
            alt="Makeup artist at work in an Elovaa studio"
          />
        </div>

        <div className="am-hero-right">
          <div className="am-hero-content">
            <span className="am-eyebrow">
              Est. 2018 &middot; Kolkata, West Bengal
            </span>
            <p>
              Elovaa was founded on a simple idea: that makeup artistry
              deserves the same rigor, respect, and education as any other
              craft. Since then, that idea has grown into a small but
              dedicated network of studios and artists across Kolkata who
              share one standard of excellence.
            </p>
            <a href="#about" className="am-readmore">
              <span className="am-bar" />
              READ MORE
              <span className="am-bar" />
            </a>
          </div>
        </div>

        <h1 className="am-hero-title">
          <span className="am-title-light">Elovaa</span>{' '}
          <span className="am-title-dark">Kolkata</span>
        </h1>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="am-about" id="about">
        <Reveal className="am-about-text">
          <h2>Who Is Elovaa?</h2>
          <p>
            Elovaa is a makeup school and product studio built by artists,
            for artists, right here in Kolkata. What began as a single
            studio has grown into one of the city's known names in makeup
            education — training students for careers in bridal, fashion,
            film, television, and special effects.
          </p>
          <p>
            We believe great makeup artistry sits at the intersection of
            technical precision and personal creativity. Our programs are
            designed to build both: the steady hand that comes from
            repetition, and the eye for storytelling that comes from
            genuine curiosity. Whether a student walks in wanting to work
            backstage at a fashion show or on a prosthetics team for a film
            set, our job is to get them industry-ready.
          </p>
        </Reveal>

        <Reveal delay={120} className="am-about-image">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
            alt="Makeup design sketches and face charts"
          />
        </Reveal>
      </section>

      {/* ===== STATS ROW ===== */}
      <Reveal as="section" className="am-stats">
        {STATS.map((stat) => (
          <div className="am-stat" key={stat.label}>
            <span className="am-stat-value">{stat.value}</span>
            <span className="am-stat-label">{stat.label}</span>
          </div>
        ))}
      </Reveal>

      {/* ===== VALUES SECTION ===== */}
      <section className="am-values">
        <Reveal className="am-values-heading-wrap">
          <h2>What We Stand For</h2>
        </Reveal>

        <div className="am-values-grid">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90} className="am-value-card">
              <span className="am-value-index">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <Reveal as="section" className="am-cta">
        <div className="am-cta-content">
          <h2>Ready To Become Part Of The Elovaa Story?</h2>
          <p>
            From your first foundation blend to your first day on set, we're
            here for every step. Explore our studios, meet our faculty, and
            see where Elovaa can take your artistry — right here in
            Kolkata.
          </p>
          <div className="am-cta-links">
            <a href="#schools" className="am-cta-btn">
              Explore Our Studios
            </a>
            <a href="#contact" className="am-cta-link">
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutELOVAA;