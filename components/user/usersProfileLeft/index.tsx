import React, { useState } from "react";
import Link from "next/link";
import { userProfileLink } from "./linksMockData";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter()
    // const logOut = () => {
    //     localStorage.removeItem("access_token");
    //     router.push("/user/login");

    // }
    return (
        <>
            <div>
                {userProfileLink.map(({ id, title, href, icon }: any) => {
                    return (
                        <Link href={href} key={id}>
                            <div
                                className={`${href === router.pathname
                                    ? "bg-admin-bgLeftBarCheck rounded-regBtnRadius"
                                    : ""
                                    }  p-2 mt-3 rounded  text-left ml-3`}
                            >
                                <div className="flex gap-2">
                                    <p>{icon}</p>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default index;
