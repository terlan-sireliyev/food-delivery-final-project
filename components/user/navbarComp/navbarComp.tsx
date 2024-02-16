import React from "react";
import style from '../slider/slider.module.css'
import Link from "next/link";
const NavbarComp = () => {
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
            <img
              src="../images/userImg/Foody.svg"
              alt="Have your error"
              className=""
            />
          </div>
          <div className="flex items-center  gap-8 ">
            <ul className={`${'flex gap-4 max-md:hidden '}`}>
              <Link href="/">Home</Link>
              <Link href="restuarant">Restaurant</Link>
              <Link href="about" className="max-lg:hidden">About as</Link>
              <Link href="works" className="max-lg:hidden">how it works</Link>
              <Link href="faqs"  className="max-md:hidden">FAQs</Link>
            </ul>
            <div className="flex items-center justify-center p-2  items-center ">
              <div className="max-md:hidden">
                <input
                  type="text"
                  className="focus:outline-none border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
                  placeholder="Search"
                />
              </div>
              <div className="mt-2 ml-4 flex">
                <img
                  src="../images/langEn.svg"
                  alt="Have yor error"
                  className=""
                />
              </div>
              <button className="mr-8 ml-4 px-[30px] py-[5px] mt-2 bg-user-navbarSignBg rounded-btnRaduis">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
