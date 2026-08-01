import React, { useEffect, useRef } from "react";
import "./careerservices.css";

function useCsReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("cs-in-view");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function CareerServices() {
  const heroImgRef = useCsReveal();
  const heroBoxRef = useCsReveal();
  const heroBodyRef = useCsReveal();
  const gatewayRef = useCsReveal();
  const directoriesRef = useCsReveal();
  const howItWorksRef = useCsReveal();
  const hireImgRef = useCsReveal();
  const hireBoxRef = useCsReveal();
  const hireBottomRef = useCsReveal();

  return (
    <>
      {/* ================= SECTION 1: CAREER SERVICES HERO ================= */}

      <section className="cs-hero">
        <div className="cs-hero-row">
          <div ref={heroImgRef} className="cs-reveal cs-slide-left cs-hero-image">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"
              alt="MUD talent"
            />
          </div>

          <div className="cs-hero-right">
            <div ref={heroBoxRef} className="cs-reveal cs-slide-right cs-hero-headline">
              <h1>
                Connect With Top
                <br />
                Talent Through MUD
                <br />
                Career Services
              </h1>
            </div>

            <div ref={heroBodyRef} className="cs-reveal cs-fade-up cs-hero-body">
              <p className="cs-drop-cap-para">
                <span className="cs-drop-cap">M</span>UD is committed to
                fostering successful careers for our students and graduates
                while providing the industry with top-tier makeup talent.
                Whether your project is big or small, our Career Services
                platform is designed to meet your professional makeup
                artist needs efficiently and effectively.
              </p>

              <p>
                By leveraging MUD Career Services, you&rsquo;re not just
                hiring a makeup artist; you&rsquo;re investing in an artist
                who has been educated and trained to the highest standards,
                ready to bring your vision to life with professionalism and
                creativity.
              </p>

              <div className="cs-bracket-btn-wrap">
                <button className="cs-bracket-btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GATEWAY DARK SECTION ================= */}

      <section ref={gatewayRef} className="cs-reveal cs-fade-up cs-gateway">
        <h2 className="cs-gateway-title">
          Your Gateway
          <br />
          To MUD&rsquo;s
          <br />
          Professional
          <br />
          Network
        </h2>

        <div className="cs-gateway-text">
          <p>
            Let MUD Career Services be your gateway to discovering
            dedicated, innovative talent ready to contribute to your
            success.
          </p>

          <p>
            Whether you&rsquo;re an employer in the beauty industry, a film
            producer, a wedding planner, or someone looking to add a touch
            of professional make-up artistry to your event, MUD Career
            Services is here to facilitate that connection.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3: DIRECTORIES + HOW IT WORKS ================= */}

      <section ref={directoriesRef} className="cs-reveal cs-fade-up cs-directories">
        <p>
          While Make-up Designory (MUD) does not currently host a
          centralized job board or database for all MUD-certified make-up
          artists worldwide, we offer robust employer directories and job
          boards in <a href="#">Los Angeles</a> and{" "}
          <a href="#">New York City</a> as well as{" "}
          <a href="#">across the US</a>. In addition, we have
          individualized listings in various countries through each{" "}
          <a href="#">MUD Studio</a>. This network makes it simpler for
          those in need of professional make-up services to connect with
          highly skilled artists trained in a variety of make-up
          disciplines.
        </p>

        <p>
          Whether your needs span from bridal and beauty make-up to more
          specialized fields such as character makeup, prosthetics, and
          special makeup effects, our directories provide access to
          professional artists who can bring your vision to life. Each
          makeup artist brings a unique set of skills, honed under the
          rigorous training and standards MUD is known for.
        </p>

        <p>
          By choosing a MUD-certified artist, you are ensuring a level of
          professionalism and creativity that stands out in the industry.
          We encourage our students and grads to explore the directories
          available at our main campuses and studios or reach out to us for
          recommendations. Our goal is to facilitate connections between
          our talented alumni and those seeking to hire make-up artists who
          can exceed expectations, no matter the project&rsquo;s scope or
          complexity.
        </p>
      </section>

      <section ref={howItWorksRef} className="cs-reveal cs-fade-up cs-how">
        <h2>Here&rsquo;s How It Works&hellip;</h2>

        <p className="cs-how-intro">
          Our unique approach to connecting talent with opportunity is
          centered around our MUD Career Services platform. This exclusive
          job board is accessible only to our students and graduates,
          ensuring that we maintain a dedicated and professional pool of
          talent. Here&rsquo;s how it works:
        </p>

        <div className="cs-how-grid">
          <div className="cs-how-item">
            <strong>1. Employer Submission:</strong> Employers, film
            producers, and anyone seeking to hire a professional make-up
            artist can easily reach out to us via a simple form submission
            or a direct phone call. We gather information on your specific
            needs, the scope of the project, location, and any other
            requirements you might have.
          </div>

          <div className="cs-how-item">
            <strong>2. Job Posting:</strong> Once we have all the details,
            we post your job opportunity on the relevant location&rsquo;s
            job board within our MUD Career Services portal. This ensures
            that your posting is targeted to students and alumni who are
            best suited for the role, based on their training,
            specialization, and location.
          </div>

          <div className="cs-how-item">
            <strong>3. Direct Connections:</strong> Our students and
            graduates have exclusive access to these job postings, allowing
            them to apply directly to you. This direct line of
            communication streamlines the hiring process, ensuring that you
            are connected with artists who are not only highly skilled but
            also passionate about their craft.
          </div>

          <div className="cs-how-item">
            <strong>4. Ongoing Support:</strong> MUD Career Services
            doesn&rsquo;t just post your job and forget about it. We
            provide ongoing support to both employers and our talent pool
            to ensure successful placements. Whether it&rsquo;s providing
            additional information, facilitating connections, or offering
            guidance on how to navigate the hiring process, we&rsquo;re
            here to help.
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: HIRE A MAKEUP ARTIST TODAY ================= */}

      <section className="cs-hire">
        <div className="cs-hire-bar">
          <h2>Hire A Makeup Artist Today</h2>
        </div>

        <div className="cs-hire-row">
          <div ref={hireImgRef} className="cs-reveal cs-slide-left cs-hire-image">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=80"
              alt="Makeup artist at work"
            />
          </div>

          <div className="cs-hire-right">
            <div ref={hireBoxRef} className="cs-reveal cs-slide-right cs-hire-headline">
              <h3>Seamlessly Connect With Industry-Ready Talent Worldwide</h3>
            </div>

            <div ref={hireBottomRef} className="cs-reveal cs-fade-up cs-hire-body">
              <p>
                Complete our online form and choose your desired location.
                Prefer to speak with someone? Our MUD Locator will guide
                you to the right contact information.
              </p>

              <div className="cs-hire-links">
                <a href="#">I&rsquo;m ready to hire now via online form (USA)</a>
                <a href="#">Find a MUD Studio location (worldwide)</a>
                <a href="#">I have questions re hiring a makeup artist</a>
              </div>

              <button className="cs-outline-btn">
                HIRE A MAKE-UP ARTIST TODAY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerServices;