"use client";
import Image from "next/image";

export default function WhatsAppSection() {
  return (
    <div className="bg-[#093A5A] text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Leveraging Logistics with the power of WhatsApp
        </h2>
        <p className="text-lg">
          WhatsApp is the world’s largest messaging platform, with an active
          monthly user base of over 2 billion individuals.
        </p>
        <p className="text-lg">
          In India alone, over 400 million users use WhatsApp. Over 95% of all
          iOS and Android devices in the country have WhatsApp downloaded on
          their devices.
        </p>
        <button className="bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition duration-200">
          JOIN THE PEOPLE
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Background circular design */}
          <div
            className="absolute -top-8 -right-8 w-36 h-36 rounded-full border-4 border-yellow-500"
            style={{ zIndex: "-1" }}
          />

          {/* Main person image */}
          <Image
            src="/whatsApp.png"
            alt="Person using WhatsApp"
            width={250}
            height={250}
            className="rounded-lg"
          />

          {/* Phone mockup image positioned beside */}
        </div>
      </div>
    </div>
  );
}
