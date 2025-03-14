import React, { useState } from "react";

function CouponClaim() {
  const [message, setMessage] = useState("");

  const claimCoupon = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/coupons/claim", {
        method: "POST",
      });
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("Error claiming coupon.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg lg:max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
          Claim Your Coupon
        </h2>
        <button
          onClick={claimCoupon}
          className="w-full py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Claim Coupon
        </button>
        {message && (
          <p className="mt-6 text-lg text-gray-800 text-center">{message}</p>
        )}
      </div>
    </div>
  );
}

export default CouponClaim;
