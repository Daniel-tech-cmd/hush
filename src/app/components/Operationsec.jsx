"use client";
import Image from "next/image";

export default function OperationsSection() {
  const countries = [
    { name: "Bharat", flag: "/india.png", currency: "₹ (INR)" },
    {
      name: "United Kingdom",
      flag: "/uk.png",
      currency: "£ (GBP)",
    },
    { name: "Dubai", flag: "/uae.png", currency: "UAD" },
    { name: "Saudi Arabia", flag: "/saudi.png", currency: "SAR" },
    {
      name: "United States",
      flag: "/us.png",
      currency: "$ (USD)",
    },
  ];

  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8" style={{ color: "black" }}>
        Our operations span across several countries.
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <Image
              src={country.flag}
              alt={`${country.name} Flag`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold" style={{ color: "black" }}>
                {country.name}
              </p>
              <p className="text-sm text-gray-500">{country.currency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
