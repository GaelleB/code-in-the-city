"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { series } from "@/data/series";
import { motion } from "framer-motion";

export default function SeriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Paragraphe d'introduction */}
      <motion.p 
        className="mb-6 text-lg text-[var(--color-dark)] italic"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ces séries m'ont tenue éveillée bien après le générique.<br />
        Pas pour l'intrigue. Pas pour le suspense.<br />
        Mais parce qu'elles disaient des choses que je ressentais sans savoir les formuler.<br />
        Elles ont été mes refuges, mes repères, mes compagnonnes de route.<br />
        Dans chaque fiche, tu trouveras plus qu'un résumé : tu entreras dans un bout de mon histoire… et peut-être un peu dans la tienne.
      </motion.p>

      <motion.h1 
        className="text-4xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Toutes les series
      </motion.h1>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {series.map((serie, index) => (
          <motion.div
            key={serie.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4 + index * 0.1,
              ease: "easeOut"
            }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-serif font-bold mb-2">{serie.title}</h3>
              <p className="text-sm italic text-[var(--color-text-dark)] mb-4">
                {serie.years}
              </p>
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
          </motion.div>
        ))}
      </section>
    </main>
  );
}