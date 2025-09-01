"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl font-serif font-semibold mb-6 border-b border-[var(--color-secondary)] pb-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Articles à la une
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => {
          // Extrait de l'article (chaîne ou tableau de paragraphes)
          const fullText =
            typeof article.content === "string"
              ? article.content
              : article.content.join("\n\n");
          const excerpt = fullText.slice(0, 140);

          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Link
                href={`/articles/${article.id}`}
                className="block px-2 sm:px-4 hover:opacity-90 transition-opacity"
              >
                <Card className="h-full">
                  <p className="text-xs uppercase tracking-wide text-[var(--color-text-dark)] mb-2">
                    {article.date}
                  </p>

                  <h3 className="text-lg text-[var(--color-primary)] font-bold hover:underline">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[var(--color-dark)]">
                    {excerpt}
                    {fullText.length > excerpt.length && "…"}
                  </p>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}