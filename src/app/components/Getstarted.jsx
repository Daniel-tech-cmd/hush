"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function GetStartedSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center bg-white py-10">
      <h2 className="text-3xl font-bold mb-8" style={{ color: "black" }}>
        Get Started Now!!
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl px-4">
        {/* Complete KYC Card */}
        <div
          className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/wallet.jpg"
              alt="KYC"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold" style={{ color: "black" }}>
            Complete KYC
          </h3>
          <p className="text-gray-600 mt-2">
            KYC (Know Your Customer) guidelines puts an obligation
          </p>
        </div>

        {/* Recharge Your Wallet Card */}
        <div
          className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/login.jpg"
              alt="Recharge Wallet"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold" style={{ color: "black" }}>
            {" "}
            Recharge Your Wallet
          </h3>
          <p className="text-gray-600 mt-2">
            Reverse Pickups & best international coverage
          </p>
        </div>

        {/* Ship Now Card */}
        <div
          className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg p-6 w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/ship-now.jpg"
              alt="Ship Now"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-semibold" style={{ color: "black" }}>
            Ship Now
          </h3>
          <p className="text-gray-600 mt-2">
            Courier delivery services are extremely popular across the world.
          </p>
        </div>
      </div>
    </div>
  );
}
