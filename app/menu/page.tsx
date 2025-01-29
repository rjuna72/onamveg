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
      { name: "Idli (1)", price: 12, desc: "Single steamed rice cake with chutney & sambar." },
      { name: "Poori Bhaji", price: 75, desc: "Fluffy deep-fried bread served with spiced potato curry." },
      { name: "Poori Bhaji (single)", price: 15, desc: "Single serving of poori with potato curry." },
      { name: "Masala Dosa", price: 80, desc: "Crispy dosa stuffed with spiced potato filling." },
      { name: "Ghee Roast", price: 70, desc: "Golden crispy dosa roasted with pure ghee." },
      { name: "Paneer Dosa", price: 110, desc: "Dosa filled with spiced paneer stuffing." },
      { name: "Plain Roast", price: 60, desc: "Classic crispy dosa without any stuffing." },
      { name: "Appam", price: 15, desc: "Soft, lacy rice pancakes perfect with coconut milk." },
      { name: "Chappathi", price: 15, desc: "Whole wheat flatbread served with curry." },
      { name: "Idiyappam", price: 15, desc: "Steamed rice noodle cakes served with coconut milk." },
      { name: "Porota", price: 20, desc: "Layered, crispy flatbread made with refined flour." },
      { name: "Puttu (With Curry and Pappadam)", price: 70, desc: "Steamed cylindrical rice cake served with curry and crispy pappadam." }
    ],
    Specials: [
      { name: "Vegetable Biryani", price: 100, desc: "Aromatic basmati rice cooked with fresh vegetables and spices." },
      { name: "Paneer Broccoli Biryani", price: 250, desc: "Rich biryani with paneer and broccoli in flavorful spices." },
      { name: "Vegetable Cashew Paneer Fried Rice", price: 180, desc: "Fried rice with a delightful mix of vegetables, cashews, and paneer." },
      { name: "Butter Paneer Broccoli Noodles", price: 100, desc: "Noodles tossed with paneer, broccoli, and rich butter sauce." },
      { name: "Vegetable Noodles", price: 250, desc: "Classic noodles stir-fried with fresh vegetables." },
      { name: "Paneer Chilli Fry", price: 180, desc: "Spicy stir-fried paneer tossed with capsicum & chilies." },
      { name: "Paneer Butter Masala", price: 100, desc: "Paneer cooked in a creamy tomato-based butter sauce." },
      { name: "Paneer Mutter Masala", price: 250, desc: "Paneer and green peas in a rich, flavorful gravy." },
      { name: "Vegetable Kurma", price: 180, desc: "Mixed vegetable curry cooked in a coconut-based gravy." },
      { name: "Vegetable Makhani", price: 100, desc: "Vegetables cooked in a rich, creamy tomato-based sauce." },
      { name: "Vegetable Sizzler", price: 250, desc: "Grilled vegetables served sizzling hot with a special sauce." },
      { name: "Vegetable American Chop Suey", price: 180, desc: "Crispy noodles served with a tangy vegetable sauce." },
      { name: "Vegetable Chop Suey", price: 250, desc: "Mixed vegetables and crispy noodles in a savory sauce." },
      { name: "Tomato Fry", price: 180, desc: "Spicy fried tomato curry seasoned with special spices." }
    ],
    Soups: [
      { name: "Cream of Vegetable Soup", price: 50, desc: "Smooth, creamy soup made with fresh vegetables." },
      { name: "Sweet Corn Vegetable Soup", price: 60, desc: "A comforting soup with sweet corn and mixed veggies." },
      { name: "Paneer Butter Soup", price: 120, desc: "Creamy soup infused with paneer and butter flavors." },
      { name: "Paneer Butter Sweet Corn Soup", price: 120, desc: "A rich soup combining paneer, butter, and sweet corn." }
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
          <h1 className="text-4xl font-bold curlytext text-green-900 text-center mb-12">Our Menu</h1>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-8">
              <button onClick={() => setBreakfastOpen(!isBreakfastOpen)} className="text-3xl font-bold text-sandal mb-4 border-b-2 border-gold pb-2 w-full text-left flex justify-between items-center">{category}<span className="text-gold">{isBreakfastOpen ? "-" : "+"}</span></button>
              <ul className="space-y-4 mt-4 pl-4 border-l-4 border-sandal">
                {items.map((item) => (
                  <li key={item.name} className="text-lg flex justify-between items-center">
                    <span>{item.name}</span>
                    <span className="text-gold">₹{item.price}</span>
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
