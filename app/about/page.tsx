"use client";

export default function Menu() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl curlytext font-bold text-green-900 text-center mb-12">
          About Us
        </h1>

        {/* About Section */}
        <div>
          <h2 className="text-3xl font-bold text-sandal mb-6 border-b-2 border-gold pb-2"></h2>
          <p className="text-xl text-center">
            Born out of immense passion to give back to the community, Onam.Veg was started as both a social enterprise and community venture. Employing locals and sourcing sustainable food, we strive to offer the most delicious and quality food in the area!
          </p>

          <iframe
            width="450"
            height="250"
            frameBorder="0"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Onam.Veg"
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </div>
  );
}

