'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { Search, ExternalLink } from 'lucide-react';
import { useSearchPage, SearchResultItem } from '../hooks/useSearchPage';
import Breadcrumb from '../components/Breadcrumb';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  // const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const { series, articles, artistes, lieux, total } = useSearchPage(query);

  // Pagination pour chaque section
  const paginateResults = (results: SearchResultItem[], page: number) => {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return results.slice(startIndex, endIndex);
  };

  const getTotalPages = (results: SearchResultItem[]) => {
    return Math.ceil(results.length / resultsPerPage);
  };

  // Composant de section de résultats
  const ResultSection = ({
    title,
    results,
    icon,
  }: {
    title: string;
    results: SearchResultItem[];
    icon: string;
  }) => {
    const [sectionPage, setSectionPage] = useState(1);
    const totalPages = getTotalPages(results);
    const paginatedResults = paginateResults(results, sectionPage);

    if (results.length === 0) return null;

    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[var(--color-dark)]">
          <span>{icon}</span>
          {title} <span className="text-lg text-gray-500">({results.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedResults.map((result) => (
            <Link
              key={`${title}-${result.id}`}
              href={result.url}
              target={result.url.startsWith('http') ? '_blank' : undefined}
              className="group border-2 border-[var(--color-dark)] rounded-lg p-4 hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              <div className="flex gap-4">
                {/* Image */}
                {result.image && (
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-lg text-black group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {result.title}
                    </h3>
                    {result.url.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                    )}
                  </div>

                  {result.subtitle && (
                    <p className="text-sm text-gray-600 mt-1 font-sans">{result.subtitle}</p>
                  )}

                  {result.description && (
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 font-sans">
                      {result.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination de section */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setSectionPage((p) => Math.max(1, p - 1))}
              disabled={sectionPage === 1}
              className="px-4 py-2 border-2 border-[var(--color-dark)] rounded-lg font-sans font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Précédent
            </button>
            <span className="px-4 py-2 font-sans text-gray-600">
              Page {sectionPage} sur {totalPages}
            </span>
            <button
              onClick={() => setSectionPage((p) => Math.min(totalPages, p + 1))}
              disabled={sectionPage === totalPages}
              className="px-4 py-2 border-2 border-[var(--color-dark)] rounded-lg font-sans font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Suivant
            </button>
          </div>
        )}
      </section>
    );
  };

  // État vide (pas de requête)
  if (!query.trim()) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb />
        <div className="text-center py-20">
          <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-[var(--color-dark)] mb-2">
            Rechercher dans Code in the City
          </h1>
          <p className="text-gray-600 font-sans">
            Utilisez la barre de recherche ci-dessus pour trouver des séries, articles,
            artistes ou lieux.
          </p>
        </div>
      </div>
    );
  }

  // État aucun résultat
  if (total === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Recherche', href: '/search' },
            { label: query, href: `/search?q=${encodeURIComponent(query)}` },
          ]}
        />
        <div className="text-center py-20">
          <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold text-[var(--color-dark)] mb-2">
            Aucun résultat pour &quot;{query}&quot;
          </h1>
          <p className="text-gray-600 font-sans mb-6">
            Essayez avec d&apos;autres mots-clés ou vérifiez l&apos;orthographe.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-[var(--color-dark)] rounded-lg font-sans font-medium hover:bg-gray-50 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  // Résultats trouvés
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Recherche', href: '/search' },
          { label: query, href: `/search?q=${encodeURIComponent(query)}` },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-dark)] mb-2">
          Résultats de recherche
        </h1>
        <p className="text-gray-600 font-sans">
          <span className="font-medium">{total}</span> résultat{total > 1 ? 's' : ''} pour
          &quot;<span className="font-medium text-black">{query}</span>&quot;
        </p>
      </div>

      <ResultSection title="Séries" results={series} icon="📺" />
      <ResultSection title="Articles" results={articles} icon="✍️" />
      <ResultSection title="Artistes" results={artistes} icon="🎵" />
      <ResultSection title="Lieux de tournage" results={lieux} icon="📍" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-[var(--color-dark)] border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 font-sans">Chargement des résultats...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
