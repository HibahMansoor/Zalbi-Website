import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">Zalbi</div>
          <p className="footer__text">Next-gen ride-hailing with trust, safety, and fairness.</p>
        </div>

        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#plans">Subscription</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </nav>

        <div className="footer__social">
          <a href="#" aria-label="Facebook">Fb</a>
          <a href="#" aria-label="Twitter">Tw</a>
          <a href="#" aria-label="LinkedIn">In</a>
        </div>
      </div>
      <div className="footer__bar">© 2025 Zalbi. All rights reserved.</div>
    </footer>
  );
}
