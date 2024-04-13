import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "../../../components/admin/restaurantCard/index";
import PageHeader from "../../../components/admin/pageHeader/index";
import style from "./restaurant.module.css";
import Head from "next/head";
import axios from "axios";
import PaginationOutlined from "../../../components/admin/materialUiPagination/index";
import RestuarantForm from "../../../components/admin/restuarantForm/index";
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

  const addRestuarant = (e: any) => {
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
  const closeRestuarantMenu = () => {
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
  const openRestuarantMenu = () => {
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
          onClick={openRestuarantMenu}
        >
          Add Restaurant
        </button>

        <div
          style={{ width: "50vw", height: "100vh" }}
          ref={ref}
          className={`${style.modal} ${open && style.open} bg-admin-openMenu1 `}
        >
          <RestuarantForm
            addRestuarant={addRestuarant}
            form={form}
            setForm={setForm}
            closeMenu={closeRestuarantMenu}
            data={data}
          />
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
