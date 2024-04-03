import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/admin/restaurantCard/index";
import PageHeader from "../../../components/admin/pageHeader/index";
import style from "./restaurant.module.css";
import { FileUploader } from "../../../components/admin/FileUploader";
import Head from "next/head";
import InputAdd from "../../../components/admin/inputAdd/index";
import axios from "axios";
import { v4 } from "uuid";
import DropDownMenu from "../../../components/admin/DropdownMenu";
import PaginationOutlined from "../../../components/admin/materialUiPagination/index";
export default function index({ categoryDatas, restuarantDatas }: any) {
  const ref = useRef<any>(null);
  const refFastFood = useRef<any>(null);
  const {
    message,
    result: { data },
  } = categoryDatas;

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
    axios
      .post("http://localhost:3000/api/restuarants", form)
      .then((result) => {
        console.log("yuklendi", result);
      })
      .catch((err) => {
        console.log("error", err);
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

  const [restaurant, setRestaurant] = useState(restuarantDatas.result.data);

  return (
    <>
      <Head>
        <title>Restaurant page</title>
      </Head>
      <PageHeader text="Restaurant">
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
            {data.map((itemCate: any) => {
              return (
                <>
                  <li
                    key={itemCate.id}
                    className=" cursor-pointer bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                  >
                    {itemCate.name}
                  </li>
                </>
              );
            })}
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
          <form onSubmit={addProduct}>
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
                onClick={closeMenu}
              >
                Cancel
              </button>
              <button className="bg-admin-signBtnColor text-admin-TextCheck w-1/3 m-2 px-8 py-4 rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      </PageHeader>
      <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6 w-5/6  m-auto">
        {restaurant.map((item: any) => (
          <RestaurantCard
            setForm={setForm}
            id={item.id}
            key={item.id}
            name={item.name}
            cuisine={item.cuisine}
            img_url={item.img_url}
            category_id={item.category_id}
          />
        ))}
      </div>

      <div className="p-2 flex justify-center my-6 ">
        <PaginationOutlined
          commonDatas={restuarantDatas}
          paginationData={setRestaurant}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const [response, restuarant] = await Promise.all([
    await axios.get("http://localhost:3000/api/category"),
    await axios.get("http://localhost:3000/api/restuarants"),
  ]);
  return {
    props: {
      categoryDatas: response.data,
      restuarantDatas: restuarant.data,
    },
  };
}
