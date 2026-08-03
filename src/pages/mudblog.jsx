import React, { useEffect, useRef, useState } from 'react';
import './mudvlog.css';

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
      className={`bl-reveal ${visible ? 'bl-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

const POSTS = [
  {
    tag: 'Techniques',
    title: '5 Essential Brushes Every Makeup Artist Needs',
    excerpt:
      'From foundation to fine detail work, here are the brushes that belong in every professional kit and why they matter.',
    date: 'July 18, 2026',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700&q=80',
  },
  {
    tag: 'Industry',
    title: 'Behind The Scenes: SFX Makeup For Film',
    excerpt:
      'A look at how prosthetics, paint, and patience come together to bring characters to life on screen.',
    date: 'July 09, 2026',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmV4VMtRdSWowD4F6HYnmKa3Z3GatHSmLKGQZFZijuQ&s=10',
  },
  {
    tag: 'Career',
    title: 'How To Build A Makeup Artist Portfolio That Gets You Hired',
    excerpt:
      'What to include, how to shoot it, and the common mistakes new artists make when putting a portfolio together.',
    date: 'June 27, 2026',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&q=80',
  },
  {
    tag: 'Student Stories',
    title: 'MUD Alumni Spotlight: From Student To Session Artist',
    excerpt:
      'One graduate shares how she went from her first MUD class to working backstage at fashion week.',
    date: 'June 14, 2026',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XqdUIqlj-q-5Gd1JatJUQHJiEZ6q44BtNcmjb1GXyQ&s=10',
  },
  {
    tag: 'Trends',
    title: 'Bridal Makeup Trends For This Season',
    excerpt:
      'Soft draping, dewy skin, and warm neutral tones — what brides are asking for right now and how to deliver it.',
    date: 'June 02, 2026',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPU4T9RX7MI2WLjTuQ9vmapgS4SL6C7zzaroNnKtVkw&s=10',
  },
  {
    tag: 'Product Guide',
    title: 'Understanding Color Theory In Makeup Artistry',
    excerpt:
      'Why knowing the color wheel matters just as much as knowing your brushes, and how to apply it on set.',
    date: 'May 21, 2026',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=700&q=80',
  },
];

function MudBlog() {
  return (
    <div className="bl-page">
      {/* ===== HERO SECTION ===== */}
      <section className="bl-hero">
        <div className="bl-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80"
            alt="Makeup artist working at a desk with brushes and products"
          />
        </div>

        <div className="bl-hero-right">
          <div className="bl-hero-content">
            <span className="bl-eyebrow">
              Stories, Tips &amp; Inspiration From The World Of Makeup
              Artistry
            </span>
            <p>
              The MUD Blog is where technique meets storytelling. Explore
              tutorials from working artists, career advice for students and
              graduates, and a look behind the scenes at the industry we
              teach — from bridal counters to backstage at fashion week.
            </p>
            <a href="#posts" className="bl-readmore">
              <span className="bl-bar" />
              READ MORE
              <span className="bl-bar" />
            </a>
          </div>
        </div>

        <h1 className="bl-hero-title">
          <span className="bl-title-light">MUD</span>{' '}
          <span className="bl-title-dark">Blog</span>
        </h1>
      </section>

      {/* ===== FEATURED POST ===== */}
      <Reveal as="section" className="bl-featured">
        <div className="bl-featured-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0huZhROkjvjyxC9rdIrG0PkvxUuhMpB5JeKBgr_HQA&s=10"
            alt="Dramatic character makeup being applied"
          />
        </div>
        <div className="bl-featured-content">
          <span className="bl-tag">Featured &middot; Industry</span>
          <h2>
            From Sketch To Screen: How MUD Grads Are Shaping Character
            Design In Film
          </h2>
          <p>
            We sat down with three MUD alumni now working in film and
            television to talk about how their training shaped their
            approach to character makeup — and what they wish they'd known
            on day one.
          </p>
          <span className="bl-date">July 24, 2026 &nbsp;·&nbsp; 6 min read</span>
          <a href="#read" className="bl-featured-link">
            Read The Full Story
          </a>
        </div>
      </Reveal>

      {/* ===== POST GRID ===== */}
      <section className="bl-grid-section" id="posts">
        <Reveal className="bl-grid-heading-wrap">
          <h2>Latest From The Blog</h2>
        </Reveal>

        <div className="bl-grid">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 80} className="bl-card">
              <div className="bl-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <span className="bl-card-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="bl-card-footer">
                <span className="bl-card-date">{post.date}</span>
                <a href="#read" className="bl-card-link">
                  Read More
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <Reveal as="section" className="bl-newsletter">
        <div className="bl-newsletter-text">
          <h2>Never Miss A Post</h2>
          <p>
            Get new tutorials, career tips, and MUD news delivered straight
            to your inbox — no spam, just makeup.
          </p>
        </div>
        <form
          className="bl-newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bl-newsletter-input"
            aria-label="Email address"
          />
          <button type="submit" className="bl-newsletter-btn">
            Subscribe
          </button>
        </form>
      </Reveal>
    </div>
  );
}

export default MudBlog;