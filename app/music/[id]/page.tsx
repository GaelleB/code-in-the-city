import { notFound } from "next/navigation";
import { musiques } from "@/data/musiques";
import type { Artiste } from "@/data/musiques";
import Image from "next/image";

export async function generateStaticParams() {
    return musiques.map((artiste) => ({
        id: artiste.id.toString(),
    }));
    }

    export default function ArtisteDetail({ params }: { params: { id: string } }) {
    const artiste = musiques.find((a: Artiste) => a.id === parseInt(params.id));

    if (!artiste) return notFound();

    return (
        <main className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        <h1 className="text-4xl font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
            {artiste.nom}
        </h1>

        {artiste.image && (
            <div className="mb-10 w-full max-w-md mx-auto">
            <Image
                src={artiste.image}
                alt={artiste.nom}
                width={600}
                height={400}
                className="rounded-lg shadow-md mx-auto"
            />
            </div>
        )}

        {artiste.seriesLiees.length > 0 && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Séries liées</h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                {artiste.seriesLiees.map((serie, index) => (
                <li key={index}>{serie}</li>
                ))}
            </ul>
            </section>
        )}

        {artiste.chansonsConnues.length > 0 && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Chansons connues</h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                {artiste.chansonsConnues.map((chanson, index) => (
                <li key={index}>{chanson}</li>
                ))}
            </ul>
            </section>
        )}

        {artiste.anecdotes && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Anecdotes</h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1">
                {artiste.anecdotes.map((a, index) => (
                <li key={index}>{a}</li>
                ))}
            </ul>
            </section>
        )}
        </main>
    );
}