// import React from "react";
// import { createContext, useContext, useState } from "react";

// interface ImgContextType {
//   file: string;
//   setFile: React.Dispatch<React.SetStateAction<string>>;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const imgProvider = createContext<ImgContextType>({
//   file: "",
//   setFile: () => {},
//   handleChange: () => {},
// });

// const FileUploader = ({ children }: any) => {
//   const [file, setFile] = useState<string>("");

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files![0]));
//   }

//   return (
//     <imgProvider.Provider value={{ file, setFile, handleChange }}>
//       {children}
//     </imgProvider.Provider>
//   );
// };

// export default FileUploader;

// export const useImg = () => {
//   return useContext(imgProvider);
// };
