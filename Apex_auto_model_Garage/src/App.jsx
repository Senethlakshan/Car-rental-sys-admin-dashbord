import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import DashbordPanel from "./components/home/DashbordPanel";

function App() {
  return (
    <div>
      
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashbordPanel/>} />
      </Routes>
    </Router>
        
    </div>
  );
}

export default App;
