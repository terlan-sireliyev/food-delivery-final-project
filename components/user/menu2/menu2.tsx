import React from "react";
const Menu2 = () => {
  return (
    <>
      <div className="flex m-auto w-3/4  mt-24   max-lg:flex-col-reverse ">
        <div className="w-1/2 max-lg:w-full">
          <div className=" m-auto">
            <div className="relative  w-[400px]   m-auto ">
              <img
                src="images/userImg/menus/g2.svg"
                alt="Have your error"
                className="h-full w-full mr-4 max-lg:w-full  max-lg:m-auto object-cover "
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <h1 className="  font-bold text-size50 text-left max-lg:text-welcome">
            Menu That AlwaysMake You Fall In Love
          </h1>
          <p className="mt-2 text-admin-inputBorder text-left">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu2;
