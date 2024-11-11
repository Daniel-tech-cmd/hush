// components/GetStartedSection.js

"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="bg-blue-900 text-white py-16 px-4 sm:px-8 lg:px-24"
      style={{ background: "url('/footer-bg.jpg')" }}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Delighted Customers !!</h2>
          <p>
            Jetspeedcargo has helped a lot in increasing our delivery
            percentage. Great service & support !!
          </p>
          <p className="font-semibold">ANUP MEHTA</p>
          <div className="flex space-x-4 mt-4">
            <Image
              src="/20230404163435.jpeg"
              width={40}
              style={{ maxHeight: "40px" }}
              height={40}
              alt="Customer 1"
              className="rounded-full"
            />
            <Image
              src="/20230404163918.jpeg"
              style={{ maxHeight: "40px", maxWidth: "40px" }}
              width={50}
              height={40}
              alt="Customer 2"
              className="rounded-full"
            />
            <Image
              src="/20230404163929.jpeg"
              style={{ maxHeight: "40px", maxWidth: "40px" }}
              width={50}
              height={50}
              alt="Customer 3"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-blue-800 p-6 rounded-lg shadow-lg"
          style={{
            background: "#062F49",
          }}
        >
          <div className="flex flex-col items-center mb-4">
            <div className="bg-white p-4 rounded-full mb-4">
              <Image
                src="/money-icon.png"
                width={40}
                height={40}
                alt="Logo Icon"
              />
            </div>
            <h3 className="text-2xl font-semibold">Get Started</h3>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="How can we help you?"
              rows="4"
              className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#093A5A] hover:bg-blue-500 text-white font-bold py-3 rounded-lg"
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="space-y-1">
            <li>Amazon Self Ship</li>
            <li>NDR Management</li>
            <li>Damaged Shipment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Offering</h4>
          <ul className="space-y-1">
            <li>Plans & Pricing</li>
            <li>Rate Calculator</li>
            <li>Prepaid & COD</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Integration</h4>
          <ul className="space-y-1">
            <li>Carrier Integration</li>
            <li>Channel Integration</li>
            <li>WhatsApp Integration</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Important Links</h4>
          <ul className="space-y-1">
            <li>Career</li>
            <li>Support</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
