"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Card from "@/components/Card";
import Link from "next/link";
import FilmOverlay from "@/components/FilmOverlay";
import { lieux } from "@/data/lieux";
import { getSeriesForLocation } from "../../utils/relations";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

// Titre narratif
function NarrativeTitle({ index }: { index: number }) {
    return (
        <h3 className="font-serif italic text-lg text-[var(--color-secondary)] mb-2">
        Souvenir n°{index + 1}
        </h3>
    );
}

export default function LocationPage() {
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [highlightedLieu, setHighlightedLieu] = useState<number | null>(null);

    useEffect(() => {
        const elems = containerRefs.current.filter(Boolean) as HTMLDivElement[];
        if (elems.length) {
        gsap.fromTo(
            elems,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
        );
        }

        // Smooth scroll vers l'ancre si présente dans l'URL et mise en évidence
        const hash = window.location.hash;
        if (hash) {
        const lieuId = hash.replace('#lieu-', '');
        const lieuIdNumber = parseInt(lieuId);

        if (!isNaN(lieuIdNumber)) {
            setHighlightedLieu(lieuIdNumber);

            setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            }, 100);

            // Retirer la mise en évidence après 3 secondes
            setTimeout(() => {
            setHighlightedLieu(null);
            }, 3000);
        }
        }
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-4 py-12" style={{ scrollBehavior: 'smooth' }}>
            <Breadcrumb />

            <h1 className="text-4xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2 animate-fade-in">
                Lieux de tournage
            </h1>

            <section className="space-y-12">
                <p className="font-cursive text-lg text-[var(--color-dark)] mb-4 animate-fade-in">
                Ces lieux ne sont pas que des décors. Ce sont des souvenirs, des frissons, des repères.
                </p>

                {lieux.map((lieu, idx) => (
                    <FilmOverlay key={lieu.id}>
                        <div
                            id={`lieu-${lieu.id}`}
                            ref={(el) => {
                            containerRefs.current[idx] = el;
                            }}
                            className={`group relative film-strip-container transition-all duration-500 hover:-translate-y-1
                                ${highlightedLieu === lieu.id
                                    ? 'scale-105 ring-4 ring-[var(--color-primary)] ring-opacity-70 shadow-2xl shadow-[var(--color-primary)]/30 rounded-xl'
                                    : ''
                                }`}
                        >
                            {/* Image pellicule en fond */}
                            <Image
                            src="/images/film-strip.png"
                            alt="Effet pellicule"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="film-strip-image pointer-events-none"
                            loading="lazy"
                            />

                            {/* Contenu de la carte */}
                            <div className="film-card relative z-10">
                            <Card className="bg-white">
                                <NarrativeTitle index={idx} />
                                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                                <span className="text-xl">🎥</span> {lieu.nom}
                                </h2>
                                <p className="text-[var(--color-text-dark)] mb-4 leading-relaxed">
                                {lieu.description}
                                </p>

                                {/* Séries tournées ici */}
                                {(() => {
                                const seriesForLocation = getSeriesForLocation(lieu.id);
                                return seriesForLocation.length > 0 && (
                                    <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {seriesForLocation.map((serie) => (
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
                                    </div>
                                );
                                })()}

                                <Link
                                href={lieu.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary)] hover:underline font-medium hover:text-black transition-colors"
                                >
                                Voir sur Google Maps →
                                </Link>
                            </Card>
                            </div>
                        </div>
                    </FilmOverlay>
                ))}
            </section>
            <section className="mt-12 flex flex-col gap-8">
                <Link href="/locations/itineraires-geek">
                    <Card className="cursor-pointer">
                        <h3 className="text-xl font-serif font-semibold">Itinéraires geek</h3>
                        <p className="text-[var(--color-dark)]">
                        Pars à l’aventure sur les traces de mes séries préférées.
                        </p>
                    </Card>
                </Link>

                <Link href="/locations/inspiration-ny">
                    <Card className="cursor-pointer">
                        <h3 className="text-xl font-serif font-semibold">Inspiration NY</h3>
                        <p className="text-[var(--color-dark)]">
                        Entre gratte-ciels et ruelles secrètes, laisse-toi inspirer par New York.
                        </p>
                    </Card>
                </Link>
            </section>
        </main>
    );
}