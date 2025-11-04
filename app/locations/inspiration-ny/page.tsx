"use client";

import Link from "next/link";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";

export default function InspirationNYPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <Breadcrumb />

            <h1 className="typo-h1 font-serif font-bold mb-6 border-b border-[var(--color-secondary)] pb-2">
                Inspiration NY
            </h1>
            <p className="mb-10 typo-body text-[var(--color-dark)] italic">
                Entre gratte-ciels et ruelles secretes, New York est une source inepuisable de creativite.
                Laisse-toi guider par ces lieux qui ont nourri mon ecriture, mes reves et mon envie
                d&apos;aventure.
            </p>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">Central Park</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        Echappee verte au coeur de la jungle urbaine: l&apos;endroit parfait pour coder en plein air.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Central+Park,+New+York,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">High Line</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        Promenade suspendue entre art urbain et vues sur l&apos;Hudson, ideale pour se ressourcer.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/High+Line/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">Brooklyn Bridge Park</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        Vue imprenable sur Manhattan et spot de reve pour photographier la skyline.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Pont+de+Brooklyn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">NY Public Library</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        Temple des idees et des mots, ou chaque rayonnage est une invitation a la decouverte.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/New+York+Public+Library"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">Washington Square Park</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        L&apos;arche emblematique et l&apos;ambiance etudiante, mon refuge pour brainstormer.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Washington+Square+Park,+New+York,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>

                <Card className="bg-white border-2 border-[var(--color-secondary)] shadow-lg">
                    <h2 className="typo-h2 font-serif font-semibold mb-2">DUMBO</h2>
                    <p className="typo-body text-[var(--color-dark)] mb-4 leading-relaxed">
                        Entre les arches du pont de Brooklyn, un quartier ou le street art rencontre le code.
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/DUMBO,+Brooklyn,+NY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="typo-small text-[var(--color-primary)] hover:underline font-medium"
                    >
                        Voir sur Google Maps →
                    </Link>
                </Card>
            </section>
        </main>
    );
}
