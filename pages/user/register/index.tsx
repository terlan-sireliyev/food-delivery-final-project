import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import LoginAndRegisterForm from "../../../components/user/loginAndRegisterForm/index";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  const [form, setForm] = useState<{
    name: string;
    username: string;
    email: string;
    password: string;
  }>({ name: "", username: "", email: "", password: "" });

  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
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
          toast("Təbriklər qeydiyyatdan keçdiniz !");
          setTimeout(() => {
            router.push("login");
          }, 2000);
        }
      })
      .catch((err) => {
        toast("Qeydiyyatınız alınmadı");
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
        <div className="flex flex-col mx-auto max-lg:mx-auto max-xl:ml-4">
          <div className="flex">
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="login">Login</Link>
            </button>
            <button className="hover:bg-user-navbarSignBgHover hover:text-admin-colorLogin mb-2  px-6 py-2 rounded-regBtnRadius m-auto">
              <Link href="register">Register</Link>
            </button>
          </div>
          <LoginAndRegisterForm
            registerHandler={registerHandler}
            changeFunc={changeFunc}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
