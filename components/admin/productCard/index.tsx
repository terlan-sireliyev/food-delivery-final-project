import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import PageHeader from "../pageHeader/index";

const index = ({ id, img_url, name, price, restuarant }: any) => {
  const deletClick = () => {
    axios
      .delete(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        console.log("silindi");
      })
      .catch((err) => {
        alert("Silinmedi");
      });
  };
  return (
    <>
      <div className="group  transition duration-400 hover:bg-admin-hover border boder-sm bg-admin-TextCheck">
        <div className=" m-auto p-2 h-48 w-64">
          <img
            src={img_url}
            alt="Have yor error"
            className="w-full h-full m-auto object-contain  ."
          />
        </div>
        <div className="ml-2">
          <h3 className="group-hover:text-admin-colorLogin ">{name}</h3>
          <h2 className="group-hover:text-admin-colorLogin text-admin-inputBorder">
            {restuarant}
          </h2>
        </div>
        <div className="mx-2 my-2 flex justify-between">
          <p className="group-hover:text-admin-colorLogin text-admin-inProductproPrice  text-productSize mt-2">
            ${price} Azn
          </p>
          <button className="mr-2">
            <FontAwesomeIcon
              onClick={() => deletClick()}
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
