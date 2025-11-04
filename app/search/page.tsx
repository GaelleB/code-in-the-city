"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ExternalLink } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { useSearchPage, type SearchResultItem } from "../hooks/useSearchPage";
import Image from "next/image";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const resultsPerPage = 10;

  const { series, articles, artistes, lieux, total } = useSearchPage(query);

  const paginateResults = (results: SearchResultItem[], page: number) => {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return results.slice(startIndex, endIndex);
  };

  const getTotalPages = (results: SearchResultItem[]) =>
    Math.ceil(results.length / resultsPerPage);

  const ResultSection = ({
    title,
    results,
    icon
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
        <h2 className="typo-h2 font-bold mb-6 flex items-center gap-2 text-[var(--color-dark)]">
          <span>{icon}</span>
          {title}{" "}
          <span className="typo-small text-gray-500">({results.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedResults.map((result) => (
            <Link
              key={`${title}-${result.id}`}
              href={result.url}
              target={result.url.startsWith("http") ? "_blank" : undefined}
              className="group border-2 border-[var(--color-dark)] rounded-lg p-4 hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              <div className="flex gap-4">
                {result.image && (
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold typo-h3 text-black group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {result.title}
                    </h3>
                    {result.url.startsWith("http") && (
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                    )}
                  </div>

                  {result.subtitle && (
                    <p className="typo-small text-gray-600 mt-1 font-sans">
                      {result.subtitle}
                    </p>
                  )}

                  {result.description && (
                    <p className="typo-small text-gray-500 mt-2 line-clamp-2 font-sans">
                      {result.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setSectionPage((p) => Math.max(1, p - 1))}
              disabled={sectionPage === 1}
              className="px-4 py-2 border-2 border-[var(--color-dark)] rounded-lg font-sans font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Precedent
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

  if (!query.trim()) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb />
        <div className="text-center py-20">
          <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h1 className="typo-h1 font-bold text-[var(--color-dark)] mb-2">
            Rechercher dans Code in the City
          </h1>
          <p className="typo-small text-gray-600 font-sans">
            Utilisez la barre de recherche ci-dessus pour trouver des series, articles,
            artistes ou lieux.
          </p>
        </div>
      </div>
    );
  }

  if (total === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb />
        <div className="text-center py-20">
          <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h1 className="typo-h1 font-bold text-[var(--color-dark)] mb-2">
            Aucun resultat pour &quot;{query}&quot;
          </h1>
          <p className="typo-small text-gray-600 font-sans mb-6">
            Essayez avec d&apos;autres mots-cles ou verifiez l&apos;orthographe.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-[var(--color-dark)] rounded-lg font-sans font-medium hover:bg-gray-50 transition-colors"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="mb-8">
        <h1 className="typo-h1 font-bold text-[var(--color-dark)] mb-2">
          Resultats de recherche
        </h1>
        <p className="typo-small text-gray-600 font-sans">
          <span className="font-medium">{total}</span> resultat{total > 1 ? "s" : ""} pour{" "}
          <span className="font-medium text-black">&quot;{query}&quot;</span>
        </p>
      </div>

      <ResultSection title="Series" results={series} icon="[S]" />
      <ResultSection title="Articles" results={articles} icon="[A]" />
      <ResultSection title="Artistes" results={artistes} icon="[M]" />
      <ResultSection title="Lieux de tournage" results={lieux} icon="[L]" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-[var(--color-dark)] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="typo-small text-gray-600 font-sans">Chargement des resultats...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
