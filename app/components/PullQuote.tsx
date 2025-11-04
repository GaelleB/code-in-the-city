"use client";
import { motion } from "framer-motion";

interface PullQuoteProps {
    children: React.ReactNode;
    author?: string;
}

export default function PullQuote({ children, author }: PullQuoteProps) {
    return (
        <motion.div
            className="my-12 md:my-16 py-8 border-t-2 border-b-2 border-[var(--color-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <blockquote className="text-2xl md:text-3xl font-serif italic text-center leading-relaxed text-gray-800 px-4 md:px-12">
                "{children}"
            </blockquote>
            {author && (
                <p className="text-center text-sm uppercase tracking-wider text-gray-600 mt-4">
                    — {author}
                </p>
            )}
        </motion.div>
    );
}
