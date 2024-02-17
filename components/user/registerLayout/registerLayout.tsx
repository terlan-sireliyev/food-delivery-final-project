import React from "react";
import RegNavbarComp from "../regNavbarComp/regNavbar";
const UserLayout = ({ children }: any) => {
  return (
    <>
      <div className="px-4 py-4">
        <RegNavbarComp />
        <div className="text-center ">{children}</div>
      </div>
    </>
  );
};

export default UserLayout;
