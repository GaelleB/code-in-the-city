"use client";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import { useCallback } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { RefreshCw } from "lucide-react";
import EditorialSection from "@/components/EditorialSection";
import ArticleGrid from "@/components/ArticleGrid";

export default function ArticlesPage() {
    // Pull-to-refresh
    const handleRefresh = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.reload();
    }, []);

    const { isPulling, pullDistance } = usePullToRefresh(handleRefresh);

    return (
        <main className="max-w-7xl mx-auto px-4 py-12 relative">
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

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <EditorialSection title="Tous les articles">
                    <ArticleGrid articles={articles} />
                </EditorialSection>
            </motion.div>
        </main>
    );
}
