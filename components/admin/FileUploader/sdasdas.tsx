import { useRef, useState } from "react";
import style from "./style.module.css";
import { fileStorage } from "../../../server/configs/firebase";
import { getDownloadURL, uploadBytes, ref, uploadBytesResumable } from "firebase/storage";
// import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
export const FileUploader = ({ setForm, form }: any) => {
    const hiddenFileInput = useRef<any>(null);
    const handleClick = (event: any) => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            // setImg(file);
            //show img file start
            // setForm((prev: any) => ({ ...prev, img_url: file }));
            //show img file end

            //upload side firebase start
            const name = file.name
            console.log(name);
            
            const storageRef = ref(fileStorage, `images/${name}`)
            // const uploadTask = uploadBytesResumable(storageRef, file)
            uploadBytes(storageRef,file).then((res)=> {
                return getDownloadURL(res.ref)
            }).then((result)=> {
                console.log(result);
            })


            // uploadTask.on(
            //     'state_changed',
            //     () => { },
            //     () => { },
            //     () => {
            //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //             //url is download url of file
            //             console.log(url);

            //         })
            //     },
            // )

            // uploadTask.on("state_changed", () => {
            //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //         //url is download url of file
            //         console.log(url);
            //     })
            // })

            // uploadBytes(imgRef, file).then(() => {
            //     console.log(file);

            //     console.log("File uploaded successfully!");
            // }).catch((error) => {
            //     console.error("Error uploading file: ", error);
            // });
            //upload side firebase end
        }

        // Additional code for handling other form data changes can be placed here
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
            {/* <NavbarAdmin /> */}
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }} // Make the file input element invisible
            />
            <button >Clic</button>

        </>
    );
};
