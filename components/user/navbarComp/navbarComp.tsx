import React, { useEffect, useState } from "react";
import Link from "next/link";
import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
interface Restaurant {
  id: string;
  name: string;
  img_url: string;
  cuisine: string;
}
const NavbarComp = () => {
  const [searchRestuarant, setSearchRestuarant] = useState<Restaurant[]>([]);
  const [searchFilter, setSearchFilter] = useState<Restaurant[]>([]);
  const [inputValue, setInputValue] = useState("");

  const { pathname } = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restuarants")
      .then((res) => setSearchRestuarant(res.data.result.data));
  }, []);

  const searchRestuarantInput = (e: any) => {
    const targetInput = e.target.value.toLowerCase();
    const filteredRestaurants = searchRestuarant.filter((restaurant) => {
      const check = restaurant.name.toLowerCase().startsWith(targetInput);
      if (check && e.target.value !== "") {
        return check;
      }
    });
    setSearchFilter(filteredRestaurants);
    setInputValue(e.target.value);
  };
  const clearInputAndLinks = () => {
    setSearchFilter([]);
    setInputValue("");
  };

  return (
    <>
      <div className="">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <div className="flex justify-center items-center">
            <img
              src="../images/userImg/segment.png"
              alt="Have your error"
              className="h-10 object-contain hidden max-2xl:hidden max-xl:hidden max-lg:hidden max-md:block mr-4"
            />
            <Link href="/">
              <Image
                src="/images/userImg/Foody.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="flex items-center  gap-8 ">
            <ul className={`${"flex gap-4 max-md:hidden "}`}>
              {userNavbarLinks.map(({ id, title, href, icon }: any) => (
                <Link href={href} key={id}>
                  <div
                    className={`${
                      href == pathname ? "text-user-bgCheckout font-bold" : ""
                    }  p-2 mt-3 rounded `}
                  >
                    {title}
                  </div>
                </Link>
              ))}
            </ul>
            <div className="flex items-center justify-center p-2  ">
              <div className="max-md:hidden relative">
                <input
                  onChange={searchRestuarantInput}
                  type="text"
                  className="focus:outline-none border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
                  placeholder="Search"
                  value={inputValue}
                />
                {searchFilter.length > 0 ? (
                  <ul className="p-2 absolute bg-admin-TextCheck w-full z-10">
                    {searchFilter.map((restaurant) => (
                      <Link
                        href={`/user/restuarants/${restaurant.id}`}
                        onClick={clearInputAndLinks}
                      >
                        <li
                          key={restaurant.id}
                          className="hover:bg-admin-inputBorder cursor-pointer h-16  mt-2 pl-2 border-b border-admin-inputBorder"
                        >
                          <div className="flex items-center p-[4px]">
                            <div className="border border-admin-inputBorder w-14 h-14">
                              <img
                                src={restaurant.img_url}
                                className="w-full h-full object-contain"
                                alt={restaurant.name}
                              />
                            </div>
                            <div className="mt-[0px] px-2">
                              <p className="text-productSize14">
                                {restaurant.name}
                              </p>
                              <p className="text-productSize">
                                {restaurant.cuisine.split("").slice(0, 16)}...
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="mt-2 ml-4 flex">
                <OpenMenuLang />
              </div>
              <button className="mr-8 ml-4 px-[30px] py-[5px] mt-2 bg-user-navbarSignBg rounded-btnRaduis">
                <Link href="/user/login">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
