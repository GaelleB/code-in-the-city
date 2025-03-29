'use client';

import Link from 'next/link';
import articles from '../data/articles';

export default function CategoryColumns() {
    const categories = ['Développement', 'Séries', 'Musique'];

    // Je filtre les articles pour chaque catégorie
    const categorizedArticles = categories.map((category) => ({
        name: category,
        articles: articles.filter((article) => article.category === category).slice(0, 2),
    }));

    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categorizedArticles.map((cat) => (
                <div key={cat.name}>
                    <h3 className="text-2xl font-bold border-b pb-2 mb-4">{cat.name}</h3>
                    {cat.articles.map((article) => (
                    <div key={article.id} className="mb-4">
                        <h4 className="text-lg font-semibold">{article.title}</h4>
                        <p className="text-sm text-gray-600">{article.date}</p>
                        <p className="text-sm text-gray-800 mt-1">{article.content.slice(0, 80)}...</p>
                    </div>
                    ))}
                    <Link
                    href="/blog"
                    className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
                    >
                    Voir tous les articles
                    </Link>
                </div>
                ))}
            </div>
        </section>
    );
}