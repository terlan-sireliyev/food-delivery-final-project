import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <>
      <div className="max-sm:w-full  max-md:w-60 max-lg:w-60 flex justify-between items-center  my-4 ml-2 mr-2 border border-admin-inputBorder rounded w-48 bg-admin-TextCheck">
        <div>
          <img
            src="../images/restaurant.svg"
            alt="Have your error"
            className=" rounded"
          />
        </div>
        <div className="">
          <h1 className="text-eacampLog text-left">Papa John</h1>
          <p className="text-productSize text-left">Pizza</p>
        </div>
        <div>
          <button className="mr-2 mt-0">
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
