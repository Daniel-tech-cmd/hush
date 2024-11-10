// components/FeaturesSection.js
import Image from "next/image";
import React from "react";

const featuresData = [
  {
    title: "Multiple Partners",
    description:
      "Ship with 17+ carrier partners from a single platform with no dependency.",
    imgSrc: "/multiple-partners.jpg", // Replace with actual image path
    imgAlt: "Multiple Partners",
  },
  {
    title: "Rate Calculator",
    description:
      "Calculate the shipping rates based on origin pin code, destination pin code.",
    imgSrc: "/rate-calculator.jpg", // Replace with actual image path
    imgAlt: "Rate Calculator",
  },
  {
    title: "Discounted Rate",
    description: "Ship across India at starting rates as low as Rs 19/500gm.",
    imgSrc: "/discounted-rate.jpg", // Replace with actual image path
    imgAlt: "Discounted Rate",
  },
  {
    title: "Order Management",
    description: "Efficiently manage orders with our streamlined tools.",
    imgSrc: "/order-mnagement.jpg", // Replace with actual image path
    imgAlt: "Order Management",
  },
  {
    title: "Global Shipping",
    description:
      "Ship internationally with starting rates as low as Rs 19/500gm.",
    imgSrc: "/global-shipping.jpg", // Replace with actual image path
    imgAlt: "Global Shipping",
  },
  {
    title: "Communication",
    description: "Choose your mode of communication and get timely updates.",
    imgSrc: "/communication.jpg", // Replace with actual image path
    imgAlt: "Communication",
  },
  {
    title: "No Monthly",
    description: "No monthly or setup fees, making it free to use.",
    imgSrc: "/no-monthly.jpg", // Replace with actual image path
    imgAlt: "No Monthly",
  },
  {
    title: "Insurance Cover",
    description: "Get insurance cover up to Rs. 5000 for lost shipments.",
    imgSrc: "/insurance-cover.jpg", // Replace with actual image path
    imgAlt: "Insurance Cover",
  },
  {
    title: "Centric Mobile App",
    description: "Easy-to-navigate mobile app with essential features.",
    imgSrc: "/mobile-app.jpg", // Replace with actual image path
    imgAlt: "Centric Mobile App",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12">
        Get Doorstep Pickup
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-48 relative">
              <Image
                src={feature.imgSrc}
                alt={feature.imgAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
