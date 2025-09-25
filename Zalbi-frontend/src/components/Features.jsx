import React from "react";

const items = [
  {
    title: "Subscription Plans",
    desc: "Affordable daily / weekly / monthly rides.",
  },
  { title: "Women Riders", desc: "Comfort and safety for women passengers." },
  {
    title: "Insurance",
    desc: "Coverage for riders, helmets, and bike maintenance.",
  },
  {
    title: "Secure Parcel Delivery",
    desc: "Escrow + video verification for trust.",
  },
  { title: "SOS Button", desc: "Safety at your fingertips." },
  { title: "Loyalty Rewards", desc: "Earn points & benefits on every trip." },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <h2 className="section__title center">Key Features</h2>
      <p className="section__body center">
        Built to be safer, fairer, and more transparent.
      </p>

      <div className="feature_cards">
        {items.map((it, i) => (
          <article key={i} className="feature_card fade-up">
            <div className="feature_card_icon" aria-hidden="true">
              {/* simple check icon */}
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                />
              </svg>
            </div>
            <h3 className="feature_card_title">{it.title}</h3>
            <p className="feature_card_text">{it.desc}</p>
          </article>
        ))}
      </div>

      <div className="center">
        <a className="btn btn--secondary" href="#features">
          Explore All Features
        </a>
      </div>
    </section>
  );
}
