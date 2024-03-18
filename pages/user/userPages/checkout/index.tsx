import React, { useEffect, useState } from "react";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const index = () => {
    const [forcheckoutId, setForcheckoutId] = useState<string | undefined>(undefined);
    const [checkOut, setCheckOut] = useState<any[] | undefined>(undefined);
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        axios.get("http://localhost:3000/api/basket", {
            headers: { Authorization: `Bearer ${access_token}` },
        }).then((res) => {
            setForcheckoutId(res.data.result.data.id)
            setCheckOut(res.data.result.data.items)
            // console.log(res.data.result.data.items);
        }).catch((err: any) => {
            console.log('error var', err);
        })
    }, [])

    const router = useRouter();
    const [form, setForm] = useState({
        basket_id: "",
        delivery_address: "",
        contact: "",
        payment_method: ""
    });
    const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };
    const addCheckout = () => {
        const access_token = localStorage.getItem("access_token");
        axios
            .post("http://localhost:3000/api/order", {
                basket_id: forcheckoutId,
                delivery_address: form.delivery_address,
                contact: form.contact,
                payment_method: form.payment_method,
            }, {
                headers: { Authorization: `Bearer ${access_token}` }
            })
            .then((res) => {
                if (res.status === 201) {
                    router.push("/user/userPages/yourOrder");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div>
                <UserProfileLayout>
                    <div className="flex gap-2">
                        <div className="w-3/5 bg-user-navbarBGColor">
                            <input
                                type="text"
                                name="delivery_address"
                                onChange={changeFunc}
                                className="focus:outline-none mt-4  w-96 border border-admin-inputBorder p-2"
                                placeholder="Delivery Address"
                            />
                            <input
                                type="number"
                                name="contact"
                                onChange={changeFunc}
                                className="focus:outline-none mt-4 w-96 border border-admin-inputBorder p-2"
                                placeholder="Contact Number"
                            />
                            <div>
                                <p>Payment Method:</p>
                                <div className="flex justify-around w-3/5 m-auto">
                                    <div>
                                        <input type="radio" onChange={changeFunc} id="door" name="payment_method" value="door" />
                                        <label htmlFor="door">pay at the door</label>
                                    </div>
                                    <div>
                                        <input type="radio" onChange={changeFunc} id="cart" name="payment_method" value="cart" />
                                        <label htmlFor="cart">By Credit card</label>
                                    </div>
                                </div>
                            </div>
                            <button onClick={addCheckout} className="bg-user-btnSave block  rounded text-user-navbarSignBgHover w-96 m-auto font-bold h-14 mt-[29px]">
                                Save
                            </button>
                        </div>
                        <div className="relative w-2/5 bg-user-navbarBGColor">
                            <h1>Your Order</h1>                            {
                                checkOut && checkOut.map((item: any) => (
                                    <>
                                        <div>
                                            <div className="flex justify-between p-2">
                                                <div className="flex gap-2">
                                                    <p>{item.count} X </p>
                                                    <p>{item.name}</p>
                                                </div>
                                                <div>$ {item.price * item.count}</div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                            <div>
                                <div className="absolute bottom-0">
                                    <div className="flex my-2">
                                        <p className="ml-2">Total</p>
                                        <p className="fixed right-4">$31</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </UserProfileLayout>
            </div>
        </>
    );
};

export default index;
//   export const getServerSideProps = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/basket");
//       return { props: { responsCheckOut: response.data } };
//     } catch (error) {
//       console.error("Error fetching category:", error);
//       return { props: { responsCheckOut: {} } };
//     }
//   };

