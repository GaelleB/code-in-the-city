"use client";
import Link from "next/link";
import Card from "@/components/Card";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'Articles sur le développement web',
  description: 'Articles personnels sur mon parcours de développeuse web : HTML, CSS, JavaScript, React, et réflexions sur le code.',
  openGraph: {
    title: 'Articles | Code in the City',
    description: 'Articles personnels sur mon parcours de développeuse web et mes réflexions sur le code.',
  },
};

export default function ArticlesPage() {

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
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
                                className="text-xl font-bold text-[var(--color-primary)] hover:underline mb-4 block"
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
