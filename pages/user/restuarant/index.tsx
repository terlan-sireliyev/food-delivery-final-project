import React, { useState, useEffect } from "react";
import RestuarantCard from "../../../components/user/restuarant/restuarantCard";
import RestuarantNavbar from "../../../components/user/restuarant/restuarantNavbar";
import axios from "axios";

const Index = ({ AllCategory }: any) => {
  const {
    message,
    result: { data },
  } = AllCategory;

  const [restuarantCard, setRestuarantCard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restuarants")
      .then((res) => {
        setRestuarantCard(res.data.result.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [restuarantCard]);

  return (
    <>
      <div className="flex mt-4">
        <div className="w-1/6  bg-user-navbarBGColor ">
          {data.map((itemCategory: any) => (
            <RestuarantNavbar
              key={itemCategory.slug}
              name={itemCategory.name}
              img_url={itemCategory.img_url}
              slug={itemCategory.slug}
            />
          ))}
        </div>
        <div className="w-5/6 ps-4 grid grid-cols-4 gap-4">
          {restuarantCard.map((itemRestuarant: any) => (
            <RestuarantCard
              key={itemRestuarant.id}
              name={itemRestuarant.name}
              img_url={itemRestuarant.img_url}
              cuisine={itemRestuarant.cuisine}
              delivery_price={itemRestuarant.delivery_price}
              delivery_min={itemRestuarant.delivery_min}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    const dataCategory = response.data;
    return { props: { AllCategory: dataCategory } };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { props: { AllCategory: {} } };
  }
};
