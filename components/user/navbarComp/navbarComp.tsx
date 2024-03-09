import React, { useEffect, useState } from "react";
import Link from "next/link";
import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import NavbarCompDesktop from "./navbarCompDesktop";
import NavbarCompMobil from "./navbarCompMobil";
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
  const [stateHamburger, setStateHamburger] = useState(false);
  const [open, setOpen] = useState(false);
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
  // const HamburgerMenuBtn = () => {
  //   setStateHamburger((prev) => !false);
  // };
  // const commonClose = () => {
  //   setStateHamburger((prev) => true);
  // };
  // const openMenu = () => {
  //   setOpen((prev) => true);
  // };

  const HamburgerMenuBtn = () => {
    setOpen((prev) => true);
  };
  const CloseMenu = () => {
    setOpen(false);
    console.log("close");
  };
  return (
    <>
      <div className="">
        <div className="">
          <NavbarCompDesktop
            setSearchRestuarant={setSearchRestuarant}
            searchRestuarant={searchRestuarant}
            setSearchFilter={setSearchFilter}
            searchFilter={searchFilter}
            inputValue={inputValue}
            setInputValue={setInputValue}
            searchRestuarantInput={searchRestuarantInput}
            clearInputAndLinks={clearInputAndLinks}
            HamburgerMenuBtn={HamburgerMenuBtn}
            setStateHamburger={setOpen}
            stateHamburger={open}
            CloseMenu={CloseMenu}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
