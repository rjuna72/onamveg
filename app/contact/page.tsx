export default function ContactPage() {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Have a question, feedback, or want to place an order? Reach out to us.
        </p>
  
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-lg">Onam Veg Restaurant</h2>
            <p className="mt-2 text-gray-600">
              Authentic South Indian Vegetarian Cuisine
            </p>
  
            <div className="mt-4 text-s text-gray-700">
              <p className="pb-2">📞 Phone: +91 087147 03888</p>
              <p className="pb-2">✉️ email: onam.veg@gmail.com</p>
              <p className="pb-2">💬 WhatsApp: +91 087147 03888</p>
              <p>📍 Location: CMC, 19/137A, Mathilakam - Shappupadi Rd, Choice Nagar, Cherthala, Kerala 688524</p>
            </div>
  
            <a
              href="https://www.google.com/maps/search/?api=1&query=Onam.Veg+Restaurant+Cherthala+Kerala"
              className="mt-6 inline-block rounded-lg bg-[#2f7d32] px-4 py-2 text-white"
            >
              Open in Maps
            </a>

            <div className="map-container" style={{ width: '100%', overflow: 'hidden', height: '400px' }}>
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Onam+Veg+South+Indian+Restaurant`}
                allowFullScreen
              ></iframe>
            </div>
  
          {/* Simple Form (UI only) */}
          <form className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Send us a message</h3>
  
            <input
              className="mt-4 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Your name"
            />
            <input
              className="mt-3 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Phone number"
            />
            <textarea
              className="mt-3 w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Your message"
              rows={4}
            />
  
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-[#2f7d32] px-4 py-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
  