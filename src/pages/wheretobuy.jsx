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
            alt="Hand holding a MUD eyeshadow swatch card next to a palette"
          />
        </div>

        <div className="wb-hero-right">
          <div className="wb-hero-content">
            <span className="wb-eyebrow">
              Find MUD Makeup: In-Store And Online
            </span>

            <p>
              Search for a physical retail shop by location:
              <br />
              <a href="#locator">MUD Locator</a>
            </p>

            <p>
              Peruse our directory:
              <br />
              <a href="#directory">MUD Directory</a>
            </p>

            <p className="wb-shop-heading">Shop Online:</p>

            <p>
              USA: <a href="https://www.mudshop.com">https://www.mudshop.com</a>
            </p>

            <p>
              Europe:{' '}
              <a href="https://shop.makeupdesignory.eu">
                https://shop.makeupdesignory.eu
              </a>
            </p>

            <ul className="wb-country-list">
              <li>
                Italy:{' '}
                <a href="https://shop.makeupdesignory.it">
                  https://shop.makeupdesignory.it
                </a>
              </li>
              <li>
                Germany:{' '}
                <a href="https://shop.mud-studio.de">
                  https://shop.mud-studio.de
                </a>
              </li>
              <li>
                UK:{' '}
                <a href="https://makeupdesignory.com/mud-locations/?wpsl_country=United%20Kingdom">
                  https://makeupdesignory.com/mud-locations/?wpsl_country=United%20Kingdom
                </a>
              </li>
            </ul>

            <p>
              South Africa:{' '}
              <a href="https://www.mudsa.co.za/">https://www.mudsa.co.za/</a>
            </p>

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
          <h2 className="wb-info-heading">Where Can I Buy MUD Makeup?</h2>
        </div>

        <div className="wb-info-body">
          <p>
            Whether you're looking for the personal touch of a physical
            store or the convenience of online shopping, our comprehensive{' '}
            <a href="#locator">MUD locator</a> helps you find the nearest
            retail locations and boutique partners globally. For those who
            prefer to shop from the comfort of their home, visit our{' '}
            <a href="#shop">online shop page</a>, where you can access our
            full range of high-quality makeup, tools, and accessories. Each
            of our retail and online stores is stocked with products
            tailored to meet diverse beauty standards and styles, ensuring
            you receive the best selection no matter where you are. Start
            exploring today and experience the world of MUD makeup at your
            fingertips or just around the corner.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhereToBuy;