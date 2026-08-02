import { useState, useEffect } from 'react';
import './header.css';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'OUR STORY', href: '/ourstory' },
  {
    label: 'HIRE AN ARTIST',
    href: '#',
    items: [
      { label: 'CAREER SERVICES', href: '/careerservices' },
      { label: 'HIRE AN ARTIST FORM', href: '/hireartist' },
    ],
  },
  {
    label: 'EDUCATION',
    href: '#',
    items: [
      { label: 'CAREERS PATHS', href: '/careerpath' },
      { label: 'STUDY AT MUD', href: '/studymud' },
      { label: 'OUR CURRICULUM', href: '/ourcurriculam' },
      { label: 'COURSE LISTINGS', href: '/course-listings', hasArrow: true },
      { label: 'OUR LOCATIONS', href: '/ourlocation' },
    ],
  },
  {
    label: 'MAKE-UP',
    href: '#',
    items: [
      { label: 'OUR PRODUCTS', href: '/our-products' },
      { label: 'WHERE TO BUY', href: '/where-to-buy' },
      { label: 'MUD BLOG', href: '/mud-blog' },
      { label: 'MUD ART MAGAZINE', href: '/mud-art-magazine' },
      { label: 'SCHOOL COLLABORATION', href: '/school-collaboration' },
      { label: 'BECOME A RETAILER', href: '/become-a-retailer' },
    ],
  },
  {
    label: 'FIND US',
    href: '#',
    items: [
      { label: 'MUD DIRECTORY', href: '/mud-directory' },
      { label: 'MUD LOCATOR', href: '/mud-locator' },
      { label: 'CONTACT US', href: '/contact-us' },
    ],
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState(null);

  const toggleExpand = (label) => {
    setExpandedLabel((prev) => (prev === label ? null : label));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedLabel(null);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="mud-header">
      <div className="mud-header__inner">
        {/* LOGO */}
        <a href="/" className="mud-header__logo">
          <svg
            className="mud-header__logo-mark"
            viewBox="0 0 60 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 32 V10 L15 24 L25 10 V32 M35 10 H42 C48 10 52 14 52 21 C52 28 48 32 42 32 H35 V10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
          <span className="mud-header__logo-text">
            Make-up designory<sup>&reg;</sup>
          </span>
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <div className="mud-header__nav">
          <ul className="mud-header__nav-list">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.items && item.items.length > 0);

              return (
                <li
                  key={item.label}
                  className={`mud-header__nav-item${hasDropdown ? ' has-dropdown' : ''}`}
                >
                  <a href={item.href} className="mud-header__nav-link">
                    {item.label}
                    {hasDropdown && (
                      <svg
                        className="mud-header__chevron"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>

                  {hasDropdown && (
                    <ul className="mud-header__dropdown">
                      {item.items.map((subItem) => (
                        <li key={subItem.label} className="mud-header__dropdown-item">
                          <a href={subItem.href} className="mud-header__dropdown-link">
                            {subItem.label}
                            {subItem.hasArrow && (
                              <svg
                                className="mud-header__arrow"
                                viewBox="0 0 8 12"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1L6 6L1 11"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          className="mud-header__hamburger"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 1H24 M0 9H24 M0 17H24"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </div>

      {/* ================= MOBILE FULL-SCREEN MENU ================= */}

      <div className={`mud-mobile-menu${mobileOpen ? ' is-open' : ''}`}>
        <div className="mud-mobile-menu__top">
          <a href="/" className="mud-header__logo" onClick={closeMobileMenu}>
            <svg
              className="mud-header__logo-mark"
              viewBox="0 0 60 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 32 V10 L15 24 L25 10 V32 M35 10 H42 C48 10 52 14 52 21 C52 28 48 32 42 32 H35 V10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
            <span className="mud-header__logo-text">
              Make-up designory<sup>&reg;</sup>
            </span>
          </a>

          <div className="mud-mobile-menu__icons">
            <button
              type="button"
              className="mud-mobile-menu__search"
              aria-label="Search"
            >
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <line
                  x1="13.2"
                  y1="13.2"
                  x2="18.5"
                  y2="18.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="mud-mobile-menu__close"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 2L18 18 M18 2L2 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <ul className="mud-mobile-menu__list">
          {NAV_ITEMS.map((item, index) => {
            const hasDropdown = Boolean(item.items && item.items.length > 0);
            const isExpanded = expandedLabel === item.label;
            const isHome = index === 0;

            return (
              <li key={item.label} className="mud-mobile-menu__item">
                {hasDropdown ? (
                  <button
                    type="button"
                    className="mud-mobile-menu__link"
                    onClick={() => toggleExpand(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`mud-mobile-menu__chevron${isExpanded ? ' is-open' : ''}`}
                      viewBox="0 0 12 8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`mud-mobile-menu__link${isHome ? ' is-active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                )}

                {hasDropdown && (
                  <ul
                    className={`mud-mobile-menu__submenu${isExpanded ? ' is-open' : ''}`}
                  >
                    {item.items.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          className="mud-mobile-menu__sublink"
                          onClick={closeMobileMenu}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;