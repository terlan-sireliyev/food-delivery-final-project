import React from "react";
const NavbarComp = () => {
  return (
    <>
      <div className="">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <div className="flex justify-center">
            <img
              src="../images/userImg/Foody.svg"
              alt="Have your error"
              className=""
            />
          </div>
          <div className="flex items-center  gap-8">
            <ul className="flex gap-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Restaurant</a>
              </li>
              <li>
                <a href="/">About as</a>
              </li>
              <li>
                <a href="/">how it works</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
            <div className="flex items-center justify-center p-2  items-center">
              <div>
                <input
                  type="text"
                  className="border border-admin-inputBorder rounded w-full px-3 py-2 text-gray-700  leading-tight"
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
              <button className="mr-8 ml-4 p-[5px] mt-2 bg-user-navbarSignBg rounded-btnRaduis">
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
