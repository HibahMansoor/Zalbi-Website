import React from "react";
import aboutImg from "../assets/About.png";
import "../styles/About.css";

export default function bout() {
  return (
    <section id="about" className="about section">
      <div className="section__grid">
        <div className="about__text">
          <h2 className="section__title">About Zalbi</h2>
          <p className="section__body">
            Zalbi is a next-generation ride-hailing platform built to make
            travel safer, smarter, and more reliable for everyone. Whether
            you’re a rider, passenger, or sending a parcel, Zalbi connects you
            seamlessly through a secure and easy-to-use app. With features like
            women-only rides, flexible subscriptions, insurance, parcel
            delivery, and an SOS safety system, we’re redefining convenience
            while putting trust and safety first. Our mission is simple — to
            move people and packages with care, efficiency, and confidence.
          </p>
        </div>
        <div className="about__art" aria-hidden="true">
          <img src={aboutImg} alt="About Zalbi" className="about__img" />
        </div>
      </div>
    </section>
  );
}
