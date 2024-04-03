import React from "react";
import { FileUploader } from "../FileUploader";

import CloseIcon from "@mui/icons-material/Close";
import style from "./style.module.css";
import InputEdit from "../inputEdit/index";
import Image from "next/image";
const Index = ({
  updateProducts,
  setForm,
  form,
  setEditForm,
  editForm,
  isActive,
  setIsActive,
}: any) => {

  const closeOfferEdit = () => {
    setIsActive(false);
  };
  console.log("formEditComp", form);


  return (
    <>
      <div
        className={`bg-admin-colorLogin m-auto my-4 w-3/4 border-4 border-admin-colorEacampLogo1 ${isActive ? style.actice : style.disNone
          }`}
      >
        <div className="p-3 flex justify-center items-center">
          <div
            onClick={closeOfferEdit}
            className=" rounded-iconsRadius p-2 border border-admin-colorEacampLogo1 hover:bg-admin-welcomeText"
          >
            <CloseIcon />
          </div>
        </div>
        <form onSubmit={updateProducts}>
          <div className="mt-4  flex justify-center items-center">
            <div className="w-48  p-2 rounded-regBtnRadius border border-admin-colorEacampLogo1">
              <img src={editForm?.img_url} className="w-full" alt="Product" />
            </div>
          </div>
          <div className="w-48  m-auto p-2 flex justify-center my-2 rounded-regBtnRadius border border-admin-colorEacampLogo1">
            <FileUploader setForm={setForm} setEditForm={setEditForm} />
          </div>
          <div>
            <div>
              <InputEdit
                textName="name"
                name="name"
                value={editForm?.name}
                setEditForm={setEditForm}
                editForm={editForm}
                placeholder="Title"
              />
            </div>
            <div>
              <InputEdit
                textName="description"
                name="description"
                value={editForm?.description}
                setEditForm={setEditForm}
                placeholder="description"
                editForm={editForm}
              />
            </div>
            <div>
              <InputEdit
                textName="price"
                name="price"
                value={editForm?.price}
                setEditForm={setEditForm}
                placeholder="price"
                editForm={editForm}
              />
            </div>
          </div>
          <div className="my-4">
            <button className="bg-user-registerBtn p-2 rounded-borderSlider">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
