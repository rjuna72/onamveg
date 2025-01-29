"use client";

import Head from "next/head";
import { useState } from "react";

export default function Menu() {
  const [isBreakfastOpen, setBreakfastOpen] = useState(false);
  const [openDescriptions, setOpenDescriptions] = useState<Record<string, boolean>>({});

  const toggleDescription = (item: string) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems: Record<string, { name: string; price: number; desc: string }[]> = {
    Breakfast: [
      { name: "Idli (3)", price: 50, desc: "Soft steamed rice cakes served with chutney & sambar." },
      { name: "Masala Dosa", price: 80, desc: "Crispy dosa stuffed with spiced potato filling." },
      { name: "Ghee Roast", price: 70, desc: "Golden crispy dosa roasted with pure ghee." }
    ],
    Specials: [
      { name: "Vegetable Biryani", price: 100, desc: "Aromatic basmati rice cooked with fresh vegetables and spices." },
      { name: "Paneer Chilli Fry", price: 180, desc: "Spicy stir-fried paneer tossed with capsicum & chilies." },
      { name: "Butter Paneer Broccoli Noodles", price: 100, desc: "Noodles tossed with paneer, broccoli, and rich butter sauce." }
    ],
    Soups: [
      { name: "Cream of Vegetable Soup", price: 50, desc: "Smooth, creamy soup made with fresh vegetables." },
      { name: "Sweet Corn Vegetable Soup", price: 60, desc: "A comforting soup with sweet corn and mixed veggies." },
      { name: "Paneer Butter Soup", price: 120, desc: "Creamy soup infused with paneer and butter flavors." }
    ]
  };

  return (
    <>
      <Head>
        <title>Menu - Onam Veg</title>
        <meta name="description" content="Explore our delicious vegetarian menu at Onam Veg. From breakfast to special dishes and soups, we have something for everyone." />
        <meta name="keywords" content="vegetarian food, Onam Veg, Kerala cuisine, Indian food, best vegetarian restaurant" />
        <meta name="author" content="Onam Veg" />
      </Head>
      <div className="bg-white min-h-screen text-gray-900">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold curlytext text-green-900 text-center mb-12">
            Our Menu
          </h1>

          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-8">
              <button
                onClick={() => setBreakfastOpen(!isBreakfastOpen)}
                className="text-3xl font-bold text-sandal mb-4 border-b-2 border-gold pb-2 w-full text-left flex justify-between items-center"
              >
                {category}
                <span className="text-gold">{isBreakfastOpen ? "-" : "+"}</span>
              </button>
              <ul className="space-y-4 mt-4 pl-4 border-l-4 border-sandal">
                {items.map((item) => (
                  <li key={item.name} className="text-lg">
                    <div className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <div className="flex gap-3 items-center">
                        <span className="text-gold">₹{item.price}</span>
                        <button
                          onClick={() => toggleDescription(item.name)}
                          className="text-sm text-blue-600 border px-2 py-1 rounded"
                        >
                          Info
                        </button>
                      </div>
                    </div>
                    {openDescriptions[item.name] && (
                      <p className="mt-2 text-sm text-gray-700 bg-gray-100 p-2 rounded">
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
