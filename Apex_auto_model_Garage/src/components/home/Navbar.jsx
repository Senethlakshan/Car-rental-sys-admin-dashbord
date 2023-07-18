import React from "react";
import logo from "../../assets/logo-removebg-preview.png";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-30 " src={logo} alt="Logo" />
          </div>
          <div>
            <div className="bg-gray-300 px-5 py-2 rounded-3xl flex items-center">
              <FaBell className="mr-2" />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
