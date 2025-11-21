import React from "react";
import liveTracking from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'

const Supports = () => {
  return (
    <div class=" space-y-8 py-10  border-y-1 border-dashed border-secondary mb-8">
      <div class="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-sm">
        <img src={liveTracking} class="w-40 md:w-32 " />
        <div class="space-y-2 text-center md:text-left border-l-1 p-7 border-dashed border-secondary">
          <h2 class="text-2xl font-bold text-secondary">
            Live Parcel Tracking
          </h2>
          <p class="text-gray-600">
            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-sm">
        <img src={safeDelivery} class="w-40 md:w-32 " />
        <div class="space-y-2 text-center md:text-left border-l-1 p-7 border-dashed border-secondary">
          <h2 class="text-2xl font-bold text-secondary">
           100% Safe Delivery
          </h2>
          <p class="text-gray-600">
            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-8 shadow-sm">
        <img src={safeDelivery} class="w-40 md:w-32 " />
        <div class="space-y-2 text-center md:text-left border-l-1 p-7 border-dashed border-secondary">
          <h2 class="text-2xl font-bold text-secondary">
           24/7 Call Center Support
          </h2>
          <p class="text-gray-600">
           Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supports;
