import React from "react";
import Link from "next/link"; // Import Next.js Link for navigation

const Navbar = () => {
  return (
    <header className="bg-yellow-200 border-b border-yellow-300 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold font-serif text-yellow-800">
          <Link href="/">Onam.Veg</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/menu" className="text-yellow-700 hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-yellow-700 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-yellow-700 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
