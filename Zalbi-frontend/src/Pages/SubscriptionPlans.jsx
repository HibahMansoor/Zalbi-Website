import React, { useState } from "react";
import "../styles/SubscriptionPlans.css";
import "../components/Footer.jsx";
import "../components/Navbar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const SubscriptionPlans = () => {
  const [customPlan, setCustomPlan] = useState({
    type: "",
    frequency: "",
    rides: "",
    distance: "",
    perDay: "",
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomPlan({ ...customPlan, [name]: value });
  };

  //Price calculator to be changed according to real life prices
  const calculatePrice = () => {
    let base = 50;
    let rides = parseInt(customPlan.rides || 0);
    let distance = parseInt(customPlan.distance || 0);
    let perDay = parseInt(customPlan.perDay || 0);

    let total = rides * base + distance * 5 + perDay * 20;
    setPrice(total);
  };

  return (
    <>
      <Navbar />
      <div className="plans-container">
        <h2 className="section-title">Ready-Made Plans</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Daily Plan</h3>
            <p className="price">Rs 299/day</p>
            <p>2 rides per day (up to 10 km each). Valid for 24 hours.</p>
            <button className="btn">Book Now</button>
          </div>

          <div className="plan-card">
            <h3>Weekly Plan</h3>
            <p className="price">Rs 1,999/week</p>
            <p>Unlimited rides within city for 7 days.</p>
            <button className="btn">Book Now</button>
          </div>

          <div className="plan-card">
            <h3>Monthly Plan</h3>
            <p className="price">Rs 5,999/month</p>
            <p>Unlimited rides within city for 30 days.</p>
            <button className="btn">Book Now</button>
          </div>

          <div className="plan-card">
            <h3>Parcel Delivery Plan</h3>
            <p className="price">Rs 1,499/month</p>
            <p>10 secure parcel deliveries (up to 5 km each).</p>
            <button className="btn">Book Now</button>
          </div>
        </div>

        <h2 className="section-title">Create Your Custom Plan</h2>
        <div className="custom-plan-card">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option value="">-- Select Type --</option>
            <option value="ride">Ride</option>
            <option value="parcel">Parcel</option>
          </select>

          <label>How often do you want your plan?</label>
          <select name="frequency" onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label>Rides per period</label>
          <input
            type="number"
            name="rides"
            placeholder="Enter rides"
            onChange={handleChange}
          />

          <label>Distance per ride (km)</label>
          <input
            type="number"
            name="distance"
            placeholder="Enter distance"
            onChange={handleChange}
          />

          <label>How many rides per day?</label>
          <input
            type="number"
            name="perDay"
            placeholder="Enter rides per day"
            onChange={handleChange}
          />

          <p className="price">Estimated Price: Rs {price}</p>
          <button className="btn" onClick={calculatePrice}>
            Create Plan
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubscriptionPlans;
