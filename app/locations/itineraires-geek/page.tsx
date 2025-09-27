"use client";

import Link from "next/link";
import { itineraires, Spot } from "@/data/itineraires";
import { series } from "@/data/series";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";

export default function ItinerairesGeekPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <Breadcrumb />

            <h1 className="text-4xl font-serif font-bold mb-8 border-b border-[var(--color-secondary)] pb-2">
                Itinéraires geek
            </h1>

            <div className="space-y-8">
                {itineraires.map((it) => {
                    const serieInfo = series.find((s) => s.id === it.serieId);
                    if (!serieInfo) return null;
                    return (
                        <Card key={it.serieId} className="p-6">
                            <h2 className="text-2xl font-serif font-semibold mb-4">
                                {serieInfo.title}
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-[var(--color-dark)]">
                                {it.spots.map((spot: Spot) => (
                                    <li key={spot.id}>
                                        <Link
                                            href={spot.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--color-primary)] hover:underline"
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