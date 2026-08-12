import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../assets/logo.png';
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
      { label: 'STUDY AT ELOVAA', href: '/studyelovaa' },
      { label: 'OUR CURRICULUM', href: '/ourcurriculam' },
      { label: 'COURSE LISTINGS', href: '/course-listings', hasArrow: true },
      { label: 'OUR LOCATIONS', href: '/ourlocation' },
    ],
  },
  {
    label: 'MAKE-UP',
    href: '#',
    items: [
      { label: 'OUR PRODUCTS', href: '/ourproduction' },
      { label: 'WHERE TO BUY', href: '/wheretobuy' },
      { label: 'ELOVAA BLOG', href: '/elovaablog' },
      { label: 'ELOVAA ART MAGAZINE', href: '/mekupdesitory' },
      { label: 'SCHOOL COLLABORATION', href: '/schoolcollaboration' },
      { label: 'BECOME A RETAILER', href: '/becomearetailer' },
    ],
  },
  {
    label: 'FIND US',
    href: '#',
    items: [
      { label: 'ELOVAA DIRECTORY', href: '/elovaadirectory' },
      { label: 'ELOVAA LOCATOR', href: '/elovaalocator' },
      { label: 'CONTACT US', href: '/contactus' },
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

  return (
    <header className="elovaa-header">
      <div className="elovaa-header__inner">
        {/* LOGO WITH TAGLINE */}
        <a href="/" className="elovaa-header__logo-wrapper">
          <img src={logo} alt="ELOVAA Logo" className="elovaa-header__logo-img" />
          <span className="elovaa-header__logo-tagline">KOLKATA MAKEUP ACADEMY</span>
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="elovaa-header__nav">
          <ul className="elovaa-header__nav-list">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = Boolean(item.items && item.items.length > 0);

              return (
                <li
                  key={item.label}
                  className={`elovaa-header__nav-item${hasDropdown ? ' has-dropdown' : ''}`}
                >
                  <a href={item.href} className="elovaa-header__nav-link">
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <svg
                        className="elovaa-header__chevron"
                        viewBox="0 0 12 8"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>

                  {hasDropdown && (
                    <div className="elovaa-header__dropdown-wrapper">
                      <ul className="elovaa-header__dropdown">
                        {item.items.map((subItem) => (
                          <li key={subItem.label} className="elovaa-header__dropdown-item">
                            <a href={subItem.href} className="elovaa-header__dropdown-link">
                              {subItem.label}
                              {subItem.hasArrow && (
                                <svg
                                  className="elovaa-header__arrow"
                                  viewBox="0 0 8 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.5 1L6.5 6L1.5 11"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* MOBILE HAMBURGER / CLOSE BUTTON */}
        <button
          type="button"
          className="elovaa-header__hamburger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU (AUTO-HEIGHT ACCORDING TO CONTENT) */}
      <div className={`elovaa-mobile-menu${mobileOpen ? ' is-open' : ''}`}>
        <ul className="elovaa-mobile-menu__list">
          {NAV_ITEMS.map((item, index) => {
            const hasDropdown = Boolean(item.items && item.items.length > 0);
            const isExpanded = expandedLabel === item.label;
            const isHome = index === 0;

            return (
              <li key={item.label} className="elovaa-mobile-menu__item">
                {hasDropdown ? (
                  <button
                    type="button"
                    className="elovaa-mobile-menu__link"
                    onClick={() => toggleExpand(item.label)}
                  >
                    {item.label}
                    <svg
                      className={`elovaa-mobile-menu__chevron${isExpanded ? ' is-open' : ''}`}
                      viewBox="0 0 12 8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`elovaa-mobile-menu__link${isHome ? ' is-active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                )}

                {hasDropdown && (
                  <ul className={`elovaa-mobile-menu__submenu${isExpanded ? ' is-open' : ''}`}>
                    {item.items.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          className="elovaa-mobile-menu__sublink"
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
    </header>
  );
}

export default Header;