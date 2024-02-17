import React from "react";
const index = () => {
    return (
        <>
            <div className="mt-8 mb-48"> 
            <div className="w-3/5  max-lg:w-full  max-lg:justify-center  m-auto ">
                <h1 className="  font-bold text-size50 text-center ">How It Works</h1>
                <p className="w-5/6  max-lg:w-full mt-2 text-admin-inputBorder text-center" >Delivery May Be Extended During Sale Periods. Please Refer To The Checkout Page For An Updated Estimate For Your Location. Kindly Note That Once You Have Placed An Order, It Is No Longer Possible To Modify Your Order. Taxes And Duties Are Included In All Product Prices.It Is Possible To Place An Order With Shipment To A Different Address Than Your Home Or Billing Address When Paying With A Credit Card. Please Note That Klarna Payments Require That Your Order Is Shipped To Your Registered Home Address.</p>
            </div>
            <div className="w-3/5 mt-8  m-auto relative">

            <img
                  src="/images/userImg/menus/work1.svg"
                   alt="Have your error"
                  className="h-full  "
                  />
       <img
                  src="/images/userImg/menus/work2.svg"
                   alt="Have your error"
                  className="h-full absolute top-0  w-full"
                    />
            </div>
          
      </div>   
    </> 
  ); 
};

export default index;
// bg-admin-inputBorder