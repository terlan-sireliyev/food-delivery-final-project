import React from "react";
import UserProfileLeft from "../usersProfileLeft/index";
const UserProfileLayout = ({ children }: any) => {
  return (
    <div className="mt-4 ">
      <div className="flex">
        <div className="w-1/6 bg-user-navbarBGColor flex">
          <UserProfileLeft />
        </div>

        <div className="mx-2 p-2 w-5/6  ">
          <div className="text-center ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
