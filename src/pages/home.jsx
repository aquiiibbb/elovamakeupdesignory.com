import "./home.css";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';

function Home() {
  return (
    <>
      {/* =====================================================
          SECTION 1 — WELCOME HERO
      ===================================================== */}

      <section className="welcome-hero">
        <div className="welcome-image">
          <img
            src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1400&q=85"
            alt="Beauty makeup portrait"
          />
        </div>

        <div className="welcome-right">
          <div className="welcome-content">
            <h6 className="welcome-eyebrow">
              Where Quality Meets Artistry
            </h6>

            <p>
              Welcome to Elovaa, Kolkata's own home-grown academy and
              cosmetics studio, built around one simple idea: makeup is a
              craft, and every student who walks through our doors deserves
              to master it properly.
            </p>

            <p>
              From our studio in the heart of Kolkata, we've spent years
              training artists and formulating cosmetics that hold up under
              studio lights, humid Kolkata afternoons, and everything in
              between.
            </p>

            <p>
              Elovaa's products are built for working professionals — bridal
              makeup artists, film and theatre units, and salon owners across
              Bengal who need colour that lasts a full day without touch-ups.
            </p>

            <div className="line-btn-wrap">
              <button className="line-btn">
                ABOUT US
              </button>
            </div>
          </div>
        </div>

        <h1 className="welcome-title">
          <span className="title-dark">Welcome</span>
          <span className="title-light">To ELOVAA</span>
        </h1>
      </section>

      {/* =====================================================
          SECTION 2 — ART BEAUTY AUTO SLIDER
      ===================================================== */}

      <section className="elovaa-scroll-section">
        <div className="scroll-heading-wrap">
          <h2 className="slider-heading">
            Art. Beauty. Craft. Kolkata. Elovaa.
          </h2>

          <p className="scroll-small-text">
            A closer look at makeup artistry, taught the Elovaa way
          </p>
        </div>

        {/* AUTO SLIDING IMAGE GALLERY */}
        <div className="image-scroll-wrapper">
          <div className="image-scroll-track">
            {/* ORIGINAL IMAGES */}
            <div className="scroll-image-item">
              <img
                src={img1}
                alt="Professional makeup artistry"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img2}
                alt="Beauty makeup products"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img3}
                alt="Makeup brushes and cosmetics"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img4}
                alt="Makeup cosmetics"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img5}
                alt="Professional beauty artist"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img6}
                alt="Makeup artistry"
              />
            </div>

            {/* DUPLICATE IMAGES */}
            <div className="scroll-image-item">
              <img
                src={img7}
                alt="Professional makeup artistry"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img8}
                alt="Beauty makeup products"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img1}
                alt="Makeup brushes and cosmetics"
              />
            </div>

            <div className="scroll-image-item">
              <img
                        src={img2}
                alt="Makeup cosmetics"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src={img3}
                alt="Professional beauty artist"
              />
            </div>

            <div className="scroll-image-item">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
                alt="Makeup artistry"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="slider-caption">
          Elovaa is Kolkata's dedicated destination for aspiring makeup
          artists. We pair hands-on classroom training with a cosmetics
          line built by our own instructors, so students and working
          professionals both leave equipped for real sets, real weddings,
          and real client work.
        </p>
      </section>

      {/* =====================================================
          SECTION 3 — CAREER PATHS / FIND LOCATION
      ===================================================== */}

      <section className="banner-split">
        <div className="banner-images">
          <div className="banner-img-item">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85"
              alt="Makeup artist career"
            />
          </div>

          <div className="banner-img-item">
            <img
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85"
              alt="Makeup studio"
            />
          </div>
        </div>

        <div className="banner-text-wrap">
          <div className="banner-text-item">
            <h2>Career Paths</h2>
            <p>
              Learn how you can build a career as a makeup artist across
              bridal, film, editorial, and salon work. Our placement desk
              connects Kolkata graduates directly with studios and clients.
            </p>
            <button className="box-btn">START NOW</button>
          </div>

          <div className="banner-text-item">
            <h2>Find A Location</h2>
            <p>
              Use our Elovaa Locator to find our studio and partner
              counters across Kolkata and the rest of West Bengal.
            </p>
            <button className="box-btn">SEARCH NOW</button>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — COURSES WORLDWIDE
      ===================================================== */}

      <section className="courses-section">
        <div className="courses-left">
          <h6 className="courses-eyebrow">An Education In Make-Up</h6>
          <h2 className="courses-title">Courses In Kolkata</h2>
          <p>
            Join us at our main academy in Kolkata, along with our growing
            network of Elovaa partner studios across West Bengal. Every
            batch is kept small, so every student gets real time on real
            faces from day one.
          </p>
          <p>
            Our curriculum is built for the Indian film, television,
            fashion, and bridal industries. As an Elovaa student, you're
            trained by working artists from Tollywood sets, fashion shoots,
            salons, and the bridal circuit — not just textbooks.
          </p>
          <p>
            From prosthetics and SFX basics to everyday bridal and party
            makeup, we walk you through it hands-on. At Elovaa, we back
            your talent with real technique, so you leave ready to work.
          </p>
          <button className="line-btn">EXPLORE OUR COURSES</button>
        </div>

        <div className="courses-right">
          <div className="courses-img-large">
            <img
              src={img6}
              alt="Professional makeup studio"
            />
          </div>

          <div className="courses-img-small">
            <img
              src={img1}
              alt="Beauty makeup"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;