import React, { useEffect, useState } from "react";
import Tables from "../../../../components/user/tables/index";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import axios from "axios";
interface Order {
  id: string;
  customer_id: string;
  delivery_address: string;
  amount: number;
  payment_method: string;
  contact: string;
  products: ShowOrder[];
}
interface ShowOrder {
  id: string;
  img_url: string;
  name: string;
  price: number;
  count: number;
  amount: number;
}

const Index = () => {
  const [orderActionOpenMenu, setOrderActionOpenMenu] = useState<
    number | false
  >(false);

  const [contactState, setContactState] = useState([]);
  const [showOrder, setShowOrder] = useState<number | false>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.get("http://localhost:3000/api/order", {
          headers: { Authorization: `Bearer ${access_token}` },
        });

        if (response.data && Array.isArray(response.data.result.data)) {
          setContactState(response.data.result.data);
          setLoading(false);
        } else {
          console.error("Data format error: Response data is not an array.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  return (
    <UserProfileLayout>
      <div className="relative z-10 ">
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
    </UserProfileLayout>
  );
};

export default Index;
