import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import PageHeader from "../pageHeader/index";

const index = ({ name, price, img_url }: any) => {
  return (
    <>
      <div className="max-sm:w-full  max-md:w-60 max-lg:w-60 border boder-sm bg-admin-TextCheck">
        <div className=" m-auto h-24 w-24 ">
          <img
            src={img_url}
            alt="Have yor error"
            className="w-full h-full m-auto object-contain h-24 w-full ."
          />
        </div>
        <div className="ml-2">
          <h3>{name}</h3>
          <h2 className="text-admin-inputBorder">Restoruant name</h2>
        </div>
        <div className="mx-2 my-2 flex justify-between">
          <p className="text-admin-inProductproPrice  text-productSize mt-2">
            ${price}Azn
          </p>
          <button className="mr-2">
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
