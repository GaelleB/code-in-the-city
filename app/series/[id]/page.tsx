import { notFound } from "next/navigation";
import { series } from "@/data/series";
import { musiques, Artiste } from "@/data/musiques";
import { lieux } from "@/data/lieux";
import Image from "next/image";
import Link from "next/link";

export default function SerieDetail({ params }: { params: { id: string } }) {
    const serie = series.find((s) => s.id === Number(params.id));
    if (!serie) return notFound();

    const lieu = lieux.find((l) => l.id === serie.lieux);
    const musiquesIds: number[] = serie.musique;
    const artistes = musiques.filter((a: Artiste) =>
        musiquesIds.includes(a.id)
    );

    return (
        <main className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2 border-b-2 border-[var(--color-secondary)] pb-2">
            {serie.title}
        </h1>

        {serie.originalTitle && (
            <p className="italic text-gray-600 mb-1">({serie.originalTitle})</p>
        )}

        <p className="italic text-gray-600 mb-4">{serie.years}</p>

        <p className="text-[var(--color-dark)] leading-relaxed mb-8 text-justify">
            {serie.synopsis}
        </p>

        {lieu && (
            <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold mb-2">Lieu de tournage</h2>
            <p className="text-[var(--color-dark)] mb-2">
                <strong>{lieu.nom}</strong> — {lieu.description}
            </p>
            </section>
        )}

        {artistes.length > 0 && (
            <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold mb-2">Artistes associés</h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                {artistes.map((artiste) => (
                <li key={artiste.id}>
                    <Link
                    href={`/musiques/${artiste.id}`}
                    className="text-[var(--color-primary)] hover:underline hover:text-black transition-colors"
                    >
                    {artiste.nom}
                    </Link>
                </li>
                ))}
            </ul>
            </section>
        )}

        {serie.casting && (
            <section className="mb-16">
            <h2 className="text-3xl font-serif font-semibold mb-6 border-b border-[var(--color-secondary)] pb-1">
                Distribution principale
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-dark)]">
                {serie.casting.map((actor, index) => (
                <li key={index} className="transition-all duration-200 hover:text-black">
                    <strong>{actor.actor}</strong> — {actor.character} ({actor.ageAtStart} ans)
                </li>
                ))}
            </ul>
            </section>
        )}

        {serie.anecdotes?.length > 0 && (
            <section className="mb-16">
            <h2 className="text-3xl font-serif font-semibold mb-4 border-b border-[var(--color-secondary)] pb-1">
                Anecdotes
            </h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                {serie.anecdotes.map((a, i) => (
                <li key={i}>{a}</li>
                ))}
            </ul>
            </section>
        )}

        {serie.image && (
            <div className="mt-12">
            <Image
                src={serie.image}
                alt={serie.title}
                width={800}
                height={600}
                className="rounded-lg shadow-md mx-auto"
            />
            </div>
        )}
        </main>
    );
}