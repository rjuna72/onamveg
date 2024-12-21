import React from "react";

const Navbar = () => {
  return (
    <header className="bg-yellow-200 border-b border-yellow-300 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold font-serif text-yellow-800">
            <a href="/">Onam.Veg</a>
          
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/menu" className="text-yellow-700 hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="text-yellow-700 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-yellow-700 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
