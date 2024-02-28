import React from "react";

const Input = ({ label, type, placeholder, loginRef }: any) => {
  return (
    <>
      {label && <label htmlFor="">{label}</label>}

      <input
        type={type}
        className="focus:outline-none shadow appearance-none border border-admin-inputBorder rounded w-full px-3 py-3 text-gray-700 mb-6 leading-tight"
        placeholder={placeholder}
        ref={loginRef}
      />
    </>
  );
};

export default Input;
