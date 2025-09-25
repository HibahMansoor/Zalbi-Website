// Pages/Home.jsx
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
        <Hero/>
        <Plans />
        <CTA />
      <Footer />
    </>
  );
}