import Card from "@/components/Card";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function Featured() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-serif font-semibold mb-6 border-b border-[var(--color-secondary)] pb-1">
        Articles à la une
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          // Je récupère un extrait de l'article (chaîne ou tableau de paragraphes)
          const fullText =
            typeof article.content === "string"
              ? article.content
              : article.content.join("\n\n");
          const excerpt = fullText.slice(0, 140);

          return (
            <Card key={article.id}>
              <p className="text-xs uppercase tracking-wide text-[var(--color-text-dark)] mb-2">
                {article.date}
              </p>

              <Link
                href={`/articles/${article.id}`}
                className="text-lg text-[var(--color-primary)] font-bold hover:underline"
              >
                {article.title}
              </Link>

              <p className="mt-2 text-[var(--color-dark)]">
                {excerpt}
                {fullText.length > excerpt.length && "…"}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}