import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../../../components/user/loginAndRegisterForm/loginForm";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const [form, setForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const onchangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const loginHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signin", {
        email: form.email,
        password: form.password,
      })
      .then((result) => {
        if (result.status === 200) {
          toast("Sizin məlumatlar doğrudur");
          setTimeout(() => {
            router.push("/");
          }, 3000);
          const {
            user: { access_token, refresh_token },
          } = result.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
        }
      })
      .catch((err: any) => {
        toast("Sizin email və ya parolunuz düzgün deyil ya da inputlar boşdur");
      });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex max-lg:flex-col-reverse mt-4 mb-4 ">
        <div className="flex max-lg:mt-12">
          <div className="relative flex max-lg:w-full  ">
            <img
              src="/images/userImg/resgister/log1.svg"
              alt="Have your error"
              className="w-full"
            />
            <img
              src="/images/userImg/resgister/log2.svg "
              alt="Have your error"
              className="absolute top-0 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto max-lg:mx-auto max-xl:ml-4">
          <div className="flex">
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2 text-user-registerBtn px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="login">Login</Link>
            </button>
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="register">Register</Link>
            </button>
          </div>
          <LoginForm
            onchangeLogin={onchangeLogin}
            loginHandler={loginHandler}
          />
        </div>
      </div>
    </>
  );
};

export default index;
