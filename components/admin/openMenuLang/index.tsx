import React from "react";
import { useRef, useState } from "react";
import style from "./style.module.css";
const index = () => {
  const [openLang, setOpenLang] = useState(false);
  const openMenuLang = () => {
    setOpenLang(!openLang);
  };
  const commonClose = () => {
    setOpenLang(false);
  };
  return (
    <>
      <div
        className={`${openLang ? style.commonClass : ""}`}
        onClick={commonClose}
      ></div>
      <div className="mx-2">
        <img
          onClick={openMenuLang}
          src="../images/langEn.svg"
          alt="Have yor error"
          className=""
        />

        <div
          style={{ width: "85px", height: "150px" }}
          className={`${
            openLang ? style.openLangClass : style.modalLangClass
          } bg-admin-openMenu1 `}
        >
          <ul className="z-40">
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              <img src="../images/abs.svg" alt="" className="m-auto" />
            </li>
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              <img src="../images/ru.svg" alt="" className="m-auto" />
            </li>
            <li className="bg-admin-colorLogin p-3 rounded-b-lg hover:bg-admin-inputBorder">
              <img src="../images/az.svg" alt="" className="m-auto" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
