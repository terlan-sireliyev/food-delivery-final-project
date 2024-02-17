import React from "react";
import Link from "next/link";
const regNavbar = () => {
  return (
    <>
      <div className="">
        <div className="bg-user-registerBtn p-4 flex  justify-between ">
          <div className="flex justify-center items-center">
            <Link href="/">
              <img
                src="../images/userImg/Foody.svg"
                alt="Have your error"
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center  gap-8 ">
            <div className="flex items-center justify-center p-2  ">
              <div className="mt-2 ml-4 flex">
                <img
                  src="../images/langEn.svg"
                  alt="Have yor error"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default regNavbar;
