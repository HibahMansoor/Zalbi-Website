// Hero.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import passenger from "../assets/zilbili-driver.jpeg";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('Now');

  // Get current location function
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setUseCurrentLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Reverse geocoding to get address (you'd use a geocoding service in production)
          setPickupLocation(`Current Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`);
        },
        (error) => {
          console.error('Error getting location:', error);
          setPickupLocation('Location access denied');
          setUseCurrentLocation(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSearch = () => {
    if (!pickupLocation.trim()) {
      alert('Please enter a pickup location');
      return;
    }
    console.log('Searching with:', { pickupLocation, dropoffLocation, date, time });
    // Here you would typically make an API call to get ride prices
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-section">
          <div className='text-title'>
            <h1 className="hero-title">Go anywhere with </h1>
           <h1 className="hero-title">Zalbi</h1>
          </div>
          {/* Get exact location option */}
          <div className="location-option">
            <label className="exact-location-label">
              <input 
                type="checkbox" 
                checked={useCurrentLocation}
                onChange={(e) => {
                  setUseCurrentLocation(e.target.checked);
                  if (e.target.checked) {
                    getCurrentLocation();
                  } else {
                    setPickupLocation('');
                  }
                }}
              />
              <span className="checkmark"></span>
              Get exact location
            </label>
          </div>

          {/* Location inputs */}
          <div className="location-inputs">
            <div className="input-group pickup-group">
              <div className="radio-container">
                <input 
                  type="radio" 
                  name="location-type" 
                  checked={!useCurrentLocation}
                  onChange={() => setUseCurrentLocation(false)}
                />
                <span className="radiomark"></span>
              </div>
              <div className="input-content">
                <label className="input-label">Pickup location</label>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="location-input"
                  disabled={useCurrentLocation}
                />
                {useCurrentLocation && (
                  <p className="location-help">It provides your pickup address</p>
                )}
              </div>
            </div>
            
            <div className="input-group dropoff-group">
              <div className="radio-container">
                <input type="radio" name="location-type" checked readOnly />
                <span className="radiomark"></span>
              </div>
              <div className="input-content">
                <label className="input-label">Dropoff location</label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="location-input"
                />
              </div>
            </div>
          </div>

          {/* Date and Time section */}
          <div className="datetime-section">
            <div className="datetime-group">
              <label className="datetime-label">Date</label>
              <div className="datetime-options">
                <button 
                  className={`datetime-option ${date === 'Today' ? 'active' : ''}`}
                  onClick={() => setDate('Today')}
                >
                  Today
                </button>
                <button 
                  className={`datetime-option ${date === 'Tomorrow' ? 'active' : ''}`}
                  onClick={() => setDate('Tomorrow')}
                >
                  Tomorrow
                </button>
              </div>
            </div>
            
            <div className="datetime-group">
              <label className="datetime-label">Time</label>
              <div className="datetime-options">
                <button 
                  className={`datetime-option ${time === 'Now' ? 'active' : ''}`}
                  onClick={() => setTime('Now')}
                >
                  Now
                </button>
                <button 
                  className={`datetime-option ${time === 'Later' ? 'active' : ''}`}
                  onClick={() => setTime('Later')}
                >
                  Later
                </button>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <button className="see-prices-btn" onClick={handleSearch}>
            See prices
          </button>
          
          <p className="login-prompt">Log in to see your recent activity</p>
        </div>
        
        <div className="right-section">
          <div className="image-container">
            <img src={passenger} alt="Uber ride" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;