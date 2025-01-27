"use client";

import { useState } from "react";

export default function Menu() {
  // State for each collapsible section
  const [isBreakfastOpen, setBreakfastOpen] = useState(false);
  const [isSpecialsOpen, setSpecialsOpen] = useState(false);
  const [isSoupsOpen, setSoupsOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold curlytext text-green-900 text-center mb-12">
          Our Menu
        </h1>

        {/* Breakfast Section */}
        <div className="mb-8">
          <button
            onClick={() => setBreakfastOpen(!isBreakfastOpen)}
            className="text-3xl font-bold text-sandal mb-4 border-b-2 border-gold pb-2 w-full text-left flex justify-between items-center"
          >
            Breakfast
            <span className="text-gold">{isBreakfastOpen ? "-" : "+"}</span>
          </button>
          {isBreakfastOpen && (
            <ul className="space-y-4 mt-4 pl-4 border-l-4 border-sandal">
              <li className="flex justify-between text-lg">
                <span>Idli (3)</span>
                <span className="text-gold">₹50</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Idli (1)</span>
                <span className="text-gold">₹12</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Poori Bhaji</span>
                <span className="text-gold">₹75</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Poori Bhaji (single)</span>
                <span className="text-gold">₹15</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Masala Dosa</span>
                <span className="text-gold">₹80</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Ghee Roast</span>
                <span className="text-gold">₹70</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Dosa</span>
                <span className="text-gold">₹110</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Plain Roast</span>
                <span className="text-gold">₹60</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Appam</span>
                <span className="text-gold">₹15</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Chappathi</span>
                <span className="text-gold">₹15</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Idiyappam</span>
                <span className="text-gold">₹15</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Porota</span>
                <span className="text-gold">₹20</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Puttu (With Curry and Pappadam)</span>
                <span className="text-gold">₹70</span>
              </li>
            </ul>
          )}
        </div>

        {/* Specials Section */}
        <div className="mb-8">
          <button
            onClick={() => setSpecialsOpen(!isSpecialsOpen)}
            className="text-3xl font-bold text-sandal mb-4 border-b-2 border-gold pb-2 w-full text-left flex justify-between items-center"
          >
            Specials
            <span className="text-gold">{isSpecialsOpen ? "-" : "+"}</span>
          </button>
          {isSpecialsOpen && (
            <ul className="space-y-4 mt-4 pl-4 border-l-4 border-sandal">
              <li className="flex justify-between text-lg">
                <span>Vegetable Biryani</span>
                <span className="text-gold">₹100</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Broccoli Biryani</span>
                <span className="text-gold">₹250</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Cashew Paneer Fried Rice</span>
                <span className="text-gold">₹180</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Butter Paneer Broccoli Noodles</span>
                <span className="text-gold">₹100</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Noodles</span>
                <span className="text-gold">₹250</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Chilli Fry</span>
                <span className="text-gold">₹180</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Butter Masala</span>
                <span className="text-gold">₹100</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Mutter Masala</span>
                <span className="text-gold">₹250</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Kurma</span>
                <span className="text-gold">₹180</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Makhani</span>
                <span className="text-gold">₹100</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Sizzler</span>
                <span className="text-gold">₹250</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable American Chop Suey</span>
                <span className="text-gold">₹180</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Vegetable Chop Suey</span>
                <span className="text-gold">₹250</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Tomato Fry</span>
                <span className="text-gold">₹180</span>
              </li>
            </ul>
          )}
        </div>

        {/* Soups Section */}
        <div className="mb-8">
          <button
            onClick={() => setSoupsOpen(!isSoupsOpen)}
            className="text-3xl font-bold text-sandal mb-4 border-b-2 border-gold pb-2 w-full text-left flex justify-between items-center"
          >
            Soups
            <span className="text-gold">{isSoupsOpen ? "-" : "+"}</span>
          </button>
          {isSoupsOpen && (
            <ul className="space-y-4 mt-4 pl-4 border-l-4 border-sandal">
              <li className="flex justify-between text-lg">
                <span>Cream of Vegetable Soup</span>
                <span className="text-gold">₹50</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Sweet Corn Vegetable Soup</span>
                <span className="text-gold">₹60</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Butter Soup</span>
                <span className="text-gold">₹120</span>
              </li>
              <li className="flex justify-between text-lg">
                <span>Paneer Butter Sweet Corn Soup</span>
                <span className="text-gold">₹120</span>
              </li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
