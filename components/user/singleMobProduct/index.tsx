import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import useBasketFetch from "../../../pages/zustand/storeFetchData";
import { useRouter } from "next/router";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  img_url: string;
  count: number;
  amount: number;
}
const index = () => {
  const [openNavMobil, setOpenNavMobil] = useState(false);
  const router = useRouter();
  const [basketZustandData, setBasketZustandData] = useState<Item[]>([]);
  const {
    basketData,
    setBasketFetchData,
    incrementApiCount,
    decrementCountApi,
    clearBasket,
  } = useBasketFetch();
  useEffect(() => {
    setBasketFetchData();
  }, []);

  useEffect(() => {
    setBasketZustandData(basketData);
  }, [basketData]);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    } else {
      setToken(null);
    }
  }, []);
  //здесь мы увеличиваем число
  const incrementCount = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:3000/api/basket/add",
        { product_id: item.id },
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .then((result) => {
        incrementApiCount(result.data.items.id);
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error adding item to basket:", err);
      });
  };
  //здесь мы уменьшаем  число
  const decrementCount = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/basket/delete", {
        data: { product_id: item.id },
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((result) => {
        decrementCountApi(result.data.items.id);
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error decrementing item count in basket:", err);
      });
  };
  //Удаляем товары из корзины
  const deleteOrder = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/basket/delete", {
        data: { product_id: item.id },
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((result) => {
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error decrementing item count in basket:", err);
      });
  };
  const openSingleMobilProduct = () => {
    setOpenNavMobil(true);
  };
  const closeSingleMobilProduct = () => {
    setOpenNavMobil(false);
  };
  // bg-gradient-to-r from-blue-500 to-transparent
  return (
    <div>
      <div className="bottom-0 w-5/6 ml-8">
        <button
          onClick={openSingleMobilProduct}
          className="bg-user-navbarSignBg mt-4 rounded-borderSlider p-3 w-full hover:bg-user-bgCheckout"
        >
          <div className="flex justify-between items-center">
            <div className="flex">
              {token ? (
                <h1 className="font-bold ignBg text-left ml-4 mb-2 flex items-center gap-2">
                  <ShoppingBasketIcon />
                  {token ? basketZustandData?.length ?? 0 : ""} items
                </h1>
              ) : (
                ""
              )}
            </div>
            <div id="clearAllButtonContainer ">
              <p className="mr-4 mt-[3px] cursor-pointer bg-admin-bgCheck text-user-bgCheckout  px-4 py-2 rounded-regBtnRadius flex items-center  mb-2">
                $
                {basketZustandData &&
                  basketZustandData.reduce(
                    (totalAmount, item) => totalAmount + item.amount,
                    0
                  )}
                .00
              </p>
            </div>
          </div>
        </button>
      </div>
      <div
        onClick={closeSingleMobilProduct}
        className={`${style.modalNavMobilCommoHiddenClass} ${
          openNavMobil && style.modalNavMobilCommonShowClass
        } bg-gradient-to-r from-blue-500 to-transparent fixed bottom-[0px] w-full h-dvh`}
      ></div>
      <div
        className={`${style.modalNavMobilClass} ${
          openNavMobil && style.openNavMobilClass
        }  `}
      >
        <div
          onClick={closeSingleMobilProduct}
          className="mt-2 p-2 font-bold text-admin-bgCheck1 flex items-center justify-center cursor-pointer "
        >
          <CloseIcon className="font-bold border rounded-btnRaduis" />
        </div>
        {token && basketData.length > 0 ? (
          <div className=" mb-4  max-lg:w-full max-lg:px-4 mt-6 ">
            {basketZustandData?.map((itemBasket: any, index: any) => (
              <div
                key={index}
                className="flex justify-between max-lg:justify-between max-lg:border-t-2 max-lg:border-admin-colorEacampLogo1   pt-4 mt-3"
              >
                {itemBasket && (
                  <div className="flex ">
                    <div>
                      {itemBasket.img_url && (
                        <img src={itemBasket.img_url} className="w-16" alt="" />
                      )}
                      <p
                        onClick={() => deleteOrder(itemBasket)}
                        className="text-productSize14 italic underline underline-offset-1 mt-4 cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <div className="-mt-2 ml-4 text-left">
                      <h1>{itemBasket.name}</h1>
                      <p>${itemBasket.price * itemBasket.count}</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col bg-admin-TextCheck p-2 rounded-regBtnRadius">
                  <button onClick={() => incrementCount(itemBasket)}>+</button>
                  <button>{itemBasket.count}</button>
                  <button onClick={() => decrementCount(itemBasket)}>-</button>
                </div>
              </div>
            ))}
            <div className="bottom-0 w-5/6 ml-8">
              <button
                onClick={openSingleMobilProduct}
                className="bg-user-navbarSignBg mt-4 rounded-borderSlider p-3 w-full hover:bg-user-bgCheckout"
              >
                <div className="flex justify-around items-center">
                  <div className="text-admin-colorLogin font-bold">
                    Checkout
                  </div>
                  <div className="bg-admin-colorLogin w-1/2 p-3 rounded-borderSlider">
                    {basketZustandData &&
                      basketZustandData.reduce(
                        (totalAmount, item) => totalAmount + item.amount,
                        0
                      )}
                    .00
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col  ">
            <div>
              <img src="/images/emptyBasket.svg" alt="#" />
            </div>
            <div>
              <p>
                Sebetiniz bosdur eyer sebete mehsul elave etmke isteyirsinizse o
                zaman qeydiyyatdan kecerek oz sehvenize daxil olun
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
