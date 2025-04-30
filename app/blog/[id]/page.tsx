import { notFound } from "next/navigation";
import articles from "@/data/articles";

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === parseInt(params.id));

  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm text-[var(--color-text-dark)]">
        {article.date} · {article.category}
      </p>
      <h1 className="text-4xl font-serif font-bold mb-6">{article.title}</h1>
      <p className="text-lg leading-relaxed text-[var(--color-text-dark)] whitespace-pre-line">
        {article.content}
      </p>
    </article>
  );
}