import React from "react";

const Step4Bank = ({ formData, setFormData, nextStep, prevStep }) => {
  // Ensure formData is always an object
  formData = formData || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-step">
      <h2>Step 4: Bank Details</h2>

      {/* Bank Title */}
      <label>Bank Account Title:</label>
      <input
        type="text"
        name="bankTitle"
        value={formData.bankTitle || ""}
        onChange={handleChange}
        required
      />

      {/* Bank Name */}
      <label>Bank Name:</label>
      <input
        type="text"
        name="bankName"
        value={formData.bankName || ""}
        onChange={handleChange}
        required
      />

      {/* Bank Account Number */}
      <label>Bank Account Number:</label>
      <input
        type="text"
        name="bankAccount"
        value={formData.bankAccount || ""}
        onChange={handleChange}
        required
      />

      {/* IBAN */}
      <label>IBAN:</label>
      <input
        type="text"
        name="iban"
        value={formData.iban || ""}
        onChange={handleChange}
        required
      />

      <div className="form-navigation">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4Bank;
