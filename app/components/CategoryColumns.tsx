import Link from "next/link";

export default function CategoryColumns() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2">
                Par catégorie
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
                {/* Series Category */}
                <div>
                    <h3 className="text-xl font-serif font-semibold mb-4">Series</h3>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                        <li>
                            <Link href="/series" className="hover:underline transition-colors">
                                Fiches détaillées
                            </Link>
                        </li>
                        <li>
                            <Link href="/series/personnages-marquant" className="hover:underline transition-colors">
                                Personnages marquants
                            </Link>
                        </li>
                        <li>
                            <Link href="/series/scenes-cultes" className="hover:underline transition-colors">
                                Scènes cultes
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Music Category */}
                <div>
                    <h3 className="text-xl font-serif font-semibold mb-4">Music</h3>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                        <li>
                            <Link href="/music/bo" className="hover:underline transition-colors">
                                B.O. de séries
                            </Link>
                        </li>
                        <li>
                            <Link href="/music/artistes-coup-de-coeur" className="hover:underline transition-colors">
                                Artistes coup de cœur
                            </Link>
                        </li>
                        <li>
                            <Link href="/music/playlists-emotion" className="hover:underline transition-colors">
                                Playlists émotion
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Locations Category */}
                <div>
                    <h3 className="text-xl font-serif font-semibold mb-4">Locations</h3>
                    <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                        <li>
                            <Link href="/locations" className="hover:underline transition-colors">
                                Villes de tournage
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/itineraires-geek" className="hover:underline transition-colors">
                                Itinéraires geek
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/inspiration-ny" className="hover:underline transition-colors">
                                Inspiration NY
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}