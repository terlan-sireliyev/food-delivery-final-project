import React from "react";
import Head from "next/head";
import BarChart from "../../../components/admin/charts/BarChart";
import MDDualYChatrs from "../../../components/admin/charts/MDDualYChatrs";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="flex justify-center">
        <div className="w-1/2 mx-4 h-[400px]">
          <BarChart />
        </div>
        <div className="w-1/2 mx-4 h-[400px]">
          <MDDualYChatrs />
        </div>
      </div>
    </>
  );
};

export default Index;
