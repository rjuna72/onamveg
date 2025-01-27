"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Hamburger Icon */}
      <button
        className="fixed top-4 right-4 text-white text-3xl bg-yellow-900 rounded-full p-3 shadow-md focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-yellow-800 absolute top-16 right-4 w-48 shadow-md flex flex-col items-center space-y-4 py-4 rounded-md z-50">
          <a
            href="/"
            className="hover:text-yellow-300 text-lg text-white"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Home
          </a>
          <a
            href="/menu"
            className="hover:text-yellow-300 text-lg text-white"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Menu
          </a>
          <a
            href="/about"
            className="hover:text-yellow-300 text-lg text-white"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            About Us
          </a>
        </div>
      )}
    </>
  );
}
