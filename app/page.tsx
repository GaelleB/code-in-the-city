import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Dynamic import pour Featured (non critique pour le first paint)
const Featured = dynamic(() => import("@/components/Featured"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Featured />
    </main>
  );
}