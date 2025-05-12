import React from 'react';
import Navbar from './Navbar'; // Adjust path if needed
import Footer from './Footer'; // Adjust path if needed

function About() {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}

      <div className="min-h-screen bg-white dark:bg-slate-950 px-6 py-12 pt-20 text-black dark:text-white transition-colors duration-300">
        {/* ↑ added pt-20 to create space below a fixed navbar */}
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to MyApp! We are committed to delivering the best services to our users.
        </p>
        <p className="text-lg mb-4">
          Our mission is to solve real-world problems with scalable and reliable software solutions.
        </p>
        <p className="text-lg">
          Thank you for choosing us!
        </p>
      </div>

      <Footer /> {/* Footer at the bottom */}
    </>
  );
}

export default About;
