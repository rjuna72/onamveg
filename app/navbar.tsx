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
      <button
        className="fixed top-4 right-4 text-white text-3xl bg-yellow-900 rounded-full p-3 shadow-md focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="bg-yellow-800 absolute top-16 right-4 w-48 shadow-md flex flex-col items-center space-y-4 py-4 rounded-md z-50">
          <Link href="/#menu">
            <span
              className="hover:text-yellow-300 text-lg text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </span>
          </Link>
          <Link href="/#about">
            <span
              className="hover:text-yellow-300 text-lg text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
