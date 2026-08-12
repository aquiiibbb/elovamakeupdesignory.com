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
              Explore Hands-On Excellence In Makeup Education With Elovaa
            </span>
            <p>
              With our Kolkata studio and a network of partner schools
              across West Bengal, Elovaa is dedicated to providing a high
              standard of education in the makeup industry. Whether you're
              at the beginning of your makeup journey or looking to
              specialize with advanced skills, our makeup artist courses
              and programs are structured to meet every learning need.
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
            Discover Your Path At Elovaa: Diverse Curriculum Across Kolkata
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
                At Elovaa, we embrace a holistic approach to makeup
                education, which combines rigorous technical training with
                artistic creativity. The core objective is to develop
                proficient artists who are not only adept at various makeup
                techniques but also understand the business side of the
                industry. Our makeup artist courses are built around
                Kolkata's own bridal, fashion, and film markets, so our
                students are well-prepared for careers right here. Whether
                you're starting your journey or advancing your skills,
                Elovaa offers specialized programs and courses tailored to
                meet the demands of the local makeup industry.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h3>Tailored Learning Experiences</h3>
              <p>
                Each Elovaa batch brings its own unique set of offerings.
                While our core curriculum maintains a high standard of
                educational excellence, some specialized courses and
                programs vary depending on demand from Kolkata's bridal,
                fashion, and film industries. This approach allows us to
                provide the most relevant and impactful education possible,
                tailored to the distinct needs and ambitions of our
                students.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h3>Flexible Study Options</h3>
              <p>
                Whether you are just starting out in the world of makeup or
                seeking to advance your expertise with specialized training,
                Elovaa offers flexible study options to accommodate your
                aspirations and schedule. From intensive full-time courses
                to modular weekend classes that can be combined and
                customized, our aim is to support your learning journey in a
                way that best fits your personal and professional life.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <h3>Seamless Integration of Theory and Practice</h3>
              <p>
                All our makeup artist courses, regardless of location, are
                designed to integrate theoretical knowledge with practical
                application. This ensures that every ELOVAA student gains not
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
            artist courses available at our Kolkata studio. We encourage
            prospective students to explore our offerings and reach out
            directly to our admissions team for guidance on how best to
            align your educational path with your career objectives.
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
            <h3>Elovaa Makeup Artist Courses, All Across Kolkata:</h3>
            <p>
              At Elovaa, our courses are offered consistently across our
              main studio and our network of partner studios in Kolkata.
              These courses provide thorough training in makeup artistry,
              covering everything from basic techniques to advanced skills
              tailored for specific industry needs. Whether students train
              at our main studio or at one of our partner locations, they
              receive the same rigorous and tailored educational experience
              that Elovaa is known for. This unified approach to education
              ensures all our students are well-prepared to excel in the
              diverse and dynamic field of professional makeup artistry.
            </p>
            <p>
              View <a href="#listings">our Kolkata course</a> listings
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
            <h3>Tailored Educational Experiences Across Our Kolkata Studios:</h3>
            <p>
              Our main studio and partner studios are designed to provide
              students with specialized educational experiences that
              leverage the unique industry strengths of each area of the
              city. By focusing on the specific sectors predominant in each
              location, our programs offer a depth of training that
              complements the broad-based education available across all
              Elovaa studios. <em>(Please visit elovaa.edu for more info.)</em>
            </p>
            <h3>Park Street Studio:</h3>
            <p>
              Situated close to Kolkata's film and television production
              hubs, our Park Street studio gives students opportunities to
              engage with working professionals and gain hands-on
              experience in on-screen makeup techniques.
            </p>
            <h3>Salt Lake Campus:</h3>
            <p>
              Positioned near the city's fashion and event circuit, our
              Salt Lake campus offers specialized programs that immerse
              students in fashion, bridal, and live-event makeup.
            </p>
            <p>
              View Park Street and Salt Lake <a href="#listings">course listings</a> &gt;&gt;&gt;
              Learn more about <a href="#elovaaedu">elovaa.edu</a> &gt;&gt;&gt;
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
              specializations. Elovaa Programs and Courses may differ
              slightly between our studios. Please inquire at the studio
              you are interested in attending for more information.
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
              Elovaa's programs are structured to meet recognised industry
              training benchmarks. Upon completion, each course earns a
              Certificate from Elovaa, Kolkata.
            </p>
            <h3>Success and Outcomes:</h3>
            <p>
              Our graduates enjoy strong placement rates, securing
              positions in film, television, bridal, and fashion work
              across Kolkata. Detailed success stories and testimonials
              are featured on our website.
            </p>
            <h3>Admissions and Enrollment:</h3>
            <p>
              Information on makeup artist course schedules, prerequisites,
              and enrollment is readily available on our digital platform,
              with our admissions team eager to assist prospective students
              through the application process.
            </p>
            <h3>Updates and Innovations:</h3>
            <p>
              We continuously update our curriculum to incorporate the
              latest trends and techniques in makeup artistry, ensuring
              Elovaa remains at the cutting edge locally.
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
            <h2>Makeup Artist Courses Offered Across Kolkata</h2>
          </div>

          <div className="cu-footer-col cu-footer-links">
            <ul>
              <li>
                <span className="cu-icon">🌐</span> Kolkata Makeup
                Artist Course Listings
              </li>
              <li>
                <span className="cu-icon">📰</span> Makeup Artist Courses
                Offered at Park Street &amp; Salt Lake
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
            <h2>Art. Beauty. Craft. Kolkata. Elovaa.</h2>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default OurCurriculum;