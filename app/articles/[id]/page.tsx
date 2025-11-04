// app/articles/[id]/page.tsx
"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/articles";
import ArticleHeader from "@/components/ArticleHeader";
import LeadParagraph from "@/components/LeadParagraph";
import ArticleBody from "@/components/ArticleBody";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) return notFound();

  // Calculer le temps de lecture (environ 200 mots par minute)
  const wordCount = article.content.join(" ").split(" ").length;
  const readingTime = `${Math.ceil(wordCount / 200)} min read`;

  // Lead paragraph (chapô) = premier paragraphe
  const leadParagraph = article.content[0];
  // Le reste du contenu
  const bodyParagraphs = article.content.slice(1);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Breadcrumb />

      {/* Header éditorial */}
      <ArticleHeader
        category={article.category}
        title={article.title}
        date={article.date}
        readingTime={readingTime}
        author="Par Gaëlle"
      />

      {/* Image principale full-width */}
      <motion.div
        className="relative w-full h-[400px] md:h-[500px] mb-12 -mx-4 md:mx-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Lead paragraph (chapô) */}
      <LeadParagraph>{leadParagraph}</LeadParagraph>

      {/* Corps de l'article avec lettrine */}
      <ArticleBody paragraphs={bodyParagraphs} useDropCap={true} />

      {/* Section "Lire aussi" */}
      <motion.section
        className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-4">
          Lire aussi
        </h2>
        <ul className="space-y-2">
          {articles
            .filter((a) => a.id !== article.id)
            .slice(0, 3)
            .map((relatedArticle) => (
              <li key={relatedArticle.id}>
                <a
                  href={`/articles/${relatedArticle.id}`}
                  className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] underline underline-offset-2 transition-colors"
                >
                  {relatedArticle.title}
                </a>
              </li>
            ))}
        </ul>
      </motion.section>
    </main>
  );
}
