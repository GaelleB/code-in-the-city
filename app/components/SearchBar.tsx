'use client';

import { useEffect, useRef, useMemo } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSearch, SearchResult } from '../hooks/useSearch';
import { getAllPlaylists } from '../data/playlists';

export default function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    results,
    selectedIndex,
    setSelectedIndex,
    isOpen,
    setIsOpen,
    handleKeyDown,
    clearSearch,
  } = useSearch();

  // Gérer les événements clavier
  useEffect(() => {
    const handleKeyDownWrapper = (e: KeyboardEvent) => {
      handleKeyDown(e);

      // Gérer l'entrée
      if (e.key === 'Enter' && query.trim()) {
        e.preventDefault();

        // Si un résultat est sélectionné, y aller directement
        if (selectedIndex >= 0 && results[selectedIndex]) {
          router.push(results[selectedIndex].url);
        } else {
          // Sinon, aller à la page de recherche complète
          router.push(`/search?q=${encodeURIComponent(query)}`);
        }
        clearSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDownWrapper);
    return () => window.removeEventListener('keydown', handleKeyDownWrapper);
  }, [handleKeyDown, selectedIndex, results, router, clearSearch, query]);

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  // Gérer le clic sur un résultat
  const handleResultClick = (result: SearchResult) => {
    router.push(result.url);
    clearSearch();
  };

  // Suggestions de playlists basées sur des mots-clés
  const playlistSuggestions = useMemo(() => {
    if (!query.trim()) return [];

    const queryLower = query.toLowerCase();
    const playlists = getAllPlaylists();
    const suggestions: { title: string; url: string; mood: string }[] = [];

    // Mots-clés pour chaque mood
    const moodKeywords = {
      nostalgie: ['nostalgie', 'souvenir', '2000s', 'passé', 'retour'],
      mélancolie: ['mélancolie', 'triste', 'pluie', 'automne', 'cafard'],
      réconfort: ['réconfort', 'doux', 'calme', 'cocon', 'apaisé'],
      énergie: ['énergie', 'positif', 'joie', 'motivation', 'heureux'],
      nuit: ['nuit', 'insomnie', 'ado', 'soir', 'tard'],
    };

    Object.entries(moodKeywords).forEach(([mood, keywords]) => {
      if (keywords.some(keyword => queryLower.includes(keyword))) {
        const playlist = playlists.find(p => p.mood === mood);
        if (playlist && suggestions.length < 2) {
          suggestions.push({
            title: playlist.title,
            url: `/music/playlists/${playlist.id}`,
            mood: playlist.mood,
          });
        }
      }
    });

    return suggestions;
  }, [query]);

  // Badge de type
  const getTypeBadge = (type: string) => {
    const badges = {
      serie: { label: 'Série', color: 'bg-purple-100 text-purple-700 border border-purple-300', icon: '📺' },
      article: { label: 'Article', color: 'bg-blue-100 text-blue-700 border border-blue-300', icon: '📝' },
      artiste: { label: 'Artiste', color: 'bg-pink-100 text-pink-700 border border-pink-300', icon: '🎤' },
      chanson: { label: 'Chanson', color: 'bg-green-100 text-green-700 border border-green-300', icon: '🎵' },
      playlist: { label: 'Playlist', color: 'bg-orange-100 text-orange-700 border border-orange-300', icon: '🎧' },
    };
    const badge = badges[type as keyof typeof badges] || badges.article;
    return (
      <span className={`text-xs px-2 py-0.5 rounded-full font-sans font-medium flex items-center gap-1 ${badge.color}`}>
        <span>{badge.icon}</span>
        {badge.label}
      </span>
    );
  };

  return (
    <div className="relative w-full max-w-xl">
      {/* Input de recherche */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && results.length > 0 && setIsOpen(true)}
          placeholder="Rechercher une série, chanson, playlist, artiste..."
          className="w-full pl-12 pr-12 py-3 bg-white border-2 border-[var(--color-dark)] rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all font-sans text-sm"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 md:hover:text-black transition-colors active:scale-90 touch-manipulation p-1"
            aria-label="Effacer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown des résultats */}
      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-white border-2 border-[var(--color-dark)] rounded-lg shadow-xl overflow-hidden z-50"
        >
          <div className="max-h-[400px] overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full flex items-center gap-4 p-3 text-left transition-colors border-b border-gray-200 last:border-b-0 active:bg-gray-100 touch-manipulation ${
                  index === selectedIndex
                    ? 'bg-[var(--color-accent)]/10'
                    : 'md:hover:bg-gray-50'
                }`}
              >
                {/* Image */}
                {result.image && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-black font-medium truncate font-sans">{result.title}</h3>
                    {getTypeBadge(result.type)}
                  </div>
                  {result.subtitle && (
                    <p className="text-sm text-gray-600 truncate font-sans">{result.subtitle}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Suggestions de playlists */}
          {playlistSuggestions.length > 0 && (
            <div className="px-4 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border-t border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
                  Tu cherches peut-être :
                </span>
              </div>
              <div className="space-y-1">
                {playlistSuggestions.map((suggestion, idx) => (
                  <Link
                    key={idx}
                    href={suggestion.url}
                    onClick={clearSearch}
                    className="block text-sm text-orange-900 md:hover:text-orange-700 md:hover:underline font-medium active:opacity-70 touch-manipulation py-1"
                  >
                    🎧 {suggestion.title} <span className="text-xs text-orange-600">({suggestion.mood})</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="px-4 py-2 border-t-2 border-[var(--color-dark)] bg-gray-50 text-xs text-gray-600 font-sans flex items-center justify-between">
            <span>↑↓ naviguer • ↵ sélectionner • Esc fermer</span>
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={clearSearch}
              className="text-[var(--color-accent)] hover:underline font-medium"
            >
              Voir tous les résultats →
            </Link>
          </div>
        </div>
      )}

      {/* Aucun résultat */}
      {isOpen && results.length === 0 && query.trim() && (
        <div className="absolute top-full mt-2 w-full bg-white border-2 border-[var(--color-dark)] rounded-lg shadow-xl p-4 text-center text-gray-600 font-sans z-50">
          Aucun résultat pour &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
