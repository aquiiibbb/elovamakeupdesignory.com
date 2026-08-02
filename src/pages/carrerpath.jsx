import React from 'react';
import './carrerpath.css';

function CareerPath() {
  return (
    <div className="cp-page">
      {/* ===== HERO SECTION ===== */}
      <section className="cp-hero">
        <div className="cp-hero-image">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&auto=format&fit=crop&q=80](https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&auto=format&fit=crop&q=80"
            alt="Special effects makeup artistry"
          />
        </div>
        <div className="cp-hero-right">
          <div className="cp-hero-content">
            <span className="cp-eyebrow">
              The Diverse World Of Make-Up Artistry: Exploring Career Paths
            </span>
            <p>
              Make-up artistry is not just about beauty transformations; it's an
              expansive field where creativity, skill, and passion meet. With the
              right training and vision, makeup artists can carve out unique
              careers across various industries. From the glamour of fashion
              runways to the imaginative realms of film and theater, let's delve
              into the myriad opportunities that await in the world of makeup
              artistry.
            </p>
            <a href="#jobs" className="cp-readmore">
              <span className="cp-bar" />
              READ MORE
              <span className="cp-bar" />
            </a>
          </div>
        </div>
        <h1 className="cp-hero-title">Career Paths</h1>
      </section>

      {/* ===== JOBS SECTION ===== */}
      <section className="cp-jobs" id="jobs">
        <h2 className="cp-jobs-title">
          What Jobs Can You Have As A Make-Up Artist? Let's Have A Look...
        </h2>

        <div className="cp-jobs-grid">
          <div className="cp-job">
            <h3>Fashion Make-up Artist</h3>
            <p>
              In the fast-paced world of fashion, makeup artists play a pivotal
              role in creating looks that complement designers' visions. Working
              on photoshoots, fashion shows, and advertising campaigns, these
              artists not only enhance natural beauty but also create
              trendsetting looks that grace magazines and social media feeds.
              This career path offers the thrill of seasonal variety and the
              chance to collaborate with fashion designers, photographers, and
              models.
            </p>
          </div>

          <div className="cp-job">
            <h3>Film and Television Make-up Artist</h3>
            <p>
              Film and television makeup artists bring characters to life, from
              subtle enhancements to elaborate transformations. Their work
              ranges from creating flawless looks for HD cameras to designing{' '}
              <a href="#sfx">special makeup effects (SFX makeup)</a> for
              genre-specific roles, such as sci-fi or horror. This career
              demands versatility and may involve long hours on set, but the
              reward comes in contributing to the storytelling that captivates
              audiences worldwide.
            </p>
          </div>

          <div className="cp-job">
            <h3>Theatrical Make-up Artist</h3>
            <p>
              Theater makeup artists specialize in makeup that withstands
              intense stage lighting and helps actors embody their characters.
              This role requires an understanding of historical beauty trends,
              character analysis, and the ability to work quickly under
              pressure. Theatrical makeup artists often collaborate closely
              with directors and costume designers, adding depth to live
              performances in plays and operas.
            </p>
          </div>

          <div className="cp-job">
            <h3>Bridal Make-up Artist</h3>
            <p>
              Bridal makeup artists enhance one of the most cherished days in a
              client's life. They must master the art of long-lasting,
              photogenic makeup that withstands hours of celebration. Building
              a career in bridal makeup often involves weekend work and travel
              but offers the joy of contributing to a couple's special day and
              the potential for lucrative, private clientele.
            </p>
          </div>

          <div className="cp-job">
            <h3>Editorial Make-up Artist</h3>
            <p>
              These artists create looks for magazine spreads, online
              publications, and advertising shoots, where creativity knows no
              bounds. Editorial makeup often involves avant-garde and
              innovative designs that make a statement. This niche allows
              makeup artists to work closely with editors, photographers, and
              stylists, often setting trends and pushing the boundaries of
              traditional makeup artistry.
            </p>
          </div>

          <div className="cp-job">
            <h3>Celebrity Make-up Artist</h3>
            <p>
              Working with high-profile clients for red carpet events, public
              appearances, and photo shoots, celebrity makeup artists must be
              adept at enhancing their client's best features while
              maintaining a high level of discretion and professionalism. This
              career path offers the opportunity to travel, access to
              exclusive events, and the potential for high earnings and
              personal brand development.
            </p>
          </div>

          <div className="cp-job">
            <h3>Make-up Educator</h3>
            <p>
              For those with a passion for sharing their knowledge, becoming a
              makeup educator offers a rewarding path. Educators can work in
              make-up schools, conduct workshops, or create online content.
              This role requires a deep understanding of makeup techniques,
              trends, and products, alongside excellent communication skills.
            </p>
          </div>

          <div className="cp-job">
            <h3>Make-up Brand Representative</h3>
            <p>
              Artists with a knack for sales and marketing might find their
              niche as representatives for makeup brands. This role involves
              product demonstration, sales, and training beauty advisors. It's
              an excellent way to combine artistry with business acumen,
              offering insights into the cosmetic industry's commercial side.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MUD BANNER SECTION ===== */}
      <section className="cp-mud-banner">
        <div className="cp-mud-header">
          <h2>Begin Your Journey In Makeup Artistry With MUD</h2>
        </div>
        <div className="cp-mud-body">
          <p>
            At MUD, we're dedicated to nurturing the next generation of
            make-up artists, providing the tools, training, and support needed
            to excel in this vibrant industry. Our comprehensive programs are
            tailored to equip you with the skills, knowledge, and confidence
            to pursue your chosen path in makeup artistry. Whether you dream
            of dazzling the fashion world, captivating audiences on screen and
            stage, or making brides shine on their special day, your journey
            begins here.
          </p>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cp-cta">
        <div className="cp-cta-image">
          <img
            src="data:image/jpeg;base64,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"
            alt="Woman holding a mug that reads Wake up for Make-up"
          />
        </div>
        <div className="cp-cta-content">
          <h2>
            Ready To Transform Your Passion For Makeup Into A Thriving
            Career?
          </h2>
          <p>
            Don't let your talent wait any longer. <a href="#enroll">Enroll at MUD today</a>,
            book a tour of our state-of-the-art facilities, or reach out to us
            for more information. Our dedicated team is eager to guide you
            through our programs and help you take the first step toward a
            rewarding career in makeup artistry. Your art has power. It's time
            to share it with the world.{' '}
            <strong>Join us at MUD, where your future in makeup begins.</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CareerPath;