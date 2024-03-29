import React from "react";
import NavbarComp from "../navbarComp/navbarComp";
import FooterComp from "../footerComp/footerCompt";
const UserLayout = ({ children }: any) => {
  return (
    <>
      <div className="">
        <NavbarComp />
        <div className="text-center ">{children}</div>
        <FooterComp />
      </div>
    </>
  );
};

export default UserLayout;
