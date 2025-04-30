import Card from "@/components/Card";
import Link from "next/link";
import { series } from "@/data/series";

export default function SeriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2">
        Toutes les séries
      </h1>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {series.map((serie) => (
          <Card key={serie.id}>
            <h3 className="text-2xl font-serif font-bold mb-2">{serie.title}</h3>
            <p className="text-sm italic text-[var(--color-text-dark)] mb-4">{serie.years}</p>
            <p className="text-[var(--color-text-dark)] mb-4 leading-relaxed text-justify">
              {serie.synopsis.slice(0, 140)}...
            </p>
            <Link
              href={`/series/${serie.id}`}
              className="text-[var(--color-primary)] hover:underline font-semibold hover:text-black transition-colors"
            >
              Lire la fiche →
            </Link>
          </Card>
        ))}
      </section>
    </main>
  );
}