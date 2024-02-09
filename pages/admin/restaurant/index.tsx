import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/restaurantCard/index";
import PageHeader from "../../../components/pageHeader/index";
import style from "./restaurant.module.css";
// import { FileUploader } from "../../../components/FileUploader";
import Head from "next/head";
import InputAdd from "../../../components/inputAdd/index";
import BtnAdd from "../../../components/btnAdd/index";

const index = () => {
  const ref = useRef<any>(null);
  const refFastFood = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);

    const handleOutSideClickFastFood = (event: any) => {
      if (!refFastFood.current?.contains(event.target)) {
        setOpenFastFood(false);
      }
    };
    window.addEventListener("mousedown", handleOutSideClickFastFood);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
      window.removeEventListener("mousedown", handleOutSideClickFastFood);
    };
  }, [ref]);

  const [open, setOpen] = useState(false);
  const [openFastFood, setOpenFastFood] = useState(false);
  const openMenu = () => {
    setOpen((prev) => true);
  };
  const openMenuFastFood = () => {
    setOpenFastFood((prev) => true);
  };
  return (
    <>
      <Head>
        <title>Restaurant page</title>
      </Head>
      <PageHeader text="Restaurant">
        {/* <button className="bg-admin-signBtnColor p-2 rounded">Fast Food</button> */}
        <button
          onClick={openMenuFastFood}
          className={`bg-admin-openMenu2 p-2 w-48 rounded m-2`}
        >
          Fast Food
        </button>
        <div
          style={{ width: "190px", height: "150px" }}
          ref={refFastFood}
          className={`${style.modalFatFoodClass} ${
            openFastFood && style.openFatFoodClass
          } bg-admin-openMenu1 `}
        >
          <ul className="text-left">
            <li className=" bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Fast Food
            </li>
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Pizza
            </li>
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Steak
            </li>
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Coffee
            </li>
          </ul>
        </div>
        <button
          className={`bg-admin-signBtnColor p-2 rounded m-2`}
          onClick={openMenu}
        >
          Add Restaurant
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
                {/* <FileUploader  /> */}
              </div>
            </div>
            <div className="flex justify-between p-5 ">
              <h5 className="text-labelOpenMenu w-1/2 text-admin-colorEacampLogo2 text-left">
                Add your description and necessary information
              </h5>
              <div className="overflow-auto bg-admin-openMenu2 w-1/2 p-5 h-96 rounded text-right ">
                <InputAdd textName="Name" />
                <InputAdd textName="Cuisine" />
                <InputAdd textName="Delivery Price $" />
                <InputAdd textName="Delivery Minute" />
                <InputAdd textName="Address" />
                <InputAdd textName="Ad" />
                <InputAdd textName="Category" />
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
      <div className="flex flex-wrap gap-5 justify-start w-5/6 m-auto">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};

export default index;
