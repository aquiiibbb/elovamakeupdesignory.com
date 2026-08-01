import React, { useState } from "react";
import "./hireartist.css";

function HireArtist() {
  const [details, setDetails] = useState("");
  const maxChars = 180;

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="ha-hero">
        <nav className="ha-nav">
          <button className="ha-nav-icon" aria-label="Search">
            &#128269;
          </button>

          <div className="ha-nav-logo">
            <span className="ha-logo-mark">MUD</span>
            <span className="ha-logo-sub">Make-up designory</span>
          </div>

          <button className="ha-nav-menu">
            <span className="ha-menu-icon">&#9776;</span> MENU
          </button>
        </nav>

        <div className="ha-hero-content">
          <h1>Hire a Make-up Artist</h1>
        </div>

        <div className="ha-hero-accent-line"></div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="ha-intro">
        <p>
          Hire a MUD graduate for your next production or project. Please
          get in touch below or give us a call at 818-729-9420
        </p>
      </section>

      {/* ================= FORM ================= */}

      <section className="ha-form-section">
        <form className="ha-form" onSubmit={(e) => e.preventDefault()}>
          <div className="ha-row ha-row-2">
            <div className="ha-field">
              <label>Project Begin Date</label>
              <div className="ha-date-input">
                <span className="ha-field-icon">&#128197;</span>
                <input type="text" placeholder="Choose Date" />
              </div>
            </div>

            <div className="ha-field">
              <label>Project End Date</label>
              <div className="ha-date-input">
                <span className="ha-field-icon">&#128197;</span>
                <input type="text" placeholder="Choose Date" />
              </div>
            </div>
          </div>

          <div className="ha-row ha-row-3">
            <div className="ha-field">
              <label>Company Name</label>
              <input type="text" />
            </div>

            <div className="ha-field">
              <label>
                Job Location<span className="ha-required">*</span>
              </label>
              <input type="text" required />
            </div>

            <div className="ha-field">
              <label>Pay Range</label>
              <input type="text" />
            </div>
          </div>

          <div className="ha-row ha-row-2">
            <div className="ha-field">
              <label>
                Contact First Name<span className="ha-required">*</span>
              </label>
              <input type="text" required />
            </div>

            <div className="ha-field">
              <label>
                Contact Last Name<span className="ha-required">*</span>
              </label>
              <input type="text" required />
            </div>
          </div>

          <div className="ha-row ha-row-2">
            <div className="ha-field">
              <label>
                Contact Phone Number<span className="ha-required">*</span>
              </label>
              <div className="ha-phone-input">
                <input type="tel" placeholder="E.g. +1 3004005000" required />
                <span className="ha-flag">&#127482;&#127480;</span>
              </div>
            </div>

            <div className="ha-field">
              <label>
                Contact Email Address<span className="ha-required">*</span>
              </label>
              <input type="email" required />
            </div>
          </div>

          <div className="ha-row ha-row-1">
            <div className="ha-field">
              <label>Job/Project Details</label>
              <textarea
                placeholder="Enter your message..."
                maxLength={maxChars}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <span className="ha-char-count">
                {details.length} / {maxChars}
              </span>
            </div>
          </div>

          <button type="submit" className="ha-submit-btn">
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
}

export default HireArtist;