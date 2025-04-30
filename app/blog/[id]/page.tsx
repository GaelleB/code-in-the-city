import { notFound } from "next/navigation";
import articles from "@/data/articles";

export default function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const articleId = parseInt(params.id);
  const article = articles.find((a) => a.id === articleId);

  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500">
        {article.date} · {article.category}
      </p>
      <h1 className="text-4xl font-serif font-bold mb-6">{article.title}</h1>
      <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {article.content}
      </p>
    </article>
  );
}