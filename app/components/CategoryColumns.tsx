export default function CategoryColumns() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--color-secondary)] pb-2">
            Par catégorie
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
            <div>
                <h3 className="text-xl font-serif font-semibold mb-4">Séries</h3>
                <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                <li>Fiches détaillées</li>
                <li>Personnages marquants</li>
                <li>Scènes cultes</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-serif font-semibold mb-4">Musique</h3>
                <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                <li>B.O. de séries</li>
                <li>Artistes coups de cœur</li>
                <li>Playlists émotion</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-serif font-semibold mb-4">Lieux</h3>
                <ul className="list-disc list-inside text-[var(--color-dark)] space-y-2">
                <li>Villes de tournage</li>
                <li>Itinéraires geeks</li>
                <li>Inspiration New York</li>
                </ul>
            </div>
            </div>
        </section>
    );
}  