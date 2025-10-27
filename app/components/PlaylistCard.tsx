"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music2, Clock, Headphones } from "lucide-react";
import { useState } from "react";

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

export default function PlaylistCard({ playlist, index }: PlaylistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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
          className="group relative bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border border-[var(--color-primary)]/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 md:hover:border-[var(--color-primary)]/40 md:hover:shadow-2xl md:hover:shadow-[var(--color-primary)]/30 cursor-pointer active:scale-[0.97] touch-manipulation"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            y: -8,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Cover Image Placeholder */}
          <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center overflow-hidden">
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
          <div className="p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
              {playlist.title}
            </h3>

            <p className="text-sm text-gray-700 mb-4 line-clamp-3 sm:line-clamp-2 leading-relaxed">
              {playlist.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
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
              <div className="pt-3 border-t border-gray-300 space-y-1.5">
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
                      <p className="text-gray-600 truncate">{track.artistName}</p>
                    </div>
                  </motion.div>
                ))}
                {playlist.tracks.length > 3 && (
                  <p className="text-xs text-gray-500 italic pt-1">
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
