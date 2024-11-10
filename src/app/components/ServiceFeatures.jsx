"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ServiceFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center bg-white py-10 px-4">
      {/* Container for the grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <div
          className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
        >
          <div className="relative w-full md:w-1/3 h-32 md:h-40 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/smooth-integration.jpg"
              alt="Service 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2 "
              style={{ color: "black" }}
            >
              Service Integration
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
              <li>Integrates with Shopify, Magento, WooCommerce</li>
              <li>20+ courier partners</li>
              <li>REST APIs available</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-full md:w-1/3 h-32 md:h-40 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/extensive-coverage.jpg"
              alt="Service 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Extensive Coverage
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
              <li>26000+ pin codes in India</li>
              <li>Delivery to 200+ countries</li>
              <li>Air, road, and sea modes</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-full md:w-1/3 h-32 md:h-40 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/management-tools.jpg"
              alt="Service 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Warehouse Management
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
              <li>Real-time inventory tracking</li>
              <li>Automated order processing</li>
              <li>Secure and scalable solutions</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative w-full md:w-1/3 h-32 md:h-40 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/courier-distribution.jpg"
              alt="Service 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Intelligent Courier Distribution
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
              <li>Optimized route planning</li>
              <li>Real-time tracking</li>
              <li>Reduced transit times</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
