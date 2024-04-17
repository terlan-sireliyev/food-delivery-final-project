import React from "react";
import UserProfileLayout from "../../../../components/user/usersProfileLayout/userProfileLayout";
import UserInputAdd from "../../../../components/user/userInputAdd/index";
import { FileUploader } from "../../../../components/admin/FileUploader";
const index = () => {
  return (
    <>
      <div className="">
        <UserProfileLayout>
          <h1 className="text-left text-size1 font-bold ">Your profile</h1>
          <div className="border border-admin-colorEacampLogo1 mt-2 mb-4">
            <FileUploader className="w-full bg-admin-bgCheck1" />
          </div>
          <div className="grid grid-cols-2 gap-4 max-2xl:grid-cols-2">
            <UserInputAdd
              type="text"
              textName="Full Name"
              name="full_name"
              placeholder="Full Name"
            />
            <UserInputAdd
              type="text"
              textName="User Name"
              name="User_Name"
              placeholder="User Name"
            />
            <UserInputAdd
              type="number"
              textName="Contact Number"
              name="Contact_Number"
              placeholder="Contact Number"
            />
            <UserInputAdd
              type="text"
              textName="Email"
              name="Email"
              placeholder="Email"
            />
            <UserInputAdd
              type="text"
              textName="Address"
              name="Address"
              placeholder="Address"
            />
            <button className="bg-user-btnSave  rounded text-user-navbarSignBgHover font-bold h-14 mt-[29px]">
              Save
            </button>
          </div>
        </UserProfileLayout>
      </div>
    </>
  );
};

export default index;
