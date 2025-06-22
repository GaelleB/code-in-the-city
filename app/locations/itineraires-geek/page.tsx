"use client";

import React from "react";
import Link from "next/link";
import Card from "@/components/Card";

export default function ItineraireGeekPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold mb-6 border-b border-[var(--color-secondary)] pb-2">
                Itinéraires geek
            </h1>
            <p className="mb-10 text-lg text-[var(--color-dark)] italic">
                Pars à l’aventure sur les traces de tes séries préférées : des pontons de Capeside aux coulisses de Tree Hill, chaque étape est une quête geek à part entière.
            </p>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Dawson's Creek */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Dawson’s Creek – Capeside</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Visite Wilmington et descends jusqu’à Southport Pier, le célèbre ponton de Joey et Dawson.
                </p>
                <Link
                    href="https://www.google.com/maps/place/Southport+Pier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* One Tree Hill */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Les Frères Scott – Tree Hill</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Flâne à Wilmington et découvre le 6th Street Bridge, Screen Gems Studios et l’ancien Rivercourt Park.
                </p>
                <Link
                    href="https://www.google.com/maps/search/Wilmington+NC+Screen+Gems+Studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* Gilmore Girls */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Gilmore Girls – Stars Hollow</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Direction Washington D.C. : gare Union Station (version extérieur) et décor du Dragonfly Inn.
                </p>
                <Link
                    href="https://www.google.com/maps/search/Washington+DC+Union+Station"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* Desperate Housewives */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Desperate Housewives – Wisteria Lane</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Explore Universal Studios Backlot à Los Angeles, le lieu culte de Wisteria Lane.
                </p>
                <Link
                    href="https://www.google.com/maps/search/Universal+Studios+Backlot+Los+Angeles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* Grey's Anatomy */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Grey’s Anatomy – Seattle</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Rendez-vous à Harborview Medical Center pour ressentir l’atmosphère de l’hôpital.
                </p>
                <Link
                    href="https://www.google.com/maps/place/Harborview+Medical+Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* Gossip Girl */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">Gossip Girl – UES, NYC</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Promène-toi sur l’Upper East Side : Metropolitan Museum, Waldorf Astoria et le St. Regis.
                </p>
                <Link
                    href="https://www.google.com/maps/place/Upper+East+Side+NYC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                {/* This Is Us */}
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                <h2 className="text-2xl font-serif font-semibold mb-2">This Is Us – Pittsburg &amp; LA</h2>
                <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                    Visite les quartiers de Pittsburgh et découvrez l’ambiance familiale de la série.
                </p>
                <Link
                    href="https://www.google.com/maps/search/Pittsburgh+PA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>
            </section>
        </main>
    );
}