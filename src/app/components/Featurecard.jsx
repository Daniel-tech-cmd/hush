// components/Features.js
import React from "react";

const Features = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center space-y-8 md:space-y-0">
        {/* Feature 1 */}
        <div className="group relative flex items-center justify-center h-80 w-64 md:w-72 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <img
            src="/payment.jpg" // Replace with actual image path
            alt="Multiple Payment Option"
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">
              Multiple Payment Option
            </h3>
            <p className="text-white text-sm">
              Give your buyers the freedom of choice by offering prepaid and
              cash on delivery (COD). We process both efficiently.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="group relative flex items-center justify-center h-80 w-64 md:w-72 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <img
            src="/order-tracking1.jpg" // Replace with actual image path
            alt="Real-Time Order Tracking"
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">
              Real-Time Order Tracking
            </h3>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group relative flex items-center justify-center h-80 w-64 md:w-72 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <img
            src="/post-ship1.jpg" // Replace with actual image path
            alt="Post Ship"
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">Post Ship</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
