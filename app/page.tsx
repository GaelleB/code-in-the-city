import Hero from "./components/Hero";
import Featured from "./components/Featured";
import CategoryColumns from "./components/CategoryColumns";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Featured />
      <CategoryColumns />
    </main>
  );
}