// Index.tsx
import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
// import useLangStore from "../../../pages/zustand/zustandLang";
import { useRouter } from "next/router";
// Define an interface for the Zustand store
// interface LangChangeStore {
//   langValue: (language: any) => void;
//   selectedLanguage: string; // Change the type to string
// }

const Index = () => {
  // Explicitly specify the type of langChange
  // const { setSelectedLanguage, getSelectedLanguage } = useLangStore();
  const [openLang, setOpenLang] = useState(false);
  const router = useRouter();
  const openMenuLang = () => {
    setOpenLang(!openLang);
  };

  const commonClose = () => {
    setOpenLang(false);
  };

  // const handleLanguageChange = (language) => {
  //   setSelectedLanguage(language); // Update the selected language
  //   console.log("Selected Language:", getSelectedLanguage()); // Log the updated language
  // };
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
          alt="English"
        />
        <div
          style={{ width: "85px", height: "150px" }}
          className={`${
            openLang ? style.openLangClass : style.modalLangClass
          } bg-admin-openMenu1 `}
        >
          <ul className="z-40">
            <li
              className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
              // onClick={() => handleLanguageChange("en")}
            >
              <Image
                src="/images/abs.svg"
                width={40}
                height={40}
                alt="English"
              />
            </li>
            <li
              className="bg-admin-colorLogin p-3 hover:bg-admin-inputBorder"
              // onClick={() => handleLanguageChange("ru")}
            >
              <Image
                src="/images/ru.svg"
                width={40}
                height={40}
                alt="Russian"
              />
            </li>
            <li
              className="bg-admin-colorLogin p-3 rounded-b-lg hover:bg-admin-inputBorder"
              // onClick={() => handleLanguageChange("az")}
            >
              <Image
                src="/images/az.svg"
                width={40}
                height={40}
                alt="Azerbaijani"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
