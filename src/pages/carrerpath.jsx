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
            src="https://www.ysabellopez.makeup/images/portfolio/7841f13ad.jpg"
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