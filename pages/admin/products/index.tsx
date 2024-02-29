import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import Product from "../../../components/admin/productCard";
import Head from "next/head";
import axios from "axios";
import PaginationOutlined from "../../../components/admin/materialUiPagination/index";
export default function Index({ productDatas }: any) {
  const {
    message,
    result: { data },
  } = productDatas;
  const [productPagination, setProductPagination] = useState(
    productDatas.result.data
  );

  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="  grid grid-cols-4 gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6 w-5/6  m-auto">
        {productPagination?.map((prod: any) => (
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
      <div className="p-2 flex justify-center my-6 ">
        <PaginationOutlined
          commonDatas={productDatas}
          paginationData={setProductPagination}
        />
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
