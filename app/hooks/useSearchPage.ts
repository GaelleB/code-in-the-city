import { useMemo } from 'react';
import { series, Serie } from '../data/series';
import { articles, Article } from '../data/articles';
import { musiques, Artiste } from '../data/musiques';
import { lieux, Lieu } from '../data/lieux';

export interface SearchResultItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  url: string;
  score: number;
}

export interface GroupedResults {
  series: SearchResultItem[];
  articles: SearchResultItem[];
  artistes: SearchResultItem[];
  lieux: SearchResultItem[];
  total: number;
}

// Fonction de recherche fuzzy avec calcul de score
function fuzzyMatch(text: string, search: string): { match: boolean; score: number } {
  text = text.toLowerCase();
  search = search.toLowerCase();

  // Correspondance exacte
  if (text.includes(search)) {
    const exactPos = text.indexOf(search);
    // Bonus si le match est au début
    const positionBonus = exactPos === 0 ? 20 : 10;
    return { match: true, score: 100 + positionBonus };
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
    const charScore = (totalMatches / search.length) * 50;
    const consecutiveScore = (maxConsecutiveMatches / search.length) * 50;
    return { match: true, score: Math.round(charScore + consecutiveScore) };
  }

  return { match: false, score: 0 };
}

export function useSearchPage(query: string): GroupedResults {
  const results = useMemo<GroupedResults>(() => {
    if (!query.trim()) {
      return { series: [], articles: [], artistes: [], lieux: [], total: 0 };
    }

    const seriesResults: SearchResultItem[] = [];
    const articlesResults: SearchResultItem[] = [];
    const artistesResults: SearchResultItem[] = [];
    const lieuxResults: SearchResultItem[] = [];

    // Recherche dans les séries
    series.forEach((serie: Serie) => {
      const titleMatch = fuzzyMatch(serie.title, query);
      const originalTitleMatch = fuzzyMatch(serie.originalTitle, query);
      const synopsisMatch = fuzzyMatch(serie.synopsis, query);
      const bestMatch = Math.max(titleMatch.score, originalTitleMatch.score, synopsisMatch.score);

      if (titleMatch.match || originalTitleMatch.match || synopsisMatch.match) {
        seriesResults.push({
          id: serie.id,
          title: serie.title,
          subtitle: serie.originalTitle !== serie.title ? serie.originalTitle : serie.years,
          description: serie.synopsis,
          image: serie.image,
          url: `/series/${serie.id}`,
          score: bestMatch,
        });
      }
    });

    // Recherche dans les articles
    articles.forEach((article: Article) => {
      const titleMatch = fuzzyMatch(article.title, query);
      const categoryMatch = fuzzyMatch(article.category, query);
      const bestMatch = Math.max(titleMatch.score, categoryMatch.score);

      if (titleMatch.match || categoryMatch.match) {
        articlesResults.push({
          id: article.id,
          title: article.title,
          subtitle: article.category,
          description: article.content[0]?.substring(0, 150) + '...',
          image: article.image,
          url: `/articles/${article.id}`,
          score: bestMatch,
        });
      }
    });

    // Recherche dans les artistes
    musiques.forEach((artiste: Artiste) => {
      const nameMatch = fuzzyMatch(artiste.nom, query);
      const seriesMatch = artiste.seriesLiees.some((serie) => fuzzyMatch(serie, query).match);
      const bestMatch = nameMatch.score;

      if (nameMatch.match || seriesMatch) {
        artistesResults.push({
          id: artiste.id,
          title: artiste.nom,
          subtitle: artiste.seriesLiees.join(', '),
          description: `BO: ${artiste.bo.join(', ')}`,
          image: artiste.image,
          url: `/music/${artiste.id}`,
          score: bestMatch || 50,
        });
      }
    });

    // Recherche dans les lieux
    lieux.forEach((lieu: Lieu) => {
      const nomMatch = fuzzyMatch(lieu.nom, query);
      const descMatch = fuzzyMatch(lieu.description, query);
      const bestMatch = Math.max(nomMatch.score, descMatch.score);

      if (nomMatch.match || descMatch.match) {
        lieuxResults.push({
          id: lieu.id,
          title: lieu.nom,
          subtitle: 'Lieu de tournage',
          description: lieu.description,
          url: lieu.mapUrl,
          score: bestMatch,
        });
      }
    });

    // Trier chaque catégorie par score
    seriesResults.sort((a, b) => b.score - a.score);
    articlesResults.sort((a, b) => b.score - a.score);
    artistesResults.sort((a, b) => b.score - a.score);
    lieuxResults.sort((a, b) => b.score - a.score);

    const total =
      seriesResults.length +
      articlesResults.length +
      artistesResults.length +
      lieuxResults.length;

    return {
      series: seriesResults,
      articles: articlesResults,
      artistes: artistesResults,
      lieux: lieuxResults,
      total,
    };
  }, [query]);

  return results;
}
