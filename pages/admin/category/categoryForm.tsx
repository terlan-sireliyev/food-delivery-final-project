import style from "./category.module.css";
import { FileUploader } from "../../../components/admin/FileUploader/index";
import InputAdd from "../../../components/admin/inputAdd/index";

const categoryForm = ({
  ref,
  add,
  open,
  form,
  setForm,
  closeMenu,
  addCategory,
}: any) => {
  return (
    <form>
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
        <div className="bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
          <InputAdd textName="Name" name="name" setForm={setForm} />
          <InputAdd textName="Slug" name="slug" setForm={setForm} />
        </div>
      </div>
      <div className="bg-admin-TextCheck p-5 ">
        <button
          className="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
          onClick={closeMenu}
        >
          Cancel
        </button>
        <button
          onClick={addCategory}
          className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
        >
          {add}
        </button>
      </div>
    </form>
  );
};

export default categoryForm;
