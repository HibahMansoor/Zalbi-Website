/*import React from "react";

const plans = [
  { name: "Daily Plan", price: "₨ 299/day", desc: "2 rides/day at a fixed rate.", cta: "Choose Plan" },
  { name: "Weekly Plan", price: "₨ 1,999/week", desc: "Unlimited rides within city.", cta: "Choose Plan" },
  { name: "Parcel Plan", price: "₨ 1,499/month", desc: "10 secure deliveries/month.", cta: "Choose Plan" },
];

export default function Plans() {
  return (
    <section id="plans" className="plans section">
      <h2 className="section__title center">Subscription Plans</h2>
      <p className="section__body center">Predictable pricing that saves you time and money.</p>

      <div className="plans__grid">
        {plans.map((p, i) => (
          <article key={i} className="plan fade-up">
            <h3 className="plan__name">{p.name}</h3>
            <div className="plan__price">{p.price}</div>
            <p className="plan__desc">{p.desc}</p>
            <a className="btn btn--primary" href="#book">{p.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}*/
import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  { name: "Daily Plan", price: "₨ 299/day", desc: "2 rides/day at a fixed rate.", cta: "Choose Plan" },
  { name: "Weekly Plan", price: "₨ 1,999/week", desc: "Unlimited rides within city.", cta: "Choose Plan" },
  { name: "Parcel Plan", price: "₨ 1,499/month", desc: "10 secure deliveries/month.", cta: "Choose Plan" },
];

export default function Plans() {
  const navigate = useNavigate();

  return (
    <section id="plans" className="plans section">
      <h2 className="section__title center">Subscription Plans</h2>
      <p className="section__body center">Predictable pricing that saves you time and money.</p>

      <div className="plans__grid">
        {plans.map((p, i) => (
          <article key={i} className="plan fade-up">
            <h3 className="plan__name">{p.name}</h3>
            <div className="plan__price">{p.price}</div>
            <p className="plan__desc">{p.desc}</p>
            <button className="btn btn--primary">{p.cta}</button>
          </article>
        ))}
      </div>

      <div className="plans__view-more">
        <button onClick={() => navigate("/SubscriptionPlans")}>View More</button>
      </div>
    </section>
  );
}