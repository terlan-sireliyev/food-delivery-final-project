import React from "react";
const RestuarantCard = () => {
  return (
    <>
      <div className="border border-admin-inputBorder p-2 ">
        <div className="w-2/3 m-auto">
          <img
            src="../../images/restauarant/KFC.png"
            alt="Have your error"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-left">
          <h1 className="font-bold ">Burger king</h1>
          <p className="line-clamp-1 mt-2 text-admin-welcomeBackColor">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">$5 Delivery</p>
          <button className="bg-user-registerBtn p-2 rounded-btnRaduis">
            11 Min
          </button>
        </div>
      </div>
    </>
  );
};

export default RestuarantCard;
