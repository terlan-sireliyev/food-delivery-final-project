import React from "react";
import Product from "../../../components/productCard/index";
import PageHeader from "../../../components/pageHeader/index";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="flex flex-wrap gap-6 justify-center    mt-6 w-5/6  m-auto">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default index;
