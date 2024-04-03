import React, { useEffect, useState } from "react";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import Link from "next/link";
import { useBasketFetch } from "../../../zustand/storeFetchData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import axios from "axios";
import { useRouter } from "next/router";

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
  const [basketZustandData, setBasketZustandData] = useState<Item[]>([]);
  const router = useRouter();
  const {
    basketDataAll,
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
  const addCheckOutInYourbasket = () => {
    router.push("/user/userPages/checkout");
  };

  const incrementCount = (item: any) => {
    incrementApiCount(item.id);
    const access_token = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:3000/api/basket/add",
        {
          product_id: item.id,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((result) => {
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error adding item to basket:", err);
      });
  };

  const decrementCount = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/basket/delete", {
        data: {
          product_id: item.id,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((result) => {
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error decrementing item count in basket:", err);
      });
  };

  const deleteOrder = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/basket/delete", {
        data: {
          product_id: item.id,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((result) => {
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error decrementing item count in basket:", err);
      });
  };

  const clearAllData = () => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/basket/clear", {
        headers: { Authorization: `Bearer ${access_token}` },
        data: { basket_id: basketDataAll.id },
      })
      .then(() => {
        clearBasket();
      })
      .catch((err) => {
        console.error("Error clearing basket:", err);
      });
  };

  return (
    <>
      <UserProfileLayout>
        <div className="w-full bg-user-navbarBGColor py-2 divide-y divide-admin-inputBorder">
          <div className="flex justify-between">
            <div>
              {token ? (
                <h1 className="font-bold text-user-navbarSignBg text-left ml-4 mb-2 flex items-center gap-2">
                  <ShoppingBasketIcon />
                  {token ? basketZustandData?.length ?? 0 : ""} items
                </h1>
              ) : (
                ""
              )}
            </div>
            <div id="clearAllButtonContainer">
              <p
                onClick={clearAllData}
                className="mr-4 cursor-pointer bg-user-navbarSignBg hover:bg-user-bgCheckout px-4 py-2 rounded-borderSlider text-admin-colorLogin flex items-center  mb-2"
              >
                <DeleteOutlineIcon /> clear all
              </p>
            </div>
          </div>
          {token ? (
            <div className=" mb-4">
              {basketZustandData?.map((itemBasket: any, index: any) => (
                <div
                  key={index}
                  className="flex justify-between px-4 pt-4 mt-3"
                >
                  {itemBasket && (
                    <div className="flex">
                      <div>
                        {itemBasket.img_url && (
                          <img
                            src={itemBasket.img_url}
                            className="w-16"
                            alt=""
                          />
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
                    <button onClick={() => incrementCount(itemBasket)}>
                      +
                    </button>
                    <button>{itemBasket.count}</button>
                    <button onClick={() => decrementCount(itemBasket)}>
                      -
                    </button>
                  </div>
                </div>
              ))}
              <div className="bottom-0 ">
                <button className="bg-user-navbarSignBg mt-4 rounded-borderSlider  w-full hover:bg-user-bgCheckout">
                  <div className="flex justify-between items-center ml-6">
                    <div
                      onClick={addCheckOutInYourbasket}
                      className="text-admin-colorLogin font-bold"
                    >
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
            <div className="flex justify-center items-center flex-col">
              <div>
                <img src="/images/emptyBasket.svg" alt="adas" />
              </div>
              <div>
                <p>
                  Sebetiniz bosdur eyer sebete mehsul elave etmke isteyirsinizse
                  o zaman qeydiyyatdan kecerek oz sehvenize daxil olun
                </p>
              </div>
            </div>
          )}
        </div>
      </UserProfileLayout>
    </>
  );
};

export default index;
