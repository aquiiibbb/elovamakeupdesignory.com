import React, { useEffect, useRef } from 'react';
import "./schoolcollaboration.css";

/* Reusable hook: adds "mudSC-visible" class to an element once it scrolls into view */
function useRevealOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mudSC-visible");
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

function SchoolCollaboration() {
  const heroTitleRef = useRevealOnScroll();
  const ctaRef = useRevealOnScroll();

  return (
    <div className="mudSC-page">
      {/* HERO SECTION */}
      <section className="mudSC-hero">
        <div className="mudSC-hero-collage">
          <div className="mudSC-collage-item mudSC-item-1">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Lip liner application" 
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="mudSC-collage-item mudSC-item-2">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Makeup application" 
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="mudSC-collage-item mudSC-item-3">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Lipstick application" 
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="mudSC-collage-item mudSC-item-4">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Applying eyeliner" 
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="mudSC-collage-item mudSC-item-5">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Lip pencil closeup" 
                width="200"
                height="200"
              />
            </div>
          </div>
          <div className="mudSC-collage-item mudSC-item-6">
            <div className="mudSC-photo-inner">
              <img 
                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Eyebrow application" 
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>

        <div className="mudSC-hero-content">
          <h1 ref={heroTitleRef} className="mudSC-hero-title mudSC-reveal mudSC-reveal-title">
            MUD<br />
            Cosmetics<br />
            School<br />
            Collaboration
          </h1>

          <div className="mudSC-hero-text">
            <p className="mudSC-hero-subtitle">
              SUPPLEMENT YOUR CURRICULUM WITH<br />
              PROFESSIONAL MAKEUP TRAINING
            </p>

            <p className="mudSC-hero-desc">
              Make-Up Designory (MUD) offers two distinct makeup school
              programs designed to meet the needs of educational
              institutions looking to enhance their cosmetology or
              esthetician offerings through collaboration:{" "}
              <strong>MUD Studio Courses</strong> and{" "}
              <strong>Fundamentals of Makeup Artistry</strong>. Our
              programs provide schools with dedicated kits,
              comprehensive curriculums, and expert training tailored
              to various levels of instruction.
            </p>

            <a href="#read-more" className="mudSC-read-more">
              READ MORE
            </a>
          </div>
        </div>
      </section>

      {/* GRAY BANNER */}
      <section className="mudSC-banner">
        <h2 className="mudSC-banner-title">Enhance Your Curriculum With MUD</h2>
      </section>

      {/* TWO COLUMN PROGRAM SECTION */}
      <section className="mudSC-programs">
        <div className="mudSC-program-card">
          <h3 className="mudSC-program-title">MUD Studio Courses</h3>
          <p className="mudSC-program-eyebrow">
            COMPREHENSIVE MAKEUP TRAINING FOR SCHOOLS
          </p>
          <p className="mudSC-program-desc">
            MUD Studio Courses are available for integration into
            existing schools, colleges, or as part of stand-alone MUD
            Studios. These courses begin with an 84-hour{" "}
            <em>Beauty Essentials</em> program and can be expanded to
            include specialized subjects such as Airbrush Makeup,
            Fashion, and Bridal Makeup. These courses can either
            supplement an existing curriculum or be structured as a
            separate program.
          </p>

          <p className="mudSC-program-subhead">BENEFITS OF THE MUD STUDIO PROGRAM</p>
          <ul className="mudSC-program-list">
            <li>
              <strong>Complementary Faculty Training:</strong> A
              50-hour training course provided at no additional cost.
            </li>
            <li>
              <strong>Ongoing Instructor Support:</strong> Continuous
              support for your teaching staff.
            </li>
            <li>
              <strong>Live-Streamed Lectures:</strong> Access to
              live-streamed lectures, practical sessions, and
              certification.
            </li>
            <li>
              <strong>Fully Developed Curriculums:</strong>
              Ready-to-implement teaching plans and materials.
            </li>
            <li>
              <strong>Global Transferability:</strong> Courses can be
              transferred between MUD locations, including Los
              Angeles, Milan, Berlin, and more.
            </li>
            <li>
              <strong>Flexible Funding Options:</strong> Stand-alone
              courses can be offered with alternative funding options.
            </li>
            <li>
              <strong>MUD Certification:</strong> Students receive a
              certificate of completion from MUD.
            </li>
            <li>
              <strong>Marketing Support:</strong> Access to marketing
              resources and inclusion in the MUD online directory.
            </li>
            <li>
              <strong>Exclusive Branding:</strong> Schools can brand
              their courses as MUD Studio Courses.
            </li>
          </ul>

          <p className="mudSC-program-subhead">MUD STUDIO COURSES OFFERED</p>
          <ul className="mudSC-program-list mudSC-program-list-plain">
            <li>Beauty Essentials (84 hours)</li>
            <li>Airbrush Makeup Artistry (35 hours)</li>
            <li>Bridal Makeup Artistry (21 hours)</li>
            <li>Studio Makeup Artistry (35 hours)</li>
            <li>High Fashion Makeup Trends (35 hours)</li>
            <li>Essentials of Hair (70 hours)</li>
            <li>Portfolio Development (35 hours)</li>
            <li>Special Makeup Effects (70 hours)</li>
          </ul>
        </div>

        <div className="mudSC-program-card">
          <h3 className="mudSC-program-title">Fundamentals Of Makeup Artistry</h3>
          <p className="mudSC-program-eyebrow">
            FLEXIBLE PROGRAMS FOR LIMITED INSTRUCTION TIME
          </p>
          <p className="mudSC-program-desc">
            For schools with limited time for makeup instruction,
            MUD's <em>Fundamentals of Makeup Artistry</em> course is
            an ideal choice. This anchor course is based on a 21-hour
            curriculum that can be adjusted to fit a school's specific
            hour requirements and schedule.
          </p>

          <p className="mudSC-program-subhead">
            ADVANTAGES OF THE FUNDAMENTAL COURSE PROGRAM
          </p>
          <ul className="mudSC-program-list">
            <li>
              <strong>Flexible Curriculum:</strong> Adjust the
              curriculum and complementary training to fit your
              schedule.
            </li>
            <li>
              <strong>Customizable Kits:</strong> Choose from multiple
              kit sizes (cream or liquid foundation forms).
            </li>
            <li>
              <strong>Non-Makeup Artist Instructors:</strong> Courses
              can be taught by non-makeup artists.
            </li>
            <li>
              <strong>Self-Guided Teacher Training:</strong> Teachers
              can access online, self-guided training.
            </li>
            <li>
              <strong>Teacher Support:</strong> Ongoing support for
              instructors.
            </li>
            <li>
              <strong>Student Hygiene Course:</strong> An online,
              self-guided hygiene course for students.
            </li>
            <li>
              <strong>Digital Curriculum Support:</strong> Curriculum
              available on Lab by Pivot Point, CIMA by Milady, and
              Teachable platforms.
            </li>
          </ul>

          <p className="mudSC-program-subhead">FUNDAMENTAL COURSES OFFERED</p>
          <ul className="mudSC-program-list mudSC-program-list-plain">
            <li>Fundamentals of Makeup Artistry (21 hours)</li>
            <li>Hygiene (4 hours)</li>
            <li>Airbrush Makeup Artistry (14 hours)</li>
          </ul>
        </div>
      </section>

      {/* IMAGE + DARK CTA SECTION (side by side) */}
      <section ref={ctaRef} className="mudSC-cta-wrap mudSC-reveal">
        <div className="mudSC-cta-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzP3VI9EHcZom_wbc9st1r2bijsXYtOaxQ2SqbfTQe5A&s=10" 
            alt="Student portfolio work" 
            width="400"
            height="500"
          />
        </div>

        <div className="mudSC-cta">
          <h2 className="mudSC-cta-title">Expand Your Beauty Education Offerings</h2>

          <p className="mudSC-cta-text">
            By collaborating with <strong>Make-Up Designory (MUD)</strong>,
            your institution can introduce{" "}
            <strong>professional makeup artistry training</strong> that
            not only enhances your curriculum but also elevates your
            school's standing in the beauty education industry. Our
            programs provide students with{" "}
            <strong>industry-recognized certifications</strong>, giving
            them a significant advantage as they embark on their
            careers. With MUD's comprehensive curriculum, your students
            will acquire cutting-edge skills and techniques that align
            with the latest trends and standards in the beauty world.
          </p>

          <p className="mudSC-cta-text">
            We offer <strong>fully developed curriculums</strong> that
            are easy to integrate into your existing programs, complete
            with dedicated kits and educational materials. Our team
            provides <strong>ongoing support and expert training</strong>{" "}
            for your instructors, ensuring they are well-equipped to
            deliver high-quality education. This collaboration allows
            your school to offer a more diverse range of courses,
            attracting a broader student base and meeting the growing
            demand for specialized beauty professionals.
          </p>

          <p className="mudSC-cta-text">
            By incorporating MUD's programs, your institution
            demonstrates a commitment to excellence and innovation in
            beauty education. Students will benefit from hands-on
            experience with professional-grade products and tools,
            preparing them for real-world applications in various
            sectors of the beauty industry, including salons, spas,
            fashion, film, and television. Moreover, the addition of
            MUD's prestigious certifications can enhance your school's
            reputation, making it a preferred choice for aspiring beauty
            professionals.
          </p>

          <p className="mudSC-cta-subhead">Ready to partner with MUD?</p>

          <p className="mudSC-cta-text">
            Join the many educational institutions that have
            successfully expanded their programs through our partnership
            and collaboration programs.{" "}
            <a href="#contact" className="mudSC-cta-link">
              Contact us today
            </a>{" "}
            to discover how MUD's expertise and resources can bring
            advanced makeup education to your school. Together, we can
            empower the next generation of beauty professionals and set
            new standards for excellence in beauty education.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SchoolCollaboration;