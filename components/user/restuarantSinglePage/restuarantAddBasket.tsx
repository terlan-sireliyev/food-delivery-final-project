import axios from "axios";
import { useEffect, useState } from "react";
import { useBasket } from "../../../pages/zustand/store";
import { useBasketFetch } from "../../../pages/zustand/storeFetchData";
// import img  from '../../../public/images/emptyBasket.svg'
interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  img_url: string;
  count: number;
  amount: number;
}

const RestuarantSingleBasket = ({
  basket,
  countAdd,
  totalPrice,
  deletOrder,
}: any) => {
  const [basketZustandData, setBasketZustandData] = useState<Item[]>([]);

  const {
    basketData,
    setBasketFetchData,
    incrementApiCount,
    decrementCountApi,
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
    //post
  };
  const decrementCount = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios.delete(
      "http://localhost:3000/api/basket/delete",
      {
        data: {
          product_id: item.id,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then((result) => {
      setBasketFetchData(result.data.items);
    })
    .catch((err) => {
      console.error("Error decrementing item count in basket:", err);
    });
  };
  return (
    <>
      <div className="w-1/4 bg-user-navbarBGColor py-2 divide-y divide-admin-inputBorder">
        <div>
          {token ? (
            <h1 className="font-bold text-user-navbarSignBg text-left ml-4 mb-2">
              {token ? basketZustandData?.length ?? 0 : ""} items
            </h1>
          ) : (
            ""
          )}
        </div>
        {token ? (
          <div className="overflow-y-auto h-[290px] mb-4">
            {basketZustandData?.map((itemBasket: any, index: any) => (
              <div key={index} className="flex justify-between px-4 pt-4 mt-3">
                {itemBasket && (
                  <div className="flex">
                    <div>
                      {itemBasket.img_url && (
                        <img src={itemBasket.img_url} className="w-16" alt="" />
                      )}
                      <p
                        onClick={() => deletOrder(itemBasket.id, "delete")}
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
              <button className="bg-user-navbarSignBg mt-4 rounded-borderSlider p-3 w-full hover:bg-user-bgCheckout">
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
          <div className="flex justify-center items-center flex-col">
            <div>
              <img src="/images/emptyBasket.svg" alt="adas" />
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
    </>
  );
};

export default RestuarantSingleBasket;
