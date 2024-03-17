const Index = ({
  textName,
  type = "text",
  setForm,
  name,
  placeholder,
}: any) => {
  const changeFucn = (e: any) => {
    const { name, value } = e.target;
    setForm((prevInpVal: any) => ({
      ...prevInpVal,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  return (
    <>
      <div className="text-left  ">
        <div className="text-left">
          <label htmlFor="#" className=" text-admin-colorEacampLogo2">
            {textName}
          </label>
        </div>
        <div>
          <input
            name={name}
            onChange={changeFucn}
            type={type}
            placeholder={placeholder}
            className=" p-4 mt-2 w-full rounded "
          />
        </div>
      </div>
    </>
  );
};

export default Index;
