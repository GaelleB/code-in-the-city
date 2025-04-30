import { notFound } from "next/navigation";
import articles from "@/data/articles";
import Head from "next/head";

interface ArticleProps {
    params: { id: string };
}

export default function ArticlePage({ params }: ArticleProps) {
    const articleId = parseInt(params.id);
    const article = articles.find((a) => a.id === articleId);

    if (!article) return notFound();

    return (
        <>
        <Head>
            <title>{article.title} - Code in the City</title>
            <meta name="description" content={article.content.slice(0, 150)} />
        </Head>

        <article className="max-w-3xl mx-auto px-4 py-12">
            <p className="text-sm text-gray-500">{article.date} · {article.category}</p>
            <h1 className="text-4xl font-serif font-bold mb-6">{article.title}</h1>
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
            {article.content}
            </p>
        </article>
        </>
    );
}