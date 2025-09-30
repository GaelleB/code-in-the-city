"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { series } from "@/data/series";
import { getTagsBySerie, genreTags, getTagsWithCount } from "@/data/tags";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SeriesPage() {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  // Filtrer les séries selon le tag sélectionné
  const filteredSeries = useMemo(() => {
    if (!selectedTag) return series;
    return series.filter((serie) => {
      const tags = getTagsBySerie(serie.id);
      return tags.some((tag) => tag.id === selectedTag);
    });
  }, [selectedTag]);

  const tagsWithCount = getTagsWithCount();
  const currentTagLabel = genreTags.find((tag) => tag.id === selectedTag)?.label;

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumb />

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
        className="text-4xl font-serif font-bold mb-6 border-b border-[var(--color-secondary)] pb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {selectedTag ? `Séries - ${currentTagLabel}` : 'Toutes les séries'}
      </motion.h1>

      {/* Filtres par tags */}
      <motion.div
        className="mb-8 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Link
          href="/series"
          className={`px-4 py-2 rounded-full border-2 font-sans font-medium transition-all hover:scale-105 ${
            !selectedTag
              ? 'bg-[var(--color-dark)] text-white border-[var(--color-dark)]'
              : 'bg-white text-gray-700 border-gray-300 hover:border-[var(--color-dark)]'
          }`}
        >
          Toutes ({series.length})
        </Link>
        {tagsWithCount.map((tag) => (
          <Link
            key={tag.id}
            href={`/series?tag=${tag.id}`}
            className={`px-4 py-2 rounded-full border font-sans font-medium transition-all hover:scale-105 ${
              selectedTag === tag.id
                ? tag.color
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
            }`}
            title={tag.description}
          >
            {tag.label} ({tag.count})
          </Link>
        ))}
      </motion.div>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredSeries.map((serie, index) => {
          const tags = getTagsBySerie(serie.id);
          return (
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
              <Card className="h-full flex flex-col">
                <h3 className="text-2xl font-serif font-bold mb-2">{serie.title}</h3>
                <p className="text-sm italic text-[var(--color-text-dark)] mb-3">
                  {serie.years}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag.id}
                        className={`px-2 py-0.5 text-xs font-sans font-medium rounded-full border ${tag.color}`}
                        title={tag.description}
                      >
                        {tag.label}
                      </span>
                    ))}
                    {tags.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">
                        +{tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <p className="text-[var(--color-text-dark)] mb-4 leading-relaxed text-justify flex-1">
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
          );
        })}
      </section>
    </main>
  );
}