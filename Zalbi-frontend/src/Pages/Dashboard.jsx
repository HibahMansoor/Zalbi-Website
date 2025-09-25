import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("zalbiUser")) || {
    name: "User",
  };

  const handleLogout = () => {
    localStorage.removeItem("zalbiToken");
    localStorage.removeItem("zalbiUser");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img
            src="https://via.placeholder.com/80"
            alt="profile"
            className="profile-img"
          />
          <h3>{user.name}</h3>
          <button>Edit Profile</button>
        </div>
        <ul className="menu">
          <li>🏠 Home</li>
          <li>🚖 My Rides</li>
          <li>📦 Parcel Deliveries</li>
          <li>💳 Subscriptions</li>
          <li>⭐ Rewards</li>
          <li>⚙️ Settings</li>
          <li onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-panel">
        <h1>Welcome back, {user.name}!</h1>

        <div className="stats">
          <div className="card">Total Rides: 12</div>
          <div className="card">Active Subscription: Yes</div>
          <div className="card">Rewards Points: 350</div>
          <div className="card">Upcoming Bookings: 2</div>
        </div>

        <h2>Recent Activity</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-08-28</td>
              <td>Ride</td>
              <td>Completed</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>2025-08-29</td>
              <td>Parcel</td>
              <td>Delivered</td>
              <td>$5</td>
            </tr>
          </tbody>
        </table>

        <h2>Notifications</h2>
        <ul className="notifications">
          <li>⚠️ Your subscription expires in 3 days.</li>
          <li>🎉 You unlocked 50 reward points!</li>
        </ul>
      </main>
    </div>
  );
}
