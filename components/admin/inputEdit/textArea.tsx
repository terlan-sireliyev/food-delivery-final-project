import React from "react";
const TextArea = ({
  textName,
  editForm,
  setForm,
  setEditForm,
  type = "text",
  name,
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
    <>
      <textarea
        placeholder="your description"
        name={name}
        value={value}
        cols={22}
        rows={3}
        className="border border-admin-colorEacampLogo1 my-2 p-2 rounded-regBtnRadius"
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default TextArea;
