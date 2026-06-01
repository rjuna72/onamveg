import Link from "next/link";

export default function Footer() {
    return (
      <footer className="mt-20" style={{ backgroundColor: "#052E16", color: "#EAF5EE", borderTop: "2px solid #2F7D32" }}>
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-bold text-[#2F7D32] text-lg">ONAM VEG</div>
            <p className="mt-3 text-sm leading-relaxed">
              Fresh. Vegetarian. South Indian. Authentic flavours, clean ingredients, and fast service.
            </p>
          </div>
  
          <div>
            <div className="font-semibold text-white mb-3">Contact</div>
            <p className="text-sm">+91 087147 03888</p>
            <p className="text-sm mt-1">WhatsApp available</p>
          </div>
  
          <div>
            <div className="font-semibold text-white mb-3">Hours</div>
            <p className="text-sm">
              Mon – Sun<br />7:30 AM – 11:00 PM
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">Brand</div>
            <a 
              href="https://labs.google.com/pomelli/brand_book/9MX4AEzPw781u3FJ828O92" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#2F7D32] hover:text-white transition-colors block"
            >
              Brand Guidelines
            </a>
            <Link href="/" className="text-sm text-[#2F7D32] hover:text-white transition-colors block mt-2">
              Home
            </Link>
          </div>
        </div>
  
        <div className="border-t" style={{ borderColor: "#2F7D32" }}>
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs" style={{ color: "#EAF5EE" }}>
            © {new Date().getFullYear()} Onam Veg. All rights reserved. | Authentic South Indian Vegetarian Restaurant
          </div>
        </div>
      </footer>
    );
  }
  