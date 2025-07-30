"use client";

import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <section className="bg-gray-50 py-12">
        {/* Top Section with Background Image */}
        <div className="bg-[url('/map-bg.jpg')] bg-cover bg-center h-64 flex items-center justify-center relative">
          {/* Overlay Background for text clarity */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <h1 className="relative z-10 text-white text-4xl font-bold">
            About Us
          </h1>
        </div>

        {/* About Us Text Section */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Left Text Content */}
          <div>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Oma-airflight, we are committed to making global shipping
              simple, efficient, and accessible. Our mission is to bridge
              distances and connect businesses with their customers worldwide by
              offering a seamless, reliable cargo and waybill solution.
            </p>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              With a focus on transparency, speed, and innovation, Oma-airflight
              provides end-to-end logistics services tailored to meet the needs
              of both small businesses and large enterprises. Our platform
              offers real-time tracking, competitive rates, and multiple carrier
              options, ensuring that your cargo reaches its destination safely
              and on time.
            </p>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              We envision a world where businesses can expand beyond borders
              without the complexities of international logistics. By combining
              technology and personalized customer support, Oma-airflight is
              here to simplify the shipping experience and help businesses grow
              globally.
            </p>
          </div>

          {/* Right Image or Additional Content */}
          <div className="relative">
            <img
              src="/about-img.jpg"
              alt="Oma-airflight Logistics"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
