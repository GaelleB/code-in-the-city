"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Music2, Clock, Headphones, Sparkles, Play } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MusicEmbed from "@/components/MusicEmbed";
import { getPlaylistById, getAllPlaylists } from "@/data/playlists";
import { series } from "@/data/series";
import { musiques } from "@/data/musiques";

const moodEmojis: Record<string, string> = {
  nostalgie: "🎞️",
  melancolie: "🌧️",
  reconfort: "☕",
  energie: "⚡",
  nuit: "🌌"
};

const normalizeMood = (mood: string) =>
  mood.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

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
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  if (!playlist) {
    return notFound();
  }

  const allPlaylists = getAllPlaylists();
  const similarPlaylists = allPlaylists
    .filter((p) => p.id !== playlist.id && p.mood === playlist.mood)
    .slice(0, 2);

  const emoji = useMemo(() => {
    const normalizedMood = normalizeMood(playlist.mood);
    return moodEmojis[normalizedMood] ?? "🎧";
  }, [playlist.mood]);

  const selectedTrack = playlist.tracks[selectedTrackIndex];

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <Breadcrumb />
      </div>

      {/* Header */}
      <motion.div
        className="relative overflow-hidden py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border border-[var(--color-primary)]/20 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
              <motion.div
                className="rounded-2xl p-8 backdrop-blur-md bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border border-[var(--color-primary)]/20 shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-[9rem]" aria-hidden>
                  {emoji}
                </span>
              </motion.div>

              <motion.div
                className="flex-1"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5" />
                  <span className="typo-tiny font-medium uppercase tracking-[0.3em]">Playlist</span>
                </div>

                <h1 className="typo-h1 font-serif font-bold mb-4">
                  {playlist.title}
                </h1>

                <p className="typo-body text-gray-800 mb-6 max-w-2xl">
                  {playlist.description}
                </p>

                <div className="flex items-center gap-6 typo-small font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" />
                    <span>{playlist.tracks.length} titres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{estimateDuration(playlist.tracks.length)}</span>
                  </div>
                  <div className="px-3 py-1 bg-black/10 backdrop-blur-sm rounded-full capitalize">
                    {playlist.mood}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tracklist */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="typo-h2 font-serif font-bold mb-6 flex items-center gap-3">
            <Music2 className="w-6 h-6 text-[var(--color-primary)]" />
            Tracklist
          </h2>

          <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl shadow-xl overflow-hidden border border-[var(--color-primary)]/20">
            {playlist.tracks.map((track, index) => {
              const serie = series.find((s) => s.id === track.serieId);
              const artiste = track.artistId ? musiques.find((a) => a.id === track.artistId) : null;

              return (
                <motion.div
                  key={`${track.songTitle}-${index}`}
                  className={`group flex items-center gap-4 px-6 py-4 transition-all border-b border-[var(--color-primary)]/10 last:border-b-0 cursor-pointer active:bg-[var(--color-primary)]/10 touch-manipulation ${
                    selectedTrackIndex === index
                      ? "bg-[var(--color-primary)]/20 border-l-4 border-l-[var(--color-primary)]"
                      : "md:hover:bg-[var(--color-primary)]/5"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  onClick={() => setSelectedTrackIndex(index)}
                  whileTap={{ scale: 0.98, backgroundColor: "rgba(0,0,0,0.05)" }}
                >
                  <div className="w-8 text-center">
                    {selectedTrackIndex === index ? (
                      <Play className="w-4 h-4 mx-auto text-[var(--color-primary)] fill-[var(--color-primary)]" />
                    ) : (
                      <span className="typo-small text-gray-400 font-mono font-medium group-hover:text-[var(--color-primary)] transition-colors">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate group-hover:text-[var(--color-primary)] transition-colors">
                      {track.songTitle}
                    </h3>
                    <div className="flex items-center gap-2 typo-small text-gray-600">
                      {artiste ? (
                        <Link
                          href={`/music/${artiste.id}`}
                          className="md:hover:underline md:hover:text-[var(--color-primary)] transition-colors active:opacity-70 touch-manipulation"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {track.artistName}
                        </Link>
                      ) : (
                        <span>{track.artistName}</span>
                      )}
                      <span aria-hidden>•</span>
                      {serie && (
                        <Link
                          href={`/series/${serie.id}`}
                          className="md:hover:underline md:hover:text-[var(--color-primary)] transition-colors active:opacity-70 touch-manipulation"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {serie.title}
                        </Link>
                      )}
                    </div>
                  </div>

                  {track.year && (
                    <div className="hidden sm:block typo-small text-gray-500 font-medium">
                      {track.year}
                    </div>
                  )}

                  <div className="typo-small text-gray-400 font-mono">
                    3:30
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {selectedTrack && (
          <motion.div
            key={selectedTrackIndex}
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="typo-h2 font-serif font-bold mb-4 flex items-center gap-3">
              <Headphones className="w-6 h-6 text-[var(--color-primary)]" />
              Ecouter : {selectedTrack.songTitle}
            </h2>
            <MusicEmbed
              type="youtube"
              trackId=""
              artistName={selectedTrack.artistName}
              trackName={selectedTrack.songTitle}
            />
            <p className="typo-tiny text-gray-400 mt-2">
              Conseil: clique sur une chanson dans la liste pour changer le morceau.
            </p>
          </motion.div>
        )}

        {similarPlaylists.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="typo-h2 font-serif font-bold mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              Playlists similaires
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {similarPlaylists.map((similarPlaylist) => {
                const similarEmoji =
                  moodEmojis[normalizeMood(similarPlaylist.mood)] ?? "🎧";

                return (
                  <Link key={similarPlaylist.id} href={`/music/playlists/${similarPlaylist.id}`}>
                    <div className="group bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border border-[var(--color-primary)]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-[var(--color-primary)]/40 transition-all hover:scale-105">
                      <div className="flex items-center gap-4 p-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-[4rem] shadow-md">
                          {similarEmoji}
                        </div>
                        <div className="flex-1">
                          <h3 className="typo-h3 font-serif font-bold mb-1 text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                            {similarPlaylist.title}
                          </h3>
                          <p className="typo-small text-gray-600">
                            {similarPlaylist.tracks.length} titres · {estimateDuration(similarPlaylist.tracks.length)}
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

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="/music/playlists"
            className="inline-flex items-center gap-2 typo-small text-[var(--color-primary)] hover:underline font-medium"
          >
            ← Retour aux playlists
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
