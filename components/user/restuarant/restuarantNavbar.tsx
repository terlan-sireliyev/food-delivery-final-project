import React from "react";
import Link from "next/link";

const RestuarantNavbar = ({ img_url, name, slug }: any) => {
  return (
    <>
      <nav className="list-none mt-4 w-1/2 m-auto text-left">
        {/* <li className="bg-user-LinkColor text-user-navbarSignBg font-bold px-4 py-2 rounded-regBtnRadius">
          <Link href="">All</Link>
        </li> */}
        <li className="font-bold px-4 py-2 rounded-regBtnRadius ">
          <Link
            href={`restuarants=?${slug}`}
            className="flex items-center  rounded-regBtnRadius"
          >
            <img
              src={img_url}
              className=" w-4 h-4 rounded-iconsRadius  mr-2"
              alt=""
            />
            {name}
          </Link>
        </li>
      </nav>
    </>
  );
};

export default RestuarantNavbar;
