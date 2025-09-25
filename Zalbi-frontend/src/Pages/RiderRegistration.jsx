import React, { useState } from "react";
import axios from "axios";
import "../styles/RiderRegistration.css";

const RiderReg = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    dob: { day: "", month: "", year: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["day", "month", "year"].includes(name)) {
      setFormData({
        ...formData,
        dob: { ...formData.dob, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // connect with your backend
      const res = await axios.post("http://localhost:5000/register", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Something went wrong"));
    }
  };

  return (
    <div className="overlay">
      <div className="container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <span className="icon">📞</span>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="gender-group">
            <button
              type="button"
              className={formData.gender === "Male" ? "active" : ""}
              onClick={() => setFormData({ ...formData, gender: "Male" })}
            >
              ♂ Male
            </button>
            <button
              type="button"
              className={formData.gender === "Female" ? "active" : ""}
              onClick={() => setFormData({ ...formData, gender: "Female" })}
            >
              ♀ Female
            </button>
          </div>

          {/* Date of Birth */}
          <div className="dob_container">
            <div className="dob_p">
              <p>DOB</p>
            </div>
            <div className="dob">
              <select name="month" onChange={handleChange}>
                <option value="">Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select name="day" onChange={handleChange}>
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>

              <select name="year" onChange={handleChange}>
                <option value="">Year</option>
                {Array.from({ length: 40 }, (_, i) => 1985 + i).map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RiderReg;
