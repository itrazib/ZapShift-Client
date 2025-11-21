import React from "react";
import icon from '../../../assets/bookingIcon.png'

const Works = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How it Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="text-teal-700 text-4xl mb-4">
            <img src={icon} alt="" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            Booking Pick & Drop
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="text-teal-700 text-4xl mb-4">
             <img src={icon} alt="" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Cash On Delivery</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="text-teal-700 text-4xl mb-4">
            <img src={icon} alt="" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Delivery Hub</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
          <div className="text-teal-700 text-4xl mb-4">
            <img src={icon} alt="" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            Booking SME & Corporate
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
