"use client";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    companyName: "",
    companyUrl: "",
    emailAddress: "",
    monthlyShipment: "",
    platform: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-gray-50" style={{ marginTop: "60px" }}>
      {/* Header Section */}
      <div className="bg-[url('/map-bg.jpg')] bg-cover bg-center h-80 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-white text-4xl font-bold mb-4">
            We're here to help you, every step of the way.
          </h1>
          <p className="text-white text-lg">
            Our service sets us apart from the rest. Experience the difference
            with our customer service. We listen, we care, we deliver.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-16 px-6 lg:px-12">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="text-gray-900 space-y-4">
            <div className="flex items-center mb-4">
              <FiMail className="text-blue-600 text-2xl" />
              <p className="ml-3">sales@shipease.in</p>
            </div>
            <div className="flex items-center mb-4">
              <FiPhone className="text-blue-600 text-2xl" />
              <p className="ml-3">+91 93992 62217</p>
            </div>
            <div className="flex items-center mb-4">
              <FiMapPin className="text-blue-600 text-2xl" />
              <p className="ml-3">
                Regd. Add: 476B 2nd & 3rd Floor, Sector 30 Block C, Gurugram,
                Haryana, 122001.
              </p>
            </div>
            <p>
              Gurgaon Office: Unit 321, Tower B1, M3M Cosmopolitan, Sector-66,
              Gurugram, Haryana, Pin-122001.
            </p>
            <p>Surat Office: Unit 129, Althan, Surat, Gujrat, Pin - 395017.</p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-gray-900 font-medium">You are a:</label>
                <div className="flex space-x-6 mt-2">
                  <label className="flex items-center text-gray-900">
                    <input
                      type="radio"
                      name="userType"
                      value="Brand"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Brand</span>
                  </label>
                  <label className="flex items-center text-gray-900">
                    <input
                      type="radio"
                      name="userType"
                      value="Customer"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Customer</span>
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="companyUrl"
                placeholder="Company URL"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="text"
                name="monthlyShipment"
                placeholder="Monthly Shipment"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                onChange={handleChange}
              />
              <div>
                <label className="text-gray-900 font-medium">
                  Your Ecommerce Platform:
                </label>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  {[
                    "Shopify",
                    "WooCommerce",
                    "Magento",
                    "Amazon",
                    "StoreHippo",
                    "Custom",
                  ].map((platform) => (
                    <label
                      key={platform}
                      className="flex items-center text-gray-900"
                    >
                      <input
                        type="radio"
                        name="platform"
                        value={platform}
                        onChange={handleChange}
                      />
                      <span className="ml-2">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-16 px-6 lg:px-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23512.305972414394!2d76.98790712089798!3d28.44539494038656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3fbb7c7b1b9d%3A0xb5bd6b57c5f529e4!2sSector%2030%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1630074921291!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full rounded-lg shadow-lg"
          title="ShipEase Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
