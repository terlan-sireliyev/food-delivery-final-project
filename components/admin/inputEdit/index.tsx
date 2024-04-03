const Index = ({
  textName,
  editForm,
  setForm,
  setEditForm,
  type = "text",
  name,
  placeholder,
  value,
}: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditForm((prevInpVal: any) => ({
      ...prevInpVal,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  return (
    <div>
      <div>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className="border border-admin-colorEacampLogo1 my-2 p-2 rounded-regBtnRadius "
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Index;
