import React, { useEffect, useState } from "react";
import Link from "next/link";
import { userNavbarLinks } from "./linksNavbarMockData";
import { userProfileLinkSome } from "../usersProfileLeft/linksMockData";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import style from "./styles.module.css";
import axios from "axios";

const HamburgerMenu = ({ openHamburger, HamburgerMenuBtnClose }: any) => {
  const { pathname } = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setToken(access_token);
    } else {
      setToken(null);
    }
  }, []);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get("http://localhost:3000/api/user",{
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        // setUserData(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <div
        onClick={HamburgerMenuBtnClose}
        className={`${style.modalNavMobilCommoHiddenClass} ${
          openHamburger && style.modalNavMobilCommonShowClass
        } bg-gradient-to-r from-blue-500 to-transparent absolute top-[0px] w-full max-sm:w-[150%] h-dvh z-40`}
      ></div>
      <div
        className={`${style.modalLangClass} ${
          openHamburger && style.openLangClass
        } bg-admin-openMenu1 overflow-y-auto hidden max-sm:block max-md:block max-lg:hidden max-xl:hidden max-2xl:hidden`}
      >
        <div className="mt-2 ml-4 cursor-pointer ">
          <CloseIcon onClick={HamburgerMenuBtnClose} />
        </div>
        <div className="flex items-center flex-col mt-[20px]">
          {!token ? (
            <button className="px-[30px] py-[5px] bg-user-navbarSignBg rounded-btnRaduis">
              <Link href="/user/login">Sign up</Link>
            </button>
          ) : (
            <div className="flex gap-4">
              {/* {userData && (
                <>
                  <div>
                    <img src={userData.image} alt="User profile" />
                  </div>
                  <div>
                    <h2>{userData.email}</h2>
                  </div>
                </>
              )} */}
            </div>
          )}
        </div>
        <div className="w-[200px]">
          <ul className="flex items-start pl-4 flex-col">
            {!token
              ? userNavbarLinks.map(({ id, title, href, icon }: any) => (
                  <Link href={href} key={id} onClick={HamburgerMenuBtnClose}>
                    <div
                      className={`${
                        href == pathname ? "text-user-bgCheckout font-bold" : ""
                      } p-2 mt-3 rounded `}
                    >
                      {title}
                    </div>
                  </Link>
                ))
              : userProfileLinkSome.map(({ id, title, href, icon }: any) => (
                  <Link href={href} key={id} onClick={HamburgerMenuBtnClose}>
                    <div
                      className={`${
                        href == pathname ? "text-user-bgCheckout font-bold" : ""
                      } p-2 mt-3 rounded `}
                    >
                      <div className="flex items-center  justify-center gap-2">
                        <p>{icon}</p>
                        <p>{title}</p>
                      </div>
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
