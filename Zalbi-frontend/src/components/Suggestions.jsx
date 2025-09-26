// Suggestions.jsx
import React from 'react';
import '../styles/Suggestions.css';
import rideImage from '../assets/carride.png';
import foodImage from '../assets/carride.png';
import packageImage from '../assets/carride.png';

const Suggestions = () => {
  const suggestions = [
    {
      id: 1,
      category: "Ride",
      title: "Go anywhere with zilbili Request a ride, hop in, and go.",
      image: rideImage
    },
    {
      id: 2,
      category: "Food", 
      title: "Delicious meals delivered. Order food from your favorite restaurants.",
      image: foodImage
    },
    {
      id: 3,
      category: "Package",
      title: "Send anything anywhere. Reliable package delivery service.", 
      image: packageImage
    }
  ];

  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <h2 className="suggestions-title">Suggestions</h2>
      </div>
      
      <div className="suggestions-grid">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <div className="card-content">
              <div className="text-section">
                <span className="card-category">{suggestion.category}</span>
                <h3 className="card-title">{suggestion.title}</h3>
                
                <div className="details-section">
                  <span className="details-text">Details</span>
                </div>
              </div>
              
              <div className="image-section">
                <img 
                  src={suggestion.image} 
                  alt={suggestion.title}
                  className="card-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;