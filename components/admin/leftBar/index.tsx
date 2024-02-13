import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import Link from "next/link";
import { adminLinks } from "./linksMockData";
const index = () => {
  const { pathname } = useRouter();
  const currentPath = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <>
      <div className=" bg-admin-bgLeftBar text-admin-bgCheck  p-8 rounded">
        {adminLinks.map(({ id, title, href, icon }: any) => (
          <Link href={href} key={id}>
            <div
              className={`${
                href === currentPath ? "bg-admin-bgLeftBarCheck" : ""
              }  p-2 mt-3 rounded `}
            >
              {icon}
              {title}
            </div>
          </Link>
        ))}
        <Link href="login">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Logout
          </div>
        </Link>
      </div>
      {/* <EcampLogo /> */}
    </>
  );
};

export default index;
