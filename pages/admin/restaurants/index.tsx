import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/admin/restaurantCard/index";
import PageHeader from "../../../components/admin/pageHeader/index";
import style from "./restaurant.module.css";
import { FileUploader } from "../../../components/admin/FileUploader";
import Head from "next/head";
import InputAdd from "../../../components/admin/inputAdd/index";
import BtnAdd from "../../../components/admin/btnAdd/index";
import InPageName from "../../../components/admin/inPageName";
import axios from "axios";
import { v4 } from "uuid";

export default function index({ restuarantDatas }: any) {
  const {
    message,
    result: { data },
  } = restuarantDatas;
  const ref = useRef<any>(null);
  const refFastFood = useRef<any>(null);
  const [form, setForm] = useState({
    name: "",
    category_id: "",
    img_url: "",
    cuisine: "",
    address: "",
    delivery_min: "",
    delivery_price: "",
  });

  const addProduct = (e: any) => {
    e.preventDefault();
    // axios.get("http://localhost:3000/api/category").then((res) => {
    //   console.log(res.data);
    // });

    axios
      .post("http://localhost:3000/api/restuarants", {
        name: form.name,
        category_id: v4(),
        img_url: form.img_url,
        cuisine: form.cuisine,
        address: form.address,
        delivery_min: Number(form.delivery_min),
        delivery_price: Number(form.delivery_price),
      })
      .then((result) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <ul className={`${style.openMenuTarget},text-left`}>
            <li className=" cursor-pointer bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Fast Food
            </li>
            <li className=" cursor-pointer bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Pizza
            </li>
            <li className=" cursor-pointer bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              Steak
            </li>
            <li className=" cursor-pointer bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
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
                <InputAdd
                  type="number"
                  textName="Delivery Minute"
                  name="delivery_min"
                  setForm={setForm}
                />
                <InputAdd textName="Address" name="address" setForm={setForm} />
                <InputAdd
                  textName="Category"
                  name="category"
                  setForm={setForm}
                />
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
                onClick={addProduct}
                className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </PageHeader>
      <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 w-5/6 m-auto">
        {data.map((item: any) => (
          <RestaurantCard
            id={item.id}
            key={item.id}
            name={item.name}
            cuisine={item.cuisine}
            img_url={item.img_url}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/restuarants");
  return { props: { restuarantDatas: response.data } };
};
