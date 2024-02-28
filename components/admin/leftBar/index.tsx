import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { adminLinks } from "./linksMockData";
const index = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className=" bg-admin-bgLeftBar text-admin-bgCheck  p-8 rounded">
        {adminLinks.map(({ id, title, href, icon }: any) => {
          return (
            <Link href={href} key={id}>
              <div
                className={`${
                  href === pathname
                    ? "bg-admin-bgLeftBarCheck rounded-regBtnRadius"
                    : ""
                }  p-2 mt-3 rounded `}
              >
                {icon}
                {title}
              </div>
            </Link>
          );
        })}
        <Link href="/admin">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Logout
          </div>
        </Link>
      </div>
    </>
  );
};

export default index;
