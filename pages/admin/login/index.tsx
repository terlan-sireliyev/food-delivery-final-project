import React, { ReactElement } from "react";
import Input from "../../../components/admin/input";
import Button from "../../../components/admin/buttonSign";

const Login = () => {
  return (
    <>
      <div className="d-flex p-5 bg-admin-bg  h-dvh ">

        <div className="bg-admin-bgCheck h-96 mt-1  w-3/6 m-auto max-sm:w-full   ">

          <div className="flex mt-64 ">
            <div className="xl:w-1/2 max-md:w-full  h-96 bg-admin-welcomeBackColor p-10 max-md:p-4">
              <h1 className=" max-md:mt-4 text-center max-md:text-products  text-welcome mb-8 text-admin-welcomeText">
                Welcome Admin
              </h1>
              <div>
                <Input placeholder="Username" type="text" />
              </div>
              <div>
                <Input placeholder="Password" type="password" />
              </div>
              <div className=" max-md:mt-4">
                <Button text={"Sign in"} />
              </div>
            </div>
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
      ;
    </>
  );
};
// Login.getLayout = function getLayout(page: ReactElement) {
//   return <div>{page}</div>;
// };
export default Login;
