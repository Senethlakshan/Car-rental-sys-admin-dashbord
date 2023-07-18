import React, { useState } from "react";
import HomePage from "./HomePage";
import CarsDetails from "./CarsDetails";
import Inbox from "./Inbox";
import Setting from "./Setting";
import Chat from "./Chat";
import { FaHome, FaCar, FaInbox, FaComments, FaCog,FaRegUser } from "react-icons/fa";

function SlideBar() {
  const [currentPage, setCurrentPage] = useState("pannel");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Slide bar */}
      <div className="w-1/8 h-screen p-3 ml-3 my-1 rounded-2xl bg-black">
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <ul>
              <li
                className={`flex p-2 rounded-lg items-center justify-center cursor-pointer text-white hover:bg-gray-700 ${
                  currentPage === "pannel"
                    ? "bg-blue-500 border-blue-600 border-solid border-2 hover:bg-blue-600"
                    : ""
                }`}
                onClick={() => handlePageChange("pannel")}
              >
                <FaHome className="m-2" />
                {/* Home */}
              </li>
              <li
                className={`flex p-2 rounded-lg items-center justify-center cursor-pointer text-white hover:bg-gray-700 ${
                  currentPage === "cars"
                    ? "bg-gray-800 border-gray-600 border-solid border-2 hover:bg-gray-600"
                    : ""
                }`}
                onClick={() => handlePageChange("cars")}
              >
                <FaCar className="m-2" />
                {/* Cars */}
              </li>
              <li
                className={`flex p-2 rounded-lg justify-center items-center cursor-pointer text-white hover:bg-gray-700 ${
                  currentPage === "inbox"
                    ? "bg-gray-800 border-gray-600 border-solid border-2 hover:bg-gray-600"
                    : ""
                }`}
                onClick={() => handlePageChange("inbox")}
              >
                <FaInbox className="m-2" />
                {/* Inbox */}
              </li>
              <li
                className={`flex p-2 rounded-lg items-center justify-center cursor-pointer text-white hover:bg-gray-700 ${
                  currentPage === "chat"
                    ? "bg-gray-800 border-gray-600 border-solid border-2 hover:bg-gray-600"
                    : ""
                }`}
                onClick={() => handlePageChange("chat")}
              >
                <FaComments className="m-2" />
                {/* Chat */}
              </li>
              <li
                className={`flex p-2 rounded-lg items-center justify-center cursor-pointer text-white hover:bg-gray-700 ${
                  currentPage === "setting"
                    ? "bg-gray-800 border-gray-600 border-solid border-2 hover:bg-gray-600"
                    : ""
                }`}
                onClick={() => handlePageChange("setting")}
              >
                <FaCog className="m-2" />
                {/* Setting */}
              </li>
            </ul>
          </div>
          <div className="bg-gray-300 p-3 rounded-full flex justify-center">
           <FaRegUser/>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-1">
        {currentPage === "pannel" && <HomePage />}
        {currentPage === "cars" && <CarsDetails />}
        {currentPage === "inbox" && <Inbox />}
        {currentPage === "chat" && <Chat />}
        {currentPage === "setting" && <Setting />}
      </div>
    </div>
  );
}

export default SlideBar;
