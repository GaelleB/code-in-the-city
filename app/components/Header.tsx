"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-[var(--color-dark)] text-center py-6 text-[var(--color-text-dark)] font-[--font-serif]">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
                Code in the City
            </h1>
            <p className="mt-2 italic text-sm md:text-base">
                Series, Sounds & Stories
            </p>

            <nav className="mt-4">
                <ul className="flex justify-center space-x-6 text-sm md:text-base font-medium">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="/articles" className="hover:underline">Articles</Link>
                    </li>
                    <li>
                        <Link href="/series" className="hover:underline">Series</Link>
                    </li>
                    <li>
                        <Link href="/music" className="hover:underline">Music</Link>
                    </li>
                    <li>
                        <Link href="/locations" className="hover:underline">Filming locations</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}