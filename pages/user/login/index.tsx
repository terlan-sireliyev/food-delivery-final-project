import React from "react";
import Link from "next/link";
// import RegNavbar from "../../../components/user/regNavbar/regNavbar";
const index = () => {
  return (
    <>
    {/* <RegNavbar/> */}
      <div className="flex max-lg:flex-col-reverse mt-4 mb-4 ">
        
          <div className="flex max-lg:mt-12">
              <div className="relative flex max-lg:w-full  ">
                <img
                    src="/images/userImg/resgister/log1.svg"
                    alt="Have your error"
                    className="w-full"
                  />
                  <img
                    src="/images/userImg/resgister/log2.svg "
                    alt="Have your error"
                    className="absolute top-0 w-full"
                  />
              </div>
            </div>
            <div className="flex flex-col mx-auto     ">
              <div className="flex">
                <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2 text-user-registerBtn px-6 py-2 rounded-regBtnRadius m-auto">
                  <Link href="login">Login</Link>
                </button>
                <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
                <Link href="register">Register</Link>
                </button>
              </div>
              <div className="flex flex-col gap-4    ">
                <input type="text" className="focus:outline-none w-96   border  border-admin-inputBorder p-2" placeholder="username" />
                <input type="password" className="focus:outline-none w-96  border  border-admin-inputBorder p-2" placeholder="password" />
                <button className="hover:bg-user-navbarSignBgHover  hover:text-admin-colorLogin bg-user-registerBtn p-2 rounded-regBtnRadius">Log in</button>
              </div>
            </div>
      </div>
    </>
  );
};

export default index;
