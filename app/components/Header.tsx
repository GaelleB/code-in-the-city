"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import PrefetchLink from "./PrefetchLink";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState("");
    const [editionNumber, setEditionNumber] = useState("");
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const formatDate = () => {
            const date = new Date();
            const formatted = new Intl.DateTimeFormat("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }).format(date);
            // Capitaliser la premiere lettre
            return formatted.charAt(0).toUpperCase() + formatted.slice(1);
        };

        const getEditionNumber = () => {
            const date = new Date();
            const year = date.getFullYear();
            // Volume = annee - 2024 (2025 = Vol. 1)
            const volume = year - 2024;

            // Numero = semaine de l'annee
            const startOfYear = new Date(year, 0, 1);
            const diff = date.getTime() - startOfYear.getTime();
            const oneWeek = 1000 * 60 * 60 * 24 * 7;
            const weekNumber = Math.ceil(diff / oneWeek);

            return `Vol. ${volume} • No. ${weekNumber}`;
        };

        setCurrentDate(formatDate());
        setEditionNumber(getEditionNumber());
    }, []);

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Articles", href: "/articles" },
        { label: "Series", href: "/series" },
        { label: "Music", href: "/music" },
        { label: "Locations", href: "/locations" }
    ];

    return (
        <header className="relative text-center py-8 text-[var(--color-text-dark)] font-serif">
            {/* Barre de recherche - position absolue en haut a droite */}
            <div className="hidden md:block absolute top-8 right-8">
                <SearchBar />
            </div>

            {/* Date du jour */}
            <p className="typo-small text-gray-600 italic mb-1">
                {currentDate}
            </p>

            {/* Numero d'edition */}
            <p className="typo-tiny uppercase tracking-[0.3em] text-gray-500 mb-4">
                {editionNumber}
            </p>

            {/* Bordure superieure double */}
            <div className="w-full border-t-4 border-double border-[var(--color-secondary)] mb-6" />

            {/* Titre principal */}
            <h1 className="typo-h1 font-bold tracking-[0.15em] uppercase">
                Code in the City
            </h1>

            {/* Bordure inferieure double */}
            <div className="w-full border-b-4 border-double border-[var(--color-secondary)] mt-6 mb-4" />

            {/* Sous-titre avec ornements */}
            <p className="typo-small tracking-[0.2em] text-gray-700 uppercase">
                • Series, Sounds & Stories •
            </p>

            {/* Nav desktop - style journal avec separateurs */}
            <nav className="hidden md:block mt-6">
                <ul className="flex justify-center items-center typo-small uppercase tracking-[0.2em] font-medium">
                    {links.map(({ label, href }, index) => (
                        <li key={href} className="flex items-center">
                            <PrefetchLink
                                href={href}
                                className="hover:underline underline-offset-4 px-3 py-2 transition-all"
                            >
                                {label}
                            </PrefetchLink>
                            {index < links.length - 1 && (
                                <span className="text-gray-400" aria-hidden>
                                    |
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Barre de recherche mobile - centree */}
            <div className="md:hidden mt-6 flex justify-center px-4">
                <SearchBar />
            </div>

            {/* Bouton hamburger mobile */}
            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="md:hidden absolute top-8 right-4 p-3 text-[var(--color-dark)] hover:bg-[var(--color-secondary)]/20 rounded-lg transition-colors touch-manipulation"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Nav mobile */}
            {isOpen && (
                <nav className="md:hidden mt-4 animate-fade-in">
                    <ul className="flex flex-col items-center space-y-2 py-4 px-4 typo-body font-medium bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mx-4">
                        {links.map(({ label, href }) => (
                            <li key={href} className="w-full">
                                <PrefetchLink
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-3 px-4 hover:bg-[var(--color-secondary)]/20 rounded-lg transition-all touch-manipulation active:scale-95"
                                >
                                    {label}
                                </PrefetchLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
