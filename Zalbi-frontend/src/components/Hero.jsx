import React from "react";
import "../styles/Hero.css";
import Map, { Marker } from "react-map-gl";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="tagline">Ride with Trust. Deliver with Safety.</p>
        <h1 className="hero__title">
          A Smarter, Safer, and Fairer Ride-Hailing Experience.
        </h1>
        <p className="hero__sub">
          Zalbi connects passengers and drivers with subscription plans, women
          riders, secure parcel delivery, and safety-first solutions.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#book">
            Get Started
          </a>
          <a className="btn btn--outline" href="#plans">
            View Plans
          </a>
        </div>
      </div>

      <div className="hero__mock">
        <div className="phone">
          <div className="phone__bar" />
          <div className="phone__screen">
            <Map
              mapboxAccessToken="pk.eyJ1IjoiaGliYWhtYW5zb29yIiwiYSI6ImNsdnl2ZDBpZTE2bzIyam9nemViZWozcWwifQ.G6w50ztYt7Oe1JhkSL6hlw"
              initialViewState={{
                longitude: 73.0551, // Islamabad longitude
                latitude: 33.6844, // Islamabad latitude
                zoom: 12,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              attributionControl={false}
            >
              <div className="card-skeleton" />
              {/*<Marker longitude={73.0551} latitude={33.6844} color="red" />*/}
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
