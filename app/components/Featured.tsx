import Card from "@/components/Card";
import articles from "@/data/articles";

const featured = articles.slice(0, 2); // Exemple : les 2 premiers en une

export default function Featured() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2">
        À la Une
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featured.map((article) => (
          <Card key={article.id}>
            <h3 className="text-xl font-serif font-bold mb-2">{article.title}</h3>
            <p className="text-sm text-[var(--color-dark)] mb-4">{article.date}</p>
            <p className="text-[var(--color-dark)] leading-relaxed">{article.content.slice(0, 140)}...</p>
          </Card>
        ))}
      </div>
    </section>
  );
}