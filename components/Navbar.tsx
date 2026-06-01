import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#052E16", borderColor: "#2F7D32" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        
        {/* Logo */}
        <Link href="/" className="relative h-11 w-44 overflow-hidden hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Onam Veg Logo"
            fill
            className="object-cover"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/menu" className="text-white hover:text-[#2F7D32] transition-colors font-medium">
            Menu
          </Link>
          <Link href="/contact" className="text-white hover:text-[#2F7D32] transition-colors font-medium">
            Contact
          </Link>
          <Link href="/careers" className="text-white hover:text-[#2F7D32] transition-colors font-medium">
            Careers
          </Link>
          <a 
            href="https://labs.google.com/pomelli/brand_book/9MX4AEzPw781u3FJ828O92" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#2F7D32] transition-colors font-medium text-xs"
            title="Brand Guidelines"
          >
            Brand
          </a>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-90"
          style={{ backgroundColor: "#2F7D32" }}
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
