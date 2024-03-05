import React, { useEffect, useState } from "react";
import Link from "next/link";
// import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
// import Image from "next/image";
import style from "./styles.module.css";
const HamburgerMenu = ({
  stateHamburger,
  CloseMenu,
  setStateHamburger,
}: any) => {
  const { pathname } = useRouter();
  return (
    <>
      <div
        className={`${style.modalLangClass} ${
          stateHamburger && style.openLangClass
        } bg-admin-openMenu1 overflow-y-auto  `}
      >
        <div className="mt-2 cursor-pointer">
          <CloseIcon onClick={CloseMenu} />
        </div>
        <div className="flex items-center flex-col mt-[20px]">
          <button className=" px-[30px] py-[5px]  bg-user-navbarSignBg rounded-btnRaduis">
            <Link href="/user/login">Sign up</Link>
          </button>
        </div>
        <div className="w-[200px] ">
          <ul className="flex items-center flex-col">
            {userNavbarLinks.map(({ id, title, href, icon }: any) => (
              <Link href={href} key={id} onClick={CloseMenu}>
                <div
                  className={`${
                    href == pathname ? "text-user-bgCheckout font-bold" : ""
                  }  p-2 mt-3 rounded `}
                >
                  {title}
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
