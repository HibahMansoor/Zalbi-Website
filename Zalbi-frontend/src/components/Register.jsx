import React from "react";
import { Link } from "react-router-dom";
import riderImg from "../assets/rider_reg.png";
import passengerImg from "../assets/passenger_reg.png";
import "../styles/Register.css";

const Register = ({ onClose }) => {
  return (
    <div className="Register_overlay" onClick={onClose}>
      <div
        className="Register_sheet"
        onClick={(e) => e.stopPropagation()} // prevent closing on inside click
      >
        <h2>Select Registration Type</h2>

        <div className="options-container">
          {/* Rider */}
          <Link to="/rider" className="option-card" onClick={onClose}>
            <img src={riderImg} alt="Rider" />
            <h3>Register as Rider</h3>
          </Link>

          {/* Passenger */}
          <Link to="/passenger" className="option-card" onClick={onClose}>
            <img src={passengerImg} alt="Passenger" />
            <h3>Register as Passenger</h3>
          </Link>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Register;
