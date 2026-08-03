import React from 'react';
import './ourproduction.css';

const MAKEUP_LETTERS = ['M', 'a', 'k', 'e', 'u', 'p'];

function OurProducts() {
  return (
    <div className="mp-page">
      {/* ===== HERO SECTION ===== */}
      <section className="mp-hero">
        <div className="mp-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_i3iC5p3dj72OF8kh3cCyaD1KeU7j6vCp_iHyzEbxoA&s=10"
            alt="MUD makeup products - primer, mascara, brush and blush"
          />
        </div>

        <div className="mp-hero-right">
          <div className="mp-hero-content">
            <span className="mp-eyebrow">
              Explore The Ultimate Products Used For Professional Make-Up
              Artistry
            </span>
            <p>
              Explore the limitless possibilities of make-up artistry. Our
              offerings extend far beyond traditional beauty make-up; we
              cater to the needs of professional make-up artists engaged in
              the detailed work of character creation, prosthetics, and
              special effects, as well as beauty salons and small businesses
              looking for high-quality make-up supplies.
            </p>
            <a href="#products" className="mp-readmore">
              <span className="mp-bar" />
              READ MORE
              <span className="mp-bar" />
            </a>
          </div>
        </div>

        <h1 className="mp-hero-title">
          <span className="mp-title-mud">MUD</span>{' '}
          <span className="mp-title-makeup">
            {MAKEUP_LETTERS.map((letter, i) => (
              <span
                key={i}
                className="mp-letter"
                style={{ animationDelay: `${0.75 + i * 0.11}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </section>

      {/* ===== WHAT PRODUCTS SECTION ===== */}
      <section className="mp-products" id="products">
        <div className="mp-products-heading-wrap">
          <h2 className="mp-products-heading">What Products Does MUD Offer?</h2>
        </div>

        <div className="mp-products-body">
          <p>
            MUD offers everything from high-performance foundations and
            vibrant eye shadows to professional-grade brushes and tools. Our
            products are designed with the make-up artist in mind, ensuring
            durability, precision, and the highest quality. Whether you're
            looking to replenish your professional kit or seeking the
            perfect products for everyday beauty routines, MUD has what you
            need.
          </p>
          <p>
            In addition to our comprehensive online shops, MUD products can
            be experienced firsthand at our branded shops and through a
            select network of retailers worldwide. These physical locations
            offer not just the chance to see and feel the quality of MUD
            products but also the opportunity to connect with a community of
            make-up enthusiasts and professionals alike. Discover our latest
            collections, engage with our expert staff, and find everything
            you need to unleash your creativity.
          </p>
          <p className="mp-links">
            <a href="#catalog">View Product Catalog</a> |{' '}
            <a href="#retail">Find a retail location near you.</a> |{' '}
            <a href="#shop">Shop Online</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default OurProducts;