import "./home.css";

function Home() {
  return (
    <>
      {/* ================= SECTION 1: WELCOME HERO ================= */}

      <section className="welcome-hero">
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
            alt="Welcome to MUD"
          />
        </div>

        <div className="welcome-right">
          <div className="welcome-content">
            <h6 className="welcome-eyebrow">Where Quality Meets Artistry</h6>

            <p>
              Welcome to the enchanting world of Make-up Designory (MUD), a
              brand that has woven a story of transformation and empowerment
              through the magic of cosmetics and education.
            </p>

            <p>
              For a remarkable quarter of a century, we&rsquo;ve been
              dedicated to creating high-quality cosmetics that transcend
              expectations, delivering the promise of beauty, confidence,
              and self-expression to our cherished customers. MUD&rsquo;s
              cosmetics are designed to cater to the needs of professional
              makeup artists. The formulas are known for their long-lasting
              effects, versatility, and ease of use.
            </p>

            <div className="line-btn-wrap">
              <button className="line-btn">ABOUT US</button>
            </div>
          </div>
        </div>

        <h1 className="welcome-title">
          <span className="title-dark">Welcome</span>
          <span className="title-light">To MUD</span>
        </h1>
      </section>

      {/* ================= SECTION 2: ART BEAUTY SLIDER ================= */}

      <section className="mud-slider">
        <h2 className="slider-heading">
          Art. Beauty. Creativity. Education. MUD.
        </h2>

        <div className="slider-wrapper">
          <button className="slider-arrow slider-arrow-left" aria-label="Previous slide">
            &#10094;
          </button>

          <div className="slider-track">
            <div className="slide-item">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" alt="Backstage makeup" />
            </div>
            <div className="slide-item">
              <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80" alt="Editorial makeup" />
            </div>
            <div className="slide-item">
              <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80" alt="Fashion makeup" />
            </div>
          </div>

          <button className="slider-arrow slider-arrow-right" aria-label="Next slide">
            &#10095;
          </button>
        </div>

        <div className="slider-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>

        <p className="slider-caption">
          As a premier destination for aspiring makeup artists, Make-Up
          Designory (MUD) International offers an elite makeup school
          experience. Committed to excellence, MUD provides cutting-edge
          education and high-quality cosmetics, ensuring students and
          professionals alike are equipped for success in the dynamic world
          of makeup artistry
        </p>
      </section>

      {/* ================= SECTION 3: CAREER PATHS / FIND A LOCATION ================= */}

      <section className="banner-split">
        <div className="banner-images">
          <div className="banner-img-item">
            <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" alt="Career Paths" />
          </div>
          <div className="banner-img-item">
            <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80" alt="Find a Location" />
          </div>
        </div>

        <div className="banner-text-wrap">
          <div className="banner-text-item">
            <h2>Career Paths</h2>
            <p>
              Learn how you can make a living as a makeup artist in various
              industries. And best of all? We offer courses worldwide!
            </p>
            <button className="box-btn">START NOW</button>
          </div>

          <div className="banner-text-item">
            <h2>Find A Location</h2>
            <p>
              Use our MUD Locator to find a location in the USA, Europe,
              Africa, or Asia.
            </p>
            <button className="box-btn">SEARCH NOW</button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: COURSES WORLDWIDE ================= */}

      <section className="courses-section">
        <div className="courses-left">
          <h6 className="courses-eyebrow">An Education In Make-Up</h6>
          <h2 className="courses-title">Courses Worldwide</h2>

          <p>
            Join us at Make-up Designory (MUD) at our flagship campus in Los
            Angeles or through our global network of MUD Studios and Partner
            Schools. Annually, MUD welcomes aspiring artists worldwide,
            immersing you in makeup artistry&rsquo;s diverse realms from day
            one. Our curriculum is designed to ignite your career in the
            entertainment industry, fashion runways, print, and retail
            cosmetics. As a MUD student, you&rsquo;re equipped to discover
            and hone your unique style, supported by licensed experts from
            the worlds of Film &amp; Television, Fashion, Editorial, Salon,
            and Retail. Dive into everything from the art of prosthetics to
            the finesse of beauty makeup. At MUD, we empower you to blend
            your talent with skill, launching your journey as a confident
            makeup artist. Join us today.
          </p>

          <button className="line-btn">
            EXPLORE OUR COURSES
          </button>
        </div>

        <div className="courses-right">
          <div className="courses-img-small">
            <img src="https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80" alt="Moodboard" />
          </div>
          <div className="courses-img-large">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" alt="MUD storefront" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;