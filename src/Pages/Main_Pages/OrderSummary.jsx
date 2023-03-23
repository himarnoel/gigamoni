import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";

const OrderSummary = () => {
  return (
    <div>
      <NavBar class="fixed " />
      <div className="w-full pt-20">
        <p className="text-[#175873] text-3xl font-semibold  text-center">
          Order Summary
        </p>
        <p className="text-center font-semibold mt-7">
          You are all set , Kindly confirm your details before proceeding.{" "}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
