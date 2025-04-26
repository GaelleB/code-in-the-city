"use client";

import Link from "next/link";

export default function LieuxPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold mb-12">Lieux de tournage emblématiques</h1>

            <section className="space-y-16">

                {/* Dawson's Creek */}
                <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white/90">
                <h2 className="text-3xl font-serif font-semibold mb-4">Dawson's Creek</h2>
                <p className="text-gray-700 mb-4">
                    Tournée principalement à Wilmington (Caroline du Nord) et Southport, 
                    sur les rives du Cape Fear. 
                    Le ponton de Joey et Dawson existe réellement, et la magie des ados en quête de leurs rêves flotte toujours dans l’air salin.
                </p>
                <Link 
                    href="https://goo.gl/maps/TNPoJzU8uF2MNUh17" 
                    target="_blank" 
                    className="text-[--color-primary] font-medium hover:underline"
                >
                    Voir Wilmington sur Google Maps →
                </Link>
                </div>

            </section>
        </main>
    );
}