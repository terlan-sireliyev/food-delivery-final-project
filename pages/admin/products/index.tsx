import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/admin/pageHeader/index";
import Product from "../../../components/admin/productCard";
import Head from "next/head";
import axios from "axios";
import PaginationOutlined from "../../../components/admin/materialUiPagination/index";
import EditProduct from "../../../components/admin/editProduct/index";

export default function Index({ productDatas, setForm, form }: any) {
  const {
    message,
    result: { data },
  } = productDatas;
  const [productPagination, setProductPagination] = useState(
    productDatas.result.data
  );

  const [isActive, setIsActive] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    description: "",
    img_url: "",
    rest_id: "",
    price: 0,
  });

  const editProduct = async (item: any) => {
    setIsActive(!isActive);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${item}`
      );
      const { id, name, description, img_url, rest_id, price } =
        response.data.result.data;
      setEditForm({
        id: id,
        name: name,
        description: description,
        img_url: img_url,
        rest_id: rest_id,
        price: price,
      });
    } catch (err) {
      console.error("Error fetching offer:", err);
      alert("Silinmedi");
    }
  };
  console.log("editform", editForm);

  const updateBtn = async (e: any) => {
    e.preventDefault();
    try {
      setIsActive(false);
      const { id, ...rest } = editForm;
      const response = await axios.put(
        `http://localhost:3000/api/products/${id}`,
        rest
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>Products page</title>
      </Head>
      <PageHeader text="Products"></PageHeader>
      <div className="  grid grid-cols-4 gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-6 w-5/6  m-auto">
        {productPagination?.map((prod: any) => (
          <>
            <Product
              id={prod.id}
              key={prod.id}
              img_url={prod.img_url}
              name={prod.name}
              price={prod.price}
              restuarant={prod.rest_id}
              editProduct={editProduct}
              editForm={editForm}
              setEditForm={setEditForm}
              des={prod.description}
            />
          </>
        ))}
      </div>
      <div className="p-2 flex justify-center my-6 ">
        <PaginationOutlined
          commonDatas={productDatas}
          paginationData={setProductPagination}
        />
      </div>
      <div className="flex flex-wrap  absolute top-[10px] left-0 justify-between w-5/6 m-auto mt-4">
        <EditProduct
          updateBtn={updateBtn}
          setForm={setForm}
          form={form}
          setEditForm={setEditForm}
          editForm={editForm}
          setIsActive={setIsActive}
          isActive={isActive}
          // updateBtn={updateBtn}
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
