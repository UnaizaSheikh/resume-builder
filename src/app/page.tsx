import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] conatiner mx-auto px-12 py-4">
    <Hero />
    </main>
  );
}
