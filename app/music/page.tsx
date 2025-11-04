import Link from "next/link";
import { Music2 } from "lucide-react";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";
import { musiques } from "@/data/musiques";

export default function MusicPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <Breadcrumb />

            <h1 className="typo-h1 font-serif font-bold mb-10 border-b-2 border-[var(--color-secondary)] pb-2">
                Les artistes qui ont marque nos series
            </h1>

            {/* Lien vers les playlists */}
            <Link href="/music/playlists">
                <Card className="mb-10 cursor-pointer bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border-2 border-[var(--color-primary)]/30 md:hover:border-[var(--color-primary)] transition-all md:hover:shadow-lg active:scale-[0.98] touch-manipulation">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[var(--color-primary)] rounded-xl flex items-center justify-center shadow-md">
                            <Music2 className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="typo-h3 font-serif font-bold text-[var(--color-primary)] mb-1">
                                Decouvrir les playlists
                            </h3>
                            <p className="typo-small text-[var(--color-dark)]">
                                Des selections par mood: nostalgie, melancolie, reconfort, energie et nuits d&apos;ado
                            </p>
                        </div>
                        <span className="typo-h3" aria-hidden>
                            →
                        </span>
                    </div>
                </Card>
            </Link>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {musiques.map((artiste) => (
                    <Card key={artiste.id}>
                        <h3 className="typo-h3 font-serif font-bold mb-2">{artiste.nom}</h3>

                        {artiste.seriesLiees.length > 0 && (
                            <p className="italic typo-small mb-2">
                                {artiste.seriesLiees.join(", ")}
                            </p>
                        )}

                        {artiste.bo.length > 0 && (
                            <p className="typo-small text-[var(--color-dark)] leading-relaxed mb-4">
                                {artiste.bo.slice(0, 2).join(" - ")}
                            </p>
                        )}

                        <Link
                            href={`/music/${artiste.id}`}
                            className="typo-small text-[var(--color-primary)] md:hover:underline md:hover:text-black font-medium transition-colors active:opacity-70 touch-manipulation inline-block"
                        >
                            Voir la fiche →
                        </Link>
                    </Card>
                ))}
            </section>
        </main>
    );
}
