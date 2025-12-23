// app/menu/page.tsx
"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";

type Category =
  | "Combos"
  | "Rice"
  | "Curries"
  | "Breads"
  | "Snacks"
  | "Beverages";


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

const CATEGORIES: Category[] = [
  "Combos",
  "Rice",
  "Curries",
  "Breads",
  "Snacks",
  "Beverages",
];

const MENU: MenuItem[] = [
  // Combos
  {
    id: "combo-1",
    name: "Fried Rice + Lime Juice",
    desc: "Value combo, quick and filling",
    price: 125,
    category: "Combos",
    tags: ["Best Seller"],
  },
  {
    id: "combo-2",
    name: "Veg Noodles + Lime Juice",
    desc: "Classic Indo-Chinese combo",
    price: 135,
    category: "Combos",
  },
  {
    id: "combo-3",
    name: "Gobi Manchurian + Lime",
    desc: "Crispy + refreshing",
    price: 140,
    category: "Combos",
    tags: ["Spicy"],
  },

  // Rice
  {
    id: "rice-1",
    name: "Veg Fried Rice",
    desc: "Wok-tossed rice with vegetables",
    price: 110,
    category: "Rice",
    tags: ["Best Seller"],
  },
  {
    id: "rice-2",
    name: "Veg Biriyani",
    desc: "Fragrant rice with spices & vegetables",
    price: 155,
    category: "Rice",
    image: "/menu/veg-biryani.png",
    tags: ["Best Seller"],
  },

  // Curries
  {
    id: "curry-1",
    name: "Paneer Butter Masala",
    desc: "Creamy tomato gravy, rich flavour",
    price: 170,
    category: "Curries",
    tags: ["Best Seller"],
  },
  {
    id: "curry-2",
    name: "Chana Masala",
    desc: "Chickpea curry, homestyle",
    price: 140,
    category: "Curries",
    tags: ["Spicy"],
  },

  // Breads
  {
    id: "bread-1",
    name: "Plain Naan",
    desc: "Soft tandoor bread",
    price: 45,
    category: "Breads",
  },
  {
    id: "bread-2",
    name: "Kerala Porotta",
    desc: "Flaky layered bread",
    price: 55,
    category: "Breads",
    tags: ["Best Seller"],
  },

  // Snacks
  {
    id: "snack-1",
    name: "Masala Dosa",
    desc: "Crispy dosa with potato masala",
    price: 120,
    category: "Snacks",
    tags: ["Best Seller"],
  },
  {
    id: "snack-2",
    name: "Idli Sambar",
    desc: "Steamed idli with sambar",
    price: 80,
    category: "Snacks",
  },

  // Beverages
  {
    id: "bev-1",
    name: "Lime Juice",
    desc: "Fresh and cooling",
    price: 30,
    category: "Beverages",
  },
  {
    id: "bev-2",
    name: "Masala Tea",
    desc: "Spiced chai",
    price: 25,
    category: "Beverages",
  },
];

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
          <div className="banana-watermark absolute inset-0 z-0" />
          <div className="relative z-10">
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
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative mb-4 h-40 overflow-hidden rounded-xl bg-[#eaf5ee]">
  {item.image ? (
    <Image
      src={item.image}
      alt={item.name}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={false}
    />
  ) : (
    <div className="flex h-full items-center justify-center">
      <span className="text-xs font-semibold text-[#2f7d32]">Image coming soon</span>
    </div>
  )}
</div>


      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-base font-semibold text-[#1a1a1a]">
            {item.name}
          </div>
          <div className="mt-1 text-sm text-gray-600 line-clamp-2">
            {item.desc}
          </div>
        </div>
        <div className="shrink-0 text-base font-bold text-[#2f7d32]">
          ₹{item.price}
        </div>
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
    {
  const styles =
    label === "Spicy"
      ? "border-red-200 bg-red-50 text-red-700"
      : label === "New"
      ? "border-blue-200 bg-blue-50 text-blue-700"
      : "border-amber-200 bg-amber-50 text-amber-800";

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${styles}`}
    >
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
