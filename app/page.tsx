"use client";
import DiamondTool from "../components/DiamondTool";

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome to the Diamond Buying Tool
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Enter your budget and preferred diamond shape to explore the best options across premium and commercial vendors.
      </p>
      <DiamondTool />
    </main>
  );
}
