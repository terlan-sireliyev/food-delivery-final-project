import Link from "next/link";
import React from "react";
const RestuarantCard = ({
  img_url,
  name,
  cuisine,
  delivery_price,
  delivery_min,
  id,
}: any) => {
  return (
    <>
      <Link href={`/user/restuarants/${id}`} className="hover:shadow-2xl ">
        <div className="border border-admin-inputBorder p-2 ">
          <div className="w-2/3 m-auto h-48 ">
            <img
              src={img_url}
              alt="Have your error"
              className="h-full w-full object-contain "
            />
          </div>
          <div className="text-left">
            <h1 className="font-bold ">{name}</h1>
            <p className="line-clamp-1 mt-2 text-admin-welcomeBackColor">
              {cuisine}
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">{delivery_price} Delivery</p>
            <button className="bg-user-registerBtn p-2 rounded-btnRaduis">
              {delivery_min} min
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RestuarantCard;
