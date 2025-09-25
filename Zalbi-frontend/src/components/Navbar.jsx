// import React, { useEffect, useState } from "react";
// import "../styles/Navbar.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [dark, setDark] = useState(false);

//   // Load saved theme
//   useEffect(() => {
//     const saved = localStorage.getItem("zalbi-theme");
//     const prefersDark =
//       window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches;
//     const useDark = saved ? saved === "dark" : prefersDark;
//     setDark(useDark);
//     document.documentElement.classList.toggle("dark", useDark);
//   }, []);

//   const toggleDark = () => {
//     const next = !dark;
//     setDark(next);
//     document.documentElement.classList.toggle("dark", next);
//     localStorage.setItem("zalbi-theme", next ? "dark" : "light");
//   };

//   useEffect(() => {
//     // close mobile menu on resize > 900
//     const onResize = () => {
//       if (window.innerWidth > 900) setOpen(false);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return (
//     <header className="nav">
//       <div className="nav__inner">
//         <a href="#home" className="nav__logo">
//           Zalbi
//         </a>

//         <nav className={`nav__links ${open ? "is-open" : ""}`}>
//           <a href="#home" onClick={() => setOpen(false)}>
//             Home
//           </a>
//           <a href="#about" onClick={() => setOpen(false)}>
//             About
//           </a>
//           <a href="#features" onClick={() => setOpen(false)}>
//             Features
//           </a>
//           <a href="#plans" onClick={() => setOpen(false)}>
//             Subscription
//           </a>
//           <a href="#contact" onClick={() => setOpen(false)}>
//             Contact
//           </a>
//         </nav>

//         <div className="nav__actions">
//           <button
//             className="btn btn--ghost"
//             onClick={toggleDark}
//             aria-label="Toggle theme"
//           >
//             {/* simple sun/moon svg */}
//             {dark ? (
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M21.64 13a1 1 0 0 0-1.05-1.31a8 8 0 0 1-8.28-10a1 1 0 0 0-1.64-.77a10 10 0 1 0 13.74 13.74a1 1 0 0 0-.77-1.66Z"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8l1.8-1.8zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.84 20.83l1.8 1.8l1.79-1.8l-1.79-1.79l-1.8 1.79zM20 13h3v-2h-3v2zm-2.24-8.16l1.8-1.79l-1.8-1.8l-1.79 1.8l1.79 1.79zM12 6a6 6 0 100 12A6 6 0 0012 6zm7.16 14.83l1.79-1.8l-1.79-1.79l-1.8 1.79l1.8 1.8z"
//                 />
//               </svg>
//             )}
//           </button>
//           <a className="btn btn--primary" href="#book">
//             Book a Ride
//           </a>
//           <button
//             className="nav__burger"
//             onClick={() => setOpen((p) => !p)}
//             aria-label="Menu"
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ZALBI</div>
      <ul className="navbar-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#plans">Subscription</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
      <div>
        <button className="ride-btn">Book a ride</button>
      </div>
    </nav>
  );
}
