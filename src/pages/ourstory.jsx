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
              Founded with a passion for creativity and beauty, our journey
              began with one mission—to inspire artists through professional
              education and premium products that redefine excellence.
            </p>

            <p>
              Every product is thoughtfully designed with precision, innovation,
              and artistry in mind, empowering professionals and enthusiasts to
              create with confidence.
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
              Driven by creativity and innovation, we continue building a
              community where artists can learn, grow, and achieve excellence.
              Our commitment to education has helped professionals across the
              world elevate their craft.
            </p>

            <p>
              Every product is developed for precision, durability, and
              performance, making it a trusted choice for professionals and
              beauty enthusiasts alike.
            </p>

            <p>
              As our journey continues, our mission remains the same—to inspire,
              educate, and empower artists while shaping the future of beauty
              through creativity and innovation.
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