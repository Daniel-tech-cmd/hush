import Image from "next/image";
import Banner from "./components/Banner";
import DeliveryStats from "./components/Section";
import Features from "./components/Features";
import GetStartedSection from "./components/Getstarted";
import ServiceFeatures from "./components/ServiceFeatures";
import WhatsAppSection from "./components/Whatsappsec";
import Footer from "./components/Footer";
import OperationsSection from "./components/Operationsec";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/Inforcard";

export default function Home() {
  return (
    <>
      <Banner />
      <DeliveryStats />
      <Features />
      <GetStartedSection />
      <HeroSection />
      <ServiceFeatures />
      <InfoCards />
      <WhatsAppSection />
      <OperationsSection />
      <Footer />
    </>
  );
}
