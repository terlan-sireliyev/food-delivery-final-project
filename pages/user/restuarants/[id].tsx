import axios from "axios";
import React, { useEffect, useState } from "react";
import { useBasket } from "../../zustand/store";
import RestaurantSingleHeader from "../../../components/user/restuarantSinglePage/restuarantSingleHeader";
import RestuarantSingleProducts from "../../../components/user/restuarantSinglePage/restuarantSingleProducts";
import RestuarantSingleBasket from "../../../components/user/restuarantSinglePage/restuarantAddBasket";
import { useBasketFetch } from "../../zustand/storeFetchData";
import { useRouter } from "next/router";

interface Restaurant {
  name: string;
  img_url: string;
  address: string;
  delivery_price: string;
  cuisine: string;
  products: Product[];
}

interface Product {
  id: string;
  price: number;
  count: number;
}

const SingleRestaurant = () => {
  const [data, setData] = useState<Restaurant | null>(null);

  const router = useRouter(); // Use useRouter instead of useParams
  const idSingl = router.query.id as string;

  const { basket, updateBasket } = useBasket();
  const { basketData, setBasketFetchData } = useBasketFetch();

  useEffect(() => {
    if (idSingl) {
      axios
        .get(`http://localhost:3000/api/restuarants/${idSingl}`)
        .then((res) => setData(res.data.result.data))
        .catch((error) => {
          console.error("Error fetching restaurant data:", error);
          setData(null);
        });
    }
  }, [idSingl]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const addBasket = (id: string) => {
    // const selectedItem = data.products.find((item: Product) => item.id === id);
    updateBasket(id);
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      alert("siz login olmamisiniz");
    }
    axios
      .post(
        "http://localhost:3000/api/basket/add",
        { product_id: id },
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .then((result) => {
        setBasketFetchData(result.data.items);
      })
      .catch((err) => {
        console.error("Error adding item to basket:", err);
      });
  };

  // Calculate total price of items in basket
  const totalPrice = basket.reduce(
    (prev: number, current: Product) => prev + current.price * current.count,
    0
  );

  return (
    <>
      <div>
        <RestaurantSingleHeader dataSingle={data} />
      </div>
      <div className="mt-4 flex justify-between items-center gap-4">
        <div className="w-3/4 text-left bg-user-navbarBGColor py-4">
          <RestuarantSingleProducts
            filteredProducts={data.products}
            addBasket={addBasket}
          />
        </div>
        <RestuarantSingleBasket />
      </div>
    </>
  );
};

export default SingleRestaurant;
