"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { series } from "@/data/series";
import { getTagsBySerie, getTagsWithCount } from "@/data/tags";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import GenreFilter from "@/components/GenreFilter";
import { useMemo, useState } from "react";

export default function SeriesPage() {
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  // Filtrer les séries selon les tags sélectionnés (sélection multiple)
  const filteredSeries = useMemo(() => {
    if (selectedTagIds.length === 0) return series;

    return series.filter((serie) => {
      const serieTags = getTagsBySerie(serie.id);
      const serieTagIds = serieTags.map(tag => tag.id);

      // La série doit avoir AU MOINS UN des tags sélectionnés
      return selectedTagIds.some(selectedId => serieTagIds.includes(selectedId));
    });
  }, [selectedTagIds]);

  const tagsWithCount = getTagsWithCount();

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
        Ces séries m&apos;ont tenue éveillée bien après le générique.<br />
        Pas pour l&apos;intrigue. Pas pour le suspense.<br />
        Mais parce qu&apos;elles disaient des choses que je ressentais sans savoir les formuler.<br />
        Elles ont été mes refuges, mes repères, mes compagnonnes de route.<br />
        Dans chaque fiche, tu trouveras plus qu&apos;un résumé : tu entreras dans un bout de mon histoire… et peut-être un peu dans la tienne.
      </motion.p>

      <motion.h1
        className="text-4xl font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Toutes les séries
        {selectedTagIds.length > 0 && (
          <span className="text-2xl text-gray-500 ml-3">
            ({filteredSeries.length} résultat{filteredSeries.length > 1 ? 's' : ''})
          </span>
        )}
      </motion.h1>

      {/* GenreFilter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mb-10"
      >
        <GenreFilter
          tags={tagsWithCount}
          onFilterChange={setSelectedTagIds}
          totalItems={series.length}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.section
          key={selectedTagIds.join('-')}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredSeries.map((serie, index) => {
            const tags = getTagsBySerie(serie.id);
            return (
              <motion.div
                key={serie.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
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
        </motion.section>
      </AnimatePresence>
    </main>
  );
}