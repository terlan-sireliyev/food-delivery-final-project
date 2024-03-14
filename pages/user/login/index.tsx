import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { log } from "console";
const index = () => {
  const [checkSignin,setCheckSignIn] = useState([])
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

  //  access_token,  refresh_token


  const loginHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signin", {
        email: form.email,
        password: form.password,
      })
      .then((result) => {
        if (result.status === 200) {
          const { user: { access_token, refresh_token } } = result.data;
          
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          // console.log(result);
          
          router.push("/");
        }
      })
      .catch((err) => {
        alert('Daxil ola bilmediniz!')
      });
  };
  return (
    <>
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
        <div className="flex flex-col mx-auto">
          <div className="flex">
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2 text-user-registerBtn px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="login">Login</Link>
            </button>
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="register">Register</Link>
            </button>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default index;
