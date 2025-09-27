"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  getSeriesForLocation,
  getSeriesForArtist,
  getLocationForSeries,
  getArtistsForSeries
} from "../../utils/relations";

interface RelatedLinksProps {
  serieId?: number;
  locationId?: number;
  artistId?: number;
}

export default function RelatedLinks({ serieId, locationId, artistId }: RelatedLinksProps) {
  const relatedSeries = locationId ? getSeriesForLocation(locationId) :
                       artistId ? getSeriesForArtist(artistId) : [];

  const relatedLocation = serieId ? getLocationForSeries(serieId) : undefined;
  const relatedArtists = serieId ? getArtistsForSeries(serieId) : [];

  if (relatedSeries.length === 0 && !relatedLocation && relatedArtists.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="mt-6 space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold text-[var(--color-dark)] mb-3">
        Liens connexes
      </h3>

      <div className="flex flex-wrap gap-2">
        {/* Série liée (si on affiche un lieu) */}
        {relatedSeries.map((serie) => (
          <Link key={serie.id} href={`/series/${serie.id}`}>
            <motion.span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                         bg-[var(--color-primary)]/10 text-[var(--color-primary)]
                         border border-[var(--color-primary)]/20
                         hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40
                         transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">📺</span>
              <span>{serie.title}</span>
            </motion.span>
          </Link>
        ))}

        {/* Lieu lié (si on affiche une série) */}
        {relatedLocation && (
          <Link href={`/locations#lieu-${relatedLocation.id}`}>
            <motion.span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                         bg-[var(--color-secondary)]/10 text-[var(--color-dark)]
                         border border-[var(--color-secondary)]/20
                         hover:bg-[var(--color-secondary)]/20 hover:border-[var(--color-secondary)]/40
                         transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">📍</span>
              <span>{relatedLocation.nom}</span>
            </motion.span>
          </Link>
        )}

        {/* Artistes liés (si on affiche une série) */}
        {relatedArtists.map((artiste) => (
          <Link key={artiste.id} href={`/music/${artiste.id}`}>
            <motion.span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                         bg-[var(--color-accent-1)]/10 text-[var(--color-accent-1)]
                         border border-[var(--color-accent-1)]/20
                         hover:bg-[var(--color-accent-1)]/20 hover:border-[var(--color-accent-1)]/40
                         transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">🎵</span>
              <span>{artiste.nom}</span>
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}