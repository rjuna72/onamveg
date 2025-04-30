"use client";

import Navbar from "./navbar";
import Image from "next/image";
import leafImage from "./images/leaf.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src={leafImage}
          alt="Banana Leaf"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
        <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold curlytext text-white mb-4">
  Onam.Veg
</h1>
          <p className="text-lg md:text-xl pt-10 text-white max-w-2xl">
            Experience the authentic flavors of South India with recipes passed down through generations.
          </p>
          <div className="mt-6">
            <a
              href="/menu"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
      {/* Remaining Content */}

      <div className="bg-lime-800">
        <p>+91 87147 03888</p>
        <p>onam.veg@gmail.com</p>
      </div>
    </div>
  );
}
