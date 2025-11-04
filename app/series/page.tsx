"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { series } from "@/data/series";
import { getTagsBySerie, getTagsWithCount } from "@/data/tags";

const GenreFilter = dynamic(() => import("@/components/GenreFilter"), {
  loading: () => <div className="h-20 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: false
});

const TimelineFilter = dynamic(() => import("@/components/TimelineFilter"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />,
  ssr: false
});

export default function SeriesPage() {
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<{ start: number; end: number }>({
    start: 1998,
    end: 2025
  });

  // Pull-to-refresh
  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.reload();
  }, []);

  const { isPulling, pullDistance } = usePullToRefresh(handleRefresh);

  // Extraire l'annee de debut d'une serie
  const getSerieStartYear = (serie: typeof series[0]): number => {
    const match = serie.years.match(/^\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Extraire l'annee de fin d'une serie
  const getSerieEndYear = (serie: typeof series[0]): number => {
    const match = serie.years.match(/-\s*(\d{4}|\(en cours\))/);
    if (match) {
      return match[1] === "(en cours)" ? 2025 : parseInt(match[1], 10);
    }
    return getSerieStartYear(serie);
  };

  // Callback pour le changement de periode
  const handleYearRangeChange = useCallback((start: number, end: number) => {
    setYearRange({ start, end });
  }, []);

  // Filtrer les series selon les tags et la periode
  const filteredSeries = useMemo(() => {
    let filtered = series;

    if (selectedTagIds.length > 0) {
      filtered = filtered.filter((serie) => {
        const serieTags = getTagsBySerie(serie.id);
        const serieTagIds = serieTags.map((tag) => tag.id);
        return selectedTagIds.some((selectedId) => serieTagIds.includes(selectedId));
      });
    }

    filtered = filtered.filter((serie) => {
      const startYear = getSerieStartYear(serie);
      const endYear = getSerieEndYear(serie);
      return !(endYear < yearRange.start || startYear > yearRange.end);
    });

    return filtered;
  }, [selectedTagIds, yearRange]);

  const tagsWithCount = getTagsWithCount();

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* Pull-to-refresh indicator */}
      {pullDistance > 0 && (
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
          style={{
            transform: `translateX(-50%) translateY(${Math.min(pullDistance - 40, 60)}px)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: pullDistance > 40 ? 1 : 0 }}
        >
          <div
            className={`bg-white rounded-full p-3 shadow-lg border-2 ${
              isPulling ? "border-[var(--color-primary)]" : "border-gray-300"
            }`}
          >
            <RefreshCw
              className={`w-5 h-5 ${
                isPulling ? "text-[var(--color-primary)] animate-spin" : "text-gray-400"
              }`}
              style={{ transform: `rotate(${pullDistance * 2}deg)` }}
            />
          </div>
        </motion.div>
      )}

      <Breadcrumb />

      {/* Paragraphe d'introduction */}
      <motion.p
        className="mb-6 typo-body italic text-[var(--color-dark)] leading-relaxed max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ces series m&apos;ont tenue eveillee bien apres le generique.
        <br className="hidden sm:block" />
        Pas pour l&apos;intrigue. Pas pour le suspense.
        <br className="hidden sm:block" />
        Mais parce qu&apos;elles disaient des choses que je ressentais sans savoir les formuler.
        <br className="hidden sm:block" />
        Elles ont ete mes refuges, mes reperes, mes compagnes de route.
        <br className="hidden sm:block" />
        Dans chaque fiche, tu trouveras plus qu&apos;un resume: tu entreras dans un bout de mon histoire et
        peut-etre un peu dans la tienne.
      </motion.p>

      <motion.h1
        className="typo-h1 font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Toutes les series
        {(selectedTagIds.length > 0 || yearRange.start !== 1998 || yearRange.end !== 2025) && (
          <span className="block sm:inline mt-2 sm:mt-0 sm:ml-3 typo-small text-gray-500">
            ({filteredSeries.length} resultat{filteredSeries.length > 1 ? "s" : ""})
          </span>
        )}
      </motion.h1>

      {/* Filtres */}
      <div className="space-y-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <GenreFilter
            tags={tagsWithCount}
            onFilterChange={setSelectedTagIds}
            totalItems={series.length}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <TimelineFilter
            minYear={1998}
            maxYear={2025}
            onYearRangeChange={handleYearRangeChange}
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={`${selectedTagIds.join("-")}-${yearRange.start}-${yearRange.end}`}
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
                  <h3 className="typo-h3 font-serif font-bold mb-2">{serie.title}</h3>
                  <p className="italic typo-small text-[var(--color-text-dark)] mb-3">
                    {serie.years}
                  </p>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className={`px-2 py-0.5 typo-tiny font-sans font-medium rounded-full border ${tag.color}`}
                          title={tag.description}
                        >
                          {tag.label}
                        </span>
                      ))}
                      {tags.length > 3 && (
                        <span className="typo-tiny text-gray-500 self-center">
                          +{tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="typo-body text-[var(--color-text-dark)] mb-4 leading-relaxed text-justify flex-1">
                    {serie.synopsis.slice(0, 140)}...
                  </p>
                  <Link
                    href={`/series/${serie.id}`}
                    className="typo-small text-[var(--color-primary)] md:hover:underline font-semibold md:hover:text-black transition-colors active:opacity-70 touch-manipulation inline-block"
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
