"use client";

import Card from "@/components/Card";
import Link from "next/link";

export default function InspirationNYPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold mb-6 border-b border-[var(--color-secondary)] pb-2">
                Inspiration NY
            </h1>
            <p className="mb-10 text-lg text-[var(--color-dark)] italic">
                Entre gratte-ciels et ruelles secrètes, New York est une source inépuisable de créativité.
                Laisse-toi guider par ces lieux qui ont nourri mon écriture, mes rêves et mon envie d’aventure.
            </p>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">Central Park</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        Échappée verte au cœur de la jungle urbaine : l’endroit parfait pour coder en plein air.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Central+Park,+New+York,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">High Line</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        Promenade suspendue entre art urbain et vues sur l’Hudson, idéale pour se ressourcer.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/High+Line,+New+York,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">Brooklyn Bridge Park</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        Vue imprenable sur Manhattan et spot de rêve pour photographier la skyline.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Brooklyn+Bridge+Park,+Brooklyn,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">NY Public Library</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        Temple des idées et des mots, où chaque rayonnage est une invitation à la découverte.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/New+York+Public+Library"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">Washington Square Park</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        L’arche emblématique et l’ambiance étudiante, mon refuge pour brainstormer.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Washington+Square+Park,+New+York,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="text-2xl font-serif font-semibold mb-2">DUMBO</h2>
                    <p className="text-[var(--color-dark)] mb-4 leading-relaxed">
                        Entre les arches du pont de Brooklyn, un quartier où le street art rencontre le code.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/DUMBO,+Brooklyn,+NY"
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