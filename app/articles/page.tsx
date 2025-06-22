import Link from "next/link";
import Card from "@/components/Card";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold mb-8">Tous les articles</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                <Card key={article.id}>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-text-dark)] mb-2">
                    {article.date}
                    </p>
                    <Link
                    href={`/articles/${article.id}`}
                    className="text-xl font-bold text-[var(--color-primary)] hover:underline mb-4 block"
                    >
                    {article.title}
                    </Link>
                    <p className="text-[var(--color-dark)]">
                    {article.content[0].split("\n")[0].slice(0, 100)}…
                    </p>
                </Card>
                ))}
            </div>
        </main>
    );
}
