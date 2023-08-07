import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/items/Navbar";
import DashbordPanel from "./components/home/DashbordPanel.JSX";
import BottomNavigation from "./components/items/BottomNavigation";
import Users from "./components/home/Users";
import Settings from "./components/home/Settings";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<DashbordPanel />} />
            <Route path="/user" element={<Users/>} />
            <Route path="/setting" element={<Settings/>} />
          </Routes>
          <BottomNavigation/>
        </Router>
      </div>
    </>
  );
}

export default App;
