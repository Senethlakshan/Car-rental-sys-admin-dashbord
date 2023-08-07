import React from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-2 flex justify-around lg:hidden">
      <Link to="/" className="flex flex-col items-center">
        <FaHome size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/user" className="flex flex-col items-center">
        <FaSearch size={24} />
        <span className="text-xs mt-1">Search</span>
      </Link>
      <Link to="/setting" className="flex flex-col items-center">
        <FaUser size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
