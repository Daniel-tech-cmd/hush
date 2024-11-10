"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);

  const features = [
    {
      icon: "/website-icon.svg", // Replace with your actual icon path
      title: "Own Website / Marketplace",
      details: [
        "All marketplace integration",
        "SMS / e-Mail notification",
        "Intelligent courier selection",
        "Pan India coverage",
      ],
    },
    {
      icon: "/social-icon.svg",
      title: "Social Sellers",
      details: [
        "Pay per use basis",
        "Best User Experience",
        "Hassle free tracking",
        "Reverse pickups & international coverage",
      ],
    },
    {
      icon: "/shipper-icon.svg",
      title: "High Volume Shipper",
      details: [
        "All marketplace integration",
        "NDR management tool",
        "Hassle Free Remittance",
        "Courier-Selection",
      ],
    },
  ];

  return (
    <div
      className="bg-blue-900 py-10"
      style={{ background: "url('/map-bg.jpg')" }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
            className="bg-blue-100 rounded-lg p-6 text-center text-blue-900 shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
              />
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <ul className="text-sm space-y-2">
              {feature.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
