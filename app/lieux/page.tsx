import Card from "@/components/Card";
import Link from "next/link";

export default function Lieux() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2">
                Lieux de tournage emblématiques
            </h1>

            <section className="space-y-12">
                <Card>
                <h2 className="text-2xl font-bold mb-4">Dawson&apos;s Creek</h2>
                <p className="text-[var(--color-text-dark)] mb-4">
                    Tournée à Wilmington (Caroline du Nord), le long de la Cape Fear River. Le ponton de Joey et Dawson est accessible à Southport.
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-dark)] mb-4">
                    <li>Screen Gems Studios</li>
                    <li>Cape Fear Riverwalk</li>
                    <li>Southport Pier</li>
                </ul>
                <Link
                    href="https://www.google.com/maps/place/Wilmington,+NC,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium hover:text-black transition-colors"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>

                <Card>
                <h2 className="text-2xl font-bold mb-4">Les Frères Scott</h2>
                <p className="text-[var(--color-text-dark)] mb-4">
                    Tournée elle aussi à Wilmington (Caroline du Nord), la série One Tree Hill a marqué de nombreux fans avec ses lieux devenus mythiques. Le Rivercourt n&apos;existe plus, mais l&apos;esprit de Tree Hill est partout en ville.
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-dark)] mb-4">
                    <li>Le pont de Lucas (6th Street Bridge)</li>
                    <li>Screen Gems Studios</li>
                    <li>Rivercourt Park (ancien emplacement)</li>
                    <li>Tric Nightclub (lieu réel transformé)</li>
                </ul>
                <Link
                    href="https://www.google.com/maps/place/Wilmington,+NC,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline font-medium hover:text-black transition-colors"
                >
                    Voir sur Google Maps →
                </Link>
                </Card>
            </section>
        </main>
    );
}