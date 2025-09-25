import React from "react";

const Step5Review = ({ formData }) => (
  <div className="card">
    <h3>Review Your Details</h3>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    <p>Please confirm all information before submitting.</p>
  </div>
);

export default Step5Review;
