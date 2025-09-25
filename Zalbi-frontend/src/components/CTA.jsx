import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login"; 



export default function CTA() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section id="book" className="cta">
      <h2 className="cta__title">Ready for a Ride That Puts You First?</h2>
      <div className="cta__actions">
        <button className="cta-reg-btn" onClick={() => setShowRegister(true)}>
          Register Today
        </button>
        <span className="cta-or-text">or</span>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          Login Now
        </button>
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>
    </section>
  );
}
