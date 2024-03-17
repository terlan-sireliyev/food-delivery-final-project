import React, { useState } from "react";
import Link from "next/link";
import { userProfileLink } from "./linksMockData";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
const index = () => {
  const router = useRouter();
  return (
    <>
      <div>
        {userProfileLink.map(({ id, title, href, icon }: any) => {
          return (
            <Link href={href} key={id}>
              <div
                className={`${
                  href === router.pathname
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
        <Link href="./">
          <div className="p-2 mt-3 rounded">
            <div className="flex gap-2 ml-4">
              <LogoutIcon />
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default index;
