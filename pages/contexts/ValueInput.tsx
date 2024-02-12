import React from "react";
import { createContext, useContext, useState, useRef } from "react";

const imgProvider = createContext({});

const addInput = ({ children }: any) => {
  const ref3 = useRef<any>(null);

  const addProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("asd");
    // console.log(ref3.current.value);
  };

  return (
    <imgProvider.Provider value={{ ref3, addInput, addProducts }}>
      {children}
    </imgProvider.Provider>
  );
};

export default addInput;

export const useValue = () => {
  return useContext(imgProvider);
};
