import { notFound } from "next/navigation";
import { musiques } from "@/data/musiques";
import type { Artiste } from "@/data/musiques";
import { getSeriesForArtist } from "../../../utils/relations";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import MusicEmbed from "@/components/MusicEmbed";

export async function generateStaticParams() {
    return musiques.map((artiste) => ({
        id: artiste.id.toString(),
    }));
    }

    export default function ArtisteDetail({ params }: { params: { id: string } }) {
    const artiste = musiques.find((a: Artiste) => a.id === parseInt(params.id));

    if (!artiste) return notFound();

    const seriesForArtist = getSeriesForArtist(artiste.id);

    return (
        <main className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        <Breadcrumb />

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

        {/* Séries avec cet artiste */}
        {seriesForArtist.length > 0 && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Séries avec cet artiste</h2>
            <div className="flex flex-wrap gap-2">
                {seriesForArtist.map((serie) => (
                <Link key={serie.id} href={`/series/${serie.id}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                                   bg-[var(--color-primary)]/10 text-[var(--color-primary)]
                                   border border-[var(--color-primary)]/20
                                   hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40
                                   transition-all duration-200 cursor-pointer">
                    <span className="text-base">📺</span>
                    <span>{serie.title}</span>
                    </span>
                </Link>
                ))}
            </div>
            </section>
        )}


        {artiste.bo.length > 0 && (
            <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Chansons entendues</h2>
            <ul className="list-disc list-inside text-[var(--color-dark)] space-y-1 mb-6">
                {artiste.bo.map((chanson, index) => (
                <li key={index}>{chanson}</li>
                ))}
            </ul>

            {/* Exemple de lecteur pour le premier morceau */}
            {artiste.bo.length > 0 && (
                <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">🎵 Écouter un extrait</h3>
                <MusicEmbed
                    type="youtube"
                    trackId=""
                    artistName={artiste.nom}
                    trackName={artiste.bo[0]}
                />
                <p className="text-xs text-gray-500 mt-2 italic">
                    💡 Le lecteur recherchera "{artiste.nom} - {artiste.bo[0]}" automatiquement
                </p>
                </div>
            )}
            </section>
        )}
        </main>
    );
}