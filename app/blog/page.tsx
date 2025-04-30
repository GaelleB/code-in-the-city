import Card from "@/components/Card";
import articles from "@/data/articles";
import Link from "next/link";

export default function BlogPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2">
                Tous les articles
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                <Card key={article.id}>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-dark)] mb-2">
                    {article.date}
                    </p>
                    <h3 className="text-xl font-serif font-bold mb-2">
                    <Link
                        href={`/blog/${article.id}`}
                        className="text-[var(--color-primary)] hover:underline hover:text-black transition-colors"
                    >
                        {article.title}
                    </Link>
                    </h3>
                    <p className="text-[var(--color-text-dark)] text-sm leading-relaxed">
                    {article.content.slice(0, 120)}...
                    </p>
                </Card>
                ))}
            </div>
        </section>
    );
}