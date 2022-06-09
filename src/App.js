import React from "react";
import  "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import Tracker from "./components/Tracker";



function App() {
  return (
  <main className="bg-gray-900 w-screen lg:overflow-x-hidden">
  <Router>
   <MyNav />
   <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  </Router>
  
  </main>
    
    
      
      
    
  );
}

export default App;
