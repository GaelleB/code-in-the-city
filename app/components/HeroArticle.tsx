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

interface HeroArticleProps {
    article: Article;
}

export default function HeroArticle({ article }: HeroArticleProps) {
    const excerpt = article.content.slice(0, 2).join(" ").substring(0, 300) + "...";

    return (
        <motion.article
            className="border-b-2 border-black pb-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <PrefetchLink href={`/articles/${article.id}`}>
                {/* Image Hero */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-6 overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover hover:opacity-90 transition-opacity"
                    />
                </div>

                {/* Catégorie et date */}
                <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.2em] text-gray-600">
                    <span className="font-bold text-[var(--color-secondary)]">{article.category}</span>
                    <span>•</span>
                    <time>{article.date}</time>
                </div>

                {/* Titre Hero - Très gros */}
                <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 hover:text-[var(--color-secondary)] transition-colors">
                    {article.title}
                </h1>

                {/* Extrait long */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-4xl">
                    {excerpt}
                </p>

                {/* CTA de lecture */}
                <span className="inline-block text-sm uppercase tracking-wider font-bold border-b-2 border-black hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors pb-1">
                    Lire l&apos;article complet →
                </span>
            </PrefetchLink>
        </motion.article>
    );
}
