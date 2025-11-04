"use client";
import { motion } from "framer-motion";

interface ArticleHeaderProps {
    category: string;
    title: string;
    date: string;
    readingTime?: string;
    author?: string;
}

export default function ArticleHeader({
    category,
    title,
    date,
    readingTime = "5 min read",
    author = "Par Gaelle"
}: ArticleHeaderProps) {
    return (
        <motion.header
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Categorie */}
            <p className="typo-small uppercase tracking-[0.3em] text-gray-600 mb-4 font-medium">
                {category}
            </p>

            {/* Titre */}
            <h1 className="typo-h1 font-serif font-bold mb-6">
                {title}
            </h1>

            {/* Metadonnees */}
            <div className="flex items-center justify-center gap-3 typo-small text-gray-600 mb-6">
                <time>{date}</time>
                <span aria-hidden>|</span>
                <span>{readingTime}</span>
                <span aria-hidden>|</span>
                <span className="italic">{author}</span>
            </div>

            {/* Ligne de separation */}
            <div className="w-24 h-[2px] bg-[var(--color-secondary)] mx-auto" />
        </motion.header>
    );
}
