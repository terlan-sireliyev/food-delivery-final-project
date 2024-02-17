import React from "react";
const index = () => {
  return (
    <>
      <div className="flex m-auto w-3/4  max-lg:flex-col h-dvh max-lg:justify-center items-center ">
        <div className="w-1/2 max-lg:w-full ">
          <h1 className="font-bold text-size50 text-left">About Us</h1>
          <p className="w-5/6 mt-2 text-admin-inputBorder text-left">
            Delivery May Be Extended During Sale Periods. Please Refer To The
            Checkout Page For An Updated Estimate For Your Location. Kindly Note
            That Once You Have Placed An Order, It Is No Longer Possible To
            Modify Your Order. Taxes And Duties Are Included In All Product
            Prices.It Is Possible To Place An Order With Shipment To A Different
            Address Than Your Home Or Billing Address When Paying With A Credit
            Card. Please Note That Klarna Payments Require That Your Order Is
            Shipped To Your Registered Home Address.
          </p>
        </div>
        <div className="w-1/2">
          <div className=" m-auto">
            <div className="relative  w-[400px] m-auto  max-lg:w-full">
              <img
                src="/images/userImg/menus/g5.svg"
                alt="Have your error"
                className="h-full mr-4  w-full object-cover relative"
              />
              <img
                src="/images/userImg/menus/g3.svg"
                alt="Have your error"
                className="h-full mr-4 object-contain absolute top-[-180px] left-[100px] w-1/2"
              />

              <img
                src="/images/userImg/menus/g4.svg"
                alt="Have your error"
                className="h-full mr-4 object-contain absolute top-[-10px] left-[-50px] w-1/2"
              />
              <img
                src="/images/userImg/menus/g6.svg"
                alt="Have your error"
                className="h-full mr-4 object-contain absolute top-[-10px] right-[-50px] w-1/2"
              />
              <img
                src="/images/userImg/menus/g6.svg"
                alt="Have your error"
                className="h-full mr-4 object-contain absolute bottom-[-180px] right-[150px] w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
