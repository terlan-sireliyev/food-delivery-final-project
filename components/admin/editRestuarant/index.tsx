import React from "react";
import { FileUploader } from "../FileUploader";
import CloseIcon from "@mui/icons-material/Close";
import style from "./style.module.css";
import InputEdit from "../inputEdit/index";
import TxtArea from "../inputEdit/textArea";
const Index = ({
  updateBtn,
  setForm,
  setEditForm,
  editForm,
  handleChange,
  isActive,
  setIsActive,
}: any) => {
  const closeOfferEdit = () => {
    setIsActive(false);
  };

  return (
    <>
      <div
        className={`bg-admin-colorLogin m-auto my-4 w-3/4 ${
          isActive ? style.active : style.disNone
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
        <form onSubmit={updateBtn}>
          <div className="mt-4  flex justify-center items-center">
            <div className="w-48  p-2 rounded-regBtnRadius border border-admin-colorEacampLogo1">
              <img src={editForm.img_url} className="w-full" alt="Image" />
            </div>
          </div>
          <div className="w-48  m-auto p-2 flex justify-center my-2 rounded-regBtnRadius border border-admin-colorEacampLogo1">
            <FileUploader setForm={setForm} setEditForm={setEditForm} />
          </div>
          <div>
            <InputEdit
              textName="Name"
              name="name"
              value={editForm.name}
              setForm={setForm}
              setEditForm={setEditForm}
              editForm={editForm}
              placeholder={"name"}
            />
          </div>
          <div>
            <InputEdit
              textName="cuisine"
              name="cuisine"
              value={editForm.cuisine}
              setForm={setForm}
              setEditForm={setEditForm}
              editForm={editForm}
              placeholder={"cuisine"}
            />
          </div>
          <div>
            <InputEdit
              textName="address"
              name="address"
              value={editForm.address}
              setForm={setForm}
              setEditForm={setEditForm}
              editForm={editForm}
              placeholder={"address"}
            />
          </div>
          <div>
            <InputEdit
              textName="delivery_min"
              name="delivery_min"
              value={editForm.delivery_min}
              setForm={setForm}
              setEditForm={setEditForm}
              editForm={editForm}
              placeholder={"delivery_min"}
            />
          </div>
          <div>
            <InputEdit
              textName="delivery_price"
              name="delivery_price"
              value={editForm.delivery_price}
              setForm={setForm}
              setEditForm={setEditForm}
              editForm={editForm}
              placeholder={"delivery_price"}
            />
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
