import React from "react";

const MenuSection = () => {
  return (
    <section id="menu" className="bg-yellow-50 py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-yellow-900 text-center mb-12">
          Our Specials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
            <h4 className="text-2xl font-bold text-yellow-800 mb-2">
              Banana Leaf Meals
            </h4>
            <p className="text-yellow-700">
              A traditional South Indian feast served on a banana leaf.
            </p>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
            <h4 className="text-2xl font-bold text-yellow-800 mb-2">
              Filter Coffee
            </h4>
            <p className="text-yellow-700">
              Rich, aromatic South Indian coffee brewed to perfection.
            </p>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
            <h4 className="text-2xl font-bold text-yellow-800 mb-2">
              Masala Dosa
            </h4>
            <p className="text-yellow-700">
              Crispy dosa filled with a spiced potato filling, served with
              chutney.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
