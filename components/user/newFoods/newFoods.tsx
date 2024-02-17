import React from "react";
import NewFoodsCrad from "./newFoodsCard";
const NewFoods = () => {
  return (
    <>
      <div className="mt-24 mb-8">
        <h1 className="w-1/4 max-lg:w-full m-auto font-bold text-welcome">
          Our Popular Update New Foods
        </h1>
        <p className="w-2/5 max-lg:w-full m-auto mt-2 text-admin-inputBorder">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div
        className=" mb-10
      w-3/4 m-auto grid grid-cols-3 gap-3  
      max-2xl:grid-cols-3 max-xl:grid-cols-3
      max-lg:grid-cols-2 max-md:grid-cols-2 
      max-sm:grid-cols-1  "
      >
        <div>
          <NewFoodsCrad
            title="Disctount Bpucher"
            description="Lorem ipsum is placeholder commonly used in the graphic"
            img="../images/userImg/newFoods/Rectangle1.svg"
          />
        </div>
        <div>
          <NewFoodsCrad
            title="Fresh healthy Food"
            description="Lorem ipsum is placeholder commonly used in the graphic"
            img="../images/userImg/newFoods/Rectangle2.svg"
          />
        </div>
        <div>
          <NewFoodsCrad
            title="Fast Home Delivery"
            description="Lorem ipsum is placeholder commonly used in the graphic"
            img="../images/userImg/newFoods/Rectangle3.svg"
          />
        </div>
      </div>
    </>
  );
};

export default NewFoods;
