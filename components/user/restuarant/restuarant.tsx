import React from "react";
import RestuarantCard from "./restuarantCard";
import Link from "next/link";

const Restuarant = () => {
  return (
    <>
      <div className="flex mt-4">
        <div className="w-1/6  bg-user-navbarBGColor ">
          <nav className="list-none p-2 mt-8 w-1/2 m-auto text-left">
            <li className="bg-user-LinkColor text-user-navbarSignBg font-bold px-4 py-2 rounded-regBtnRadius">
              <Link href="">All</Link>
            </li>
            <li className="font-bold px-4 py-2 rounded-regBtnRadius">
              <Link href="">Fast Food</Link>
            </li>
          </nav>
        </div>
        <div className="w-5/6 ps-4 grid grid-cols-4 gap-4">
          <RestuarantCard />
          <RestuarantCard />
          <RestuarantCard />
          <RestuarantCard />
          <RestuarantCard />
          <RestuarantCard />
          <RestuarantCard />
        </div>
      </div>
    </>
  );
};

export default Restuarant;
