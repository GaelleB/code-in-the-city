"use client";

import { series } from "@/data/series";
import Link from "next/link";

export default function SeriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Toutes les séries</h1>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
        {series.map((serie) => (
          <div
            key={serie.id}
            className="rounded-lg border border-[var(--color-secondary)] bg-white/90 p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-serif font-bold mb-2">{serie.title}</h3>
            <p className="text-sm text-gray-600 italic mb-4">{serie.years}</p>
            <p className="text-gray-800 mb-4 leading-relaxed text-justify">
              {serie.synopsis.slice(0, 150)}...
            </p>
            <Link
              href={`/series/${serie.id}`}
              className="text-[var(--color-primary)] hover:underline font-semibold hover:text-black transition-colors"
            >
              Lire la fiche →
            </Link>
          </div>        
        ))}
      </section>
    </main>
  );
}