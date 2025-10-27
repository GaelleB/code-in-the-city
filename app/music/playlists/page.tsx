"use client";

import { getAllPlaylists } from "@/data/playlists";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import PlaylistCard from "@/components/PlaylistCard";
import { Music2, RefreshCw } from "lucide-react";
import { useCallback } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";

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

      {/* Header avec effet glassmorphism */}
      <motion.div
        className="mb-12 p-6 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-primary)]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Music2 className="w-10 h-10 text-[var(--color-primary)]" />
          <h1 className="text-5xl font-serif font-bold text-gray-900">
            Playlists
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl italic">
          Chaque playlist contient des morceaux soigneusement sélectionnés
          parmi les bandes originales de mes séries cultes. Une façon de revivre ces moments magiques,
          une chanson à la fois.
        </p>
      </motion.div>

      {/* Grid de playlists */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
        ))}
      </div>
    </main>
  );
}