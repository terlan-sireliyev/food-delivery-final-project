import React from "react";
import NavbarComp from "../../../components/user/navbarComp/navbarComp";
import SliderComp from "../../../components/user/slider/slider";
const Navbar = () => {
  return (
    <>
      <div className="px-4 py-4">
        <NavbarComp />
        <SliderComp />
      </div>
    </>
  );
};

export default Navbar;
