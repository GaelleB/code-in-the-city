"use client";

import Link from "next/link";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";
import { itineraires, type Spot } from "@/data/itineraires";
import { series } from "@/data/series";

export default function ItinerairesGeekPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <Breadcrumb />

            <h1 className="typo-h1 font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2">
                Itineraires geek
            </h1>

            <div className="space-y-8">
                {itineraires.map((itineraire) => {
                    const serieInfo = series.find((serie) => serie.id === itineraire.serieId);
                    if (!serieInfo) return null;

                    return (
                        <Card key={itineraire.serieId} className="p-6">
                            <h2 className="typo-h2 font-serif font-semibold mb-4">
                                {serieInfo.title}
                            </h2>
                            <ul className="list-disc list-inside space-y-2 typo-body text-[var(--color-dark)]">
                                {itineraire.spots.map((spot: Spot) => (
                                    <li key={spot.id}>
                                        <Link
                                            href={spot.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="typo-small text-[var(--color-primary)] hover:underline"
                                        >
                                            {spot.nom}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}
