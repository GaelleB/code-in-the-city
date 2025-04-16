"use client";

import articles from "../data/articles";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Tous les articles</h1>

            <section className="grid md:grid-cols-2 gap-8">
                {articles.map((article) => (
                <div key={article.id} className="border p-6 rounded shadow-sm hover:shadow-md transition bg-white">
                    <div className="mb-4">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded"
                    />
                    </div>
                    <p className="text-sm text-gray-500 italic mb-2">{article.date} · {article.category}</p>
                    <h2 className="text-xl font-bold font-serif mb-2">{article.title}</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                    {article.content.slice(0, 120)}...
                    </p>
                    <Link
                    href={`/blog/${article.id}`}
                    className="text-[--color-primary] hover:underline font-semibold"
                    >
                    Lire l’article →
                    </Link>
                </div>
                ))}
            </section>
        </main>
    );
}