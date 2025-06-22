"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "@/components/Card";
import Link from "next/link";
import FilmOverlay from "@/components/FilmOverlay";
import { lieux } from "@/data/lieux";
import Image from "next/image";

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

    useEffect(() => {
        const elems = containerRefs.current.filter(Boolean) as HTMLDivElement[];
        if (elems.length) {
        gsap.fromTo(
            elems,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
        );
        }
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
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
                            ref={(el) => {
                            containerRefs.current[idx] = el;
                            }}
                            className="group relative film-strip-container transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Image pellicule en fond */}
                            <Image
                            src="/images/film-strip.png"
                            alt="Effet pellicule"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="film-strip-image pointer-events-none"
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
            <section className="mt-12">
                <Link href="/locations/itineraires-geek">
                    <Card className="cursor-pointer">
                        <h3 className="text-xl font-serif font-semibold">Itinéraires geek</h3>
                        <p className="text-[var(--color-dark)]">
                        Pars à l’aventure sur les traces de tes séries préférées.
                        </p>
                    </Card>
                </Link>
            </section>
        </main>
    );
}