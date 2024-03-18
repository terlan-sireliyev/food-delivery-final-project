import React, { useEffect, useState } from "react";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import Link from "next/link";
import axios from "axios";

const index = () => {
    const [contactState, setContactState] = useState([])
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        axios.get("http://localhost:3000/api/order", {
            headers: { Authorization: `Bearer ${access_token}` },
        }).then((res) => {
            // console.log('data order',res.data.result.data);
            setContactState(res.data.result.data)
        }).catch((err: any) => {
            console.log('error var', err);
        })
    }, [])

    return (
        <>
            <UserProfileLayout>
                <div>
                    {
                        contactState && contactState.map((item: any) => (
                            <>
                                <div className="flex gap-6">
                                    <p key={item.id}>{item.contact}</p>
                                    <p key={item.id}>{item.delivery_address}</p>
                                    <p key={item.id}>{item.payment_method}</p>
                                </div>
                            </>
                        ))
                    }

                </div>
            </UserProfileLayout>
        </>
    );
};

export default index;
