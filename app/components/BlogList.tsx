'use client';

import Link from "next/link";
import articles from "../data/articles";

interface Article {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
}

export default function BlogList() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Tous les articles</h1>
            
            <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article: Article) => (
                <div key={article.id} className="border p-6 rounded-md shadow-md bg-white">
                    <p className="text-sm text-gray-500">{article.date} · {article.category}</p>
                    <h2 className="text-2xl font-semibold font-serif mt-2 mb-4">{article.title}</h2>
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