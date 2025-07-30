"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ maxHeight: "600px" }}
    >
      {/* Background Image */}
      <Image
        src="/features-banner.jpg" // replace with the actual path to your image
        alt="Warehouse Background"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 lg:p-20 space-y-4 bg-black bg-opacity-40">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          From anywhere to everywhere
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-white">
          It's easy and free!!! Go with Ease.... Start Oma-airflight !!!
        </p>
        {/* Button */}
        <button className="px-6 py-3 mt-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold rounded-md shadow-lg hover:from-green-600 hover:to-yellow-600 transition duration-200">
          GET STARTED
        </button>
      </div>
    </div>
  );
}
