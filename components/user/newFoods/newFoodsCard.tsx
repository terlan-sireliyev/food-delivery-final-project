import React, { useEffect } from "react";
const NewFoodsCrad = ({ title, img, description }: any) => {
  return (
    <>
      <div className="border-2 border-admin-inputBorder ">
        <div className="p-5">
          <div className="h-48">
            <img src={img} alt="Have your error" className="w-full h-full" />
          </div>
          <h1 className="font-bold text-center">{title}</h1>
          <p className="line-clamp-2 text-center text-admin-inputBorder">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewFoodsCrad;
