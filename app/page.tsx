import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ArticleGrid from "@/components/ArticleGrid";
import EditorialLine from "@/components/EditorialLine";
import PrefetchLink from "@/components/PrefetchLink";
import Card from "@/components/Card";
import { articles } from "@/data/articles";
import { playlists } from "@/data/playlists";
import { lieux } from "@/data/lieux";

const Featured = dynamic(() => import("@/components/Featured"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const normalizeCategory = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const featuredArticleIds = new Set(articles.slice(0, 4).map((article) => article.id));
const articlePool = articles.filter((article) => !featuredArticleIds.has(article.id));

const cultureArticles = (
  articlePool.filter((article) => {
    const category = normalizeCategory(article.category);
    return ["serie", "series", "culture", "cinema", "tv"].some((keyword) =>
      category.includes(keyword)
    );
  }).length > 0
    ? articlePool.filter((article) => {
        const category = normalizeCategory(article.category);
        return ["serie", "series", "culture", "cinema", "tv"].some((keyword) =>
          category.includes(keyword)
        );
      })
    : articles
).slice(0, 6);

const techArticles = (
  articlePool.filter((article) => {
    const category = normalizeCategory(article.category);
    return ["developpement", "code", "tech", "web"].some((keyword) =>
      category.includes(keyword)
    );
  }).length > 0
    ? articlePool.filter((article) => {
        const category = normalizeCategory(article.category);
        return ["developpement", "code", "tech", "web"].some((keyword) =>
          category.includes(keyword)
        );
      })
    : articles
).slice(0, 6);

const travelHighlights = lieux.slice(0, 3);
const bandeSonPlaylists = playlists.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Featured />

      <div className="space-y-20 py-16">
        <section className="max-w-7xl mx-auto px-4">
          <EditorialLine>Culture & Series</EditorialLine>
          <ArticleGrid articles={cultureArticles} />
          <div className="flex justify-end mt-8">
            <PrefetchLink
              href="/articles"
              className="typo-small uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              Voir tout →
            </PrefetchLink>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4">
          <EditorialLine>Tech & Code</EditorialLine>
          <ArticleGrid articles={techArticles} />
          <div className="flex justify-end mt-8">
            <PrefetchLink
              href="/articles?category=tech"
              className="typo-small uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              Voir tout →
            </PrefetchLink>
          </div>
        </section>

        {travelHighlights.length > 0 && (
          <section className="max-w-7xl mx-auto px-4">
            <EditorialLine>Carnets de Route</EditorialLine>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelHighlights.map((lieu) => (
                <Card key={lieu.id} className="flex flex-col h-full">
                  <h3 className="typo-h3 font-serif font-bold mb-2">{lieu.nom}</h3>
                  <p className="typo-body text-[var(--color-dark)] mb-4 flex-1 leading-relaxed">
                    {lieu.description}
                  </p>
                  <PrefetchLink
                    href={`/locations#lieu-${lieu.id}`}
                    className="typo-small text-[var(--color-primary)] uppercase tracking-[0.2em] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Explorer →
                  </PrefetchLink>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <PrefetchLink
                href="/locations"
                className="typo-small uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
              >
                Voir tout →
              </PrefetchLink>
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4">
          <EditorialLine>Bande-Son</EditorialLine>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bandeSonPlaylists.map((playlist, index) => (
              <Card
                key={playlist.id}
                className="flex flex-col h-full bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/10 border-[var(--color-primary)]/20"
              >
                <span className="typo-tiny uppercase tracking-[0.3em] text-gray-500 mb-2">
                  Playlist #{index + 1}
                </span>
                <h3 className="typo-h3 font-serif font-bold mb-3">{playlist.title}</h3>
                <p className="typo-body text-gray-700 flex-1 leading-relaxed">
                  {playlist.description}
                </p>
                <PrefetchLink
                  href={`/music/playlists/${playlist.id}`}
                  className="mt-4 typo-small text-[var(--color-primary)] uppercase tracking-[0.2em] hover:text-[var(--color-secondary)] transition-colors"
                >
                  Ecouter →
                </PrefetchLink>
              </Card>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <PrefetchLink
              href="/music/playlists"
              className="typo-small uppercase tracking-[0.2em] text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              Voir tout →
            </PrefetchLink>
          </div>
        </section>
      </div>
    </main>
  );
}
