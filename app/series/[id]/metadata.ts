import { Metadata } from 'next';
import { series } from '@/data/series';

export function generateSerieMetadata(id: string): Metadata {
  const serie = series.find((s) => s.id === Number(id));

  if (!serie) {
    return {
      title: 'Série introuvable',
    };
  }

  return {
    title: `${serie.title} (${serie.years})`,
    description: serie.synopsis,
    keywords: [
      serie.title,
      serie.originalTitle,
      'série TV',
      'fiche série',
      'casting',
      'musique',
      ...serie.casting.map((c) => c.actor),
    ],
    openGraph: {
      title: `${serie.title} | Code in the City`,
      description: serie.synopsis,
      type: 'article',
      images: serie.image ? [
        {
          url: serie.image,
          width: 800,
          height: 600,
          alt: `Affiche de ${serie.title}`,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serie.title} | Code in the City`,
      description: serie.synopsis,
      images: serie.image ? [serie.image] : [],
    },
  };
}

// Génération de structured data JSON-LD pour schema.org
export function generateSerieJsonLd(id: string) {
  const serie = series.find((s) => s.id === Number(id));

  if (!serie) return null;

  // Extraction des années
  const yearsMatch = serie.years.match(/(\d{4})\s*–\s*(\d{4}|\(en cours\))/);
  const startYear = yearsMatch ? yearsMatch[1] : serie.years.match(/\d{4}/)?.[0];
  const endYear = yearsMatch ? (yearsMatch[2] === '(en cours)' ? null : yearsMatch[2]) : null;

  return {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name: serie.title,
    alternateName: serie.originalTitle !== serie.title ? serie.originalTitle : undefined,
    description: serie.synopsis,
    startDate: startYear,
    endDate: endYear,
    image: serie.image,
    actor: serie.casting.map((cast) => ({
      '@type': 'Person',
      name: cast.actor,
    })),
    character: serie.casting.map((cast) => ({
      '@type': 'PerformanceRole',
      characterName: cast.character,
    })),
    genre: 'Drama',
  };
}
