import React, { useEffect, useState } from "react";
import Product from "../../../components/admin/productCard/index";
import PageHeader from "../../../components/admin/pageHeader/index";
import Head from "next/head";

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
            key={prod.id}
            name={prod.name}
            price={prod.price}
            img_url={prod.img_url}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://foody-api.vercel.app/api/products");
  const products = await res.json();

  return { props: { products } };
};
