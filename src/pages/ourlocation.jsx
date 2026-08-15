import React, { useEffect, useRef, useState } from 'react';
import './ourlocation.css';

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
      className={`ol-reveal ${visible ? 'ol-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function OurLocation() {
  return (
    <div className="ol-page">
      {/* ===== HERO SECTION ===== */}
      <section className="ol-hero">
        <div className="ol-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=280&q=80&fit=crop"
            alt="Woman holding a mug that reads Wake up for Make-up"
          />
        </div>

        <div className="ol-hero-right">
          <div className="ol-hero-content">
            <span className="ol-eyebrow">
              Rooted In Kolkata: Explore Our Makeup Studios
            </span>
            <p>
              At <strong>Elovaa</strong>, we are dedicated to providing
              exceptional makeup education through our main studio and a
              growing network of studios and partner schools across
              Kolkata. Whether you're looking to study at our main studio,
              immerse yourself in one of our <strong>Elovaa partner
              studios</strong>, each location offers a high-quality,
              hands-on educational experience. Wherever you choose to
              learn, our makeup schools provide the same level of
              excellence, helping you reach your professional goals in the
              beauty industry.
            </p>
            <a href="#about" className="ol-readmore">
              <span className="ol-bar" />
              READ MORE
              <span className="ol-bar" />
            </a>
          </div>
        </div>

        <h1 className="ol-hero-title">
          <span className="ol-title-light">Elovaa</span>{' '}
          <span className="ol-title-dark">Makeup Schools</span>
        </h1>
      </section>

      {/* ===== ABOUT OUR MAKEUP SCHOOLS ===== */}
      <section className="ol-about" id="about">
        <Reveal className="ol-about-heading-wrap">
          <h2 className="ol-about-heading">About Our Makeup Schools...</h2>
        </Reveal>

        <div className="ol-about-body">
          <Reveal delay={80}>
            <h3>Elovaa Main Studio</h3>
            <p>
              Experience hands-on education at our main studio in Kolkata.
              Our curriculum is built directly by our own instructors,
              ensuring students receive practical training and skills that
              are actually used on set and at events across the city. Our
              main studio is owned and operated directly by Elovaa, and
              offers specialized makeup programs and courses tailored to
              meet the demands of Kolkata's beauty industry. At our studio,
              you'll learn from experienced professionals in a real working
              environment, gaining hands-on experience that prepares you
              for a successful career. Our main studio also has an on-site
              Elovaa store, so students always have access to the tools and
              products they need to succeed in their studies and beyond.
            </p>
            <p>
              If you're searching for a makeup school in Kolkata, Elovaa's
              main studio offers unmatched educational opportunities.
              Whether you're local or travelling in to attend, our studio
              is situated close to Kolkata's entertainment and beauty
              industry hubs, offering connections and resources that go
              beyond the classroom.
            </p>
            <p className="ol-link-line">
              Visit our website at:{' '}
              <a href="https://www.elovaa.edu">https://www.elovaa.edu</a>
            </p>
            <p className="ol-link-line">
              View our programs here:{' '}
              <a href="https://elovaa.edu/makeup-artistry-programs/">
                https://elovaa.edu/makeup-artistry-programs/
              </a>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h3>Elovaa Partner Studios</h3>
            <p>
              Elovaa's educational reach extends beyond our main studio
              through our partner studios across Kolkata. These partner
              locations are operated by trusted local instructors and
              offer training that mirrors the standard of our main studio.
              Each partner studio is equipped with retail space and proper
              classrooms, ensuring students receive thorough training with
              access to professional-grade makeup products. Whether you're
              searching for a makeup school near you in south, central, or
              north Kolkata, our partner studios deliver the same level of
              excellence that students expect from Elovaa.
            </p>
            <p className="ol-link-line">
              View our Studio Directory here:{' '}
              <a href="#directory">
                elovaa.edu/locations/studio-directory
              </a>
            </p>
            <p className="ol-link-line">
              View our list of Studio Courses here:{' '}
              <a href="#courses">
                elovaa.edu/makeup-courses-offered
              </a>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h3>Elovaa Extension</h3>
            <p>
              In addition to our main studio and partner studios, we've
              partnered with select beauty and cosmetology schools in
              Kolkata through our <strong>Elovaa Partner Schools</strong>{' '}
              program. These schools offer certified Elovaa makeup courses
              integrated into their broader beauty education programs.
              Though not exclusively makeup schools, these partner
              institutions incorporate Elovaa's specialized makeup
              techniques into their curricula, ensuring that students gain
              a competitive edge in the local beauty industry. For those
              seeking a makeup school near them with a diverse range of
              beauty programs, Elovaa Partner Schools offer an accessible
              pathway to quality makeup education.
            </p>
            <p className="ol-link-line">
              View our Partner Schools Directory here:{' '}
              <a href="#partner-directory">
                elovaa.edu/locations/partner-schools
              </a>
            </p>
            <p className="ol-link-line">
              View our Studio Courses here:{' '}
              <a href="#courses">
                elovaa.edu/makeup-courses-offered
              </a>
            </p>
          </Reveal>

          <Reveal delay={260} className="ol-find-block">
            <h2>Find An Elovaa Location...</h2>
            <p>
              Looking for a makeup school near you in Kolkata? Use our{' '}
              <a href="#locator">
                <u>Elovaa Locator</u>
              </a>{' '}
              to search by pin code for makeup schools and retail
              locations. For a full list, visit the{' '}
              <a href="#directory">
                <u>Elovaa Directory</u>
              </a>{' '}
              to explore all our Kolkata locations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="ol-cta">
        <Reveal className="ol-cta-image-wrap">
          <div className="ol-cta-image">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80"
              alt="Makeup face charts and design sketches"
            />
            <span className="ol-dot ol-dot-1" />
            <span className="ol-dot ol-dot-2" />
            <span className="ol-dot ol-dot-3" />
            <span className="ol-dot ol-dot-4" />
            <span className="ol-dot ol-dot-5" />
            <span className="ol-dot ol-dot-6" />
          </div>
        </Reveal>

        <Reveal delay={120} className="ol-cta-content">
          <h2>Ready To Transform Your Passion Into A Profession?</h2>
          <p>
            Apply now and start your journey with Elovaa! Complete our online
            form and choose your desired studio. Prefer to speak with
            someone? Our Elovaa Locator will guide you to the makeup school
            closest to you in Kolkata.
          </p>
          <p className="ol-cta-links">
            <a href="#apply">Apply Now</a> | <a href="#find">Find a Location</a>{' '}
            | <a href="#contact">Contact Us</a>
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default OurLocation;