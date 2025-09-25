import React from "react";

const Step3ID = ({ formData, setFormData, nextStep, prevStep }) => {
  // Ensure formData is never undefined
  formData = formData || {};

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="form-step">
      <h2>Step 3: Identity Verification</h2>

      {/* CNIC Number */}
      <label>CNIC Number:</label>
      <input
        type="text"
        name="cnicNumber"
        value={formData.cnicNumber || ""}
        onChange={handleChange}
        required
      />

      {/* CNIC Front */}
      <label>CNIC Front Image:</label>
      <input
        type="file"
        name="cnicFront"
        accept="image/*"
        onChange={handleChange}
        required
      />

      {/* CNIC Back */}
      <label>CNIC Back Image:</label>
      <input
        type="file"
        name="cnicBack"
        accept="image/*"
        onChange={handleChange}
        required
      />

      {/* Driver’s License Number */}
      <label>Driver’s License Number:</label>
      <input
        type="text"
        name="licenseNumber"
        value={formData.licenseNumber || ""}
        onChange={handleChange}
        required
      />

      {/* License Image */}
      <label>Driver’s License Image:</label>
      <input
        type="file"
        name="licenseImage"
        accept="image/*"
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

export default Step3ID;
