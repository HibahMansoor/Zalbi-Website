// import React, { useEffect, useState } from "react";

// const Step1Personal = ({
//   formData = {},
//   handleChange = () => {},
//   errors = {},
// }) => {
//   // ✅ fallback if formData.phoneVerified is missing
//   const [otpVerifiedLocal, setOtpVerifiedLocal] = useState(
//     !!formData.phoneVerified
//   );

//   // OTP local state
//   // const [otpSent, setOtpSent] = useState(false);
//   // const [generatedOtp, setGeneratedOtp] = useState(null);
//   // const [otpInput, setOtpInput] = useState("");
//   // const [resendTimer, setResendTimer] = useState(0);

//   // Profile preview
//   const [previewUrl, setPreviewUrl] = useState(null);

//   useEffect(() => {
//     setOtpVerifiedLocal(!!formData.phoneVerified);
//   }, [formData.phoneVerified]);

//   useEffect(() => {
//     if (!formData.profilePic) {
//       setPreviewUrl(null);
//       return;
//     }
//     const url = URL.createObjectURL(formData.profilePic);
//     setPreviewUrl(url);
//     return () => URL.revokeObjectURL(url);
//   }, [formData.profilePic]);

//   // Simple OTP sender (mock). In production, replace with backend SMS request.
//   // const sendOtp = () => {
//   //   if (
//   //     !formData.phone ||
//   //     String(formData.phone).replace(/\D/g, "").length < 10
//   //   ) {
//   //     alert("Please enter a valid phone number before sending OTP.");
//   //     return;
//   //   }
//   //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   //   setGeneratedOtp(otp);
//   //   setOtpSent(true);
//   //   setResendTimer(60);
//   //   // In dev, show OTP in console for testing
//   //   console.log("DEV OTP (only visible in console):", otp);

//   //   // Start resend cooldown
//   //   const timerId = setInterval(() => {
//   //     setResendTimer((t) => {
//   //       if (t <= 1) {
//   //         clearInterval(timerId);
//   //         return 0;
//   //       }
//   //       return t - 1;
//   //     });
//   //   }, 1000);
//   // };

//   // const verifyOtp = () => {
//   //   if (!otpSent) {
//   //     alert("Send OTP first.");
//   //     return;
//   //   }
//   //   if (otpInput === generatedOtp) {
//   //     handleChange("phoneVerified", true);
//   //     setOtpVerifiedLocal(true);
//   //     alert("Phone number verified.");
//   //     // clear otp inputs
//   //     setOtpInput("");
//   //     setGeneratedOtp(null);
//   //     setOtpSent(false);
//   //   } else {
//   //     alert("Incorrect OTP. Try again.");
//   //   }
//   // };

//   // password strength calculation (mirror parent's rules)
//   const passwordStrength = (pwd) => {
//     if (!pwd) return 0;
//     let score = 0;
//     if (pwd.length >= 8) score++;
//     if (/[A-Z]/.test(pwd)) score++;
//     if (/[0-9]/.test(pwd)) score++;
//     if (/[^A-Za-z0-9]/.test(pwd)) score++;
//     return score;
//   };

//   // Render password strength visually
//   const StrengthBar = ({ score }) => {
//     const pct = (score / 4) * 100;
//     let color = "#e74c3c";
//     if (score >= 3) color = "#27ae60";
//     else if (score === 2) color = "#f1c40f";
//     return (
//       <div className="strength-meter">
//         <div
//           className="strength-fill"
//           style={{ width: `${pct}%`, background: color }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="card">
//       <h3>Personal Information</h3>

//       <label>Full Name</label>
//       <input
//         type="text"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={(e) => handleChange("fullName", e.target.value)}
//       />
//       {errors.fullName && <div className="error">{errors.fullName}</div>}

//       <label>Email Address</label>
//       <input
//         type="email"
//         placeholder="Email Address"
//         value={formData.email}
//         onChange={(e) => handleChange("email", e.target.value)}
//       />
//       {errors.email && <div className="error">{errors.email}</div>}

//       <label>Phone Number</label>
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={(e) => {
//           handleChange("phone", e.target.value);
//           // if user edits phone after verification, reset verification
//           if (formData.phoneVerified) handleChange("phoneVerified", false);
//         }}
//       />
//       {errors.phone && <div className="error">{errors.phone}</div>}
//       {errors.phoneVerified && (
//         <div className="error">{errors.phoneVerified}</div>
//       )}

//       {/* <div className="otp-row">
//         <button type="button" onClick={sendOtp} disabled={resendTimer > 0}>
//           {resendTimer > 0
//             ? `Resend OTP (${resendTimer}s)`
//             : otpSent
//             ? "Resend OTP"
//             : "Send OTP"}
//         </button>
//         <div className="otp-status">
//           {otpVerifiedLocal ? (
//             <span className="verified">Verified ✓</span>
//           ) : (
//             <span className="not-verified">Not Verified</span>
//           )}
//         </div>
//       </div> */}

//       {/* {otpSent && (
//         <div className="otp-box">
//           <label>Enter OTP</label>
//           <input
//             type="text"
//             placeholder="6-digit OTP"
//             value={otpInput}
//             onChange={(e) => setOtpInput(e.target.value)}
//             maxLength={6}
//           />
//           <button type="button" onClick={verifyOtp}>
//             Verify OTP
//           </button>

//           {/* Show OTP in UI only on localhost to help you test easily.
//               Remove this in production! }
//           {window &&
//             window.location &&
//             window.location.hostname === "localhost" && (
//               <div className="dev-otp">
//                 DEV OTP (for testing): {generatedOtp}
//               </div>
//             )}
//         </div>
//       )} */}

//       <label>Date of Birth</label>
//       <input
//         type="date"
//         value={formData.dob}
//         onChange={(e) => handleChange("dob", e.target.value)}
//       />

//       <label>Gender</label>
//       <select
//         value={formData.gender}
//         onChange={(e) => handleChange("gender", e.target.value)}
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Other">Other</option>
//       </select>
//       {errors.gender && <div className="error">{errors.gender}</div>}

//       <label>Password</label>
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => handleChange("password", e.target.value)}
//       />
//       <StrengthBar score={passwordStrength(formData.password)} />
//       {errors.password && <div className="error">{errors.password}</div>}

//       <label>Confirm Password</label>
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={formData.confirmPassword}
//         onChange={(e) => handleChange("confirmPassword", e.target.value)}
//       />
//       {errors.confirmPassword && (
//         <div className="error">{errors.confirmPassword}</div>
//       )}

//       {/* <label>Profile Picture (JPG/PNG)</label>
//       <input
//         type="file"
//         accept="image/png,image/jpeg"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           handleChange("profilePic", file || null);
//         }}
//       />
//       {errors.profilePic && <div className="error">{errors.profilePic}</div>} */}

//       {previewUrl && (
//         <div className="preview">
//           <img
//             src={previewUrl}
//             alt="profile preview"
//             style={{ maxWidth: 120, borderRadius: 8 }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Step1Personal;
