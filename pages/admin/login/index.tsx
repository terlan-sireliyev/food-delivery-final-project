import React, { FormEvent, useCallback, useEffect, useRef } from "react";
import Input from "../../../components/admin/input";
import Button from "../../../components/admin/buttonSign";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const Login: React.FC = () => {
  const router = useRouter();

  const notify = (check: boolean) => {
    if (check) {
      toast.success("sign completed");
      setTimeout(() => router.push("../admin/dashboard"), 1000);
    } else {
      toast.warning("sign uncompleted");
    }
  };

  const inpUsernameRef = useRef<HTMLInputElement>(null);
  const inpPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      !localStorage.getItem("username") ||
      !localStorage.getItem("password")
    ) {
      localStorage.setItem("username", "terlan");
      localStorage.setItem("password", "terlan123");
    }
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      inpUsernameRef.current?.value === localStorage.getItem("username") &&
      inpPasswordRef.current?.value === localStorage.getItem("password")
    ) {
      notify(true);
    } else {
      notify(false);
    }
  }, []);

  return (
    <>
      <div className="d-flex p-5 bg-admin-bg  h-dvh ">
        <div className="bg-admin-bgCheck h-96 mt-1  w-3/6 m-auto max-sm:w-full">
          <div className="flex mt-64 ">
            <form
              onSubmit={onSubmit}
              className="xl:w-1/2 max-md:w-full  h-96 bg-admin-welcomeBackColor p-10 max-md:p-4"
            >
              <h1 className=" max-md:mt-4 text-center max-md:text-products  text-welcome mb-8 text-admin-welcomeText">
                Welcome Admin
              </h1>
              <div>
                <Input
                  placeholder="Username"
                  type="text"
                  loginRef={inpUsernameRef}
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  loginRef={inpPasswordRef}
                />
              </div>
              <div className=" max-md:mt-4">
                <Button text={"Sign in"} />
              </div>
            </form>
            <div className="xl:w-1/2  h-96  max-sm:hidden max-md:hidden max-lg:hidden">
              <img
                src="../images/Login.svg"
                alt="Have yor error"
                className="h-96 w-80 m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
