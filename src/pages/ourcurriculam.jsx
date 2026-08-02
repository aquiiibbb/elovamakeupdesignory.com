import React, { useEffect, useRef, useState } from 'react';
import './ourcurriculam.css';

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
      { threshold: 0.15 }
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
      className={`cu-reveal ${visible ? 'cu-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function OurCurriculum() {
  return (
    <div className="cu-page">
      {/* ===== HERO SECTION ===== */}
      <section className="cu-hero">
        <div className="cu-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&h=300&q=80&fit=crop"
            alt="Professional makeup artistry tools"
          />
        </div>

        <div className="cu-hero-right">
          <div className="cu-hero-content">
            <span className="cu-eyebrow">
              Explore Global Excellence In Makeup Education With MUD
            </span>
            <p>
              With campuses around the globe and a network of partner
              schools, MUD is dedicated to providing the highest standard of
              education in the makeup industry. Whether you're at the
              beginning of your makeup journey or looking to specialize with
              advanced skills, our makeup artist courses and programs are
              structured to meet every learning need.
            </p>
            <a href="#programs" className="cu-readmore">
              <span className="cu-bar" />
              READ MORE
              <span className="cu-bar" />
            </a>
          </div>
        </div>

        <h1 className="cu-hero-title">
          <span className="cu-title-light">Our</span>{' '}
          <span className="cu-title-dark">Curriculum</span>
        </h1>
      </section>

      {/* ===== DISCOVER YOUR PATH SECTION ===== */}
      <section className="cu-path">
        <Reveal className="cu-path-heading-wrap">
          <h2 className="cu-path-heading">
            Discover Your Path At MUD: Diverse Curriculum Across Global
            Locations
          </h2>
        </Reveal>

        <div className="cu-path-body">
          <Reveal className="cu-path-image-wrap">
            <div className="cu-path-images">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80"
                alt="Makeup artist applying makeup"
              />
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80"
                alt="Students practicing makeup in a studio"
              />
            </div>
          </Reveal>

          <div className="cu-path-text">
            <Reveal delay={100}>
              <p>
                At MUD, we embrace a holistic approach to makeup education,
                which combines rigorous technical training with artistic
                creativity. The core objective is to develop proficient
                artists who are not only adept at various makeup techniques
                but also understand the business aspects of the industry.
                Our makeup artist courses align with global industry
                standards, ensuring that our students are well-prepared for
                careers anywhere in the world. Whether you're starting your
                journey or advancing your skills, MUD offers specialized
                programs and makeup artist courses tailored to meet the
                demands of the makeup industry worldwide.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h3>Tailored Learning Experiences</h3>
              <p>
                Each MUD location brings its own unique set of offerings.
                While our core curriculum maintains a high standard of
                educational excellence globally, some specialized makeup
                artist courses and programs may vary by location to better
                serve the local market and employment opportunities. This
                approach allows us to provide the most relevant and
                impactful education possible, tailored to the distinct needs
                and ambitions of our students wherever they are based.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h3>Flexible Study Options</h3>
              <p>
                Whether you are just starting out in the world of makeup or
                seeking to advance your expertise with specialized training,
                MUD offers flexible study options to accommodate your
                aspirations and schedule. From intensive full-time courses
                to modular classes that can be combined and customized, our
                aim is to support your learning journey in a way that best
                fits your personal and professional life.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <h3>Seamless Integration of Theory and Practice</h3>
              <p>
                All our makeup artist courses, regardless of location, are
                designed to integrate theoretical knowledge with practical
                application. This ensures that every MUD student gains not
                only the technical skills required for success but also a
                deep understanding of the creative and business aspects of
                the makeup industry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT TO EXCELLENCE BANNER ===== */}
      <Reveal as="section" className="cu-commitment">
        <div className="cu-commitment-left">
          <h2>
            Commitment
            <br />
            To Excellence
          </h2>
        </div>
        <div className="cu-commitment-right">
          <p>
            We understand that the choice of where to study is as important
            as what you study. That's why we are committed to providing
            transparent and detailed information on the specific makeup
            artist courses available at each of our locations. We encourage
            prospective students to explore our offerings and reach out
            directly to our admissions teams at the respective campus in
            which you wish to attend for guidance on how best to align your
            educational path with your career objectives.
          </p>
        </div>
      </Reveal>

      {/* ===== ROW: WORLDWIDE AVAILABILITY ===== */}
      <section className="cu-row">
        <Reveal className="cu-row-image-wrap">
          <div className="cu-row-image">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80"
              alt="Professional cosmetics and brushes"
            />
          </div>
        </Reveal>
        <div className="cu-row-content">
          <Reveal delay={120}>
            <h3>Worldwide Availability of MUD Makeup Artist Courses:</h3>
            <p>
              At Make-up Designory, our MUD Studio courses are offered
              globally, ensuring consistent and high-quality education
              across our flagship campus in Los Angeles City, numerous MUD
              Studios, and Partner Schools worldwide. These courses provide
              comprehensive training in makeup artistry, covering everything
              from basic techniques to advanced skills tailored for specific
              industry needs. Whether students are near one of our central
              campuses or attending one of our partner locations, they
              receive the same rigorous and tailored educational experience
              that MUD is known for internationally. This unified approach
              to education ensures all our students, wherever they may be,
              are well-prepared to excel in the diverse and dynamic field of
              professional makeup artistry.
            </p>
            <p>
              View <a href="#listings">global makeup course</a> listings
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ROW: FLAGSHIP CAMPUSES ===== */}
      <section className="cu-row">
        <Reveal className="cu-row-image-wrap">
          <div className="cu-row-image">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80"
              alt="Professional makeup artist studio palette"
            />
          </div>
        </Reveal>
        <div className="cu-row-content">
          <Reveal delay={120}>
            <h3>Tailored Educational Experiences at Our Flagship Campuses:</h3>
            <p>
              Our flagship campus in Los Angeles City are designed to
              provide students with specialized educational experiences that
              leverage the unique industry strengths of each location. By
              focusing on the specific sectors predominant in these areas,
              our programs offer a depth of training that complements the
              broad-based education available at MUD Studios and Partner
              Schools globally. <em>(Please visit mud.edu for more info.)</em>
            </p>
            <h3>Los Angeles Campus:</h3>
            <p>
              Situated in the heart of the film and television industry,
              our Los Angeles campus offers students unparalleled
              opportunities to engage with leading professionals and gain
              hands-on experience in cinematic makeup techniques.
            </p>
            <h3>New York City Campus:</h3>
            <p>
              Positioned at the crossroads of fashion runway and theatre,
              our New York campus provides specialized programs that
              immerse students in the fast-paced world of fashion and live
              performance makeup.
            </p>
            <p>
              View LA and NYC <a href="#listings">course listings</a> &gt;&gt;&gt;
              Learn more about <a href="#mudedu">mud.edu</a> &gt;&gt;&gt;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ROW: PROGRAM STRUCTURE ===== */}
      <section className="cu-row">
        <Reveal className="cu-row-image-wrap">
          <div className="cu-row-image">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=80"
              alt="Eye makeup artistry close up"
            />
          </div>
        </Reveal>
        <div className="cu-row-content">
          <Reveal delay={120}>
            <h3>Program Structure:</h3>
            <p>
              Our curriculum offers a flexible, modular design, allowing
              students to progress from foundational skills to advanced
              specializations. MUD Programs and Courses differ by location.
              Please inquire at the location you are interested in
              attending for more information.
            </p>
            <h3>Teaching Methods:</h3>
            <p>
              We employ a blend of traditional lectures, practical
              workshops, and modern online modules, ensuring a comprehensive
              learning experience. Our use of state-of-the-art technology,
              like interactive tools and HD video content, supports a
              dynamic educational environment.
            </p>
            <h3>Assessment Methods:</h3>
            <p>
              Evaluations include practical exams, continuous assessments,
              and creative projects, adhering to rigorous standards that
              reflect real-world demands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ROW: FACULTY & ACCREDITATION ===== */}
      <section className="cu-row">
        <Reveal className="cu-row-image-wrap">
          <div className="cu-row-image">
            <img
              src="https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&auto=format&fit=crop&q=80"
              alt="Creative portrait makeup artistry"
            />
          </div>
        </Reveal>
        <div className="cu-row-content">
          <Reveal delay={120}>
            <h3>Faculty Information:</h3>
            <p>
              Our faculty consists of industry veterans and seasoned
              educators, whose profiles can be explored in more detail on
              our website. These professionals bring real-world experience
              directly into our classrooms and studios.
            </p>
            <h3>Accreditation and Certification:</h3>
            <p>
              Make-up Designory (MUD) is accredited by the Accrediting
              Commission of Career Schools and Colleges (ACCSC). Upon
              completion, each course earns a Certificate, transferable to
              MUD USA.
            </p>
            <h3>Success and Outcomes:</h3>
            <p>
              Our graduates enjoy high success rates, securing positions in
              film, television, fashion, and beyond. Detailed success
              stories and testimonials are featured on our website.
            </p>
            <h3>Admissions and Enrollment:</h3>
            <p>
              Information on makeup artist course schedules, prerequisites,
              and enrollment is readily available on our digital platform,
              with our admissions teams at each respective campus eager to
              assist prospective students through the application process.
            </p>
            <h3>Updates and Innovations:</h3>
            <p>
              We continuously update our curriculum to incorporate the
              latest trends and techniques in makeup artistry, ensuring MUD
              remains at the cutting edge of the industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FOOTER BANNER ===== */}
      <section className="cu-footer-banner">
        <div className="cu-collage-strip">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
            alt="Beauty portrait"
          />
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=80"
            alt="Eyeshadow makeup closeup"
          />
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
            alt="Beauty portrait"
          />
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop&q=80"
            alt="Beauty portrait closeup"
          />
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80"
            alt="Model portrait"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
            alt="Fashion portrait"
          />
        </div>

        <Reveal className="cu-footer-grid">
          <div className="cu-footer-col cu-footer-left">
            <h2>Makeup Artist Courses Offered Worldwide</h2>
          </div>

          <div className="cu-footer-col cu-footer-links">
            <ul>
              <li>
                <span className="cu-icon">🌐</span> International Makeup
                Artist Course Listings
              </li>
              <li>
                <span className="cu-icon">📰</span> Makeup Artist Courses
                Offered in LA &amp; NYC
              </li>
              <li>
                <span className="cu-icon">💻</span> Makeup Artist Courses
                Offered Online
              </li>
              <li>
                <span className="cu-icon">📱</span> Online Makeup Artist
                Courses Website
              </li>
              <li>
                <span className="cu-icon">ℹ️</span> About our Makeup School
                Locations
              </li>
            </ul>
          </div>

          <div className="cu-footer-col cu-footer-right">
            <h2>Art. Beauty. Creativity. Education. MUD.</h2>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default OurCurriculum;