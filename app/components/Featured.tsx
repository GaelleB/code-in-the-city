"use client";

import articles from "../data/articles";
import Link from "next/link";

// Je déclare le type de chaque article, pour que TypeScript comprenne
interface Article {
    id: number;
    title: string;
    date: string;
    content: string;
}

export default function Featured() {
  // Je prend les 3 premiers articles pour la section "À la Une"
    const featuredArticles: Article[] = articles.slice(0, 3);

    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">À la Une</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredArticles.map((article: Article) => (
                <div key={article.id} className="border p-6 shadow-sm hover:shadow-md transition duration-300 bg-white">
                    <h3 className="text-xl font-bold font-serif mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 italic mb-4">{article.date}</p>
                    <p className="text-gray-700 mb-4">
                    {article.content.slice(0, 100)}...
                    </p>
                    <Link href={`/blog/${article.id}`} className="text-blue-600 hover:underline">
                    Lire l’article
                    </Link>
                </div>
                ))}
            </div>
        </section>
    );
}