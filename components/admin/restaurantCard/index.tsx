import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const index = ({ id, name, cuisine, img_url, category_id }: any) => {
  const deletRestauarant = () => {
    axios
      .delete(`http://localhost:3000/api/restuarants/${id}`)
      .then((res) => {
        console.log("silindi");
        console.log(res);
      })
      .catch((err) => {
        alert("Silinmedi");
      });
  };
  return (
    <>
      <div className="group flex justify-between  w-full transition duration-400 hover:bg-admin-hover  mx-4 border border-admin-inputBorder rounded  bg-admin-TextCheck">
        <div className="w-[80px] h-[55px] flex justify-center  mr-2 items-center p-3">
          <img
            src={img_url}
            alt="Have your error"
            className="w-full h-full rounded-iconsRadius object-scale-down "
          />
        </div>
        <div className="  w-full flex items-start justify-center flex-col text-left">
          <div className=" group-hover:text-admin-colorLogin -mt-4 text-restuarantCardNameSize line-clamp-1  text-admin-restuarantCardNameColor font-bold  text-left ">
            {name}
          </div>
          <div className="group-hover:text-admin-colorLogin  line-clamp-1 text-productSize  text-admin-welcomeBackColor text-left">
            {cuisine.split(" ")[0]}
          </div>
        </div>
        {/* <div>{category_id}</div> */}
        <div>
          <button className="mr-2 mt-3 px-3">
            <FontAwesomeIcon
              onClick={deletRestauarant}
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
