"use client";
import Image from "next/image";
import CountUp from "react-countup";

function DeliveryStats() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 space-y-8 md:space-y-0">
        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center md:justify-start img"
          style={{ padding: "20px" }}
        >
          <div
            className="relative w-full h-80 md:h-[500px] lg:h-[600px]"
            style={{ padding: "0 10px 0 0", width: "100%" }}
          >
            <Image
              src="/about-img.jpg" // Image source as specified
              alt="Delivery Person"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left px-4 md:px-0">
          <h2 className="text-2xl font-bold text-black">
            A Trusted Growth Partner
          </h2>
          <p className="text-black text-sm md:text-base">
            Faster Delivery & Reduced Costs. Did you know nearly 40% of
            customers are more likely to shop online if they get same-day or
            next-day delivery?
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 text-sm md:text-base">
            <div className="text-center">
              <span className="text-3xl font-bold text-indigo-600">
                <CountUp end={150} duration={2} />+
              </span>
              <p className="text-black">Expert Advisors</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-indigo-600">
                <CountUp end={28000} duration={2.5} />+
              </span>
              <p className="text-black">Pincode Covered</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-indigo-600">
                <CountUp end={12000} duration={2} />+
              </span>
              <p className="text-black">Daily Shipments</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-indigo-600">
                <CountUp end={2500} duration={1.5} />+
              </span>
              <p className="text-black">Delighted Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryStats;
