import React, { useEffect, useState } from "react";
import style from "./slider.module.css";
import { Link } from "@mui/material";
import axios from "axios";

const SliderComp = ({ offerData }: any) => {
  interface Offer {
    id: number;
    name: string;
    description: string;
    // Add other properties as needed
  }

  const [offerSliderCard, setOfferSliderCard] = useState<Offer[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/offer").then((res) => {
      setOfferSliderCard(res.data.result.data);
    });
  }, []);

  return (
    <>
      <div className="">
        <div
          className={`bg-user-navbarBGColor p-4 flex justify-between max-lg:flex-col-reverse max-lg:justify-center items-center`}
        >
          <div className="leftSlide w-1/2 px-4 mt-8 max-lg:w-full">
            <h1 className="font-bold text-size">
              Our Food site makes it easy to find local food
            </h1>
            <h2 className="text-size1 text-user-inSlider w-2/3 m-auto ">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </h2>
            <div className="flex gap-4 mt-8 w-2/3">
              <Link
                href="/user/register"
                className=" text-admin-colorLogin font-bold  hover:bg-user-navbarSignBgHover transition duration-400 rounded-btnRaduis  w-1/2 bg-user-navbarSignBg p-4 "
              >
                <button>Register</button>
              </Link>
              <Link
                href="/user/restuarants"
                className=" text-user-inSlider font-bold hover:bg-user-navbarSignBgHover2 rounded-btnRaduis w-1/2 p-4 rounded-full border border-admin-inputBorder  "
              >
                <button>Order now</button>
              </Link>
            </div>
          </div>
          <div className="rightSlide mr-10  relative ">
            <div className={`${style.sliderBgImg} `}>
              <img
                src="../images/userImg/Rectangle1.svg"
                alt="Have your error"
                className={style.sliderIimg}
              />
            </div>
            {offerSliderCard.length > 0 && (
              <>
                <div className="max-sm:hidden">
                  <div className="absolute  h-24 hover:-translate-y-4 duration-700 flex top-[-30px] right-[-8%] rounded-borderSliderCard px-4 bg-admin-bgCheck">
                    <div className="h-24">
                      <img
                        src="../images/userImg/Rectangle1.svg"
                        alt="Have your error"
                        className="w-[100px]  h-full "
                      />
                    </div>
                    <div className="text-left gap-4 p-2">
                      <h1 className="mt-2">{offerSliderCard[0].name}</h1>
                      <p className="mt-3">{offerSliderCard[0].description}</p>
                    </div>
                  </div>

                  <div className="absolute  h-24 hover:-translate-y-4 duration-700 flex top-[150px] left-[-10%] rounded-borderSliderCard px-4 bg-admin-bgCheck">
                    <div className="h-24">
                      <img
                        src="../images/userImg/Rectangle1.svg"
                        alt="Have your error"
                        className="w-[100px]  h-full "
                      />
                    </div>
                    <div className="text-left gap-4 p-2">
                      <h1 className="mt-2">{offerSliderCard[1].name}</h1>
                      <p className="mt-3">{offerSliderCard[1].description}</p>
                    </div>
                  </div>
                  <div className="absolute  h-24 hover:-translate-y-4 duration-700 flex bottom-[-30px]  right-[-8%] rounded-borderSliderCard px-4 bg-admin-bgCheck">
                    <div className="h-24">
                      <img
                        src="../images/userImg/Rectangle1.svg"
                        alt="Have your error"
                        className="w-[100px]  h-full "
                      />
                    </div>
                    <div className="text-left gap-4 p-2">
                      <h1 className="mt-2">{offerSliderCard[2].name}</h1>
                      <p className="mt-3">{offerSliderCard[2].description}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComp;
