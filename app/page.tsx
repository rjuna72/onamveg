export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 text-gray-900">
     

      {/* Hero Section */}
      <section className="container mx-auto py-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-4">
          A Taste of Tradition
        </h2>
        <p className="text-lg md:text-xl text-yellow-800 max-w-2xl">
          Experience the authentic flavors of South India with recipes passed down through generations.
        </p>
        <div className="mt-6">
        <a
  href="/menu"
  className="bg-yellow-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-800"
  onClick={() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "menu_view", {
        event_category: "engagement",
        event_label: "View Our Menu Button",
      });
    }
  }}
>
  View Our Menu
</a>

        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="bg-yellow-50 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-yellow-900 text-center mb-12">
            Our Specials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
              <h4 className="text-2xl font-bold text-yellow-800 mb-2">Banana Leaf Meals</h4>
              <p className="text-yellow-700">A traditional South Indian feast served on a banana leaf.</p>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
              <h4 className="text-2xl font-bold text-yellow-800 mb-2">Filter Coffee</h4>
              <p className="text-yellow-700">Rich, aromatic South Indian coffee brewed to perfection.</p>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 rounded-md shadow-md p-6">
              <h4 className="text-2xl font-bold text-yellow-800 mb-2">Masala Dosa</h4>
              <p className="text-yellow-700">Crispy dosa filled with a spiced potato filling, served with chutney.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-yellow-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-yellow-900 mb-4">About Us</h3>
          <p className="text-lg text-yellow-800 max-w-3xl mx-auto">
            Our restaurant is inspired by the rich culinary heritage of South India, offering
            traditional dishes made with love and care. Every meal is crafted to bring the warmth
            of a South Indian home to your table.
          </p>
        </div>
      </section>
      </div>


  );
};
