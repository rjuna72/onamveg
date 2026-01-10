// app/menu/page.tsx
"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";

/* ---------- Types ---------- */

type Category = "Combos" | "Rice" | "Curries" | "Breads" | "Snacks" | "Beverages";
type TagType = "Spicy" | "Best Seller" | "New";

type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: Category;
  image?: string;
  tags?: TagType[];
};

const CATEGORIES: Category[] = ["Combos", "Rice", "Curries", "Breads", "Snacks", "Beverages"];

/**
 * Put your images in: /public/menu/
 * Then map them here by item.id -> "/menu/filename.webp"
 *
 * Any item not listed here will show "Image coming soon".
 */
const IMAGE_BY_ID: Record<string, string> = {
  // Combos / sets / meals
  "combo-idly-set": "/menu/idlyset.webp",
  "combo-poori-set": "/menu/purimasala.webp",
  "combo-dosa-set": "/menu/setdosa.webp",
  "combo-puttu-set": "/menu/puttukadala.webp",
  "combo-kerala-sadya-red": "/menu/sadhya.webp",
  "combo-kerala-sadya-white": "/menu/sadhyabasmati.webp",
  // optional combo image (if you want to keep it as a combo item later)
  // "combo-porotta-gobi": "/menu/porottagobiman.webp",

  // Rice
  "rice-veg-fried": "/menu/friedrice.webp",
  "rice-veg-schezwan": "/menu/shezwanfriedrice.webp",
  "rice-veg-biryani": "/menu/biryaniveg.webp",
  "rice-paneer-biryani": "/menu/paneerbiryani.webp",
  "rice-curd": "/menu/curdrice.webp",
  "rice-lemon": "/menu/lemonrice.webp",
  "rice-tomato": "/menu/tomatorice.webp",
  // if you have this file
  // "rice-jeera": "/menu/jeerarice.webp",

  // Curries
  "curry-paneer-butter": "/menu/pbm.webp",
  "curry-paneer-65": "/menu/paneer65.webp",
  "curry-mushroom-masala": "/menu/mushroommasala.webp",
  "curry-gobi-manchurian": "/menu/gobiman.webp",
  "curry-gobi-65": "/menu/gobi65.webp",
  "curry-dal-fry": "/menu/dalfry.webp",
  "curry-kadala": "/menu/kadala.webp",
  "curry-tomato-fry": "/menu/tomatofry.webp",

  // Breads
  "bread-porota": "/menu/porotta.webp",
  "bread-aloo-paratha": "/menu/alooparatha.webp",
  "bread-paneer-paratha": "/menu/paneerparatha.webp",

  // Snacks / tiffins (photos you showed)
  "snack-masala-dosa": "/menu/masaladosa.webp",
  "snack-ghee-roast": "/menu/gheeroast.webp",
  "snack-paneer-dosa": "/menu/paneerdosa.webp",
  "snack-kozhukkatta": "/menu/kozhikatta.webp",
  "snack-pazham-pori": "/menu/pazhampori.webp",
  // if you have this file
  // "snack-parippu-vada": "/menu/parripuvada.webp",

  // breakfast singles (if you want to attach)
  "snack-idly-single": "/menu/idliesambar.webp", // best match if you only have idli+sambar photo
  "snack-idiyappam-single": "/menu/idiyapam.webp",
  "combo-idiyappam-set": "/menu/idiyappamwcurry.webp",

  // Beverages
  // Note: your data has Tea, not "Chai". We'll attach chai.webp to Tea.
  "bev-tea": "/menu/chai.webp",
};

/* ---------- MENU DATA (your scanned 100+ list base) ---------- */

const BASE_MENU: MenuItem[] = [
  /* ---------------- COMBOS / SETS (Breakfast + Meals) ---------------- */
  { id: "combo-idly-set", name: "Idly Set", desc: "3 Idly + Vada", price: 60, category: "Combos" },
  { id: "combo-poori-set", name: "Poori Masala Set", desc: "3 Poori + Bhaji", price: 75, category: "Combos" },
  { id: "combo-chana-bhatura", name: "Chana Bhatura", desc: "2 Bhatura + Chana Masala", price: 100, category: "Combos", tags: ["Best Seller"] },
  { id: "combo-appam-set", name: "Appam Set", desc: "3 Appam + Kadala / Veg Kuruma", price: 80, category: "Combos" },
  { id: "combo-dosa-set", name: "Dosa Set", desc: "3 Dosa + Vada", price: 60, category: "Combos" },
  { id: "combo-chappathi-set", name: "Chappathi Set", desc: "3 Chappathi + Kadala / Veg Kuruma", price: 80, category: "Combos" },

  { id: "combo-idiyappam-set", name: "Idiyappam Set", desc: "Idiyappam + Kadala / Kuruma", price: 80, category: "Combos" },
  { id: "combo-puttu-set", name: "Puttu Set", desc: "Puttu + Pappadam + Kadala / Kuruma", price: 75, category: "Combos" },
  { id: "combo-chemba-puttu-set", name: "Chemba Puttu Set", desc: "Chemba puttu + sides", price: 95, category: "Combos" },
  { id: "combo-porota-set", name: "Porota Set", desc: "3 Porota + Kadala / Veg Kuruma", price: 85, category: "Combos", tags: ["Best Seller"] },

  { id: "combo-veg-meal", name: "Veg Meal", desc: "Rice + Sambar + Pickle + Thoran", price: 80, category: "Combos", tags: ["Best Seller"] },
  { id: "combo-kerala-sadya-red", name: "Kerala Sadya (Red Rice)", desc: "Multi-course meal with red rice", price: 120, category: "Combos", tags: ["Best Seller"] },
  { id: "combo-kerala-sadya-white", name: "Kerala Sadya (Basmati White Rice)", desc: "Multi-course meal with basmati rice", price: 150, category: "Combos" },

  /* ---------------- RICE ---------------- */
  { id: "rice-veg-fried", name: "Veg Fried Rice", desc: "Wok-tossed rice with vegetables", price: 110, category: "Rice", tags: ["Best Seller"] },
  { id: "rice-veg-schezwan", name: "Veg Schezwan Fried Rice", desc: "Spicy schezwan style fried rice", price: 125, category: "Rice", tags: ["Spicy"] },
  { id: "rice-paneer-fried", name: "Paneer Fried Rice", desc: "Fried rice with paneer", price: 190, category: "Rice" },
  { id: "rice-mushroom-fried", name: "Mushroom Fried Rice", desc: "Fried rice with mushroom", price: 200, category: "Rice" },
  { id: "rice-veg-biryani", name: "Veg Biryani", desc: "Fragrant rice with spices & veg", price: 140, category: "Rice", tags: ["Best Seller"] },
  { id: "rice-paneer-biryani", name: "Paneer Biryani", desc: "Biryani with paneer", price: 200, category: "Rice" },
  { id: "rice-tomato", name: "Tomato Rice", desc: "Tomato & spice tempered rice", price: 120, category: "Rice" },
  { id: "rice-curd", name: "Curd Rice", desc: "Cooling curd rice", price: 120, category: "Rice" },
  { id: "rice-lemon", name: "Lemon Rice", desc: "South Indian lemon rice", price: 120, category: "Rice" },

  /* ---------------- CURRIES / SIDES ---------------- */
  { id: "curry-paneer-butter", name: "Paneer Butter Masala", desc: "Creamy tomato gravy", price: 160, category: "Curries", tags: ["Best Seller"] },
  { id: "curry-paneer-65", name: "Paneer 65", desc: "Spicy fried paneer", price: 180, category: "Curries", tags: ["Spicy"] },
  { id: "curry-kadai-paneer", name: "Kadai Paneer", desc: "Kadai-style paneer curry", price: 190, category: "Curries" },
  { id: "curry-mushroom-masala", name: "Mushroom Masala", desc: "Mushroom in spiced gravy", price: 180, category: "Curries" },
  { id: "curry-chilli-gobi", name: "Chilli Gobi", desc: "Spicy chilli gobi", price: 110, category: "Curries", tags: ["Spicy"] },
  { id: "curry-gobi-manchurian", name: "Gobi Manchurian", desc: "Indo-chinese gobi manchurian", price: 110, category: "Curries" },
  { id: "curry-gobi-65", name: "Gobi 65", desc: "Crispy gobi 65", price: 140, category: "Curries", tags: ["Spicy"] },
  { id: "curry-alu-jeera", name: "Aloo Jeera", desc: "Potato + cumin stir fry", price: 110, category: "Curries" },
  { id: "curry-dal-fry", name: "Dal Fry", desc: "Tempered dal", price: 100, category: "Curries", tags: ["Best Seller"] },
  { id: "curry-tomato-fry", name: "Tomato Fry", desc: "Tomato fry", price: 90, category: "Curries" },
  { id: "curry-kadala", name: "Kadala Curry", desc: "Black chickpea curry", price: 40, category: "Curries" },
  { id: "curry-veg-kuruma", name: "Veg Kuruma", desc: "Kerala veg kuruma", price: 40, category: "Curries" },

  /* ---------------- BREADS ---------------- */
  { id: "bread-chappathi", name: "Chappathi (Single)", desc: "Soft chapathi", price: 15, category: "Breads" },
  { id: "bread-porota", name: "Kerala Porota (Single)", desc: "Flaky layered porota", price: 15, category: "Breads", tags: ["Best Seller"] },
  { id: "bread-aloo-paratha", name: "Aloo Paratha", desc: "Stuffed potato paratha", price: 100, category: "Breads" },
  { id: "bread-paneer-paratha", name: "Paneer Paratha", desc: "Stuffed paneer paratha", price: 130, category: "Breads" },
  { id: "bread-cheese-paratha", name: "Cheese Paratha", desc: "Cheese stuffed paratha", price: 130, category: "Breads" },

  /* ---------------- SNACKS (as you pasted) ---------------- */
  { id: "snack-idly-single", name: "Idly (Single)", desc: "Single idly", price: 15, category: "Snacks" },
  { id: "snack-poori-single", name: "Poori (Single)", desc: "Single poori", price: 15, category: "Snacks" },
  { id: "snack-appam-single", name: "Appam (Single)", desc: "Single appam", price: 15, category: "Snacks" },
  { id: "snack-idiyappam-single", name: "Idiyappam (Single)", desc: "Single idiyappam", price: 15, category: "Snacks" },
  { id: "snack-puttu-single", name: "Puttu (Single)", desc: "Single puttu", price: 35, category: "Snacks" },
  { id: "snack-chemba-puttu-single", name: "Chemba Puttu (Single)", desc: "Single chemba puttu", price: 55, category: "Snacks" },
  { id: "snack-porota-single", name: "Porota (Single)", desc: "Single porota", price: 15, category: "Snacks" },

  { id: "snack-masala-dosa", name: "Masala Dosa", desc: "Crispy dosa + potato masala", price: 80, category: "Snacks", tags: ["Best Seller"] },
  { id: "snack-ghee-masala-dosa", name: "Ghee Masala Dosa", desc: "Masala dosa with ghee", price: 100, category: "Snacks" },
  { id: "snack-ghee-roast", name: "Ghee Roast", desc: "Crispy roast with ghee", price: 70, category: "Snacks" },
  { id: "snack-plain-roast", name: "Plain Roast", desc: "Plain dosa/roast", price: 60, category: "Snacks" },
  { id: "snack-butter-dosa", name: "Butter Dosa", desc: "Dosa with butter", price: 100, category: "Snacks" },
  { id: "snack-paneer-dosa", name: "Paneer Dosa", desc: "Paneer dosa", price: 120, category: "Snacks" },
  { id: "snack-paneer-masala-dosa", name: "Paneer Masala Dosa", desc: "Paneer masala dosa", price: 160, category: "Snacks" },
  { id: "snack-cheese-dosa", name: "Cheese Dosa", desc: "Cheese dosa", price: 120, category: "Snacks" },
  { id: "snack-onion-uttappam", name: "Onion Uttappam", desc: "Onion uttappam", price: 90, category: "Snacks" },
  { id: "snack-tomato-mix-uttappam", name: "Tomato Mix Veg Uttappam", desc: "Tomato + mixed veg uttappam", price: 110, category: "Snacks" },

  { id: "snack-pazham-pori", name: "Pazham Pori", desc: "Banana fritters", price: 15, category: "Snacks" },
  { id: "snack-uzhunnu-vada", name: "Uzhunnu Vada", desc: "Urad dal vada", price: 12, category: "Snacks" },
  { id: "snack-ela-ada", name: "Ela Ada", desc: "Sweet ela ada", price: 20, category: "Snacks" },
  { id: "snack-kozhukkatta", name: "Kozhukkatta", desc: "Steamed dumpling", price: 15, category: "Snacks" },
  { id: "snack-veg-cutlet", name: "Veg Cutlet", desc: "Crispy veg cutlet", price: 15, category: "Snacks" },
  { id: "snack-veg-sandwich", name: "Veg Sandwich", desc: "Toasted veg sandwich", price: 70, category: "Snacks" },
  { id: "snack-veg-burger", name: "Veg Burger", desc: "Veg burger", price: 80, category: "Snacks" },
  { id: "snack-veg-roll", name: "Veg Roll", desc: "Roll (Porota/Chappathi)", price: 80, category: "Snacks" },

  /* ---------------- NOODLES ---------------- */
  { id: "rice-veg-noodles", name: "Veg Noodles", desc: "Wok-tossed veg noodles", price: 110, category: "Rice" },
  { id: "rice-paneer-noodles", name: "Paneer Noodles", desc: "Noodles with paneer", price: 200, category: "Rice" },
  { id: "rice-mushroom-noodles", name: "Mushroom Noodles", desc: "Noodles with mushroom", price: 200, category: "Rice" },

  /* ---------------- BEVERAGES ---------------- */
  { id: "bev-pineapple-juice", name: "Pineapple Juice", desc: "Fresh juice", price: 70, category: "Beverages" },
  { id: "bev-orange-juice", name: "Orange Juice", desc: "Fresh juice", price: 70, category: "Beverages" },
  { id: "bev-apple-juice", name: "Apple Juice", desc: "Fresh juice", price: 100, category: "Beverages" },
  { id: "bev-grape-juice", name: "Grape Juice", desc: "Fresh juice", price: 70, category: "Beverages" },
  { id: "bev-pomegranate-juice", name: "Pomegranate Juice", desc: "Fresh juice", price: 90, category: "Beverages" },
  { id: "bev-mosambi-juice", name: "Mosambi Juice", desc: "Sweet lime juice", price: 70, category: "Beverages" },
  { id: "bev-mango-juice", name: "Mango Juice", desc: "Fresh mango juice", price: 70, category: "Beverages" },

  { id: "bev-fresh-lime", name: "Fresh Lime", desc: "Refreshing lime", price: 25, category: "Beverages", tags: ["Best Seller"] },
  { id: "bev-soda-lime", name: "Soda Lime", desc: "Lime soda", price: 30, category: "Beverages" },
  { id: "bev-pineapple-lime", name: "Pineapple Lime", desc: "Pineapple + lime", price: 40, category: "Beverages" },

  { id: "bev-chocolate-shake", name: "Chocolate Shake", desc: "Milkshake", price: 90, category: "Beverages" },
  { id: "bev-pista-shake", name: "Pista Shake", desc: "Milkshake", price: 90, category: "Beverages" },
  { id: "bev-avocado-shake", name: "Avocado Shake", desc: "Milkshake", price: 90, category: "Beverages" },
  { id: "bev-oreo-shake", name: "Oreo Shake", desc: "Milkshake", price: 100, category: "Beverages" },
  { id: "bev-strawberry-shake", name: "Strawberry Shake", desc: "Milkshake", price: 90, category: "Beverages" },
  { id: "bev-mango-shake", name: "Mango Shake", desc: "Milkshake", price: 90, category: "Beverages" },
  { id: "bev-sharja-shake", name: "Sharja Shake", desc: "Sharja shake", price: 70, category: "Beverages" },
  { id: "bev-vanilla-shake", name: "Vanilla Shake", desc: "Milkshake", price: 80, category: "Beverages" },
  { id: "bev-butterscotch", name: "Butterscotch Shake", desc: "Milkshake", price: 80, category: "Beverages" },
  { id: "bev-badam-shake", name: "Badam Shake", desc: "Milkshake", price: 80, category: "Beverages" },

  { id: "bev-royal-falooda", name: "Royal Falooda", desc: "Falooda", price: 120, category: "Beverages" },
  { id: "bev-strawberry-falooda", name: "Strawberry Falooda", desc: "Falooda", price: 120, category: "Beverages" },
  { id: "bev-chocolate-falooda", name: "Chocolate Falooda", desc: "Falooda", price: 120, category: "Beverages" },
  { id: "bev-oreo-falooda", name: "Oreo Falooda", desc: "Falooda", price: 130, category: "Beverages" },

  { id: "bev-blue-mojito", name: "Blue Mojito", desc: "Mojito", price: 60, category: "Beverages" },
  { id: "bev-mint-lime-mojito", name: "Mint Lime Mojito", desc: "Mojito", price: 60, category: "Beverages" },
  { id: "bev-blueberry-mojito", name: "Blueberry Mojito", desc: "Mojito", price: 60, category: "Beverages" },
  { id: "bev-pineapple-mojito", name: "Pineapple Mojito", desc: "Mojito", price: 60, category: "Beverages" },
  { id: "bev-blackcurrant-mojito", name: "Black Currant Mojito", desc: "Mojito", price: 60, category: "Beverages" },
  { id: "bev-greenapple-mojito", name: "Green Apple Mojito", desc: "Mojito", price: 60, category: "Beverages" },

  { id: "bev-tea", name: "Tea", desc: "Tea", price: 15, category: "Beverages" },
  { id: "bev-coffee", name: "Coffee", desc: "Coffee", price: 20, category: "Beverages" },
  { id: "bev-cold-coffee", name: "Cold Coffee", desc: "Cold coffee", price: 60, category: "Beverages" },
  { id: "bev-green-tea", name: "Green Tea", desc: "Green tea", price: 25, category: "Beverages" },
  { id: "bev-black-tea", name: "Black Tea", desc: "Black tea", price: 10, category: "Beverages" },
  { id: "bev-black-coffee", name: "Black Coffee", desc: "Black coffee", price: 15, category: "Beverages" },
  { id: "bev-ginger-tea", name: "Ginger Tea", desc: "Ginger tea", price: 25, category: "Beverages" },
  { id: "bev-lemon-tea", name: "Lemon Tea", desc: "Lemon tea", price: 15, category: "Beverages" },
  { id: "bev-rose-milk", name: "Rose Milk", desc: "Rose milk", price: 30, category: "Beverages" },
  { id: "bev-badam-milk", name: "Badam Milk", desc: "Badam milk", price: 30, category: "Beverages" },
];

/**
 * This is the trick that satisfies your requirement:
 * - Keep ALL 100+ scanned items (BASE_MENU)
 * - Add images only where we have them
 * - Everything else shows "Image coming soon"
 */
const MENU: MenuItem[] = BASE_MENU.map((item) =>
  IMAGE_BY_ID[item.id] ? { ...item, image: IMAGE_BY_ID[item.id] } : item
);

/* ---------- Page ---------- */

export default function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category | "All">("All");

  // refs for scroll-to-section
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = MENU.filter((item) => {
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });

    const byCat: Record<Category, MenuItem[]> = {
      Combos: [],
      Rice: [],
      Curries: [],
      Breads: [],
      Snacks: [],
      Beverages: [],
    };

    for (const item of filtered) byCat[item.category].push(item);
    return byCat;
  }, [query]);

  function scrollToCategory(cat: Category | "All") {
    setActive(cat);

    if (cat === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = sectionRefs.current[cat];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hasAny =
    CATEGORIES.some((c) => grouped[c].length > 0) || query.trim().length === 0;

  return (
    <main className="relative min-h-screen bg-white text-[#1a1a1a] overflow-hidden">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
        <p className="mt-2 text-sm text-gray-600">
          Scroll the full menu, or use category buttons to jump quickly.
        </p>

        {/* Search */}
        <div className="mt-6 w-full max-w-md">
          <label className="text-xs font-semibold text-gray-600">Search</label>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., dosa, paneer, spicy…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-gray-50"
                type="button"
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Sticky category bar */}
      <div className="sticky top-[56px] z-40 mt-6 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-2">
          <div className="rounded-2xl border border-gray-200 bg-white px-2 py-2 shadow-sm">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <CategoryButton
                label="All"
                active={active === "All"}
                onClick={() => scrollToCategory("All")}
              />
              {CATEGORIES.map((c) => (
                <CategoryButton
                  key={c}
                  label={c}
                  active={active === c}
                  onClick={() => scrollToCategory(c)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        {CATEGORIES.map((cat) => {
          const items = grouped[cat];
          if (!items.length) return null;

          return (
            <div
              key={cat}
              ref={(el) => {
                sectionRefs.current[cat] = el;
              }}
              className="mb-12 scroll-mt-40"
            >
              {/* Section title bar */}
              <div className="mb-4 flex items-center justify-between rounded-xl bg-[#eaf5ee] px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2f7d32]" />
                  <div className="font-semibold text-[#1a1a1a]">{cat}</div>
                </div>
                <div className="text-xs text-gray-600">{items.length} items</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}

        {!hasAny ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-600 shadow-sm">
            No results for <span className="font-semibold">“{query}”</span>.
          </div>
        ) : null}
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
        active
          ? "bg-[#2f7d32] text-white shadow-sm"
          : "bg-white text-gray-700 border border-gray-200 hover:bg-[#eaf5ee]",
      ].join(" ")}
      type="button"
    >
      {label}
    </button>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  const isChai = item.image === "/menu/chai.webp";

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative mb-4 h-40 overflow-hidden rounded-xl bg-[#eaf5ee]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={`object-cover ${isChai ? "object-[50%_75%]" : "object-center"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xs font-semibold text-[#2f7d32]">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-base font-semibold text-[#1a1a1a]">{item.name}</div>
          <div className="mt-1 text-sm text-gray-600 line-clamp-2">{item.desc}</div>
        </div>
        <div className="shrink-0 text-base font-bold text-[#2f7d32]">₹{item.price}</div>
      </div>

      {item.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between">
        <button
          className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          type="button"
        >
          Details
        </button>
        <button
          className="rounded-lg bg-[#2f7d32] px-3 py-2 text-sm text-white hover:brightness-95"
          type="button"
        >
          Add
        </button>
      </div>
    </article>
  );
}

function Tag({ label }: { label: TagType }) {
  const styles =
    label === "Spicy"
      ? "border-red-200 bg-red-50 text-red-700"
      : label === "New"
      ? "border-blue-200 bg-blue-50 text-blue-700"
      : "border-amber-200 bg-amber-50 text-amber-800";

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-gray-400"
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
