// Pages/Home.jsx
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Suggestions from '../components/Suggestions';
import AccountDetails from '../components/AccountDetails';



export default function Home() {
  return (
    <>
      <Navbar />
        <Hero/>
        <Suggestions />
        <AccountDetails />
        <Plans />
        <CTA />
      <Footer />
    </>
  );
}