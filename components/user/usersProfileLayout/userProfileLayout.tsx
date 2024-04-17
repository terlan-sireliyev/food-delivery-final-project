import React from "react";
import UserProfileLeft from "../usersProfileLeft/index";
const UserProfileLayout = ({ children }: any) => {
  return (
    <div className="mt-4 ">
      <div className="flex ">
        <div className="w-[15%] max-lg:w-[20%] h-[260px] max-md:hidden bg-user-navbarBGColor flex">
          <UserProfileLeft />
        </div>

        <div className="mx-2 w-[85%] max-sm:w-[98%] max-lg:w-[80%] max-md:w-full ">
          <div className="text-center max-md:pl-2 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
