"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon / Morphing Button */}
      <button
        className={`fixed top-4 left-4 z-50 bg-yellow-500 hover:bg-yellow-600 text-white shadow-md focus:outline-none transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-56 h-56 rounded-3xl flex flex-col items-center justify-center space-y-4"
            : "w-14 h-14 rounded-3xl flex items-center justify-center"
        }`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {!isOpen ? (
          // Hamburger Icon
          <span className="text-3xl">☰</span>
        ) : (
          // Menu Links
          <>
            <Link href="/">
              <span
                className="hover:text-yellow-300 text-lg text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link href="/menu">
              <span
                className="hover:text-yellow-300 text-lg text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </span>
            </Link>
            <Link href="/about">
              <span
                className="hover:text-yellow-300 text-lg text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span
                className="hover:text-yellow-300 text-lg text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                 Contact
              </span>
            </Link>
            <Link href="/careers">
              <span
                className="hover:text-yellow-300 text-lg text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                 Careers
              </span>
            </Link>
          </>
        )}
      </button>
    </>
  );
}
