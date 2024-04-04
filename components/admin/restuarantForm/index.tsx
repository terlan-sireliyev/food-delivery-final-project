import React from "react";
import InputAdd from "../../../components/admin/inputAdd/index";
import { FileUploader } from "../../../components/admin/FileUploader";
import DropDownMenu from "../../../components/admin/DropdownMenu";

const index = ({
  addRestuarant,
  form,
  setForm,
  data,
  closeRestuarantMenu,
}: any) => {
  return (
    <>
      <form onSubmit={addRestuarant}>
        <div className="flex justify-between p-5 ">
          <div>
            <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
              Upload your img
            </h5>
            <div className="mt-4 w-32">
              <img src={form.img_url} className="w-full" />
            </div>
          </div>
          <div className="bg-admin-openMenu2 p-5 rounded w-1/2 ">
            <FileUploader setForm={setForm} />
          </div>
        </div>
        <div className="flex justify-between p-5 ">
          <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
            Add your description and necessary information
          </h5>
          <div className="overflow-auto bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
            <InputAdd textName="Name" name="name" setForm={setForm} />
            <InputAdd textName="Cuisine" name="cuisine" setForm={setForm} />
            <InputAdd
              type="number"
              textName="Delivery Price $"
              name="delivery_price"
              setForm={setForm}
            />
            <InputAdd //input value component props send here
              type="number"
              textName="Delivery Minute"
              name="delivery_min"
              setForm={setForm}
            />
            <InputAdd textName="Address" name="address" setForm={setForm} />
            <DropDownMenu //dropdown component props send here
              textName="Category"
              categoryData={data}
              name="category"
              setForm={setForm}
            />
          </div>
        </div>
        <div className="bg-admin-TextCheck p-5 ">
          <button
            type="button"
            className="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
            onClick={closeRestuarantMenu}
          >
            Cancel
          </button>
          <button className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default index;
