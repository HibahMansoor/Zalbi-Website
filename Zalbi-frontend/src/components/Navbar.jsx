// Navbar.jsx
import React, { useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Zilbili</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/ride" className="navbar-link">Ride</a>
          </li>
          <li className="navbar-item">
            <a href="/drive" className="navbar-link">Drive</a>
          </li>
          <li className="navbar-item">
            <a href="/business" className="navbar-link">Business</a>
          </li>
          <li className="navbar-item">
            <a href="/eats" className="navbar-link">Zilbili Eats</a>
          </li>
          <li className="navbar-item dropdown">
            <a href="/about" className="navbar-link">
              About <span className="dropdown-arrow">v</span>
            </a>
            <div className="dropdown-menu">
              <a href="/about-us">About us</a>
              <a href="/our-offerings">Our offerings</a>
              <a href="/how-zilbili-works">How Zilbili works</a>
              <a href="/sustainability">Sustainability</a>
              <a href="/newsroom">Newsroom</a>
              <a href="/investor-relations">Investor relations</a>
              <a href="/autonomous">Autonomous</a>
            </div>
          </li>
        </ul>

        {/* Right side items */}
        <div className="navbar-right">
          <div className="language-selector">
            <span className="language-icon">🌐</span>
            <span>EN</span>
          </div>
          <div className="navbar-help">
            <a href="/help">Help</a>
          </div>
          <div className="navbar-auth">
            <a href="/login" className="navbar-link login-link">Login</a>
            <a href="/signup" className="signup-btn">Sign up</a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="/ride">Ride</a>
        <a href="/drive">Drive</a>
        <a href="/business">Business</a>
        <a href="/eats">Zilbili Eats</a>
        <a href="/about">About</a>
        <a href="/help">Help</a>
        <a href="/login" className="mobile-login">Login</a>
        <a href="/signup" className="mobile-signup">Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;