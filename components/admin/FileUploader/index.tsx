import { useRef } from "react";
import style from "./style.module.css";
import { fileStorage } from "../../../server/configs/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { v4 } from "uuid";

export const FileUploader = ({ setForm, setEditForm }: any) => {
  const hiddenFileInput = useRef<any>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imageRef = ref(fileStorage, `images/${file.name + v4()}`);

    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      setForm((prev: any) => ({ ...prev, img_url: url }));
      setEditForm((prev: any) => ({ ...prev, img_url: url }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <button className={`${style.buttonUpload}`} onClick={handleClick}>
        <svg
          className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ${style.svg}`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CloudUploadIcon"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
        </svg>
        <br />
        <p className={style.bder}>Upload</p>
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </>
  );
};
