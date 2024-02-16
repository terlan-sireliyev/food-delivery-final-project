import React from "react";
import NavbarComp from "../navbarComp/navbarComp";
// import SliderComp from "../slider/slider";
import FooterComp from "../footerComp/footerCompt";
const UserLayout = ({ children }: any) => {
  return (
    <>
      <div className="px-4 py-4">
        <NavbarComp />

        <div className="text-center ">{children}</div>
        <FooterComp />
      </div>
    </>
  );
};

export default UserLayout;
