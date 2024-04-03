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
        className={`bg-admin-colorLogin m-auto my-4 w-3/4 border-4 border-admin-colorEacampLogo1 ${
          isActive ? style.actice : style.disNone
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
            <div>
              <InputEdit
                textName="name"
                name="name"
                value={editForm.name}
                setForm={setForm}
                setEditForm={setEditForm}
                editForm={editForm}
                placeholder="Title"
              />
            </div>
            <div>
              <InputEdit
                textName="slug"
                name="slug"
                value={editForm.slug}
                setForm={setForm}
                setEditForm={setEditForm}
                placeholder="Slug"
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
