import React from "react";
import FeaturesCardComp from "./featureCard";
const FeaturesComp = () => {
  return (
    <>
      <div className="mt-24 mb-8">
        <h1 className="font-bold text-welcome">Features</h1>
        <p className="w-2/5 m-auto mt-2 text-admin-inputBorder">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="w-3/4 m-auto grid grid-cols-3 gap-3  max-2xl:grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2  max-sm:grid-cols-1  ">
        <FeaturesCardComp
          title="Disctount Bpucher"
          description="Lorem ipsum is placeholder commonly used in the graphic"
          img="../images/userImg/features/img.svg"
        />
        <FeaturesCardComp
          title="Fresh healthy Food"
          description="Lorem ipsum is placeholder commonly used in the graphic"
          img="../images/userImg/features/img2.svg"
        />
        <FeaturesCardComp
          title="Fast Home Delivery"
          description="Lorem ipsum is placeholder commonly used in the graphic"
          img="../images/userImg/features/img3.svg"
        />
      </div>
    </>
  );
};

export default FeaturesComp;
