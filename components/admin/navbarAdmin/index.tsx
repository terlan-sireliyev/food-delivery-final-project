import React, { useEffect, useRef, useState } from "react";
import { FileUploader } from "../FileUploader";
import InputAdd from "../inputAdd/index";
import TextArea from "../textArea/index";
import style from "./nav.module.css";

const index = () => {
  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const [form, setForm] = useState({
    img_url: null,
    name: "",
    description: "",
    price: "",
    restuarant: ""
  });
  const addProducts = (e: any) => {
    e.preventDefault()
    console.log(form);
  };


  const ref = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const closeMenu = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    //******************* */
    const handleOutSideClick2 = (event: any) => {
      if (!ref2.current?.contains(event.target)) {
        setOpenLang(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick2);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick2);
    };
  }, [ref2]);


  const openMenu = () => {
    setOpen((prev) => true);
  };
  const openMenuLang = () => {
    setOpenLang((prev2) => true);
  };
  return (
    <div className=" ">
      <div className="flex p-2 justify-between items-center bg-admin-navbarBG rounded-b-lg">
        <div className="mt-2 ml-4">
          <img src="../images/logo.svg" alt="Have yor error" className="" />
        </div>
        <div className="flex">
          <div className="mx-2 flex items-center">
            {/* /add products */}
            <button
              onClick={openMenu}
              className="font-semibold text-admin-colorLogin bg-admin-signBtnColor focus:outline-none shadow appearance-none  rounded-full w-full py-2 px-3 text-gray-700 leading-tight"
            >
              Add product
            </button>
            {/* add product open menu */}
            <div
              style={{ width: "50vw", height: "100vh" }}
              ref={ref}
              className={`${style.modal} ${open && style.open
                } bg-admin-openMenu1 overflow-auto`}
            >
              <form action="#">
                <div className="flex justify-between p-5 ">
                  <div className="">
                    <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
                      Upload your img
                    </h5>
                    <div className="mt-4 w-32">
                      <img
                        src={form.img_url ? URL.createObjectURL(form.img_url) : ""}
                        className="w-full"
                      />
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
                    {<>
                      <InputAdd textName="Name" name="name" setForm={setForm} />
                      <TextArea textName="Description" name="description" setForm={setForm} />
                      <InputAdd textName="Price $" name="price" type="number" setForm={setForm} />
                      <InputAdd textName="Restuarants" name="restuarant" setForm={setForm} />
                    </>
                    }
                  </div>
                </div>
                <div className="bg-admin-TextCheck p-5 ">
                  <button
                    className="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
                    onClick={closeMenu}
                  >
                    Cancel
                  </button>
                  <button onClick={addProducts} className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mx-2">
            <img
              onClick={openMenuLang}
              src="../images/langEn.svg"
              alt="Have yor error"
              className=""
            />
            <div
              style={{ width: "85px", height: "150px" }}
              ref={ref2}
              className={`${style.modalLangClass} ${openLang && style.openLangClass
                } bg-admin-openMenu1 `}
            >
              <ul className="">
                <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
                  <img src="../images/abs.svg" alt="" className="m-auto" />
                </li>
                <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
                  <img src="../images/ru.svg" alt="" className="m-auto" />
                </li>
                <li className="bg-admin-colorLogin p-3 rounded-b-lg hover:bg-admin-inputBorder">
                  <img src="../images/az.svg" alt="" className="m-auto" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center text-admin-TextCheck mx-2">
            <img src="../images/avatar.svg" alt="Have yor error" className="" />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
