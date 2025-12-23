export default function Footer() {
    return (
      <footer className="border-t mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-bold text-[#2f7d32]">ONAM VEG</div>
            <p className="mt-2 text-sm text-gray-600">
              Authentic South Indian vegetarian cuisine.
            </p>
          </div>
  
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-sm text-gray-600">+91 087147 03888</p>
            <p className="text-sm text-gray-600">WhatsApp available</p>
          </div>
  
          <div>
            <div className="font-semibold">Hours</div>
            <p className="mt-2 text-sm text-gray-600">
              Mon – Sun: 7:30 AM – 12:00 AM
            </p>
          </div>
        </div>
  
        <div className="border-t py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Onam Veg. All rights reserved.
        </div>
      </footer>
    );
  }
  