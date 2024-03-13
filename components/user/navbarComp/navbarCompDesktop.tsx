import React, { useEffect, useState } from "react";
import Link from "next/link";
import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import Image from "next/image";
import style from "./styles.module.css";
import HamburgerMenu from "./hamburgerMenu";
// import UserProfile from '../../../pages/user/userPages/profile/index'
import axios from "axios";
// import img from '../../../public/images/avatar.svg'

const NavbarCompDesktop = ({
  searchFilter,
  setInputValue,
  inputValue,
  searchRestuarantInput,
  clearInputAndLinks,
  HamburgerMenuBtn,
  stateHamburger,
  setStateHamburger,
  CloseMenu,
}: any) => {
  const [openLang, setOpenLang] = useState(false);
  const openMenuLang = () => {
    setOpenLang(!openLang);
  };
  const commonClose = () => {
    setOpenLang(false);
  };
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    // axios.get('http://localhost:3000/api/user',{
    //   headers:{
    //     "Authorization" : `Bearer ${access_token}`
    //   }
    // }).then((res) =>{
    //   console.log(res.data  );
    // })

    if (access_token) {
      setToken(access_token);
    } else {
      setToken(null);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");

    router.push("/user/login");
  };

  return (
    <>
      <div className="">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <div className="flex justify-center items-center">
            <img
              onClick={HamburgerMenuBtn}
              src="../images/userImg/segment.png"
              alt="Have your error"
              className="h-10 object-contain hidden max-2xl:hidden max-xl:hidden max-lg:hidden max-md:block mr-4"
            />
            <HamburgerMenu
              HamburgerMenuBtn={HamburgerMenuBtn}
              setStateHamburger={setStateHamburger}
              stateHamburger={stateHamburger}
              CloseMenu={CloseMenu}
            />
            <Link href="/">
              <Image
                src="/images/userImg/Foody.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="flex items-center  gap-8 ">
            <ul className={`${"flex gap-4 max-md:hidden "}`}>
              {userNavbarLinks.map(({ id, title, href, icon }: any) => (
                <Link href={href} key={id}>
                  <div
                    className={`${
                      href == router.pathname
                        ? "text-user-bgCheckout font-bold"
                        : ""
                    }  p-2 mt-3 rounded `}
                  >
                    {title}
                  </div>
                </Link>
              ))}
            </ul>

            <div className="flex items-center justify-center p-2  ">
              <div className="max-md:hidden relative">
                <input
                  onChange={searchRestuarantInput}
                  type="text"
                  className="focus:outline-none border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
                  placeholder="Search"
                  value={inputValue}
                />
                {searchFilter.length > 0 ? (
                  <ul className="p-2 absolute bg-admin-TextCheck w-full z-10">
                    {searchFilter.map((restaurant: any) => (
                      <Link
                        href={`/user/restuarants/${restaurant.id}`}
                        onClick={clearInputAndLinks}
                      >
                        <li
                          key={restaurant.id}
                          className="hover:bg-admin-inputBorder cursor-pointer h-16  mt-2 pl-2 border-b border-admin-inputBorder"
                        >
                          <div className="flex items-center p-[4px]">
                            <div className="border border-admin-inputBorder w-14 h-14">
                              <img
                                src={restaurant.img_url}
                                className="w-full h-full object-contain"
                                alt={restaurant.name}
                              />
                            </div>
                            <div className="mt-[0px] px-2">
                              <p className="text-productSize14">
                                {restaurant.name}
                              </p>
                              <p className="text-productSize">
                                {restaurant.cuisine.split("").slice(0, 16)}...
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="mt-2 ml-4 flex">
                <OpenMenuLang />
              </div>
              {token && (
                <div>
                  <div className="w-10 border border-inputBorder rounded-iconsRadius">
                    <img
                      src="/images/basket.jpg"
                      alt="you have error"
                      className="w-full rounded-iconsRadius"
                    />
                  </div>
                </div>
              )}
              {/* {
                token && <div>
                  <p></p>
                </div>
              } */}

              {token && (
                <div>
                  <div className="relative">
                    <img
                      onClick={openMenuLang}
                      src="/images/avatar.svg"
                      alt="in "
                      // className="w-full rounded-iconsRadius"
                    />
                  </div>
                  <div
                    className={`${
                      openLang ? style.openProfilClass : style.modalProfilClass
                    } `}
                  >
                    <ul className="z-40 flex flex-col">
                      <Link
                        href="/user/userPages/profile"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Profile
                      </Link>
                      <Link
                        href="profile"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Your Basket
                      </Link>
                      <Link
                        href="profile"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Your Orders
                      </Link>
                      <Link
                        href="profile"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Checkout
                      </Link>
                      <button
                        onClick={logOut}
                        className="bg-admin-colorLogin p-3 text-left hover:bg-admin-inputBorder"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              )}

              {!token && (
                <button className=" max-lg:hidden mr-8 ml-4 px-[30px] py-[5px] mt-2 bg-user-navbarSignBg rounded-btnRaduis">
                  <Link href="/user/login">Sign up</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarCompDesktop;
