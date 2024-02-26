import { Link } from "@mui/material";
import axios, { all } from "axios";
import { useParams } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useBasket } from "../../store";
interface Restaurant {
  name: string;
  img_url: string;
  address: string; //Single page
  delivery_price: string;
  cuisine: string;
}
//burda productu descruct edirik ve icini gotururuk
const SingleRestaurant = ({ allPro: { result } }: any) => {
  const [data, setData] = useState<Restaurant | null>(null);
  const params = useParams(); //burda  yolunu secirik
  const id = params?.id; //burda hemin yolun id - sini gotururuk

  const basket = useBasket((state: any) => state.basket);
  const updateBasket = useBasket((state: any) => state.updateBasket);
  const decrementBasket = useBasket((state: any) => state.decrementBasket);
  const totalPrice = basket.reduce(
    (prev: number, current: number) => prev + current.price * current.count,
    0
  );

  useEffect(() => {
    if (id) {
      //burda click etdikde hemin click olunan id-nin melumatlarini
      axios //gotururuk
        .get(`http://localhost:3000/api/restuarants/${id}`)
        .then((res) => setData(res.data.result.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  if (!data) {
    return <div>Loading...</div>;
  }
  //burda card-a daxil olanda o cardin diger melumatlarini getirir\

  const filteredProducts = result.data.filter(
    ({ rest_id }: { rest_id: string }) => rest_id === id
  );
  const addBasket = (id: any) => {
    const selectedItem = filteredProducts?.find((item: any) => item.id === id);
    updateBasket(selectedItem);
    console.log(selectedItem);
  };

  const countAdd = (id: any, action: string) => {
    if (action === "increment") {
      updateBasket({ id, action: "increment" });
    } else if (action === "decrement") {
      decrementBasket(id);
    }
  };
  return (
    <>
      <div>
        <div className="p-2">
          <img
            src={data?.img_url}
            alt={data?.name}
            className="w-full h-48 object-contain border border-admin-inputBorder my-4"
          />
        </div>
        <div className="flex justify-between items-center px-8">
          <div>
            <h1 className="font-bold text-left text-welcome">{data?.name}</h1>
            <h2 className="text-admin-inputBorder text-left">
              {data?.address}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-4 mr-4">
              <h1 className="text-left text-admin-inputBorder font-bold ">
                Cuisine
              </h1>
              <h2 className="text-left text-admin-inputBorder ">
                {data?.cuisine}
              </h2>
            </div>
            <div>
              <button className="mx-2 border border-user-navbarSignBg text-user-navbarSignBg p-2">
                {data?.delivery_price} Delivery
              </button>
              <Link href="/user/restuarants">
                <button className="mx-2 border border-user-navbarSignBg  bg-user-navbarSignBg text-admin-colorLogin p-2">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center gap-4">
        <div className="w-3/4 text-left bg-user-navbarBGColor py-4">
          <div>
            <h1 className="text-center  font-bold text-labelOpenMenu">
              Product
            </h1>
          </div>
          {/* map burdan baslayacaq */}
          {filteredProducts.map((item: any) => (
            <div className="ml-8 flex mt-4" key={item.id}>
              <div className="w-24 h-24">
                <img
                  src={item?.img_url}
                  className="w-full h-full rounded-iconsRadius"
                  alt=""
                />
              </div>
              <div className="ml-4 flex  w-full justify-between">
                <div>
                  <div className="font-bold text-labelOpenMenu">
                    {item.name}
                  </div>
                  <div className="mt-3">{item.description}</div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 h-12 w-12 border border-admin-colorEacampLogo1 rounded-btnRaduis flex items-center justify-center ">
                    ${item?.price}
                  </div>
                  <div
                    onClick={() => addBasket(item?.id)}
                    className="p-2 h-12 w-12 mr-2 rounded-btnRaduis flex items-center justify-center bg-admin-welcomeText"
                  >
                    <AddIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/4 h-96 relative  bg-user-navbarBGColor py-4 divide-y divide-admin-inputBorder ">
          <div>
            <h1 className="font-bold text-user-navbarSignBg text-left ml-4  ">
              {basket.length} Items
            </h1>
          </div>
          <div>
            {basket?.map((itemBasket: any, index: any) => {
              return (
                <div
                  key={index}
                  className="flex justify-between px-4 pt-4 mt-3"
                >
                  <div className="flex ">
                    <div>
                      <img src={itemBasket?.img_url} className="w-16" alt="" />
                    </div>
                    <div className="-mt-2 ml-4 text-left ">
                      <h1>{itemBasket.name}</h1>
                      <p>${itemBasket.price * itemBasket.count}</p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-admin-TextCheck p-2 rounded-regBtnRadius">
                    <button
                      onClick={() => countAdd(itemBasket.id, "increment")}
                    >
                      +
                    </button>
                    <button>{itemBasket.count}</button>
                    <button
                      onClick={() => countAdd(itemBasket.id, "decrement")}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0  w-5/6  ml-8 ">
            <button className="bg-user-navbarSignBg  mt-4 rounded-borderSlider p-3  w-full">
              <div className="flex justify-around items-center">
                <div className="text-admin-colorLogin font-bold">Checkout</div>
                <div className="bg-admin-colorLogin w-1/2 p-3 rounded-borderSlider">
                  {totalPrice}.00 $
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRestaurant;
export const getServerSideProps = async () => {
  let productGet = await axios.get("http://localhost:3000/api/products");
  return {
    //product-u getiririk
    props: { allPro: productGet.data },
  };
};
