import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";

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
        <Image
          onClick={openMenuLang}
          src="/images/langEn.svg"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <div
          style={{ width: "85px", height: "150px" }}
          className={`${
            openLang ? style.openLangClass : style.modalLangClass
          } bg-admin-openMenu1 `}
        >
          <ul className="z-40">
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              <Image
                src="/images/abs.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </li>
            <li className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder">
              <Image
                src="/images/ru.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </li>
            <li className="bg-admin-colorLogin p-3 rounded-b-lg hover:bg-admin-inputBorder">
              <Image
                src="/images/az.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
