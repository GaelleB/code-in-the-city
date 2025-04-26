import { notFound } from "next/navigation";
import { series } from "@/data/series";
import type { Serie } from "@/data/series";
import Image from "next/image";

export async function generateStaticParams() {
    return series.map((serie) => ({
        id: serie.id.toString(),
    }));
}

export default function SerieDetail({ params }: { params: { id: string } }) {
    const serie = series.find((s: Serie) => s.id === parseInt(params.id));

    if (!serie) return notFound();

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">{serie.title}</h1>
            <p className="italic text-gray-600 mb-2">{serie.originalTitle && `(${serie.originalTitle})`}</p>
            <p className="italic text-gray-600 mb-2">{serie.years}</p>
            <p className="text-gray-800 mb-6">{serie.synopsis}</p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Casting principal</h2>
                <ul className="text-gray-800 list-disc list-inside space-y-2">
                    {serie.casting.map((actor, index) => (
                        <li key={index}>
                        <strong>{actor.actor}</strong> — {actor.character} ({actor.ageAtStart} ans)
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Musiques marquantes</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {serie.musiques.map((m, i) => (
                        <li key={i}>{m}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Anecdotes</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {serie.anecdotes.map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>
            </section>
            
            {/*
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Mon ressenti</h2>
                <p className="text-gray-800 mb-2"> <strong>À 14 ans :</strong> {serie.ressentiJeune}</p>
                <p className="text-gray-800"> <strong>À 36 ans :</strong> {serie.ressentiAdulte}</p>
            </section>
            */}

            {serie.image && (
                <div className="mt-8">
                <Image
                    src={serie.image}
                    alt={serie.title}
                    width={800}
                    height={600}
                    className="rounded shadow-md"
                />
                </div>
            )}
        </main>
    );
}