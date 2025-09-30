"use client";

import { useState, useEffect } from "react";
import { Play, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface MusicEmbedProps {
  type: "spotify" | "youtube";
  trackId: string;
  artistName?: string;
  trackName?: string;
  height?: number;
}

export default function MusicEmbed({
  type,
  trackId,
  artistName,
  trackName,
  height = 152,
}: MusicEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Générer l'URL de l'embed selon le type
  const getEmbedUrl = () => {
    if (type === "spotify") {
      // Format: https://open.spotify.com/embed/track/{trackId}
      return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
    } else if (type === "youtube") {
      // Format: https://www.youtube.com/embed/{videoId}
      return `https://www.youtube.com/embed/${trackId}`;
    }
    return "";
  };

  const embedUrl = getEmbedUrl();

  // Gérer le clic pour charger l'iframe (lazy loading)
  const handleLoadEmbed = () => {
    setShouldLoad(true);
  };

  // Gérer l'erreur de chargement
  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Fallback avec lien externe
  if (hasError || !trackId) {
    return (
      <motion.div
        className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border-2 border-gray-300 flex items-center justify-center"
        style={{ height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center px-6 py-4">
          <AlertCircle className="w-8 h-8 text-gray-500 mx-auto mb-3" />
          <p className="text-sm text-gray-600 mb-3">
            {hasError
              ? "Lecteur non disponible"
              : "Aucun lecteur configuré"}
          </p>
          {artistName && (
            <a
              href={
                type === "spotify"
                  ? `https://open.spotify.com/search/${encodeURIComponent(
                      `${artistName} ${trackName || ""}`
                    )}`
                  : `https://www.youtube.com/results?search_query=${encodeURIComponent(
                      `${artistName} ${trackName || ""}`
                    )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
            >
              <Play className="w-4 h-4" />
              Rechercher sur {type === "spotify" ? "Spotify" : "YouTube"}
            </a>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg"
      style={{ height }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {!shouldLoad ? (
        // Placeholder avant chargement (lazy loading)
        <button
          onClick={handleLoadEmbed}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm text-white hover:from-black/80 hover:to-black/60 transition-all group"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all">
            <Play className="w-8 h-8 ml-1" />
          </div>
          <p className="text-sm font-medium">
            Charger le lecteur {type === "spotify" ? "Spotify" : "YouTube"}
          </p>
          {artistName && (
            <p className="text-xs text-white/70 mt-1">
              {artistName} {trackName && `- ${trackName}`}
            </p>
          )}
        </button>
      ) : (
        <>
          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <Loader2 className="w-8 h-8 text-[var(--color-primary)] animate-spin" />
            </div>
          )}

          {/* Iframe embed */}
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            title={`${type} player${artistName ? ` - ${artistName}` : ""}`}
          />
        </>
      )}
    </motion.div>
  );
}
