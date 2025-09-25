import React from "react";

const Step2Vehicle = ({
  formData = {},
  handleChange = () => {},
  errors = {},
}) => {
  return (
    <div className="card">
      <h3>Vehicle Info</h3>

      <label>Vehicle Type</label>
      <select
        value={formData.vehicleType || ""}
        onChange={(e) => handleChange("vehicleType", e.target.value)}
      >
        <option value="">Select Vehicle</option>
        <option value="Bike">Bike</option>
        <option value="Car">Car</option>
        <option value="Rickshaw">Rickshaw</option>
      </select>

      <label>Make & Model</label>
      <input
        type="text"
        value={formData.vehicleModel || ""}
        onChange={(e) => handleChange("vehicleModel", e.target.value)}
      />

      <label>Year</label>
      <input
        type="number"
        value={formData.vehicleYear || ""}
        onChange={(e) => handleChange("vehicleYear", e.target.value)}
      />

      <label>Color</label>
      <input
        type="text"
        value={formData.vehicleColor || ""}
        onChange={(e) => handleChange("vehicleColor", e.target.value)}
      />

      <label>License Plate</label>
      <input
        type="text"
        value={formData.licensePlate || ""}
        onChange={(e) => handleChange("licensePlate", e.target.value)}
      />

      <label>Vehicle Registration Document</label>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => handleChange("vehicleRegDoc", e.target.files[0])}
      />

      <label>Vehicle Photo (Front)</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleChange("vehiclePhotoFront", e.target.files[0])}
      />

      <label>Vehicle Photo (Back)</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleChange("vehiclePhotoBack", e.target.files[0])}
      />
    </div>
  );
};

export default Step2Vehicle;
