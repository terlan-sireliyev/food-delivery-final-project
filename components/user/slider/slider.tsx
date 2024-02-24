import React from "react";
import style from "./slider.module.css";
import { Link } from "@mui/material";
const SliderComp = () => {
  return (
    <>
      <div className="">
        <div
          className={`bg-user-navbarBGColor p-4 flex  justify-between max-lg:flex-col-reverse   max-lg:justify-center items-center`}
        >
          <div className="leftSlide w-1/2 px-4 mt-8  max-lg:w-full">
            <h1 className="font-bold text-size">
              Our Food site makes it easy to find local food
            </h1>
            <h2 className="text-size1 text-user-inSlider w-2/3 m-auto ">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </h2>
            <div className="flex gap-4 mt-8 w-2/3">
              <Link href='/user/register' className=" text-admin-colorLogin font-bold  hover:bg-user-navbarSignBgHover transition duration-400 rounded-btnRaduis  w-1/2 bg-user-navbarSignBg p-4 ">
                <button >
                  Register
                </button>
              </Link>
              <Link href='/user/restuarants' className=" text-user-inSlider font-bold hover:bg-user-navbarSignBgHover2 rounded-btnRaduis w-1/2 p-4 rounded-full border border-admin-inputBorder  ">
                <button >
                  Order now
                </button>
              </Link>
            </div>
          </div>
          <div className="rightSlide mr-10 max-md:mr-0 ">
            <div className={`${style.sliderBgImg} `}>
              <img
                src="../images/userImg/Rectangle1.svg"
                alt="Have your error"
                className={style.sliderIimg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComp;
