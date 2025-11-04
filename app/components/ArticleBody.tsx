"use client";
import { motion } from "framer-motion";

interface ArticleBodyProps {
    paragraphs: string[];
    useDropCap?: boolean;
}

export default function ArticleBody({ paragraphs, useDropCap = true }: ArticleBodyProps) {
    return (
        <motion.div
            className="article-body mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {paragraphs.map((paragraph, index) => {
                const isFirstParagraph = index === 0;

                return (
                    <p
                        key={index}
                        className={`${isFirstParagraph && useDropCap ? 'drop-cap' : ''} whitespace-pre-line`}
                    >
                        {paragraph}
                    </p>
                );
            })}

            {/* Séparateur de fin d'article */}
            <div className="article-separator">
                • • •
            </div>
        </motion.div>
    );
}
