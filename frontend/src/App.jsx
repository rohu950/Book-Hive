import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/courses";
import Signup from "./components/Signup";
import Contact from "./components/contact";
import About from "./components/about";
import { Toaster } from 'react-hot-toast';
import { useAuth, } from "../context/AuthProvider";

function App() {
  const [authUser, setAuthUser]=useAuth();
console.log(authUser);
  return (
   <>
     <div className="min-h-screen dark:bg-slate-900 dark:text-dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" 
        element={authUser ? <Courses /> : <Navigate to="/signup" />}

        />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      
      </Routes>
       <Toaster />
    </div>
   </>
  );
}

export default App;
