import React, { useState } from "react";

// Main App Component
const Practice = () => {
  const [view, setView] = useState("landing"); // landing, register, login, dashboard
  const [userType, setUserType] = useState(null); // 'rider' or 'passenger'
  const [isAuth, setIsAuth] = useState(false);

  const renderContent = () => {
    switch (view) {
      case "landing":
        return <LandingPage setView={setView} />;
      case "register":
        return (
          <RegistrationModal setUserType={setUserType} setView={setView} />
        );
      case "login":
        return <LoginModal setView={setView} setIsAuth={setIsAuth} />;
      case "dashboard":
        return <UserDashboard />;
      case "registerForm":
        if (userType === "rider") {
          return <RiderRegistration setView={setView} setIsAuth={setIsAuth} />;
        } else {
          return (
            <PassengerRegistration setView={setView} setIsAuth={setIsAuth} />
          );
        }
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        {renderContent()}
      </div>
    </div>
  );
};

// Landing Page Component
const LandingPage = ({ setView }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Welcome to RideShare
      </h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Your convenient ride-sharing solution.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => setView("register")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Register Today
        </button>
        <button
          onClick={() => setView("login")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

// Registration Modal Component
const RegistrationModal = ({ setUserType, setView }) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Select Registration Type
      </h2>
      <button
        onClick={() => setView("landing")}
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => {
            setUserType("rider");
            setView("registerForm");
          }}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
        >
          <img
            src="https://placehold.co/100x100/A0C5FA/0B5099?text=Rider"
            alt="Rider"
            className="mb-2"
          />
          <span className="font-medium text-gray-700">Register as Rider</span>
        </button>
        <button
          onClick={() => {
            setUserType("passenger");
            setView("registerForm");
          }}
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
        >
          <img
            src="https://placehold.co/100x100/A0C5FA/0B5099?text=Passenger"
            alt="Passenger"
            className="mb-2"
          />
          <span className="font-medium text-gray-700">
            Register as Passenger
          </span>
        </button>
      </div>
    </div>
  );
};

// Login Modal Component
const LoginModal = ({ setView, setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    if (email && password) {
      setIsAuth(true);
      setView("dashboard");
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Login
      </h2>
      <button
        onClick={() => setView("landing")}
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <p className="text-sm text-blue-500 text-center hover:underline cursor-pointer">
          Forgot your password?
        </p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 disabled:bg-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Rider Registration Form Component
const RiderRegistration = ({ setView, setIsAuth }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    vehicleNumber: "",
    license: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    if (Object.values(form).every((field) => field.length > 0)) {
      setIsAuth(true);
      setView("dashboard");
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Rider Registration
      </h2>
      <button
        onClick={() => setView("register")}
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={form.vehicleNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          name="license"
          placeholder="License Number"
          value={form.license}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (min 8 chars)"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          minLength="8"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

// Passenger Registration Form Component
const PassengerRegistration = ({ setView, setIsAuth }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    if (Object.values(form).every((field) => field.length > 0)) {
      setIsAuth(true);
      setView("dashboard");
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Passenger Registration
      </h2>
      <button
        onClick={() => setView("register")}
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (min 8 chars)"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          minLength="8"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

// User Dashboard Component
const UserDashboard = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Your Dashboard!
      </h2>
      <p className="text-gray-600 text-center">
        You have successfully logged in or registered.
      </p>
      {/* You can add more dashboard content here */}
    </div>
  );
};

export default Practice;
