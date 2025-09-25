import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ onClose }) => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    await axios
      .post("http://localhost:4000/api/v1/user/login", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
        setUser(res.data.user);
        navigateTo("/");
        onClose();
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="login_overlay" onClick={onClose}>
      <div
        className="login_sheet"
        onClick={(e) => e.stopPropagation()} // stop close on inside click
      >
        <h2>Login</h2>
        <form
          className="auth-form"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />

          <p className="forgot-password">
            <Link to="/password/forgot" onClick={onClose}>
              Forgot your password?
            </Link>
          </p>

          <button type="submit" className="reg-btn">
            Login
          </button>
        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
