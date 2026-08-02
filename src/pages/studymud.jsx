import React from 'react';
import './studymud.css';

function StudyMud() {
  return (
    <div className="sm-page">
      {/* ===== HERO SECTION ===== */}
      <section className="sm-hero">
        <div className="sm-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTVcTWOeJH6Ap71T6WAoexQlGLhI07mV2HFrPbpEI1g&s=10"
            alt="Bold pink eyeshadow makeup look"
          />
          <svg
            className="sm-wave"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C150,60 350,0 500,25 C650,50 850,5 1000,30 L1000,60 L0,60 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="sm-hero-right">
          <div className="sm-hero-content">
            <span className="sm-eyebrow">
              Unleash Your Creativity With World-Class Education At Make-Up
              Designory
            </span>
            <p>
              Embark on a transformative journey where your passion for
              beauty and make-up artistry becomes your profession. At
              Make-up Designory (MUD), we pride ourselves on offering more
              than just make-up courses; we provide a gateway to a fulfilling
              career in the beauty industry. Our curriculum is meticulously
              designed to encompass all facets of make-up artistry, from the
              fundamental principles of beauty make-up to the intricate
              skills required for special effects and character make-up.
            </p>
            <a href="#programs" className="sm-readmore">
              <span className="sm-bar" />
              READ MORE
              <span className="sm-bar" />
            </a>
          </div>
        </div>

        <h1 className="sm-hero-title">
          <span className="sm-title-light">Study</span>{' '}
          <span className="sm-title-dark">At MUD</span>
        </h1>
      </section>

      {/* ===== MUD BANNER SECTION ===== */}
      <section className="sm-mud-banner">
        <div className="sm-mud-header">
          <h2>Begin Your Journey In Makeup Artistry With MUD</h2>
        </div>
        <div className="sm-mud-body">
          <p>
            Our programs are tailored to fit a variety of career paths,
            including fashion, film, television, and bridal make-up.
            Students are trained under the guidance of seasoned
            professionals, each with a wealth of experience and a deep
            understanding of the current industry standards and trends. Our
            state-of-the-art facilities offer a real-world environment where
            students can hone their skills, using the same high-quality MUD
            products that professionals rely on.
          </p>
          <p>
            MUD is not just about learning; it's about becoming part of a
            global community of makeup artists. Our alumni network spans the
            world, providing a vast resource for collaboration, inspiration,
            and career opportunities. Discover how MUD's comprehensive
            education, commitment to excellence, and global presence can
            help you achieve your dreams and set the stage for a successful
            career in make-up artistry.
          </p>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="sm-cta">
        <div className="sm-cta-image">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80"
            alt="Makeup artist applying makeup to a model"
          />
        </div>
        <div className="sm-cta-content">
          <h2>Ready To Transform Your Passion Into A Profession?</h2>
          <p>
            Embark on a transformative journey where your passion for beauty
            and make-up artistry becomes your profession.
          </p>
          <a href="#enroll" className="sm-cta-link">
            Join us at MUD, where your future in makeup begins.
          </a>
        </div>
      </section>
    </div>
  );
}

export default StudyMud;