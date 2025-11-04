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

interface SecondaryArticleProps {
    article: Article;
    index: number;
}

export default function SecondaryArticle({ article, index }: SecondaryArticleProps) {
    const excerpt = article.content[0]?.substring(0, 100) + "...";

    return (
        <motion.article
            className="border border-gray-300 p-6 hover:border-[var(--color-secondary)] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <PrefetchLink href={`/articles/${article.id}`}>
                {/* Image */}
                <div className="relative w-full h-48 mb-4 overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity"
                    />
                </div>

                {/* Catégorie et date */}
                <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-gray-600">
                    <span className="font-medium">{article.category}</span>
                    <span>•</span>
                    <time>{article.date}</time>
                </div>

                {/* Titre */}
                <h3 className="font-serif font-bold text-xl leading-tight mb-3 hover:text-[var(--color-secondary)] transition-colors">
                    {article.title}
                </h3>

                {/* Extrait court */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {excerpt}
                </p>

                {/* Lien de lecture */}
                <span className="inline-block text-xs uppercase tracking-wider font-medium border-b border-black hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors pb-1">
                    Lire →
                </span>
            </PrefetchLink>
        </motion.article>
    );
}
