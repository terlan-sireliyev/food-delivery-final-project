import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const index = ({ id,name, cuisine, img_url }: any) => {
  return (
    <>
      <div className=" flex  my-4  border border-admin-inputBorder rounded  bg-admin-TextCheck">
        <div className="w-24 h-16 flex justify-center items-center p-3   rounded-full">
          <img
            src={img_url}
            alt="Have your error"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex items-start justify-center flex-col">
          <div className="text-restuarantCardNameSize line-clamp-1  text-admin-restuarantCardNameColor font-bold  text-left ">
            {name}
          </div>
          <div className=" line-clamp-1 text-productSize  text-admin-welcomeBackColor text-left">
            {cuisine.split(",")[0]}
          </div>
        </div>
        <div>
          <button className="mr-2 mt-0 px-3">
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="text-admin-inProductTrashBack"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
