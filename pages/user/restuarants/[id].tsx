import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Restaurant {
  name: string;
  img_url: string;
}

const SingleRestaurant = () => {
  const [data, setData] = useState<Restaurant | null>(null);
  const params = useParams();
  const id = params?.id;

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
            <h1 className="font-bold text-left text-welcome">
              Papa John’s Pizza Restaurant
            </h1>
            <h2 className="text-admin-inputBorder text-left">
              19 Nizami Street, Sabail, Baku
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-4 mr-4">
              <h1 className="text-left text-admin-inputBorder font-bold ">
                Cuisine
              </h1>
              <h2 className="text-left text-admin-inputBorder ">
                Pizza, Drink, Hotdog, Sendvich, Roll
              </h2>
            </div>
            <div>
              <button className="mx-2 border border-user-navbarSignBg text-user-navbarSignBg p-2">
                $5 Delivery
              </button>
              <button className="mx-2 border border-user-navbarSignBg  bg-user-navbarSignBg text-admin-colorLogin p-2">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRestaurant;
