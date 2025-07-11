import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-10 py-4 shadow-md bg-white overflow-hidden">

      <div className="z-10">
        <img
          src="/Images/logoMeetSM.png"
          alt="SmartMeet Logo"
          className="h-20 max-w-30 ml-20"
        />
      </div>

  <ul className="z-10 hidden md:flex space-x-25 font-medium text-lg" style={{ color: "#2c2e5f", fontSize: '19px', fontWeight: 'bold' }}>
 
  <li>
    <a href="#about" className="hover:text-[#7d64fb] transition duration-200">About Us</a>
  </li>
  <li>
    <a href="#features" className="hover:text-[#7d64fb] transition duration-200">Features</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-[#7d64fb] transition duration-200">Contact Us</a>
  </li>
</ul>


      {/* Buttons */}
      <div className="z-10 flex items-center space-x-14 mr-20">
   <Link
  to="/signin"
  className="bg-white text-[#2c2e5f] border border-[#2c2e5f] px-5 py-2 rounded-full hover:bg-[#7d64fb] hover:text-white transition font-medium"
>
  Sign In
</Link>


     
      </div>

  
    </nav>
  );
}

export default Navbar;
