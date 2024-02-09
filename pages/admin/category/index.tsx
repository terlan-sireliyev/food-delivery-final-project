import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/restaurantCard/index";
import PageHeader from "../../../components/pageHeader/index";
import style from "./category.module.css";
import { FileUploader } from "../../../components/FileUploader";
import Head from "next/head";
import InputAdd from "../../../components/inputAdd/index";
import BtnAdd from "../../../components/btnAdd/index";
const index = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen((prev) => true);
  };

  return (
    <>
      <Head>
        <title>Category page</title>
      </Head>
      <PageHeader text="Category">
        <button
          className={`bg-admin-signBtnColor p-2 rounded`}
          onClick={openMenu}
        >
          Add Category
        </button>
        <div
          style={{ width: "50vw", height: "100vh" }}
          ref={ref}
          className={`${style.modal} ${open && style.open} bg-admin-openMenu1 `}
        >
          <form action="#">
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu text-admin-colorEacampLogo2">
                Upload your img
              </h5>
              <div className="bg-admin-openMenu2 p-5 rounded w-1/2 ">
                <FileUploader />
              </div>
            </div>
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
                Add your description and necessary information
              </h5>
              <div className="bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
                <InputAdd textName="Name" />
                <InputAdd textName="Slug" />
              </div>
            </div>
            <div className="bg-admin-TextCheck p-5 ">
              <BtnAdd
                btnName="Cancel"
                open={open}
                setOpen={setOpen}
                clFeature="bg-admin-openMenu2 text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              />
              <BtnAdd
                btnName="Create"
                clFeature="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              />
            </div>
          </form>
        </div>
      </PageHeader>
      <div className="flex flex-wrap justify-between w-5/6 m-auto"></div>
    </>
  );
};

export default index;
