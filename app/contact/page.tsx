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

          <div className="mt-4 text-sm text-gray-700">
            <p className="pb-2">📞 Phone: +91 87147 03888</p>
            <p className="pb-2">✉️ Email: onam.veg@gmail.com</p>
            <p className="pb-2">💬 WhatsApp: +91 87147 03888</p>
            <p>📍 Location: CMC, 19/137A, Mathilakam - Shappupadi Rd, Choice Nagar, Cherthala, Kerala 688524</p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Onam+Veg+Restaurant+Cherthala"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-[#2f7d32] px-4 py-2 text-white hover:bg-[#1b5e20] transition-colors"
          >
            Open in Maps
          </a>

          <div className="map-container mt-6" style={{ width: '100%', overflow: 'hidden', height: '300px', borderRadius: '8px' }}>
            <iframe
              width="100%"
              height="300"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6775.598294255861!2d76.33321399176117!3d9.66162475409223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087d3d631190f9%3A0x8fe844ef4d55256!2sOnam.Veg%20Restaurant!5e1!3m2!1sen!2sqa!4v1777021947388!5m2!1sen!2sqa"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> {/* Close the Contact Info Div */}

        {/* Simple Form */}
        <form className="rounded-xl border p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-lg">Send us a message</h3>

          <input
            className="mt-4 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f7d32]"
            placeholder="Your name"
          />
          <input
            className="mt-3 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f7d32]"
            placeholder="Phone number"
          />
          <textarea
            className="mt-3 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f7d32]"
            placeholder="Your message"
            rows={4}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#2f7d32] px-4 py-2 text-white font-medium hover:bg-[#1b5e20] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
  