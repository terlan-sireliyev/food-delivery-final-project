import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter instead of useParams
import React, { useEffect, useState } from "react";
import { useBasket } from "../../store";
import RestaurantSingleHeader from "../../../components/user/restuarantSinglePage/restuarantSingleHeader";
import RestuarantSingleProducts from "../../../components/user/restuarantSinglePage/restuarantSingleProducts";
import RestuarantSingleBasket from "../../../components/user/restuarantSinglePage/restuarantAddBasket";
import { useParams } from "next/navigation";

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

const SingleRestaurant = ({ AllBasket }: { AllBasket: any }) => {
  const [data, setData] = useState<Restaurant | null>(null);
  // const router = useRouter();
  const params = useParams();
  const idSingl = params?.id

  const basket = useBasket((state: any) => state.basket);
  const updateBasket = useBasket((state: any) => state.updateBasket);
  const decrementBasket = useBasket((state: any) => state.decrementBasket);
  const incirmentBasket = useBasket((state: any) => state.incirmentBasket);
  const deleteOrder = useBasket((state: any) => state.deleteOrder);

  useEffect(() => {
    if (idSingl) {
      axios
        .get(`http://localhost:3000/api/restuarants/${idSingl}`)
        .then((res) => setData(res.data.result.data))
        .catch((error) => console.error(error));
    }
  }, [idSingl]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const addBasket = (id: any) => {
    const selectedItem = data.products.find((item: Product) => item.id === id);
    updateBasket(selectedItem);
    const access_token = localStorage.getItem("access_token");
    
    axios
      .post("http://localhost:3000/api/basket/add", {
        product_id: idSingl
      }, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then((result) => {
        console.log("Loaded", result);
      })
      .catch((err) => {
        console.log("Error", err);
      })

  };

  const countAdd = (id: any, action: string) => {
    if (action === "increment") {
      incirmentBasket(id);
    } else if (action === "decrement") {
      decrementBasket(id);
    }
  };

  const deletOrder = (id: any, action: string) => {
    if (action === "delete") {
      deleteOrder(id);
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
            filteredProducts={data.products}
            addBasket={addBasket}
          />
        </div>
        <RestuarantSingleBasket
          basket={basket}
          countAdd={countAdd}
          totalPrice={totalPrice}
          deletOrder={deletOrder}
          AllBasket={AllBasket}
        />
      </div>
    </>
  );
};

export default SingleRestaurant;


export const getServerSideProps = async () => {
  try {
    const responseBasket = await axios.get("http://localhost:3000/api/basket");
    return { props: { AllBasket: responseBasket?.data } };
  } catch (error) {
    console.error("Error fetching category:", error);
    return { props: { AllBasket: {} } };
  }
};
