export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo / Brand */}
          <a href="/" className="leading-tight">
            <div className="text-sm font-bold text-[#2f7d32]">ONAM VEG</div>
            <div className="text-xs text-orange-400">
              RESTAURANT
            </div>
          </a>
  
          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="/menu" className="text-gray-700 hover:text-[#2f7d32]">
              Menu
            </a>
            <a href="/contact" className="text-gray-700 hover:text-[#2f7d32]">
              Contact
            </a>
            <a href="/careers" className="text-gray-700 hover:text-[#2f7d32]">
              Careers
            </a>
          </nav>
  
          {/* CTA */}
          <a
            href="/contact"
            className="rounded-lg bg-[#2f7d32] px-4 py-2 text-sm text-white hover:brightness-95"
          >
            Order Now
          </a>
        </div>
      </header>
    );
  }
  