import React from "react";

const index = ({ image, name, price, count, amount }: any) => {
  return (
    <>
      <td className="pl-14 py-4 w-32 font-semibold text-gray-900 dark:text-white">
        <img src={image} alt="" />
      </td>
      <td className="px-5">{name}</td>
      <td className="pl-4 py-4 font-semibold text-gray-900 dark:text-white capitalize">
        {price}
      </td>
      <td className="px-6 font-semibold text-gray-900 dark:text-white">
        {count}
      </td>
      <td className="p-4 pl-4 font-semibold text-gray-900 dark:text-white">
        {amount}
      </td>
    </>
  );
};

export default index;
