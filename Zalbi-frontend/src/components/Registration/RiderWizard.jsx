// import React, { useState } from "react";
// import Step1Personal from "./Step1Personal";
// import Step2Vehicle from "./Step2Vehicle";
// import Step3ID from "./Step3ID";
// import Step4Bank from "./Step4Bank";
// import Step5Review from "./Step5Review";
// import "../../styles/RiderRegistration.css";

// const RiderWizard = () => {
//   const [step, setStep] = useState(1);
//   const totalSteps = 5;

//   // Centralized form data
//   const [formData, setFormData] = useState({
//     // Step 1
//     fullName: "",
//     email: "",
//     phone: "",
//     phoneVerified: false, // track OTP verification
//     dob: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     profilePic: null,

//     // Step 2
//     vehicleType: "",
//     vehicleModel: "",
//     vehicleYear: "",
//     vehicleColor: "",
//     licensePlate: "",
//     vehicleRegDoc: null,
//     vehiclePhotoFront: null,
//     vehiclePhotoBack: null,

//     // Step 3
//     cnicNumber: "",
//     cnicFront: null,
//     cnicBack: null,
//     licenseNumber: "",
//     licenseExpiry: "",
//     licenseFront: null,
//     licenseBack: null,
//     selfieWithCnic: null,

//     // Step 4
//     bankTitle: "",
//     bankName: "",
//     accountNumber: "",
//     easypaisa: "",
//     insuranceDoc: null,
//     helmetPhoto: null,
//     emergencyName: "",
//     emergencyRelation: "",
//     emergencyPhone: "",
//   });

//   // Errors object for showing validation errors
//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // clear error for the field as user types
//     setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   //Basic email test
//   const isValidEmail = (email) =>
//     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
//       String(email).toLowerCase()
//     );

//   // Basic phone validation (simple length check; adjust for your locale)
//   const isValidPhone = (phone) => String(phone).replace(/\D/g, "").length >= 10;

//   // Password strength check (returns score 0..4)
//   const passwordStrengthScore = (pwd) => {
//     if (!pwd) return 0;
//     let score = 0;
//     if (pwd.length >= 8) score++;
//     if (/[A-Z]/.test(pwd)) score++;
//     if (/[0-9]/.test(pwd)) score++;
//     if (/[^A-Za-z0-9]/.test(pwd)) score++;
//     return score;
//   };

//   // Validate current step. Returns true if valid.
//   const validateStep = (s = step) => {
//     const newErrors = {};

//     if (s === 1) {
//       if (!formData.fullName || !formData.fullName.trim()) {
//         newErrors.fullName = "Full name is required";
//       }
//       if (!formData.email || !isValidEmail(formData.email)) {
//         newErrors.email = "Valid email is required";
//       }
//       if (!formData.phone || !isValidPhone(formData.phone)) {
//         newErrors.phone = "Valid phone number is required";
//       }
//       if (!formData.phoneVerified) {
//         newErrors.phoneVerified = "Phone number must be verified with OTP";
//       }
//       // Optional: date of birth required? (we'll keep it optional here)
//       if (!formData.gender) {
//         newErrors.gender = "Please select a gender";
//       }
//       if (!formData.password || formData.password.length < 8) {
//         newErrors.password = "Password must be at least 8 characters";
//       } else {
//         const strength = passwordStrengthScore(formData.password);
//         if (strength < 2)
//           newErrors.password = "Password is weak — add numbers/letters/symbols";
//       }
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }
//       if (formData.profilePic) {
//         const file = formData.profilePic;
//         const allowed = ["image/jpeg", "image/png"];
//         if (!allowed.includes(file.type)) {
//           newErrors.profilePic = "Profile picture must be JPG or PNG";
//         }
//       }
//     }

//     // future validation for other steps will go here (step 2,3,4)
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Called when user presses Next
//   const handleNext = () => {
//     if (validateStep(step)) {
//       setStep((s) => Math.min(s + 1, totalSteps));
//     } else {
//       // scroll to top or focus first error (optional)
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const prevStep = () => setStep((s) => Math.max(s - 1, 1));

//   const handleSubmit = async () => {
//     // run validation for final step too
//     if (!validateStep(step)) return;

//     const fd = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       // Append files or values. FormData will stringify non-files.
//       if (value !== undefined && value !== null) {
//         fd.append(key, value);
//       }
//     });

//     try {
//       const res = await fetch("http://localhost:4000/api/riders/register", {
//         method: "POST",
//         body: fd,
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("rider", JSON.stringify(data.rider));
//         alert(
//           "Welcome " +
//             (data.rider.fullName || data.rider.name || "Rider") +
//             "! Registration successful."
//         );
//         window.location.href = "/dashboard";
//       } else {
//         alert("Error: " + data.error);
//       }
//     } catch (err) {
//       alert("Server error: " + err.message);
//     }
//   };

//   return (
//     <div className="wizard-container">
//       <h2>
//         Step {step} of {totalSteps}
//       </h2>
//       <div className="progress-bar">
//         <div style={{ width: `${(step / totalSteps) * 100}%` }}></div>
//       </div>

//       {step === 1 && (
//         <Step1Personal
//           formData={formData}
//           handleChange={handleChange}
//           errors={errors}
//         />
//       )}
//       {step === 2 && (
//         <Step2Vehicle
//           formData={formData}
//           handleChange={handleChange}
//           errors={errors}
//         />
//       )}
//       {step === 3 && (
//         <Step3ID
//           formData={formData}
//           handleChange={handleChange}
//           errors={errors}
//         />
//       )}
//       {step === 4 && (
//         <Step4Bank
//           formData={formData}
//           handleChange={handleChange}
//           errors={errors}
//         />
//       )}
//       {step === 5 && <Step5Review formData={formData} />}

//       <div className="buttons_steps">
//         {step > 1 && <button onClick={prevStep}>Back</button>}
//         {step < totalSteps && <button onClick={handleNext}>Next</button>}
//         {step === totalSteps && (
//           <button onClick={handleSubmit}>Submit Registration</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RiderWizard;
