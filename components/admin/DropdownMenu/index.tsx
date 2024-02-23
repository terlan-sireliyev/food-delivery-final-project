import React, { useState } from "react";
import style from "./dropwdon.module.css";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categoryData: Category[];
  textName: string;
  name: string;
  setForm: React.Dispatch<React.SetStateAction<any>>;
}

const DropDownMenu: React.FC<Props> = ({
  categoryData,
  textName,
  name,
  setForm,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Choose One");

  const categoryChangeHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedItemName = e.currentTarget.textContent;
    const selectedItem = categoryData.find(
      (item) => item.name === selectedItemName
    );

    if (selectedItem) {
      const { id } = selectedItem;
      setForm((prev: any) => ({ ...prev, category_id: id }));
      setSelected(selectedItemName || "");
    } else {
      console.error("No item found with name:", selectedItemName);
    }

    setIsActive(false);
  };
  return (
    <div className={style.dropdown}>
      <div className="text-left mb-2 text-admin-colorEacampLogo2">
        {textName}
      </div>
      <div className={style.dropdownBtn} onClick={() => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className={style.dropdownContent}>
          {categoryData.map((item) => (
            <div
              key={item.id}
              className={style.dropdownItem}
              onClick={(e) => categoryChangeHandler(e)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
