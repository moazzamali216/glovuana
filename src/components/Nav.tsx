"use client";
import { useEffect, useState } from "react";
import gsap from "gsap"; // GSAP library for animation

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // GSAP animation to slide the navbar in from the top
    gsap.from(".navbar", {
      y: -100, // Initially position navbar above the screen
      opacity: 0, // Make it invisible at first
      duration: 1, // 1-second animation duration
      ease: "power2.out", // Easing function for smoothness
    });
  }, []);

  return (
    <nav className="navbar px-10 text-black  fixed w-full top-10 left-0 z-50">
      {/* Navbar container */}
      <div className="max-w-screen-xl mx-auto rounded-xl shadow-lg  p-4 flex  bg-white justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#414141]">
          <a href="/">Logo</a>
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden  md:flex space-x-12 jakarta">
          <a
            href="#home"
            className="hover:text-green-500 transition duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-green-500 transition duration-300 transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-green-500 transition duration-300 transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-green-500 transition duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
        <div>
          <button className="bg-[#419579] jakarta px-3 py-2 rounded-lg text-white">contact</button>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens when open) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white px-4 py-2 space-y-4`}
      >
        <a
          href="#home"
          className="block hover:text-green-500 transition duration-300 transform hover:scale-105"
        >
          Home
        </a>
        <a
          href="#about"
          className="block hover:text-green-500 transition duration-300 transform hover:scale-105"
        >
          About
        </a>
        <a
          href="#services"
          className="block hover:text-green-500 transition duration-300 transform hover:scale-105"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block hover:text-green-500 transition duration-300 transform hover:scale-105"
        >
          Contact
        </a>
        <a
            href="#contact"
            className="hover:text-green-500 transition duration-300 transform hover:scale-105"
          >
            Partner
          </a>
      </div>
    </nav>
  );
}
