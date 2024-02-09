import React, { ReactElement } from "react";
import Input from "../../../components/input";
import Button from "../../../components/buttonSign";

const Login = () => {
  return (
    <>
      <div className="d-flex p-4 bg-admin-bg h-dvh">
        <header>
          <h1 className="text-admin-colorLogin ">Foody</h1>
        </header>
        <div className="bg-admin-bgCheck h-80 mt-1 w-3/6 m-auto">
          <div className="flex">
            <div className="w-1/2 h-80 bg-admin-welcomeBackColor p-10">
              <h1 className="text-center text-welcome mb-8 text-admin-welcomeText">
                Welcome admin
              </h1>
              <div>
                <Input placeholder="Username" type="text" />
              </div>
              <div>
                <Input placeholder="Password" type="password" />
              </div>
              <div>
                <Button text={"Sign in"} />
              </div>
            </div>
            <div className="w-1/2 h-80 ">
              <img
                src="../images/Login.svg"
                alt="Have yor error"
                className="h-80 w-80 m-auto"
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
export default Login;
