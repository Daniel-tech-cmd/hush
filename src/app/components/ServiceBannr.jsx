"use client";
import React, { useState } from "react";

const Banner = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    // Add tracking function logic here
    console.log("Tracking ID:", trackingId);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/features-banner.jpg')" }}
    >
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-opacity-50">
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-user-circle"></i>
          </button>
        </div>
      </header>

      {/* Banner Content */}
      <div className="flex flex-col items-start justify-center h-full px-8 md:px-16 bg-black bg-opacity-60 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Exploring Our Feature Set
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-4">
          Logistics features encompass a comprehensive suite of tools and
          capabilities designed to enhance the efficiency, accuracy, and overall
          management of supply chain operations.
        </p>
      </div>
    </div>
  );
};

export default Banner;
