import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/PassengerRegistration.css";
import axios from "axios";

const PassengerRegistration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onClose = () => navigate(-1);

  const onSubmit = (data) => {
    console.log("Passenger form data:", data);
    toast.success("Passenger details captured (frontend only)");
    // backend call will be added later
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <h2>Passenger Registration</h2>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name")}
            required
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            required
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone")}
            required
          />

          <button type="submit" className="reg-btn">
            Continue
          </button>
        </form>

        <p className="forgot-password">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default PassengerRegistration;
