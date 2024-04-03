import React, { useState, useEffect } from "react";
import RestuarantCard from "../../../components/user/restuarant/restuarantCard";
import RestuarantNavbar from "../../../components/user/restuarant/restuarantNavbar";
import { useRouter } from "next/router";
import axios from "axios";
import RestNavMobil from "../../../components/user/restNavMobil";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  img_url: string;
  slug: string;
}

interface Restaurant {
  id: string;
  name: string;
  address: string;
  img_url: string;
  cuisine: string;
  delivery_price: number;
  delivery_min: number;
}

interface AllCategoryResponse {
  message: string;
  result: {
    data: Category[];
  };
}

interface IndexProps {
  AllCategory: AllCategoryResponse;
}

const Index: React.FC<IndexProps> = ({ AllCategory }) => {
  const { query } = useRouter();
  const [restuarantCard, setRestuarantCard] = useState<Restaurant[]>([]);
  console.log("quer", query);
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
      <div className="flex mt-4 max-lg:flex-col">
        <div className="w-1/6 max-lg:hidden bg-user-navbarBGColor ">
          <nav className="list-none w-full mt-4 p-2  text-left">
            <Link
              className={`text-user-navbarSignBg font-bold rounded-regBtnRadius px-3 py-2 ${
                !query.category && "bg-user-LinkColor"
              }`}
              href="/user/restuarants"
            >
              All
            </Link>
          </nav>

          {AllCategory.result.data.map((itemCategory) => (
            <RestuarantNavbar
              key={itemCategory.id}
              name={itemCategory.name}
              img_url={itemCategory.img_url}
              slug={itemCategory.slug}
              category_id={itemCategory.id}
            />
          ))}
        </div>
        <div className="hidden max-lg:block">
          <RestNavMobil />
        </div>
        <div className="w-5/6 max-sm:w-full max-md:w-full max-lg:w-full p-2 grid grid-cols-4 max-sm:grid-cols-2  max-lg:grid-cols-3 max-md:grid-cols-2 gap-2">
          {restuarantCard.map((itemRestuarant) => (
            <RestuarantCard
              key={itemRestuarant.id}
              name={itemRestuarant.name}
              address={itemRestuarant.address}
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
    const dataCategory: AllCategoryResponse = response.data;
    return { props: { AllCategory: dataCategory } };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { props: { AllCategory: { message: "", result: { data: [] } } } };
  }
};
