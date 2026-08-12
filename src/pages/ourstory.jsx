import "./ourstory.css";

function Ourstory() {
  return (
    <>
      {/* ================= FIRST SECTION ================= */}

      <section className="our-story">

        <div className="story-wrapper">

          {/* IMAGE */}

          <div className="story-image slide-left">
            <img
              src="https://i.pinimg.com/736x/21/f2/b0/21f2b0183fd1ec17c4e3c9fbf42fdb0c.jpg"
              alt="Story"
            />
          </div>

          {/* CONTENT */}

          <div className="story-content slide-right">

            <div className="story-heading">

              <h1 className="story-title">
                <span className="title-dark">Our</span>

                <span className="title-light">
                  Story
                </span>
              </h1>

            </div>

            <h5 className="story-subtitle">
              ELEVATING MAKE-UP ARTISTRY,
              <br />
              EMPOWERING ARTISTS
            </h5>

            <p>
              Elovaa started in Kolkata with one mission — bring proper,
              hands-on makeup education to the city, backed by cosmetics
              formulated by people who actually work on set and at weddings.
            </p>

            <p>
              Every product we make is tested by our own instructors first,
              built for precision, longevity, and the humidity of a Kolkata
              summer, so our students and clients can create with confidence.
            </p>

            <button className="story-btn">
              READ MORE
            </button>

          </div>

        </div>

      </section>

      {/* ================= SECOND SECTION ================= */}

      <section className="community">

        <div className="community-wrapper">

          {/* LEFT */}

          <div className="community-left fade-up">

            <h2>
              We're More Than
              <br />
              A Brand. We Are A
              <br />
              Community Of
              <br />
              Artists,
              <br />
              Innovators, And
              <br />
              Visionaries.
            </h2>

          </div>

          {/* RIGHT */}

          <div className="community-right fade-up">

            <p>
              We're building a community of Kolkata-based artists who learn,
              grow, and support each other's work. Our training has helped
              graduates go on to work across bridal studios, film sets, and
              salons throughout the city.
            </p>

            <p>
              Every product is developed for precision, durability, and
              performance in real working conditions, making it a trusted
              choice for our professionals and everyday clients alike.
            </p>

            <p>
              As Elovaa grows, our mission stays the same — train artists
              properly, back them with reliable products, and keep raising
              the standard of makeup artistry here in Kolkata.
            </p>

            <button className="join-btn">
              JOIN US
            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default Ourstory;