import { useState, useMemo, useEffect, useCallback } from 'react';
import { series, Serie } from '../data/series';
import { articles, Article } from '../data/articles';
import { musiques, Artiste } from '../data/musiques';
import { getAllPlaylists, type Playlist, type PlaylistMood } from '../data/playlists';
import { chansonsEntendues } from '../data/chansons-entendues';

export type SearchResultType = 'serie' | 'article' | 'artiste' | 'chanson' | 'playlist';

export interface SearchResult {
  id: number | string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  image?: string;
  url: string;
  score: number;
  mood?: string;
}

// Fonction de recherche fuzzy avec calcul de score
function fuzzyMatch(text: string, search: string): { match: boolean; score: number } {
  text = text.toLowerCase();
  search = search.toLowerCase();

  // Correspondance exacte
  if (text.includes(search)) {
    return { match: true, score: 100 };
  }

  let searchIndex = 0;
  let consecutiveMatches = 0;
  let maxConsecutiveMatches = 0;
  let totalMatches = 0;

  for (let i = 0; i < text.length && searchIndex < search.length; i++) {
    if (text[i] === search[searchIndex]) {
      searchIndex++;
      consecutiveMatches++;
      totalMatches++;
      maxConsecutiveMatches = Math.max(maxConsecutiveMatches, consecutiveMatches);
    } else {
      consecutiveMatches = 0;
    }
  }

  // Si tous les caractères ont été trouvés dans l'ordre
  if (searchIndex === search.length) {
    // Score basé sur le pourcentage de caractères correspondants et la longueur des séquences consécutives
    const charScore = (totalMatches / search.length) * 50;
    const consecutiveScore = (maxConsecutiveMatches / search.length) * 50;
    return { match: true, score: Math.round(charScore + consecutiveScore) };
  }

  return { match: false, score: 0 };
}

export function useSearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  // Recherche dans toutes les données
  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];

    const searchResults: SearchResult[] = [];

    // Recherche dans les séries
    series.forEach((serie: Serie) => {
      const titleMatch = fuzzyMatch(serie.title, query);
      const originalTitleMatch = fuzzyMatch(serie.originalTitle, query);
      const bestMatch = Math.max(titleMatch.score, originalTitleMatch.score);

      if (titleMatch.match || originalTitleMatch.match) {
        searchResults.push({
          id: serie.id,
          type: 'serie',
          title: serie.title,
          subtitle: serie.originalTitle !== serie.title ? serie.originalTitle : serie.years,
          image: serie.image,
          url: `/series/${serie.id}`,
          score: bestMatch,
        });
      }
    });

    // Recherche dans les articles
    articles.forEach((article: Article) => {
      const titleMatch = fuzzyMatch(article.title, query);

      if (titleMatch.match) {
        searchResults.push({
          id: article.id,
          type: 'article',
          title: article.title,
          subtitle: article.category,
          image: article.image,
          url: `/blog/${article.id}`,
          score: titleMatch.score,
        });
      }
    });

    // Recherche dans les artistes
    musiques.forEach((artiste: Artiste) => {
      const nameMatch = fuzzyMatch(artiste.nom, query);

      // Recherche aussi dans les chansons de l'artiste
      let songMatch = { match: false, score: 0 };
      if (artiste.bo && artiste.bo.length > 0) {
        artiste.bo.forEach(song => {
          const match = fuzzyMatch(song, query);
          if (match.score > songMatch.score) {
            songMatch = match;
          }
        });
      }

      const bestScore = Math.max(nameMatch.score, songMatch.score);

      if (nameMatch.match || songMatch.match) {
        searchResults.push({
          id: artiste.id,
          type: 'artiste',
          title: artiste.nom,
          subtitle: artiste.seriesLiees.join(', '),
          image: artiste.image,
          url: `/music/${artiste.id}`,
          score: bestScore,
        });
      }
    });

    // Recherche dans les chansons
    chansonsEntendues.forEach((entry) => {
      entry.chansons.forEach((chanson) => {
        const titleMatch = fuzzyMatch(chanson.titre, query);
        const artistMatch = fuzzyMatch(chanson.artiste, query);
        const bestScore = Math.max(titleMatch.score, artistMatch.score);

        if (titleMatch.match || artistMatch.match) {
          searchResults.push({
            id: `${entry.serieId}-${chanson.titre}`,
            type: 'chanson',
            title: chanson.titre,
            subtitle: `${chanson.artiste} • ${entry.serieNom}`,
            url: `/series/${entry.serieId}`,
            score: bestScore,
          });
        }
      });
    });

    // Recherche dans les playlists (titre, description, mood)
    const playlists = getAllPlaylists();
    playlists.forEach((playlist: Playlist) => {
      const titleMatch = fuzzyMatch(playlist.title, query);
      const descMatch = fuzzyMatch(playlist.description, query);
      const moodMatch = fuzzyMatch(playlist.mood, query);
      const bestScore = Math.max(titleMatch.score, descMatch.score, moodMatch.score);

      if (titleMatch.match || descMatch.match || moodMatch.match) {
        searchResults.push({
          id: `playlist-${playlist.id}`,
          type: 'playlist',
          title: playlist.title,
          subtitle: `${playlist.tracks.length} titres • ${playlist.mood}`,
          url: `/music/playlists/${playlist.id}`,
          score: bestScore,
          mood: playlist.mood,
        });
      }
    });

    // Trier par score décroissant
    return searchResults.sort((a, b) => b.score - a.score).slice(0, 10);
  }, [query]);

  // Réinitialiser l'index sélectionné quand les résultats changent
  useEffect(() => {
    setSelectedIndex(-1);
  }, [results]);

  // Ouvrir/fermer le dropdown
  useEffect(() => {
    setIsOpen(query.trim().length > 0 && results.length > 0);
  }, [query, results]);

  // Navigation au clavier
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setQuery('');
          break;
      }
    },
    [isOpen, results.length]
  );

  const clearSearch = useCallback(() => {
    setQuery('');
    setSelectedIndex(-1);
    setIsOpen(false);
  }, []);

  return {
    query,
    setQuery,
    results,
    selectedIndex,
    setSelectedIndex,
    isOpen,
    setIsOpen,
    handleKeyDown,
    clearSearch,
  };
}
