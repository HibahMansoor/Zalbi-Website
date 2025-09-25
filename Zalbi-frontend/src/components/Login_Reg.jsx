import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login"; 

export const Login_Reg = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="login-reg-section">
      <div className="login-reg-container">
        <button className="reg-btn" onClick={() => setShowRegister(true)}>
          Register Today
        </button>
        <span className="or-text">or</span>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          Login Now
        </button>
      </div>

      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};
