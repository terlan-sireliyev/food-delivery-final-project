import React from "react";
import Link from "next/link";
import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
const NavbarComp = () => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <div className="flex justify-center items-center">
            <img
              src="../images/userImg/segment.png"
              alt="Have your error"
              className="h-10 object-contain hidden max-2xl:hidden max-xl:hidden max-lg:hidden max-md:block mr-4"
            />
            <Link href="/">
              <img
                src="../images/userImg/Foody.svg"
                alt="Have your error"
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center  gap-8 ">
            <ul className={`${"flex gap-4 max-md:hidden "}`}>
              {userNavbarLinks.map(({ id, title, href, icon }: any) => (
                <Link href={href} key={id}>
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
            <div className="flex items-center justify-center p-2  ">
              <div className="max-md:hidden">
                <input
                  type="text"
                  className="focus:outline-none border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
                  placeholder="Search"
                />
              </div>
              <div className="mt-2 ml-4 flex">
                <OpenMenuLang />
              </div>
              <button className="mr-8 ml-4 px-[30px] py-[5px] mt-2 bg-user-navbarSignBg rounded-btnRaduis">
                <Link href="/user/login">Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
