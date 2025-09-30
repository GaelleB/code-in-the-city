"use client";
import Link from "next/link";
import Card from "@/components/Card";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { useCallback } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { RefreshCw } from "lucide-react";

export default function ArticlesPage() {
    // Pull-to-refresh
    const handleRefresh = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.reload();
    }, []);

    const { isPulling, pullDistance } = usePullToRefresh(handleRefresh);

    return (
        <main className="max-w-6xl mx-auto px-4 py-12 relative">
            {/* Pull-to-refresh indicator */}
            {pullDistance > 0 && (
                <motion.div
                    className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
                    style={{
                        transform: `translateX(-50%) translateY(${Math.min(pullDistance - 40, 60)}px)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: pullDistance > 40 ? 1 : 0 }}
                >
                    <div className={`bg-white rounded-full p-3 shadow-lg border-2 ${isPulling ? 'border-[var(--color-primary)]' : 'border-gray-300'}`}>
                        <RefreshCw
                            className={`w-5 h-5 ${isPulling ? 'text-[var(--color-primary)] animate-spin' : 'text-gray-400'}`}
                            style={{ transform: `rotate(${pullDistance * 2}deg)` }}
                        />
                    </div>
                </motion.div>
            )}

            <Breadcrumb />

            <motion.h1
                className="text-4xl font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Tous les articles
            </motion.h1>

            <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                {articles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <Card className="h-full flex flex-col">
                            <p className="text-xs uppercase tracking-widest text-[var(--color-text-dark)] mb-2">
                                {article.date}
                            </p>
                            <Link
                                href={`/articles/${article.id}`}
                                className="text-xl font-bold text-[var(--color-primary)] md:hover:underline mb-4 block active:opacity-70 touch-manipulation transition-opacity"
                            >
                                {article.title}
                            </Link>
                            <p className="text-[var(--color-dark)] flex-1">
                                {article.content[0].split("\n")[0].slice(0, 100)}…
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
