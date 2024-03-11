import React from "react";
import Navbarleft from "./navbarItem/Navbarleft";
import Navbarright from "./navbarItem/Navbarright";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <Navbarleft />
      <Navbarright />
    </div>
  );
};

export default Navbar;
