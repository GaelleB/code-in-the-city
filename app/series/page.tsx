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

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
        {series.map((serie: Serie) => (
      <div
        key={serie.id}
        className="border-2 border-[var(--color-secondary)] rounded shadow-md bg-white hover:shadow-lg transition hover:scale-[1.01] hover:-translate-y-1 duration-300 ease-in-out p-6">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-2 text-gray-900">{serie.title}</h2>
          <p className="text-sm text-gray-500 italic mb-2">{serie.years}</p>
          <p className="text-gray-700 mb-4">{serie.synopsis}</p>
        </div>
        <Link
          href="#"
          className="text-blue-600 font-medium hover:underline mt-auto self-start"
        >
          Lire la fiche →
        </Link>
      </div>
    ))}
    </section>
    </main>
  );
}