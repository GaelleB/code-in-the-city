"use client";

import Link from "next/link";
import articles from "../data/articles";

export default function CategoryColumns() {
  // Regroupement des articles par catégorie
    const categories = ["Développement Web", "Séries", "Musique"];

    const groupedArticles = categories.map((category) => {
        return {
            category,
            articles: articles.filter((article) => article.category === category).slice(0, 3),
        };
    });

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 border-b pb-4">
                Rubriques
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
                {groupedArticles.map(({ category, articles }) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold font-serif mb-6 border-b border-black pb-2">
                    {category}
                    </h3>
                    <ul className="space-y-6">
                    {articles.map((article) => (
                        <li key={article.id}>
                        <p className="text-sm text-gray-500 italic mb-1">{article.date}</p>
                        <Link
                            href={`/blog/${article.id}`}
                            className="text-[--color-text-dark] hover:text-[--color-primary] font-bold block"
                        >
                            {article.title}
                        </Link>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            {article.content.slice(0, 80)}...
                        </p>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    );
}