import React, { useState, useEffect } from "react";
import RestuarantCard from "../../../components/user/restuarant/restuarantCard";
import RestuarantNavbar from "../../../components/user/restuarant/restuarantNavbar";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Index = ({ AllCategory }: any) => {
  const {
    message,
    result: { data },
  } = AllCategory;

  const [restuarantCard, setRestuarantCard] = useState([]);
  const { query } = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restuarants")
      .then(({ data: { result } }) => {
        if (query.category) {
          const filteredData = result.data.filter(
            ({ category_id }: any) => category_id === query.category
          );
          setRestuarantCard(filteredData);
        } else {
          setRestuarantCard(result.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [query]);

  return (
    <>
      <div className="flex mt-4 max-am:flex-col">
        <div className="w-1/6 max-lg:w-1/3   bg-user-navbarBGColor ">
          <nav className="list-none mt-4 w-1/2 m-auto text-left">
            <li className="bg-user-LinkColor text-user-navbarSignBg font-bold px-4 py-2 rounded-regBtnRadius">
              <Link href="/user/restuarants">All</Link>
            </li>
          </nav>

          {data.map((itemCategory: any) => (
            <RestuarantNavbar
              key={itemCategory.id}
              name={itemCategory.name}
              img_url={itemCategory.img_url}
              slug={itemCategory.slug}
              category_id={itemCategory.id}
            />
          ))}
        </div>
        <div className="w-5/6 ps-4 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
          {restuarantCard.map((itemRestuarant: any) => (
            <RestuarantCard
              key={itemRestuarant.id}
              name={itemRestuarant.name}
              adress={itemRestuarant.address}
              img_url={itemRestuarant.img_url}
              cuisine={itemRestuarant.cuisine}
              delivery_price={itemRestuarant.delivery_price}
              delivery_min={itemRestuarant.delivery_min}
              id={itemRestuarant.id}
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
