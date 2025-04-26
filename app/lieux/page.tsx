"use client";

import Link from "next/link";

export default function LieuxPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold mb-12">Lieux de tournage emblématiques</h1>

            {/* Carte Dawson */}
            <section className="mb-12">
                <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Dawson&apos;s Creek</h2>
                <p className="text-gray-800 mb-4">
                    Tournée principalement à Wilmington (Caroline du Nord) et Southport, sur les rives du Cape Fear.
                    Le ponton de Joey et Dawson existe réellement à Southport.
                    La magie des ados en quête de leurs rêves flotte toujours dans l’air salin.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Screen Gems Studios (Wilmington)</li>
                    <li>Riverwalk - Cape Fear River (Wilmington)</li>
                    <li>Ponton de Southport (Joey et Dawson)</li>
                </ul>

                <Link
                    href="https://www.google.com/maps/place/Wilmington,+NC,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                >
                    Voir Wilmington sur Google Maps →
                </Link>
                </div>
            </section>

            {/* Carte Les frères Scott */}
            <section className="mb-12">
                <div className="bg-white bg-opacity-80 shadow-lg rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-4">Les Frères Scott</h2>
                    <p className="text-gray-800 mb-4">
                    Tournée également à Wilmington, la petite ville de Tree Hill prend vie entre les ruelles tranquilles, le Rivercourt et le fameux pont.
                    La magie des premiers amours et des rêves de basket vibre encore dans l&apos;air de la Caroline du Nord.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Rivercourt - le terrain de basket emblématique (aujourd&apos;hui disparu, mais lieu accessible)</li>
                        <li>Le fameux pont où Lucas court dans le générique</li>
                        <li>Tric Nightclub (lieu des concerts dans la série)</li>
                        <li>Screen Gems Studios (studio principal des scènes intérieures)</li>
                    </ul>

                    <Link
                    href="https://www.google.com/maps/place/Wilmington,+NC,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                    >
                        Voir Wilmington sur Google Maps →
                    </Link>
                </div>
            </section>
        </main>
    );
}