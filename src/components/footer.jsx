import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCamera,
  FaHeart,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaSearch,
  FaClock,
  FaGlobe,
  FaBook,
  FaInfoCircle,
  FaProductHunt,
  FaDollarSign,
  FaBriefcase,
  FaShoppingBag
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand & Social Section */}
        <div className="footer-logo-section">
          <a href="/" className="footer-brand-logo">
            <img src={logo} alt="ELOVAA Logo" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">kolkata makeup academy</p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest"><FaCamera /></a>
          </div>
        </div>

        {/* Visit Us Column */}
        <div className="footer-column">
          <h3 className="footer-heading">VISIT US</h3>
          <ul className="footer-links">
            <li>
              <FaHeart className="footer-icon" />
              <a href="#">
                Book a tour at one <br />
                of our studios <br />
                across Kolkata.
              </a>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:03340005000">+91-9883330353</a>
            </li>
            <li>
              <FaEnvelopeOpenText className="footer-icon" />
              <a href="/contactus">Contact Us</a>
            </li>
            <li>
              <FaSearch className="footer-icon" />
              <a href="/elovaalocator">Find a Location</a>
            </li>
          </ul>
        </div>

        {/* Hours Column */}
        <div className="footer-column">
          <h3 className="footer-heading">HOURS</h3>
          <ul className="footer-links">
            <li>
              <FaClock className="footer-icon" />
              <span>Mon-Sat: 10am – 7pm</span>
            </li>
            <li>
              <FaGlobe className="footer-icon" />
              <span>
                Hours Vary By <br />
                Studio Location. <br />
                Please Use Elovaa Locator <br />
                For Specific Hours
              </span>
            </li>
          </ul>
        </div>

        {/* Join Us Column */}
        <div className="footer-column">
          <h3 className="footer-heading">JOIN US</h3>
          <ul className="footer-links">
            <li><FaBook className="footer-icon" /><a href="/studyelovaa">Study at ELOVAA</a></li>
            <li><FaInfoCircle className="footer-icon" /><a href="/ourlocation">About our Locations</a></li>
            <li><FaProductHunt className="footer-icon" /><a href="#">Register for a PRO Account</a></li>
            <li><FaDollarSign className="footer-icon" /><a href="/becomearetailer">Become a ELOVAA Retailer</a></li>
            <li><FaBriefcase className="footer-icon" /><a href="/schoolcollaboration">Partner with ELOVAA</a></li>
            <li><FaBriefcase className="footer-icon" /><a href="/hireartist">Hire a Makeup Artist</a></li>
            <li><FaShoppingBag className="footer-icon" /><a href="/ourproduction">Shop at ELOVAA</a></li>
            <li><FaBook className="footer-icon" /><a href="/elovaadirectory">Makeup Schools Directory</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Elovaa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;