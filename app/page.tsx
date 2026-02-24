import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyClinica from "../components/WhyClinicaSection";
import ArchitectureSection from "../components/ArchitectureSection";
import SecuritySection from "../components/SecuritySection";
import FreeTrial from "../components/FreeTrialSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyClinica />
      <ArchitectureSection />
      <SecuritySection />
      <FreeTrial />
      <Footer />
    </>
  );
}
