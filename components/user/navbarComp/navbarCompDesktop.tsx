import React, { useEffect, useState } from "react";
import Link from "next/link";
import OpenMenuLang from "../../admin/openMenuLang/index";
import { userNavbarLinks } from "./linksNavbarMockData";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "./styles.module.css";
import HamburgerMenu from "./hamburgerMenu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const NavbarCompDesktop = ({
  searchFilter,
  inputValue,
  searchRestuarantInput,
  clearInputAndLinks,
  HamburgerMenuBtnOpen,
  openHamburger,
  setOpenHamburger,
  HamburgerMenuBtnClose,
}: any) => {
  //Это меню, которое открывается при нажатии на значок пользователя на панели навигации.
  const [openLang, setOpenLang] = useState(false);
  const openMenuLang = () => {
    setOpenLang(!openLang);
  };

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      //здесь мы пишем Токен для получения данных
      setToken(access_token);
    } else {
      setToken(null);
    }
  }, []);
  const router = useRouter(); //здесь мы вводим переменную маршрутизатора(router)
  const logOut = () => {
    localStorage.removeItem("access_token"); //здесь мы удаляем Токен
    router.push("/user/login");
  };
  const openBasket = () => {
    //Перенаправляем на любую страницу с router.push
    router.push("/user/userPages/yourBasket");
  };
  return (
    <>
      <div className="">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <div className="flex justify-center items-center">
            <Image
              onClick={HamburgerMenuBtnOpen}
              src="/images/userImg/segment.png"
              width={40}
              height={40}
              alt="Picture of the author"
              className="h-10 object-contain hidden max-2xl:hidden max-xl:hidden max-lg:hidden max-md:block mr-4"
            />
            <HamburgerMenu
              className="max-sm:hidden"
              setOpenHamburger={setOpenHamburger}
              openHamburger={openHamburger}
              HamburgerMenuBtnClose={HamburgerMenuBtnClose}
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
          {/* //Здесь в панели навигации мы говорим, что какая бы страница ни была
          активна, ее цвет должен измениться */}
          <div className="flex items-center  gap-8 ">
            <ul className={`${"flex gap-4 max-md:hidden "}`}>
              {userNavbarLinks.map(({ id, title, href, icon }: any) => (
                <Link href={href} key={id}>
                  <div
                    className={`${
                      // const router = useRouter();
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
              {/* это сторона поиска входных данных То есть (input search) */}
              <div className="max-md:hidden relative">
                <input
                  onChange={searchRestuarantInput}
                  type="text"
                  className="focus:outline-none border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
                  placeholder="Search"
                  value={inputValue}
                />
                {/* //информация, которая поступает к нам при поиске на входе start */}
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
                {/* //информация, которая поступает к нам при поиске на входе end */}
              </div>
              {/* //языковое меню в навигаторе start */}
              <div className="flex">
                <OpenMenuLang />
              </div>
              {/* языковое меню в навигаторе end */}
              {token && (
                <div>
                  <div
                    onClick={openBasket}
                    className="p-[8px] bg-user-navBasketBG rounded-iconsRadius cursor-pointer text-admin-colorLogin"
                  >
                    <ShoppingBasketIcon />
                  </div>
                </div>
              )}
              {/* Если мы уже на сайте, покажите языковое меню */}
              {token && (
                <div>
                  <div className="relative">
                    <img
                      onClick={openMenuLang}
                      src="/images/avatar.svg"
                      alt="in "
                    />
                  </div>
                  <div
                    className={`${
                      openLang ? style.openProfilClass : style.modalProfilClass
                    } `}
                  >
                    {/* bura navbarda saq terefde user iconuna clikc edildike aclian menudur */}
                    <ul className="z-40 flex flex-col">
                      <Link
                        href="/user/userPages/profile"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/user/userPages/yourBasket"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Your Basket
                      </Link>
                      <Link
                        href="/user/userPages/yourOrder"
                        className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
                      >
                        Your Orders
                      </Link>
                      <Link
                        href="/user/userPages/checkout"
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
              {/* Если вы зашли на сайт, то удалите кнопку «Зарегистрироваться» */}
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
