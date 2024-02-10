import React, { useEffect, useState } from "react";
import Product, { IProduct } from "../../../components/productCard/index";
import PageHeader from "../../../components/pageHeader/index";
import Head from "next/head";



export default function index({ products }: any) {
  const { message, result: { data } } = products



  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="flex flex-wrap gap-6 justify-center    mt-6 w-5/6  m-auto">
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}

        {data.map((prod) => <Product key={prod.id} prod={prod} />)}
      </div>
    </>
  );
};

export const getServerSideProps = (async () => {
  const res = await fetch('https://foody-api.vercel.app/api/products')
  const products = await res.json()

  return { props: { products } }
})