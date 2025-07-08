"use client";

import DiamondTool from "@/components/DiamondTool";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Diamond Buying Tool
      </h1>
      <p className="text-lg max-w-xl mb-4 text-center">
        Enter your budget and preferred diamond shape to explore the best options across premium and commercial vendors.
      </p>
      <p className="text-sm text-gray-500 max-w-md mb-8 text-center">
        Results are smart-filtered to show you only meaningful upgrades in size, color, clarity, and vendor.
      </p>
      
      <DiamondTool />
    </main>
  );
}

