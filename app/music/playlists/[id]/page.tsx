"use client";

import { notFound } from "next/navigation";
import { getPlaylistById, getAllPlaylists } from "@/data/playlists";
import { series } from "@/data/series";
import { musiques } from "@/data/musiques";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { Music2, Clock, Headphones, ExternalLink, Sparkles } from "lucide-react";

// Mapping des moods vers des couleurs
const moodColors = {
  nostalgie: "from-amber-500 to-orange-600",
  mélancolie: "from-blue-500 to-indigo-600",
  réconfort: "from-green-500 to-emerald-600",
  énergie: "from-pink-500 to-rose-600",
  nuit: "from-purple-500 to-violet-600",
};

const moodEmojis = {
  nostalgie: "🌅",
  mélancolie: "🍂",
  réconfort: "☕",
  énergie: "⚡",
  nuit: "🌙",
};

function estimateDuration(trackCount: number): string {
  const totalMinutes = trackCount * 3.5;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);

  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes} min`;
}

export default function PlaylistDetailPage({ params }: { params: { id: string } }) {
  const playlist = getPlaylistById(Number(params.id));

  if (!playlist) {
    return notFound();
  }

  const allPlaylists = getAllPlaylists();
  const similarPlaylists = allPlaylists
    .filter(p => p.id !== playlist.id && p.mood === playlist.mood)
    .slice(0, 2);

  const colorClass = moodColors[playlist.mood as keyof typeof moodColors];
  const emoji = moodEmojis[playlist.mood as keyof typeof moodEmojis];

  return (
    <main className="min-h-screen">
      <Breadcrumb />

      {/* Header avec gradient coloré */}
      <motion.div
        className={`relative bg-gradient-to-br ${colorClass} text-white overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
            {/* Cover */}
            <motion.div
              className="w-64 h-64 bg-black/20 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-9xl">{emoji}</span>
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex-1"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-widest">Playlist</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                {playlist.title}
              </h1>

              <p className="text-lg mb-6 text-white/90 leading-relaxed max-w-2xl">
                {playlist.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  <span>{playlist.tracks.length} titres</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{estimateDuration(playlist.tracks.length)}</span>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full capitalize">
                  {playlist.mood}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Message Spotify */}
          <motion.div
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-flex items-start gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Music2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-1">💡 Retrouver ces titres sur Spotify</p>
                <p className="text-white/80">
                  Cherche les artistes et titres listés ci-dessous pour créer ta propre playlist !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Liste des tracks */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
            <Music2 className="w-6 h-6 text-[var(--color-primary)]" />
            Tracklist
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {playlist.tracks.map((track, index) => {
              const serie = series.find(s => s.id === track.serieId);
              const artiste = track.artistId ? musiques.find(a => a.id === track.artistId) : null;

              return (
                <motion.div
                  key={index}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  {/* Numéro */}
                  <div className="w-8 text-center">
                    <span className="text-gray-400 font-mono font-medium group-hover:text-[var(--color-primary)] transition-colors">
                      {index + 1}
                    </span>
                  </div>

                  {/* Info track */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate group-hover:text-[var(--color-primary)] transition-colors">
                      {track.songTitle}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {artiste ? (
                        <Link
                          href={`/music/${artiste.id}`}
                          className="hover:underline hover:text-[var(--color-primary)] transition-colors"
                        >
                          {track.artistName}
                        </Link>
                      ) : (
                        <span>{track.artistName}</span>
                      )}
                      <span>•</span>
                      {serie && (
                        <Link
                          href={`/series/${serie.id}`}
                          className="hover:underline hover:text-[var(--color-primary)] transition-colors"
                        >
                          {serie.title}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Année */}
                  {track.year && (
                    <div className="hidden sm:block text-sm text-gray-500 font-medium">
                      {track.year}
                    </div>
                  )}

                  {/* Durée simulée */}
                  <div className="text-sm text-gray-400 font-mono">
                    3:30
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Playlists similaires */}
        {similarPlaylists.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              Playlists similaires
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {similarPlaylists.map((similarPlaylist) => {
                const similarColorClass = moodColors[similarPlaylist.mood as keyof typeof moodColors];
                const similarEmoji = moodEmojis[similarPlaylist.mood as keyof typeof moodEmojis];

                return (
                  <Link key={similarPlaylist.id} href={`/music/playlists/${similarPlaylist.id}`}>
                    <div className={`group bg-gradient-to-br ${similarColorClass} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105`}>
                      <div className="flex items-center gap-4 p-6">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-4xl">
                          {similarEmoji}
                        </div>
                        <div className="flex-1 text-white">
                          <h3 className="text-xl font-serif font-bold mb-1 group-hover:underline">
                            {similarPlaylist.title}
                          </h3>
                          <p className="text-sm text-white/80">
                            {similarPlaylist.tracks.length} titres • {estimateDuration(similarPlaylist.tracks.length)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Retour */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="/music/playlists"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline font-medium"
          >
            ← Retour aux playlists
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
