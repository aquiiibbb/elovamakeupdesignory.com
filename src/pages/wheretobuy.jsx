import React from 'react';
import './wheretobuy.css';

const TO_BUY_WORDS = ['To', 'Buy'];

function WhereToBuy() {
  let letterIndex = 0;

  return (
    <div className="wb-page">
      {/* ===== HERO SECTION ===== */}
      <section className="wb-hero">
        <div className="wb-hero-image">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=520&q=80&fit=crop"
            alt="Hand holding an Elovaa eyeshadow swatch card next to a palette"
          />
        </div>

        <div className="wb-hero-right">
          <div className="wb-hero-content">
            <span className="wb-eyebrow">
              Find Elovaa Makeup: In-Store And Online
            </span>

            <p>
              Search for a physical retail shop near you:
              <br />
              <a href="#locator">Elovaa Locator</a>
            </p>

            <p>
              Peruse our directory:
              <br />
              <a href="#directory">Elovaa Directory</a>
            </p>

            <p className="wb-shop-heading">Shop Online:</p>

            <p>
              India: <a href="https://www.elovaashop.com">https://www.elovaashop.com</a>
            </p>

            <ul className="wb-country-list">
              <li>
                Kolkata Studio Store:{' '}
                <a href="#park-street">
                  Park Street, Kolkata
                </a>
              </li>
              <li>
                Salt Lake Counter:{' '}
                <a href="#salt-lake">
                  Salt Lake, Kolkata
                </a>
              </li>
            </ul>

            <a href="#more" className="wb-readmore">
              <span className="wb-bar" />
              READ MORE
              <span className="wb-bar" />
            </a>
          </div>
        </div>

        <h1 className="wb-hero-title">
          <span className="wb-title-where">Where</span>{' '}
          <span className="wb-title-tobuy">
            {TO_BUY_WORDS.map((word, wi) => (
              <span className="wb-word" key={wi}>
                {word.split('').map((letter, li) => {
                  const delay = 0.75 + letterIndex * 0.11;
                  letterIndex += 1;
                  return (
                    <span
                      key={li}
                      className="wb-letter"
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        </h1>
      </section>

      {/* ===== WHERE CAN I BUY SECTION ===== */}
      <section className="wb-info" id="more">
        <div className="wb-info-heading-wrap">
          <h2 className="wb-info-heading">Where Can I Buy Elovaa Makeup?</h2>
        </div>

        <div className="wb-info-body">
          <p>
            Whether you're looking for the personal touch of a physical
            store or the convenience of online shopping, our{' '}
            <a href="#locator">Elovaa locator</a> helps you find the nearest
            retail locations and boutique partners across Kolkata. For
            those who prefer to shop from home, visit our{' '}
            <a href="#shop">online shop page</a>, where you can access our
            full range of makeup, tools, and accessories. Each of our
            retail and online stores is stocked with products tailored to
            meet diverse beauty needs, ensuring you get the best selection
            no matter where in the city you are. Start exploring today and
            experience Elovaa makeup at your fingertips or just around the
            corner.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhereToBuy;