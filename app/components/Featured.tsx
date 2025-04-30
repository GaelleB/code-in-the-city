"use client";

import articles from "../data/articles";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

export default function Featured() {
  const featuredArticles = articles.slice(0, 3);
  const otherArticles = articles.slice(3);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-[--color-background-body]">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 border-b border-[--color-secondary] pb-2">
        À la Une
      </h2>

      <div className="flex flex-col gap-16">
        {featuredArticles.map((article: Article) => (
          <div
            key={article.id}
            className="flex flex-col md:flex-row gap-6 rounded-lg border border-[var(--color-secondary)] bg-white/90 p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image à gauche */}
            <div className="w-full md:w-1/2 h-full">
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={400}
                className="object-cover w-full h-full rounded shadow-sm"
              />
            </div>

            {/* Texte à droite */}
            <div className="flex flex-col justify-between md:w-1/2">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  {article.date}
                </p>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {article.title}
                </h3>
                <p className="text-gray-800 text-justify mb-4 leading-relaxed">
                  {article.content.slice(0, 160)}...
                </p>
              </div>
              <Link
                href={`/blog/${article.id}`}
                className="text-[--color-primary] hover:underline font-semibold hover:text-black transition-colors"
              >
                Lire l’article →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Articles suivants sans image */}
      <div className="mt-16">
        {otherArticles.map((article: Article) => (
          <div key={article.id} className="border-t border-gray-300 py-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              {article.date}
            </p>
            <h4 className="text-xl font-serif font-bold mb-2">
              <Link
                href={`/blog/${article.id}`}
                className="hover:underline text-black"
              >
                {article.title}
              </Link>
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {article.content.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}