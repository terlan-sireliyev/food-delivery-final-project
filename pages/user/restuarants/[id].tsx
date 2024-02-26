import axios, { all } from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useBasket } from "../../store";
import RestaurantSingleHeader from "../../../components/user/restuarantSinglePage/restuarantSingleHeader";
import RestuarantSingleProducts from "../../../components/user/restuarantSinglePage/restuarantSingleProducts";
import RestuarantSingleBasket from "../../../components/user/restuarantSinglePage/restuarantAddBasket";
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
  const params = useParams(); //single sehvesine giris burda  yolunu secirik
  const id = params?.id; //burda hemin yolun id - sini gotururuk

  const basket = useBasket((state: any) => state.basket);
  const updateBasket = useBasket((state: any) => state.updateBasket);
  const decrementBasket = useBasket((state: any) => state.decrementBasket);
  const incirmentBasket = useBasket((state: any) => state.incirmentBasket);
  const totalPrice = basket.reduce(
    (prev: number, current: number) => prev + current.price * current.count,
    0
  );

  useEffect(() => {
    if (id) {
      //burda click etdikde hemin click olunan id-nin melumatlarini gotururuk
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
    //biz burda  restuarant single sehvesine girende  restuarant ile product-u bir biri ile elaqelendiririk yani filter edirik
    ({ rest_id }: { rest_id: string }) => rest_id === id
  );
  const addBasket = (id: any) => {
    //birda ise baskete add etdikde yuxaridaki elaqelendirdiyimiz filteredProducts - in icinden find ile her pro-ta click etdikde pro-lari basket-e atmasini yaziriq
    const selectedItem = filteredProducts?.find((item: any) => item.id === id);
    updateBasket(selectedItem);
  };

  const countAdd = (id: any, action: string) => {
    //burda ise basketde olan pro-larin sayini mueyyen edirik.
    if (action === "increment") {
      incirmentBasket(id);
    } else if (action === "decrement") {
      decrementBasket(id);
    }
  };
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
