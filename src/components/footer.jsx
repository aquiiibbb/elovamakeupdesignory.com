import "./footer.css";

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

        {/* Left */}

        <div className="footer-logo">

          <div className="logo">
            <h2>MD</h2>
            <p>make-up designory</p>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaCamera /></a>
          </div>

        </div>

        {/* Visit */}

        <div className="footer-column">

          <h3>VISIT US</h3>

          <ul>

            <li>
              <FaHeart />
              <span>
                Book a tour at one <br />
                of our locations <br />
                worldwide.
              </span>
            </li>

            <li>
              <FaPhoneAlt />
              <span>1-818-729-9420</span>
            </li>

            <li>
              <FaEnvelopeOpenText />
              <span>Contact Us</span>
            </li>

            <li>
              <FaSearch />
              <span>Find a Location</span>
            </li>

          </ul>

        </div>

        {/* Hours */}

        <div className="footer-column">

          <h3>HOURS</h3>

          <ul>

            <li>
              <FaClock />
              <span>M-F: 8am – 5pm</span>
            </li>

            <li>
              <FaGlobe />
              <span>
                Hours Vary From <br />
                Location To Location. <br />
                Please Use MUD Locator <br />
                For Specific Hours
              </span>
            </li>

          </ul>

        </div>

        {/* Join */}

        <div className="footer-column">

          <h3>JOIN US</h3>

          <ul>

            <li><FaBook /><span>Study at MUD</span></li>

            <li><FaInfoCircle /><span>About our Locations</span></li>

            <li><FaProductHunt /><span>Register for a PRO Account</span></li>

            <li><FaDollarSign /><span>Become a MUD Retailer</span></li>

            <li><FaBriefcase /><span>Partner with MUD</span></li>

            <li><FaBriefcase /><span>Hire a Makeup Artist</span></li>

            <li><FaShoppingBag /><span>Shop at MUD</span></li>

            <li><FaBook /><span>Makeup Schools Directory</span></li>

          </ul>

        </div>

      </div>

    </footer>
  );
};

export default Footer;