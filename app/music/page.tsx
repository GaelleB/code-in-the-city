import { musiques } from "@/data/musiques";
import Card from "@/components/Card";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function MusicPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <Breadcrumb />

            <h1 className="text-4xl font-serif font-bold mb-10 border-b-2 border-[var(--color-secondary)] pb-2">
                Les artistes qui ont marqué nos séries
            </h1>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {musiques.map((artiste) => (
                <Card key={artiste.id}>
                    <h3 className="text-2xl font-serif font-bold mb-2">{artiste.nom}</h3>

                    {artiste.seriesLiees.length > 0 && (
                    <p className="italic text-sm mb-2">
                        {artiste.seriesLiees.join(", ")}
                    </p>
                    )}

                    {artiste.bo.length > 0 && (
                    <p className="text-[var(--color-dark)] text-sm leading-relaxed mb-4">
                        {artiste.bo.slice(0, 2).join(" · ")}
                    </p>
                    )}

                    <Link
                    href={`/music/${artiste.id}`}
                    className="text-[var(--color-primary)] hover:underline hover:text-black font-medium transition-colors"
                    >
                    Voir la fiche →
                    </Link>
                </Card>
                ))}
            </section>
        </main>
    );
}