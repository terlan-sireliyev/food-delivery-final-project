import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarCompDesktop from "./navbarCompDesktop";
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
  const [openHamburger, setOpenHamburger] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restuarants")
      .then((res) => setSearchRestuarant(res.data.result.data));
  }, []);
  // Ищем ресторан во входе в навбар start
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
  // Ищем ресторан во входе в навбар end
  //Здесь мы очищаем поле поиска на панели навигации.
  const clearInputAndLinks = () => {
    setSearchFilter([]);
    setInputValue("");
  };

  //здесь мы открываем гамбургер-меню
  const HamburgerMenuBtnOpen = () => {
    setOpenHamburger((prev) => true);
  };
  //здесь мы закрываем гамбургер-меню
  const HamburgerMenuBtnClose = () => {
    setOpenHamburger((prev) => false);
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
            HamburgerMenuBtnOpen={HamburgerMenuBtnOpen}
            setOpenHamburger={setOpenHamburger}
            openHamburger={openHamburger}
            HamburgerMenuBtnClose={HamburgerMenuBtnClose}
          />
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
