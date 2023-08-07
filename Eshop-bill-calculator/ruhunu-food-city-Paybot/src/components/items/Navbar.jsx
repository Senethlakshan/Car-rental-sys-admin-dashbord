import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cartItemCount = 3; // Replace this with your actual cart item count

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-500 px-4 py-2 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Ruhunu payGo</div>
        <div className="flex items-center">
          <Link to="/cart" className="text-white mr-4">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="bg-red-500 rounded-full px-2 py-1 text-white ml-2">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button className="lg:hidden text-white" onClick={toggleMenu}>
            {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow">
            {/* Add your menu items here */}
            <a
              href="#home"
              className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              About
            </a>
            <a
              href="#contact"
              className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-yellow-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
