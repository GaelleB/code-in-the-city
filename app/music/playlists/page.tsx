"use client";

import { getAllPlaylists } from "@/data/playlists";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { Music2, Clock, Headphones, RefreshCw } from "lucide-react";
import { useState, useCallback } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";

// Fonction pour estimer la durée moyenne d'une playlist (3min30 par track)
function estimateDuration(trackCount: number): string {
  const totalMinutes = trackCount * 3.5;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);

  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes} min`;
}

// Mapping des moods vers des couleurs (tons beige/crème vintage)
const moodColors = {
  nostalgie: "from-amber-50 to-orange-100 border-amber-200",
  mélancolie: "from-stone-50 to-neutral-100 border-stone-200",
  réconfort: "from-yellow-50 to-amber-50 border-yellow-200",
  énergie: "from-orange-50 to-amber-100 border-orange-200",
  nuit: "from-slate-50 to-stone-100 border-slate-200",
};

const moodEmojis = {
  nostalgie: "🌅",
  mélancolie: "🍂",
  réconfort: "☕",
  énergie: "⚡",
  nuit: "🌙",
};

interface PlaylistCardProps {
  playlist: {
    id: number;
    title: string;
    mood: string;
    description: string;
    tracks: Array<{
      songTitle: string;
      artistName: string;
    }>;
  };
  index: number;
}

function PlaylistCard({ playlist, index }: PlaylistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const colorClass = moodColors[playlist.mood as keyof typeof moodColors];
  const emoji = moodEmojis[playlist.mood as keyof typeof moodEmojis];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <Link href={`/music/playlists/${playlist.id}`}>
        <motion.div
          className={`group relative bg-gradient-to-br ${colorClass} backdrop-blur-sm
                     border rounded-2xl overflow-hidden transition-all duration-300
                     md:hover:scale-105 md:hover:shadow-2xl md:hover:shadow-black/20 cursor-pointer
                     active:scale-[0.97] touch-manipulation`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ scale: 0.97 }}
        >
          {/* Cover Image Placeholder */}
          <div className="relative h-40 sm:h-48 bg-gradient-to-br from-black/10 to-black/30 flex items-center justify-center overflow-hidden">
            <motion.div
              className="text-6xl sm:text-8xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {emoji}
            </motion.div>

            {/* Play icon on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Music2 className="w-8 h-8 text-black ml-1" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 bg-white/80 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
              {playlist.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3 sm:line-clamp-2 leading-relaxed">
              {playlist.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5" />
                <span className="font-medium">{playlist.tracks.length} titres</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-medium">{estimateDuration(playlist.tracks.length)}</span>
              </div>
            </div>

            {/* Preview des 3 premiers titres au hover */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-gray-200 space-y-1.5">
                {playlist.tracks.slice(0, 3).map((track, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2 text-xs"
                  >
                    <span className="text-gray-400 font-mono mt-0.5">{idx + 1}.</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{track.songTitle}</p>
                      <p className="text-gray-500 truncate">{track.artistName}</p>
                    </div>
                  </motion.div>
                ))}
                {playlist.tracks.length > 3 && (
                  <p className="text-xs text-gray-400 italic pt-1">
                    +{playlist.tracks.length - 3} autres titres...
                  </p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Mood badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-md capitalize border border-gray-200">
              {playlist.mood}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function PlaylistsPage() {
  const playlists = getAllPlaylists();

  // Pull-to-refresh
  const handleRefresh = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  }, []);

  const { isPulling, pullDistance } = usePullToRefresh(handleRefresh);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 relative">
      {/* Pull-to-refresh indicator */}
      {pullDistance > 0 && (
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
          style={{
            transform: `translateX(-50%) translateY(${Math.min(pullDistance - 40, 60)}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: pullDistance > 40 ? 1 : 0 }}
        >
          <div className={`bg-white rounded-full p-3 shadow-lg border-2 ${isPulling ? 'border-[var(--color-primary)]' : 'border-gray-300'}`}>
            <RefreshCw
              className={`w-5 h-5 ${isPulling ? 'text-[var(--color-primary)] animate-spin' : 'text-gray-400'}`}
              style={{ transform: `rotate(${pullDistance * 2}deg)` }}
            />
          </div>
        </motion.div>
      )}

      <Breadcrumb />

      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Music2 className="w-10 h-10 text-[var(--color-primary)]" />
          <h1 className="text-5xl font-serif font-bold text-gray-900">
            Playlists
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Des playlists pour chaque humeur, chaque moment.
          Ces chansons qui ont habité nos séries préférées, réunies par ambiance et par émotion.
        </p>
      </motion.div>

      {/* Grid de playlists */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
        ))}
      </div>

      {/* Fun fact */}
      <motion.div
        className="mt-16 p-6 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-primary)]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-sm text-gray-700 italic leading-relaxed">
          💡 <strong>Le saviez-vous ?</strong> Chaque playlist contient des morceaux soigneusement sélectionnés
          parmi les bandes originales de vos séries cultes. Une façon de revivre ces moments magiques,
          une chanson à la fois.
        </p>
      </motion.div>
    </main>
  );
}
