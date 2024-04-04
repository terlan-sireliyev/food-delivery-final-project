import React from "react";

const loginForm = ({ onchangeLogin, loginHandler }: any) => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            onChange={onchangeLogin}
            className="focus:outline-none w-96   border  border-admin-inputBorder p-2"
            placeholder="email"
          />
          <input
            name="password"
            onChange={onchangeLogin}
            type="password"
            className="focus:outline-none w-96  border  border-admin-inputBorder p-2"
            placeholder="password"
          />
          <button
            onClick={loginHandler}
            className="hover:bg-user-navbarSignBgHover  hover:text-admin-colorLogin bg-user-registerBtn p-2 rounded-regBtnRadius"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default loginForm;
