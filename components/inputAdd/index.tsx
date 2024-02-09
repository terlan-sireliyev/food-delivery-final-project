import React from "react";

const index = ({ textName }: any) => {
  return (
    <>
      <div className="text-left ">
        <div className="text-left">
          <label htmlFor="#" className="text-admin-colorEacampLogo2">
            {textName}
          </label>
        </div>
        <div>
          <input
            type="text"
            className="bg-admin-insideInput p-2 mt-2 w-full rounded text-admin-colorEacampLogo2"
          />
        </div>
      </div>
    </>
  );
};

export default index;
