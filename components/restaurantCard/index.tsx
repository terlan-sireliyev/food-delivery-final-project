import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const index = ({ name, cuisine, img_url }: any) => {
  return (
    <>
      <div className=" max-sm:w-full  max-md:w-60 max-lg:w-60 flex justify-between items-center  my-4 ml-2 mr-2 border border-admin-inputBorder rounded w-48 bg-admin-TextCheck">
        <div className="w-24 h-12">
          <img
            src={img_url}
            alt="Have your error"
            className="object-contain h-full w-full rounded"
          />
        </div>
        <div className="">
          <h1 className="text-eacampLog text-left">{name}</h1>
          <p className="text-productSize text-left">{cuisine}</p>
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
