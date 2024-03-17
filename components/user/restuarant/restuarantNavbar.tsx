import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const RestuarantNavbar = ({ img_url, name, category_id }: any) => {
  const router = useRouter();

  return (
    <>
      <nav className="list-none mt-4 p-2  m-auto text-left">
        <Link
          href={`/user/restuarants?category=${category_id}`}
          className={`flex items-center  px-3 py-2  rounded-regBtnRadius  ${
            router?.query && router.query.category === category_id
              ? "bg-user-LinkColor"
              : ""
          }`}
        >
          <img
            src={img_url}
            className=" w-4 h-4 rounded-iconsRadius  mr-2 object-cover"
            alt=""
          />
          {name}
        </Link>
      </nav>
    </>
  );
};

export default RestuarantNavbar;
