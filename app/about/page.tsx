"use client";

export default function Menu() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl curlytext font-bold text-green-900 text-center mb-12">
          About Us
        </h1>

        

        {/* Soups Section */}
        <div>
          <h2 className="text-3xl font-bold text-sandal mb-6 border-b-2 border-gold pb-2">
           
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between text-lg">
              <span>Rasam</span>
              <span className="text-gold">₹50</span>
            </li>
            <li className="flex justify-between text-lg">
              <span>Tomato Soup</span>
              <span className="text-gold">₹60</span>
            </li>
            <li className="flex justify-between text-lg">
              <span>Chicken Soup</span>
              <span className="text-gold">₹120</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
