import React, { useEffect, useState } from "react";
import Product from "../../../components/admin/productCard/index";
import PageHeader from "../../../components/admin/pageHeader/index";
import Head from "next/head";
import axios from "axios";
export default function index({ products }: any) {
  const {
    message,
    result: { data },
  } = products;

  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="flex flex-wrap gap-6 justify-center    mt-6 w-5/6  m-auto">
        {data.map((prod: any) => (
          <Product
            id={prod.id}
            key={prod.id}
            img_url={prod.img_url}
            name={prod.name}
            price={prod.price}
            restuarant={prod.rest_id}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  // const products =  res.json();

  return { props: { products: response.data } };
};
