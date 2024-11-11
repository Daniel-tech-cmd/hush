"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Banner = () => {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId === "") {
      return;
    } else {
      router.push(`/track/${trackingId.trim()}`);
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerbg.jpeg')" }}
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
          Supply Chain Dynamics: Unraveling the Logistics Industry
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-4">
          Is a comprehensive exploration of the intricate web that powers global
          commerce. This insightful guide takes you on a journey through the
          multifaceted world of logistics, uncovering the mechanisms that keep
          supply chains efficient and responsive.
        </p>

        {/* Tracking Input and Button */}
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Enter tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            onClick={(e) => {
              handleTrack(e);
            }}
            className="p-2 bg-[#f4d956] text-black rounded-r-md hover:bg-yellow-400 transition"
            style={{ padding: "9px" }}
          >
            Track
          </button>
        </div>
      </div>

      {/* Chat Button */}
      {/* <button className="absolute bottom-8 right-8 flex items-center space-x-2 bg-[#f4d956] text-green-500 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition">
        <i className="fab fa-whatsapp"></i>
        <span>Chat with Us</span>
      </button> */}
    </div>
  );
};

export default Banner;
