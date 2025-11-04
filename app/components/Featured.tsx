"use client";
import { articles } from "@/data/articles";
import EditorialSection from "@/components/EditorialSection";
import HeroArticle from "@/components/HeroArticle";
import SecondaryArticle from "@/components/SecondaryArticle";

export default function Featured() {
  // Premier article = Hero
  const heroArticle = articles[0];
  // 3 articles suivants = Secondaires
  const secondaryArticles = articles.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-4">
      <EditorialSection title="À la une">
        {/* Article Hero - Pleine largeur */}
        {heroArticle && <HeroArticle article={heroArticle} />}

        {/* Articles secondaires - Grid 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {secondaryArticles.map((article, index) => (
            <SecondaryArticle
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>
      </EditorialSection>
    </section>
  );
}
