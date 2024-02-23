import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import Product from "../../../components/admin/productCard";
import Head from "next/head";
import axios from "axios";
export default function Index({ productDatas }: any) {
  const {
    message,
    result: { data },
  } = productDatas;

  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="  grid grid-cols-4 gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6 w-5/6  m-auto">
        {data?.map((prod: any) => (
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
export async function getServerSideProps() {
  const [responseProducts] = await Promise.all([
    await axios.get("http://localhost:3000/api/products"),
  ]);
  return {
    props: {
      productDatas: responseProducts.data,
    },
  };
}
