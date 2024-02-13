import React from "react";
const index = ({ textName, type = "text", setForm, name }: any) => {
  const changeFucn = (e: any) => {
    const { name, value } = e.target;

    setForm((prevInpVal: any) => (
      {
        ...prevInpVal,
        [name]: value,
      }));
  }
  return (
    <>
      <div className="text-left ">
        <div className="text-left">
          <label htmlFor="#" className="text-admin-colorEacampLogo2">
            {textName}
          </label>
        </div>
        <div>
          <textarea
            name={name}
            onChange={changeFucn}
            id=""
            cols={45}
            rows={6}
            className="bg-admin-insideInput p-2 mt-2 w-full rounded text-admin-colorEacampLogo2"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default index;
