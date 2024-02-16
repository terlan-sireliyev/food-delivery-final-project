import React from "react";
import NavbarComp from "../../../components/user/navbarComp/navbarComp";
import SliderComp from "../../../components/user/slider/slider";
// import FooterComp from "../../../components/user/footerComp/footerCompt";
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
