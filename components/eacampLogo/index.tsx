import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-admin-navbarBG rounded-lg flex flex-col justify-center items-center mt-8 p-6">
        <div className="flex">
          <img
            src="../images/eacampLogo.svg"
            alt="Have yor error"
            className=""
          />
          <span className="ml-2 text-admin-colorEacampLogo1">EACAMP</span>
        </div>
        <div className="text-admin-colorEacampLogo2 text-eacampLog mt-2">
          Version: 3.2
        </div>
        <div className="text-admin-colorEacampLogo2 text-eacampLog">2022</div>
      </div>
    </>
  );
};

export default index;
