import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useBasket } from "../../store";
import RestaurantSingleHeader from "../../../components/user/restuarantSinglePage/restuarantSingleHeader";
import RestuarantSingleProducts from "../../../components/user/restuarantSinglePage/restuarantSingleProducts";
import RestuarantSingleBasket from "../../../components/user/restuarantSinglePage/restuarantAddBasket";

interface Restaurant {
  name: string;
  img_url: string;
  address: string;
  delivery_price: string;
  cuisine: string;
}

interface Product {
  id: string;
  price: number;
  count: number;
}

const SingleRestaurant = ({ allPro: { result } }: any) => {
  const [data, setData] = useState<Restaurant | null>(null);
  const params = useParams();
  const id = params?.id;

  const basket = useBasket((state: any) => state.basket);
  const updateBasket = useBasket((state: any) => state.updateBasket);
  const decrementBasket = useBasket((state: any) => state.decrementBasket);
  const incirmentBasket = useBasket((state: any) => state.incirmentBasket);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/restuarants/${id}`)
        .then((res) => setData(res.data.result.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredProducts = result.data.filter(
    ({ rest_id }: { rest_id: string }) => rest_id === id
  );

  const addBasket = (id: any) => {
    const selectedItem = filteredProducts.find(
      (item: Product) => item.id === id
    );
    updateBasket(selectedItem);
  };

  const countAdd = (id: any, action: string) => {
    if (action === "increment") {
      incirmentBasket(id);
    } else if (action === "decrement") {
      decrementBasket(id);
    }
  };

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
            filteredProducts={filteredProducts}
            addBasket={addBasket}
          />
        </div>
        <RestuarantSingleBasket
          basket={basket}
          countAdd={countAdd}
          totalPrice={totalPrice}
        />
      </div>
    </>
  );
};

export default SingleRestaurant;

export const getServerSideProps = async () => {
  let productGet = await axios.get("http://localhost:3000/api/products");
  return {
    props: { allPro: productGet.data },
  };
};
