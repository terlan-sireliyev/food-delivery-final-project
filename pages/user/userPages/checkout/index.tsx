import React, { useEffect, useState } from "react";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import { useRouter } from "next/router";
import axios from "axios";
import SameInputs from "../../../../components/user/sameInputs/index";

const index = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [forcheckoutId, setForcheckoutId] = useState<string | undefined>(
    undefined
  );
  const [checkOut, setCheckOut] = useState<any | undefined>(undefined);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get("http://localhost:3000/api/basket", {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setForcheckoutId(res.data.result.data.id);
        setCheckOut(res.data.result.data.items);
        const reduc = res.data.result.data.items.reduce(
          (totalAmount: number, item: any) => totalAmount + item.amount,
          0
        );
        setTotalAmount(reduc);
      })
      .catch((err: any) => {
        console.log("error var", err);
      });
  }, []);

  const router = useRouter();
  const [form, setForm] = useState({
    basket_id: "",
    delivery_address: "",
    contact: "",
    payment_method: "",
  });

  const addCheckout = () => {
    const access_token = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:3000/api/order",
        {
          basket_id: forcheckoutId,
          delivery_address: form.delivery_address,
          contact: form.contact,
          payment_method: form.payment_method,
        },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          router.push("/user/userPages/yourOrder");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <UserProfileLayout>
        <div className="flex gap-2  max-lg:flex-col-reverse ">
          <div className="w-3/5 max-lg:w-full bg-user-navbarBGColor">
            <label
              className="text-left mt-4  font-bold w-96 mx-auto block "
              htmlFor=""
            >
              Delivery Address
            </label>
            <SameInputs
              type="text"
              textName="delivery_address"
              name="delivery_address"
              setForm={setForm}
              placeholder="Delivery Address"
            />
            <br />
            <label
              className="text-left mt-4 font-bold w-96 m-auto block "
              htmlFor=""
            >
              Contact Number
            </label>

            <SameInputs
              type="text"
              textName="contact"
              name="contact"
              setForm={setForm}
              placeholder="Contact Number"
            />
            <div>
              <p className="mt-4 text-user-registerBtn font-bold mb-3">
                Payment Method
              </p>
              <div className="flex items-center justify-center w-96 m-auto">
                <div className=" flex items-center justify-between gap-[2px] ">
                  <SameInputs
                    type="radio"
                    textName="payment_method"
                    name="payment_method"
                    value="door"
                    setForm={setForm}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={addCheckout}
              className=" bg-user-btnSave block rounded text-user-navbarSignBgHover w-96 m-auto font-bold h-14 mt-[29px] mb-4"
            >
              Save
            </button>
          </div>
          <div className="relative w-2/5 max-md:h-[auto] max-lg:w-full bg-user-navbarBGColor">
            <h1 className="mt-4 font-bold text-user-inSlider">Your Order</h1>
            {checkOut &&
              checkOut.map((item: any) => (
                <div key={item.id} className="p-4">
                  <div className="flex justify-between p-2">
                    <div className="flex gap-2">
                      <p className="font-bold text-user-inSlider">
                        {item.count}
                      </p>
                      <p>X {item.name}</p>
                    </div>
                    <div>$ {item.price * item.count}</div>
                  </div>
                </div>
              ))}
            <div>
              <div className="absolute bottom-0 p-4 max-lg:relative">
                <div className="flex my-2">
                  <p className="ml-2 font-bold text-user-inSlider">Total</p>
                  <p className="fixed max-lg:absolute right-4">
                    ${totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserProfileLayout>
    </div>
  );
};

export default index;
