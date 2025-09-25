// Pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Plans from "../components/Plans";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Login_Reg } from "../components/Login_Reg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Login_Reg />
        <Features />
        <Plans />
        <CTA />
      </main>
      <Footer />
    </>
  );
}