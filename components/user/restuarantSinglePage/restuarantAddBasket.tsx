import axios from "axios";
import { useEffect, useState } from "react";
import { useBasket } from "../../../pages/zustand/store";
import { useBasketFetch } from "../../../pages/zustand/storeFetchData";

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  img_url: string;
  count: number; // Add count property
}

const RestuarantSingleBasket = ({
  basket,
  countAdd,
  totalPrice,
  deletOrder,
}: any) => {
  const [basketZustandData, setBasketZustandData] = useState<Item[]>([]);
  const myBasket = useBasket((state: any) => state.basket);
  const decrementBasket = useBasket((state: any) => state.decrementBasket);
  const incirmentBasket = useBasket((state: any) => state.incirmentBasket);
  const { basketData, setBasketFetchData } = useBasketFetch();

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
    incirmentBasket(item.id);
  };

  const decrementCount = (item: any) => {
    decrementBasket(item.id);
  };

  return (
    <>
      <div className="w-1/4 bg-user-navbarBGColor py-2 divide-y divide-admin-inputBorder">
        <div>
          <h1 className="font-bold text-user-navbarSignBg text-left ml-4 mb-2">
            {/* {token ? basketZustandData?.length ?? 0 : 0} Items */}
          </h1>
        </div>

        <div className="overflow-y-auto h-60 mb-4">
          {
            basketZustandData?.map((itemBasket: any, index: any) => {
              return (
                <div key={index} className="flex justify-between px-4 pt-4 mt-3">
                  <div className="flex">
                    <div>
                      <img src={itemBasket?.img_url} className="w-16" alt="" />
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
                  <div className="flex flex-col bg-admin-TextCheck p-2 rounded-regBtnRadius">
                    <button onClick={() => incrementCount(itemBasket)}>+</button>
                    <button>{itemBasket.count > 0 && <div>{itemBasket.count}</div>}</button>
                    <button onClick={() => decrementCount(itemBasket)}>-</button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="bottom-0 w-5/6 ml-8">
          <button className="bg-user-navbarSignBg mt-4 rounded-borderSlider p-3 w-full hover:bg-user-bgCheckout">
            <div className="flex justify-around items-center">
              <div className="text-admin-colorLogin font-bold">Checkout</div>
              <div className="bg-admin-colorLogin w-1/2 p-3 rounded-borderSlider">
                {totalPrice}.00 $
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default RestuarantSingleBasket;
