import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="p-4">
        <div className="bg-user-navbarBGColor p-4 flex  justify-between ">
          <h1>Foody</h1>
          <div className="flex  gap-8">
            <ul className="flex gap-4">
              <li><a href="/">Home</a></li>
              <li><a href="/">Restaurant</a></li>
              <li><a href="/">About as</a></li>
              <li><a href="/">how it works</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
            <div>
              <input type="text" placeholder="Search" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
