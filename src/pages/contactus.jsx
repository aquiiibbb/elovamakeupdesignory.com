import React, { useState } from 'react';
import './contactus.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Top Split Section */}
      <div className="top-section">
        {/* Left Image Hero */}
        <div className="hero-image-container slide-from-left">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/029/212/831/small/beauty-makeup-and-cosmetics-face-portrait-of-beautiful-woman-with-make-up-brushes-luxury-cosmetic-product-makeup-artist-or-beauty-blogger-concept-photo.jpg"
            alt="Contact Hero"
            className="hero-image"
          />
        </div>

        {/* Right Form & Info Cards Section */}
        <div className="form-container slide-from-right">
          <div className="form-content">
            <h1 className="title">
              Contact <span className="title-muted">Us</span>
            </h1>
            <p className="subtitle">
              Leave your details and we will get back to you as soon as we can.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>|</span> SUBMIT <span>|</span>
              </button>
            </form>

            {/* Info Cards Row */}
            <div className="info-cards-row">
              <div className="info-card">
                <h3>Opening Hours</h3>
                <div className="divider"></div>
                <p><strong>Elovaa Main Studio:</strong></p>
                <p>Mon-Sat: 10am-7pm</p>
                <p className="mt-10"><strong>Across Kolkata:</strong></p>
                <a href="#location" className="link-underline">Find a location</a>
              </div>

              <div className="info-card">
                <h3>Call Us</h3>
                <div className="divider"></div>
                <p>+91-7890009119</p>
                <p className="mt-10"><strong>Across Kolkata:</strong></p>
                <p>Telephone Directory</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (Address & Map) */}
      <div className="bottom-section">
        <div className="address-card">
          <h3>Address</h3>
          <div className="divider"></div>
          <p><strong>Main Studio:</strong></p>
          <p>14 Park Street</p>
          <p>Kolkata, West Bengal 700016</p>
          <p className="mt-10"><strong>Across Kolkata:</strong></p>
          <a href="#locator" className="link-underline">Elovaa Locator</a>
        </div>

        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=Park+Street,+Kolkata,+West+Bengal&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}