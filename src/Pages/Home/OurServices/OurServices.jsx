import React from "react";

import serviceIcon from '../../../assets/service.png'

const OurServices = () => {
  return (
    <div className="bg-secondary py-16 px-4 rounded-2xl mb-10">
      <div className="max-w-7xl mx-auto px-[120px] ">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center">
          Our Services
        </h2>
        <p className="text-gray-200 text-center max-w-2xl mx-auto mt-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Express & Standard Delivery
            </h3>
            <p className="text-sm text-gray-500">
              We deliver parcels within 24–72 hours in major cities. Express
              delivery available in Dhaka within 4–6 hours.
            </p>
          </div>

          {/* Card 2 — Highlighted */}
          <div className="bg-[#C8F062] p-8 rounded-2xl shadow text-center">
            <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Nationwide Delivery
            </h3>
            <p className="text-sm text-gray-700">
              We deliver parcels nationwide with home delivery in every
              district. Products reach customers within 48–72 hours.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Fulfillment Solution
            </h3>
            <p className="text-sm text-gray-500">
              Customized service with inventory management, packaging, online
              order processing and after-sales support.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Cash on Home Delivery
            </h3>
            <p className="text-sm text-gray-500">
              100% cash on delivery anywhere in Bangladesh with guaranteed
              safety.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
           <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Corporate Service / Contract In Logistics
            </h3>
            <p className="text-sm text-gray-500">
              Customized corporate logistics solutions with warehouse &
              inventory support.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <img
              src={serviceIcon}
              alt=""
              className="mx-auto mb-4 w-14"
            />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Parcel Return
            </h3>
            <p className="text-sm text-gray-500">
              Reverse logistics service helps customers return products to
              online merchants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
