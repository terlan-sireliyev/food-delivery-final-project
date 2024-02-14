import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const index = ({ id, name, cuisine, img_url }: any) => {
  return (
    <>
      <div className=" flex w-full delay-[100ms] hover:bg-admin-signBtnColor  justify-between  my-4  border border-admin-inputBorder rounded  bg-admin-TextCheck">
        <div className="w-32 h-20 flex justify-center items-center p-3   rounded-full">
          <img
            src={img_url}
            alt="Have your error"
            className="w-25 h-14 rounded-full"
          />
        </div>
        <div className=" w-full flex items-start justify-center flex-col text-left">
          <div className="-mt-4 text-restuarantCardNameSize line-clamp-1  text-admin-restuarantCardNameColor font-bold  text-left ">
            {name}
          </div>
          <div className=" line-clamp-1 text-productSize  text-admin-welcomeBackColor text-left">
            {cuisine.split(",")[0]}
          </div>
        </div>
        <div>
          <button className="mr-2 mt-3 px-3">
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
