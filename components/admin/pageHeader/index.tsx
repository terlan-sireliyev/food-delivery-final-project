import React from "react";
import style from "../../../styles/Home.module.css";

const index = ({ text, children }: any) => {
  return (
    <>
      <div
        className={`${"w-5/6   m-auto bg-admin-navbarBG p-6 rounded-lg flex justify-between items-center"}${
          style.pageHeader
        }`}
      >
        <div className="">
          <p className="text-products text-admin-colorEacampLogo1 text-admin-bgCheck">{text}</p>
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default index;
