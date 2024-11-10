import React from "react";
import Banner from "../components/ServiceBannr";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Features from "../components/Featurecard";
import FeaturesSection from "../components/Cards";

export default function page() {
  return (
    <>
      <Banner />
      <Features />
      <FeaturesSection />
      <HeroSection />

      <Footer />
    </>
  );
}
