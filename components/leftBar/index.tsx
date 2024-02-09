import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const index = () => {
  return (
    <>
      <div className="bg-admin-bgLeftBar p-8 rounded">
        <Link href="home">
          <div className=" bg-admin-bgLeftBarCheck  p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Dashboard
          </div>
        </Link>

        <Link href="products">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faBorderNone} className="mr-2" />
            Products
          </div>
        </Link>
        <Link href="restaurant">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Restaurants
          </div>
        </Link>

        <Link href="category">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Category
          </div>
        </Link>
        <Link href="order">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Orders
          </div>
        </Link>
        <Link href="offer">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Offers
          </div>
        </Link>
        <Link href="products">
          <div className="p-2 mt-3 rounded">
            <FontAwesomeIcon icon={faList} className="mr-2" />
            Logout
          </div>
        </Link>
      </div>
      {/* <EcampLogo /> */}
    </>
  );
};

export default index;
