// app/articles/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) return notFound();

  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-20 py-12 text-[var(--color-dark)]">
      <h1 className="text-xl text-[var(--color-dark)] mb-4">{article.title}</h1>
      <p className="text-sm text-[var(--color-dark)] mb-4">{article.date}</p>
      <Image
        src={article.image}
        alt={article.title}
        width={600}
        height={400}
        className="rounded-lg my-6"
      />

      {article.content.map((paragraph, idx) => (
        <p key={idx} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </article>
  );
}