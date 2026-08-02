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
              Global Reach, Local Excellence: Explore Our Makeup Schools And
              Studios
            </span>
            <p>
              At <strong>Make-up Designory (MUD)</strong>, we are dedicated
              to providing exceptional makeup education through our network
              of top-tier makeup schools and studios. Whether you're looking
              to study at our renowned main campus in{' '}
              <strong>Los Angeles</strong>, immerse yourself in the dynamic
              learning environments of our <strong>global MUD Studios</strong>
              , or enhance your skills through our{' '}
              <strong>MUD Partner Schools</strong>, each location offers a
              high-quality, immersive educational experience. Wherever you
              choose to learn, our makeup schools provide the same level of
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
          <span className="ol-title-light">MUD</span>{' '}
          <span className="ol-title-dark">
            Makeup Schools
          </span>
        </h1>
      </section>

      {/* ===== ABOUT OUR MAKEUP SCHOOLS ===== */}
      <section className="ol-about" id="about">
        <Reveal className="ol-about-heading-wrap">
          <h2 className="ol-about-heading">About Our Makeup Schools...</h2>
        </Reveal>

        <div className="ol-about-body">
          <Reveal delay={80}>
            <h3>MUD Main Campus</h3>
            <p>
              Experience world-class education at our prestigious makeup
              school in Los Angeles. Our Los Angeles campus is proudly
              accredited by the Accrediting Commission of Career Schools and
              Colleges (ACCSC), ensuring that students receive top-tier
              instruction and industry-recognized credentials. Our main
              campus is owned and operated directly by MUD, offer
              specialized makeup programs and courses tailored to meet the
              high demands of the ever-evolving beauty industry. At our
              makeup schools, you'll learn from experienced professionals in
              state-of-the-art classrooms, gaining hands-on experience that
              prepares you for a successful career. Our LA location provides
              professional kits and materials available at our on-campus MUD
              store, so students always have access to the best tools and
              products to succeed in their studies and beyond.
            </p>
            <p>
              If you're searching for a makeup school in Los Angeles, MUD's
              main campus provide unmatched educational opportunities.
              Whether you're local or traveling to attend, our campus is
              situated in a major entertainment and beauty industry hub,
              offering connections and resources that go beyond the
              classroom.
            </p>
            <p className="ol-link-line">
              Visit our USA main campus website at:{' '}
              <a href="https://www.mud.edu">https://www.mud.edu</a>
            </p>
            <p className="ol-link-line">
              View our programs here:{' '}
              <a href="https://mud.edu/makeup-artistry-programs/">
                https://mud.edu/makeup-artistry-programs/
              </a>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h3>MUD Studios</h3>
            <p>
              MUD's educational reach doesn't stop at our U.S. locations; it
              extends across the globe through MUD Studios. These
              international makeup schools are located throughout Europe,
              Asia, and South Africa, offering a world-class education to
              students everywhere. Operated by trusted licensees, MUD
              Studios provide a learning experience that mirrors the high
              standards of our U.S.-based makeup schools. Each studio is
              equipped with retail spaces and cutting-edge classrooms,
              ensuring that students receive comprehensive training with
              access to professional-grade makeup products. Whether you're
              searching for makeup schools near me abroad or looking to
              enhance your skills locally, MUD Studios deliver the same
              level of excellence that students expect from MUD.
            </p>
            <p className="ol-link-line">
              View our MUD Studio Directory here:{' '}
              <a href="https://makeupdesignory.com/mud-locations/mud-studio/">
                https://makeupdesignory.com/mud-locations/mud-studio/
              </a>
            </p>
            <p className="ol-link-line">
              View our list of Studio Courses here:{' '}
              <a href="https://makeupdesignory.com/makeup-courses-offered-worldwide/">
                https://makeupdesignory.com/makeup-courses-offered-worldwide/
              </a>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h3>MUD Extension</h3>
            <p>
              In addition to our dedicated makeup schools and MUD Studios,
              we've partnered with select cosmetology and esthetician
              schools through our <strong>MUD Partner Schools</strong>{' '}
              program. These schools, located in both the U.S. and
              international markets, offer certified MUD makeup courses
              integrated into their broader beauty education programs.
              Though not exclusively makeup schools, these partner
              institutions incorporate MUD's specialized makeup techniques
              into their curricula, ensuring that students gain a
              competitive edge in the beauty industry. For those seeking
              makeup schools near me with a diverse range of beauty
              programs, MUD Partner Schools offer an accessible pathway to
              high-quality makeup education without needing to attend a
              dedicated makeup institution.
            </p>
            <p className="ol-link-line">
              View our MUD Partner Schools Directory here:{' '}
              <a href="https://makeupdesignory.com/mud-locations/mud-partner-schools">
                https://makeupdesignory.com/mud-locations/mud-partner-schools
              </a>
            </p>
            <p className="ol-link-line">
              View our Studio Courses here:{' '}
              <a href="https://makeupdesignory.com/makeup-courses-offered-worldwide/">
                https://makeupdesignory.com/makeup-courses-offered-worldwide/
              </a>
            </p>
          </Reveal>

          <Reveal delay={260} className="ol-find-block">
            <h2>Find A MUD Location...</h2>
            <p>
              Looking for makeup schools near me? Use our{' '}
              <a href="#locator">
                <u>MUD Locator</u>
              </a>{' '}
              to search by zip or postal code for makeup schools and retail
              locations. For a full list, visit the{' '}
              <a href="#directory">
                <u>MUD Directory</u>
              </a>{' '}
              to explore our locations worldwide.
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
            Apply now and start your journey with MUD! Complete our online
            form and choose your desired location. Prefer to speak with
            someone? Our MUD Locator will guide you to the a makeup school
            closest to you.
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