// app/series/SeriesPage.tsx
"use client";

import { series } from "../blog/[id]/serie";
import type { Serie } from "../blog/[id]/serie";
import Link from "next/link";

export default function SeriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
        Toutes les séries
      </h1>

      <section className="grid md:grid-cols-2 gap-8">
        {series.map((serie: Serie) => (
          <div
            key={serie.id}
            className="border p-6 rounded shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold font-serif mb-2">{serie.title}</h2>
            <p className="text-gray-700 mb-4 italic">{serie.years}</p>
            <p className="text-gray-800">{serie.synopsis}</p>
            <Link
              href={`#`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              Lire la fiche
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}