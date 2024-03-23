import React from "react";
import Head from "next/head";
import PageHeader from "../../../components/admin/pageHeader/index";
const index = () => {
  return (
    <>
      <Head>
        <title>Offer page</title>
      </Head>
      <PageHeader text="Offers">
        <button className={`bg-admin-signBtnColor p-2 rounded`}>
          Add Offer
        </button>
      </PageHeader>
      <div className="flex flex-wrap justify-between w-5/6 m-auto mt-4"></div>
    </>
  );
};

export default index;
