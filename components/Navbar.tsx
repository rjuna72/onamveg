import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-green-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        
        {/* Logo */}
        <Link href="/" className="relative h-11 w-44 overflow-hidden">
  <Image
    src="/logo.png"
    alt="Onam Veg Logo"
    fill
    className="object-cover"
    priority
  />
</Link>




        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/menu" className="text-white hover:text-[#2f7d32]">
            Menu
          </Link>
          <Link href="/contact" className="text-white hover:text-[#2f7d32]">
            Contact
          </Link>
          <Link href="/careers" className="text-white hover:text-[#2f7d32]">
            Careers
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg bg-[#2f7d32] px-4 py-2 text-sm text-white hover:brightness-95"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
