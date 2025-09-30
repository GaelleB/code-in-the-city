"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Articles", href: "/articles" },
        { label: "Series", href: "/series" },
        { label: "Music", href: "/music" },
        { label: "Filming locations", href: "/locations" },
    ];

    return (
        <header className="relative border-b border-[var(--color-dark)] text-center py-6 text-[var(--color-text-dark)] font-serif">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide uppercase">
                Code in the City
            </h1>

            <p className="mt-2 italic text-sm md:text-base">
                Series, Sounds & Stories
            </p>

            {/* Barre de recherche */}
            <div className="mt-6 flex justify-center px-4">
                <SearchBar />
            </div>

            {/* Nav desktop */}
            <nav className="hidden md:block mt-4">
                <ul className="flex justify-center space-x-6 text-sm md:text-base font-medium">
                {links.map(({ label, href }) => (
                    <li key={href}>
                    <Link href={href} className="hover:underline">
                        {label}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            {/* Bouton hamburger mobile */}
            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden absolute top-6 right-4 p-3 text-[var(--color-dark)] hover:bg-[var(--color-secondary)]/20 rounded-lg transition-colors touch-manipulation"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Nav mobile */}
            {isOpen && (
                <nav className="md:hidden mt-4 animate-fade-in">
                    <ul className="flex flex-col items-center space-y-2 py-4 px-4 text-lg font-medium bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mx-4">
                        {links.map(({ label, href }) => (
                        <li key={href} className="w-full">
                            <Link
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center py-3 px-4 hover:bg-[var(--color-secondary)]/20 rounded-lg transition-all touch-manipulation active:scale-95"
                            >
                            {label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}