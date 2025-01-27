"use client";

import Navbar from "./navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/leaf.png"
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h1 className="  md:text-5xl font-bold curlytext text-white mb-4">
            Onam.Veg
          </h1>
          <p className="text-lg md:text-xl pt-10 text-white max-w-2xl">
            Experience the authentic flavors of South India with recipes passed down through generations.
          </p>
          <div className="mt-6">
            <a
              href="/menu"
              className="bg-yellow-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-800"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
      {/* Remaining Content */}
    </div>
  );
}
