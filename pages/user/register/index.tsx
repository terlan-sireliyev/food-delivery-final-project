import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [form, setForm] = useState<{
    name: string;
    username: string;
    email: string;
    password: string;
  }>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const registerHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signup", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        if (res.status === 201) {
          router.push("login");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex max-lg:flex-col-reverse mt-4 mb-4 ">
        <div className="flex max-lg:mt-12">
          <div className="relative flex max-lg:w-full">
            <img
              src="/images/userImg/resgister/log1.svg"
              alt="Have your error"
              className="w-full"
            />
            <img
              src="/images/userImg/resgister/reg1.svg"
              alt="Have your error"
              className="absolute top-0 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <div className="flex">
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="login">Login</Link>
            </button>
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="register">Register</Link>
            </button>
          </div>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
