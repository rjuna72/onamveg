export default function Home() {
  const categories = ["Combos", "Rice", "Curries", "Breads", "Snacks", "Beverages"];

  const comboOffers = [
    { name: "Fried Rice + Lime Juice", desc: "Best value combo", price: "₹125", oldPrice: "₹135" },
    { name: "Gobi Manchurian + Lime", desc: "Crispy + refreshing", price: "₹140", oldPrice: "₹155" },
    { name: "Veg Noodles + Lime Juice", desc: "Classic Indo-Chinese", price: "₹135", oldPrice: "₹150" },
  ];

  const bestSellers = [
    { name: "Veg Biriyani", desc: "Fragrant rice, spices, veg", price: "₹155" },
    { name: "Paneer Butter Masala", desc: "Creamy, rich curry", price: "₹170" },
    { name: "Masala Dosa", desc: "Crispy dosa + potato masala", price: "₹120" },
    { name: "Idli Sambar", desc: "Soft idli + sambar", price: "₹80" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
    
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <CategoryBar categories={categories} />

        <Section
          eyebrow="Offers"
          title="Combo Deals"
          subtitle="Great value vegetarian combos"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comboOffers.map((item) => (
              <OfferCard key={item.name} {...item} />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Popular"
          title="Most Ordered"
          subtitle="Customer favourites"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </Section>
      </section>


    </main>
  );
}




function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl font-bold" style={{ color: "#052E16" }}>
            Fresh. Vegetarian. South Indian.
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Authentic flavours, clean ingredients, and fast service.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/menu" className="rounded-lg px-6 py-3 text-white font-semibold transition-all hover:brightness-90" style={{ backgroundColor: "#2F7D32" }}>
              Explore Menu
            </a>
            <a href="https://labs.google.com/pomelli/brand_book/9MX4AEzPw781u3FJ828O92" target="_blank" rel="noopener noreferrer" className="rounded-lg px-6 py-3 font-semibold transition-all" style={{ backgroundColor: "#EAF5EE", color: "#052E16", border: "2px solid #2F7D32" }}>
              Brand Guidelines
            </a>
          </div>
        </div>

        <div className="h-64 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EAF5EE" }}>
          <span className="font-semibold" style={{ color: "#2F7D32" }}>
            Food image here
          </span>
        </div>
      </div>
    </section>
  );
}

function CategoryBar({ categories }: { categories: string[] }) {
  return (
    <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
      {categories.map((c) => (
        <button
          key={c}
          className="rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-all hover:bg-[#eaf5ee]"
          style={{ 
            border: "2px solid #2F7D32", 
            color: "#052E16",
            backgroundColor: "transparent"
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: any) {
  return (
    <div className="mb-14">
      <div className="text-sm font-semibold" style={{ color: "#2F7D32" }}>{eyebrow}</div>
      <h2 className="text-3xl font-bold mt-2" style={{ color: "#052E16" }}>{title}</h2>
      <p className="text-gray-700 mt-2 mb-8">{subtitle}</p>
      {children}
    </div>
  );
}

function OfferCard({ name, desc, price, oldPrice }: any) {
  return (
    <div className="rounded-xl border p-5 transition-all hover:shadow-lg" style={{ borderColor: "#2F7D32", backgroundColor: "#FFFFFF" }}>
      <div className="h-36 rounded-lg mb-4" style={{ backgroundColor: "#EAF5EE" }} />
      <div className="font-semibold text-[#1a1a1a]">{name}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
      <div className="mt-4 flex justify-between items-end">
        <div>
          <div className="text-lg font-bold" style={{ color: "#2F7D32" }}>{price}</div>
          <div className="text-sm line-through text-gray-400">{oldPrice}</div>
        </div>
        <button className="rounded-lg px-3 py-2 text-white text-sm font-medium transition-all hover:brightness-90" style={{ backgroundColor: "#2F7D32" }}>
          Order
        </button>
      </div>
    </div>
  );
}

function MenuCard({ name, desc, price }: any) {
  return (
    <div className="rounded-xl border p-5 transition-all hover:shadow-lg" style={{ borderColor: "#2F7D32", backgroundColor: "#FFFFFF" }}>
      <div className="h-28 rounded-lg mb-4" style={{ backgroundColor: "#EAF5EE" }} />
      <div className="font-semibold text-[#1a1a1a]">{name}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
      <div className="mt-4 flex justify-between items-center">
        <div className="font-bold" style={{ color: "#2F7D32" }}>{price}</div>
        <button className="rounded-lg border px-3 py-1.5 text-sm font-medium transition-all" style={{ borderColor: "#2F7D32", color: "#2F7D32" }}>
          Add
        </button>
      </div>
    </div>
  );
}


// Under construction Banner

// import Image from "next/image";
// import Link from "next/link";

// export default function UnderConstructionPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-white px-6">
//       <div className="w-full max-w-md text-center">
        
//         {/* Logo */}
//         <div className="mb-6 flex justify-center">
//           <Image
//             src="/logo.png"
//             alt="Onam Veg Logo"
//             width={120}
//             height={120}
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Brand */}
//         <h1 className="text-2xl font-bold text-[#2f7d32] tracking-wide">
//           ONAM VEG
//         </h1>
//         <p className="mt-1 text-sm font-medium text-orange-400">
//           RESTAURANT
//         </p>

//         {/* Divider */}
//         <div className="mx-auto my-6 h-px w-24 bg-[#2f7d32]/30" />

//         {/* Message */}
//         <h2 className="text-xl font-semibold text-gray-800">
//           Under Construction
//         </h2>
//         <p className="mt-3 text-sm text-gray-600">
//           We’re preparing something fresh and exciting.
//           Please check back soon.
//         </p>

//         {/* CTA */}
//         <div className="mt-8 flex justify-center gap-3">
//           <Link
//             href="/"
//             className="rounded-lg border border-[#2f7d32] px-4 py-2 text-sm text-[#2f7d32] hover:bg-[#2f7d32]/5"
//           >
//             Home
//           </Link>
//           <Link
//             href="/contact"
//             className="rounded-lg bg-[#2f7d32] px-4 py-2 text-sm text-white hover:brightness-95"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }
