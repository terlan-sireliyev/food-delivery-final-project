const Index = ({ textName, type = "text", setForm, name }: any) => {
  const changeFucn = (e: any) => {
    const { name, value } = e.target;
    setForm((prevInpVal: any) => ({
      ...prevInpVal,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

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
            name={name}
            onChange={changeFucn}
            type={type}
            className="bg-admin-insideInput p-2 mt-2 w-full rounded text-admin-colorEacampLogo2"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
