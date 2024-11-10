// components/InfoCards.js

"use client";

import {
  FaRupeeSign,
  FaMapMarkerAlt,
  FaFileAlt,
  FaCarCrash,
} from "react-icons/fa";

export default function InfoCards() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center p-6 gap-8"
      style={{ background: "#f7f7f7" }}
    >
      {/* Left section with background image */}
      <div
        className="w-full md:w-1/2 lg:w-1/3 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('/pickup.png')", // replace with the actual path to your image
          height: "400px",
        }}
      >
        {/* Optional overlay */}
        <div className="h-full w-full bg-blue-900 bg-opacity-30 rounded-lg flex items-center justify-center">
          {/* Add overlay content if necessary */}
        </div>
      </div>

      {/* Right section with information cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full md:w-1/2 lg:w-2/3">
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaRupeeSign className="text-3xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-black mb-2">Early COD</h2>
            <p className="text-gray-600">
              Refers to the process of collecting payment in cash at the time of
              delivery for goods or services.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-black mb-2">
              Pickup-Locations
            </h2>
            <p className="text-gray-600">
              Designated pickup spots for customers to collect their orders or
              packages from a specified location.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaFileAlt className="text-3xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-black mb-2">
              NDR Management
            </h2>
            <p className="text-gray-600">
              Involves the process of handling and resolving instances where
              deliveries cannot be completed successfully.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaCarCrash className="text-3xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-black mb-2">
              Damaged Shipment
            </h2>
            <p className="text-gray-600">
              Refers to a package or cargo that has sustained visible or
              concealed damage during transit or handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
