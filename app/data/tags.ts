import { Serie, series } from './series';

export interface GenreTag {
  id: string;
  label: string;
  color: string;
  description: string;
}

export const genreTags: GenreTag[] = [
  {
    id: 'drame-ado',
    label: 'Drame adolescent',
    color: 'bg-pink-100 text-pink-700 border-pink-300',
    description: 'Histoires centrées sur les tourments, amours et découvertes de l\'adolescence',
  },
  {
    id: 'medical',
    label: 'Médical',
    color: 'bg-red-100 text-red-700 border-red-300',
    description: 'Univers hospitalier, urgences médicales et vies des médecins',
  },
  {
    id: 'policier',
    label: 'Policier',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
    description: 'Enquêtes criminelles, forces de l\'ordre et justice',
  },
  {
    id: 'pompiers',
    label: 'Pompiers/Secours',
    color: 'bg-orange-100 text-orange-700 border-orange-300',
    description: 'Casernes de pompiers, sauvetages et intervention d\'urgence',
  },
  {
    id: 'prison',
    label: 'Prison',
    color: 'bg-gray-100 text-gray-700 border-gray-300',
    description: 'Vie carcérale, survie et relations complexes derrière les barreaux',
  },
  {
    id: 'drame-familial',
    label: 'Drame familial',
    color: 'bg-purple-100 text-purple-700 border-purple-300',
    description: 'Relations familiales complexes, liens du sang et transmissions',
  },
  {
    id: 'romance',
    label: 'Romance',
    color: 'bg-rose-100 text-rose-700 border-rose-300',
    description: 'Histoires d\'amour, triangles amoureux et relations passionnées',
  },
  {
    id: 'amitie',
    label: 'Amitié',
    color: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    description: 'Liens d\'amitié forts, groupes d\'amis soudés et loyauté',
  },
  {
    id: 'mystere',
    label: 'Mystère/Secrets',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    description: 'Secrets enfouis, mystères à résoudre et vérités cachées',
  },
  {
    id: 'crime',
    label: 'Crime/Thriller',
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    description: 'Crimes, trafics et descente aux enfers',
  },
  {
    id: 'comedie-dramatique',
    label: 'Comédie dramatique',
    color: 'bg-amber-100 text-amber-700 border-amber-300',
    description: 'Mélange d\'humour et d\'émotions, légèreté et profondeur',
  },
  {
    id: 'sport',
    label: 'Sport',
    color: 'bg-green-100 text-green-700 border-green-300',
    description: 'Univers sportif, compétition et dépassement de soi',
  },
];

// Mapping des séries vers leurs tags de genre/thème
export const seriesTagsMapping: Record<number, string[]> = {
  // Dawson's Creek
  1: ['drame-ado', 'romance', 'amitie', 'comedie-dramatique'],

  // Les Frères Scott
  2: ['drame-ado', 'sport', 'romance', 'amitie'],

  // Gilmore Girls
  3: ['comedie-dramatique', 'drame-familial', 'amitie', 'romance'],

  // Desperate Housewives
  4: ['mystere', 'comedie-dramatique', 'romance', 'amitie'],

  // Gossip Girl
  5: ['drame-ado', 'romance', 'amitie', 'mystere'],

  // Grey's Anatomy
  6: ['medical', 'romance', 'amitie', 'drame-familial'],

  // Private Practice
  7: ['medical', 'romance', 'amitie', 'drame-familial'],

  // This Is Us
  8: ['drame-familial', 'romance', 'amitie'],
};

/**
 * Associe automatiquement les tags de genre aux séries
 * Basé sur les synopsis, thèmes et genres de chaque série
 */
export function assignTagsToSeries(): Map<number, GenreTag[]> {
  const seriesWithTags = new Map<number, GenreTag[]>();

  Object.entries(seriesTagsMapping).forEach(([serieId, tagIds]) => {
    const tags = tagIds
      .map((tagId) => genreTags.find((tag) => tag.id === tagId))
      .filter((tag): tag is GenreTag => tag !== undefined);

    seriesWithTags.set(Number(serieId), tags);
  });

  return seriesWithTags;
}

/**
 * Retourne toutes les séries associées à un tag de genre donné
 */
export function getSeriesByTag(tagId: string): Serie[] {
  const serieIdsWithTag: number[] = [];

  // Trouver tous les IDs de séries qui ont ce tag
  Object.entries(seriesTagsMapping).forEach(([serieId, tagIds]) => {
    if (tagIds.includes(tagId)) {
      serieIdsWithTag.push(Number(serieId));
    }
  });

  // Retourner les objets série correspondants
  return series.filter((serie) => serieIdsWithTag.includes(serie.id));
}

/**
 * Retourne tous les tags d'une série donnée
 */
export function getTagsBySerie(serieId: number): GenreTag[] {
  const tagIds = seriesTagsMapping[serieId] || [];
  return tagIds
    .map((tagId) => genreTags.find((tag) => tag.id === tagId))
    .filter((tag): tag is GenreTag => tag !== undefined);
}

/**
 * Retourne le nombre de séries associées à chaque tag
 */
export function getTagsWithCount(): Array<GenreTag & { count: number }> {
  return genreTags.map((tag) => ({
    ...tag,
    count: getSeriesByTag(tag.id).length,
  }));
}
