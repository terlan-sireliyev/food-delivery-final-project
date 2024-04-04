import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const index = ({ registerHandler, changeFunc }: any) => {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <input
          type="text"
          name="name"
          onChange={changeFunc}
          className="focus:outline-none w-96 border border-admin-inputBorder p-2"
          placeholder="name"
        />
        <input
          type="text"
          name="username"
          onChange={changeFunc}
          className="focus:outline-none w-96 border border-admin-inputBorder p-2"
          placeholder="username"
        />
        <input
          type="email"
          name="email"
          onChange={changeFunc}
          className="focus:outline-none w-96 border border-admin-inputBorder p-2"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={changeFunc}
          className="focus:outline-none w-96 border border-admin-inputBorder p-2"
          placeholder="password"
        />
        <button
          onClick={registerHandler}
          className="hover:bg-user-navbarSignBgHover  hover:text-admin-colorLogin bg-user-registerBtn p-2 rounded-regBtnRadius"
        >
          Register
        </button>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </form>
  );
};

export default index;
