import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import EditRestuarant from '../editRestuarant/index'
import EditIcon from "@mui/icons-material/Edit";

const index = ({ id, name, cuisine, img_url, setForm }: any) => {
  
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

  const [isActive, setIsActive] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    category_id: "",
    img_url: "",
    cuisine: "",
    address: "",
    delivery_min: 0,
    delivery_price: 0
  });

  const handleEdit = async (itemId: any) => {
    setIsActive(!isActive);

    try {
      const response = await axios.get(`http://localhost:3000/api/restuarants/${itemId}`);
      const { data } = response.data.result;
      const { name, category_id, img_url, cuisine, address, delivery_min, delivery_price } = data;

      setEditForm({
        id: itemId,
        name,
        category_id,
        img_url,
        cuisine,
        address,
        delivery_min,
        delivery_price
      });
    } catch (error) {
      console.error("Error fetching restaurant:", error);
    }
  };

  const updateBtn = async (e: any) => {
    e.preventDefault();
    setIsActive(false);

    try {
      const { id, ...rest } = editForm;
      const response = await axios.put(`http://localhost:3000/api/restuarants/${id}`, rest);
      console.log(response.data.data);
      // Optionally, update the form state if necessary
      setForm(response.data.data);
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
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
        <div>
          <button onClick={() => handleEdit(id)}>
            <EditIcon />
          </button>
          <button className="mr-2 mt-3 px-3">
            <FontAwesomeIcon
              onClick={deletRestauarant}
              icon={faTrashAlt}
              className="text-admin-inProductTrashBack"
            />
          </button>
        </div>
        <div className="flex flex-wrap  absolute top-[0px] left-[10%] z-20 justify-between w-5/6 m-auto mt-4">
          <EditRestuarant
            updateBtn={updateBtn}
            setForm={setForm}
            editForm={editForm}
            setEditForm={setEditForm}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </div>
    </>
  );
};

export default index;
