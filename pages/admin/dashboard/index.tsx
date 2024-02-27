import React from "react";
import Head from "next/head";
// import sytle from "../../../components/admin/charts/style.module.css";
import BarChart from "../../../components/admin/charts/BarChart";
import MDDualYChatrs from "../../../components/admin/charts/MDDualYChatrs";
const index = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="flex">
        <div className="w-1/2 m-auto h-[150px]   ">
          <BarChart />
        </div>
        <div className=" m-auto h-[150px] ">
          <MDDualYChatrs />
        </div>
      </div>
    </>
  );
};

export default index;
