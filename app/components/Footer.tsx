"use client";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-24 border-t-4 border-double border-[var(--color-secondary)] bg-[#f5f1ec] pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Contenu principal en 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Colonne 1 : A propos */}
                    <div>
                        <h3 className="typo-small uppercase tracking-[0.2em] font-bold mb-4 border-b border-gray-400 pb-2">
                            A propos
                        </h3>
                        <p className="typo-body text-gray-700">
                            <strong>Code in the City</strong> est un blog personnel ou je partage mes
                            passions: series TV, musique, developpement web et carnets de voyage. Un
                            espace pour raconter, ressentir et creer.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div>
                        <h3 className="typo-small uppercase tracking-[0.2em] font-bold mb-4 border-b border-gray-400 pb-2">
                            Navigation
                        </h3>
                        <ul className="space-y-2 typo-small">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    A propos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/articles"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/series"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Series
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/music"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Musique
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/locations"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Lieux de tournage
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Me suivre */}
                    <div>
                        <h3 className="typo-small uppercase tracking-[0.2em] font-bold mb-4 border-b border-gray-400 pb-2">
                            Me suivre
                        </h3>
                        <ul className="space-y-2 typo-small">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[var(--color-secondary)] transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright centre */}
                <div className="border-t border-gray-300 pt-8 text-center">
                    <p className="typo-tiny text-gray-600 uppercase tracking-[0.2em]">
                        Copyright {currentYear} Code in the City - Par Gaelle - Fait avec coeur et Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
