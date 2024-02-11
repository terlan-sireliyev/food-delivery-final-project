import React from "react";
import Navbar from "../navbarAdmin";
import LeftBar from "../leftBar";
import EcampLogo from "../eacampLogo/index";
import style from "../../styles/Home.module.css";
const AdminLayout = ({ children }: any) => {
  return (
    <div className=" lg:px-5 sm:px-0 bg-admin-bg ">
      <Navbar />
      <div className="flex  ">
        <div
          className={`${"mt-4   w-1/6   bg-red-600 h-auto"} ${style.leftBar}`}
        >
          <LeftBar />
          <EcampLogo />
        </div>
        <div className=" mt-4 w-5/6  bg-admin-bg">
          <div className="text-center ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
