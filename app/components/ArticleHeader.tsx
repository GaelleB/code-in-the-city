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
    author = "Par Gaëlle"
}: ArticleHeaderProps) {
    return (
        <motion.header
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Catégorie */}
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-4 font-medium">
                {category}
            </p>

            {/* Titre */}
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                {title}
            </h1>

            {/* Métadonnées */}
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-6">
                <time>{date}</time>
                <span>|</span>
                <span>{readingTime}</span>
                <span>|</span>
                <span className="italic">{author}</span>
            </div>

            {/* Ligne de séparation */}
            <div className="w-24 h-[2px] bg-[var(--color-secondary)] mx-auto"></div>
        </motion.header>
    );
}
