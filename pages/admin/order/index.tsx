import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../../components/admin/pageHeader/index";
import Tables from "../../../components/user/tables/index";

const index = ({ AllOrders }: any) => {
  const [orderActionOpenMenu, setOrderActionOpenMenu] = useState<
    number | false
  >(false);
  const [contactState, setContactState] = useState([]);
  const [showOrder, setShowOrder] = useState<number | false>(false);
  const {
    message,
    result: { data },
  } = AllOrders;

  useEffect(() => {
    setContactState(data);
  }, [AllOrders]);

  const actionOrder = (index: any) => {
    if (orderActionOpenMenu === index) {
      setOrderActionOpenMenu(false);
    } else {
      setOrderActionOpenMenu(index);
    }
  };

  const closeOrderAction = (index: any) => {
    if (orderActionOpenMenu !== index) {
      setOrderActionOpenMenu(false);
    }
  };

  const deleteOrder = (item: any) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete("http://localhost:3000/api/order", {
        data: {
          order_id: item.id,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((result) => {
        console.log("success");
      })
      .catch((err) => {
        console.error("Error decrementing item count in basket:", err);
      });
  };

  const showOrderClick = (index: any) => {
    if (showOrder === index) {
      setShowOrder(false);
    } else {
      setShowOrder(index);
    }
  };

  const closeOrder = (index: any) => {
    if (showOrder !== index) {
      setShowOrder(false);
      setOrderActionOpenMenu(false);
    }
  };
  return (
    <>
      <Head>
        <title>Category page</title>
      </Head>
      <PageHeader text="Orders"></PageHeader>
      <div className="w-5/6 m-auto mt-4">
        <div>
          <Tables
            orderActionOpenMenu={orderActionOpenMenu}
            showOrderClick={showOrderClick}
            closeOrder={closeOrder}
            deleteOrder={deleteOrder}
            closeOrderAction={closeOrderAction}
            actionOrder={actionOrder}
            contactState={contactState}
            showOrder={showOrder}
          />
        </div>
      </div>
    </>
  );
};

export default index;
export async function getServerSideProps({ req }: any) {
  try {
    const access_token = req.cookies.access_token;
    const response = await axios.get("http://localhost:3000/api/order", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    // console.log("API response:", response.data);
    return {
      props: {
        AllOrders: response.data,
      },
    };
  } catch (error: any) {
    // console.error("Error fetching order:", error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}
