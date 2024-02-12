import React from "react";
// import { useRef } from "react";
// import { useValue } from "../../pages/contexts/ValueInput";

const Index = ({ textName }: any) => {
  // const { ref3 } = useValue(); // Removed addInput since it's not used
  // const refnameVal = useRef<any>(null);

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
            // ref={ref3}
            type="text"
            className="bg-admin-insideInput p-2 mt-2 w-full rounded text-admin-colorEacampLogo2"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
