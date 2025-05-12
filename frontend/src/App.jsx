import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/courses";
import Signup from "./components/Signup";
import Contact from "./components/contact";
import About from "./components/about";



function App() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
