"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-300 bg-white text-center py-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide uppercase">
            Code in the City
        </h1>
        <p className="mt-2 text-gray-600 italic text-sm md:text-base">
            Séries, Sounds & Stories
        </p>

        <nav className="mt-4">
            <ul className="flex justify-center space-x-6 text-sm md:text-base font-medium">
            <li>
                <Link href="/" className="hover:underline">Accueil</Link>
            </li>
            <li>
                <Link href="/blog" className="hover:underline">Articles</Link>
            </li>
            <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}