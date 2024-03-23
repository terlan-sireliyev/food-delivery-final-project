import React from "react";

const index = ({
  placeholder,
  textName,
  type = "text",
  setForm,
  name,
  value,
}: any) => {
  const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm: any) => ({ ...prevForm, [name]: value }));
  };

  return (
    <>
      {type === "text" && (
        <input
          type="text"
          name={name}
          onChange={changeFunc}
          className="focus:outline-none w-96 border border-admin-inputBorder p-2"
          placeholder={placeholder}
        />
      )}
      {type === "radio" && (
        <>
          <div className="border border-admin-colorEacampLogo2 px-4 py-2">
            <input
              type="radio"
              name={name}
              value="creditCard"
              onChange={changeFunc}
              id="cart"
            />
            <label htmlFor="cart">By Credit card</label>
          </div>
          <br />
          <div className="border border-admin-colorEacampLogo2 px-4 py-2">
            <input
              type="radio"
              name={name}
              value="payAtDoor"
              onChange={changeFunc}
              className="ml-4 border-2 border-admin-colorEacampLogo1"
              id="door"
            />
            <label htmlFor="door">Pay at the door</label>
          </div>
        </>
      )}
      {type === "number" && (
        <input
          type="number"
          name={name}
          onChange={changeFunc}
          className="focus:outline-none mt-4 w-96 border border-admin-inputBorder p-2"
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default index;
