"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PrefetchLink from "./PrefetchLink";

export type Article = {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    content: string[];
};

interface ArticleGridProps {
    articles: Article[];
    maxItems?: number;
}

export default function ArticleGrid({ articles, maxItems }: ArticleGridProps) {
    const displayedArticles = maxItems ? articles.slice(0, maxItems) : articles;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {displayedArticles.map((article, index) => {
                const isFeatured = index === 0;
                const firstParagraph = article.content?.[0] ?? "";
                const excerpt = firstParagraph
                    ? `${firstParagraph.substring(0, 150)}...`
                    : "";

                return (
                    <motion.article
                        key={article.id}
                        className={`${
                            isFeatured ? "md:col-span-2" : "md:col-span-1"
                        } border border-gray-300 p-6 lg:p-8 hover:border-[var(--color-secondary)] transition-colors duration-300`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <PrefetchLink href={`/articles/${article.id}`}>
                            {/* Image */}
                            <div
                                className={`relative w-full ${
                                    isFeatured ? "h-96" : "h-64"
                                } mb-4 overflow-hidden`}
                            >
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover hover:opacity-90 transition-opacity"
                                />
                            </div>

                            {/* Categorie et date */}
                            <div className="flex items-center gap-2 mb-3 typo-small uppercase tracking-[0.2em] text-gray-600">
                                <span className="font-medium">
                                    {article.category}
                                </span>
                                <span aria-hidden>•</span>
                                <time>{article.date}</time>
                            </div>

                            {/* Titre */}
                            <h2
                                className={`font-serif font-bold hover:text-[var(--color-secondary)] transition-colors mb-3 ${
                                    isFeatured ? "typo-h2" : "typo-h3"
                                }`}
                            >
                                {article.title}
                            </h2>

                            {/* Extrait (uniquement pour le featured) */}
                            {isFeatured && excerpt && (
                                <p className="typo-body text-gray-700 mb-4">
                                    {excerpt}
                                </p>
                            )}

                            {/* Lien de lecture */}
                            <span className="inline-block typo-small uppercase tracking-[0.2em] font-medium border-b-2 border-black hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors pb-1">
                                Lire l&apos;article →
                            </span>
                        </PrefetchLink>
                    </motion.article>
                );
            })}
        </div>
    );
}
