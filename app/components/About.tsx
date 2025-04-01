"use client";

import Image from "next/image";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">À propos du blog</h2>
            <p className="text-lg leading-relaxed mb-12">
                <strong>Code in the City</strong>, c’est un blog à mi-chemin entre Brooklyn et React, entre
                souvenirs et lignes de code. J’y parle de développement web, de séries,
                de musique, et de toutes ces choses qui m’inspirent dans mon quotidien
                de développeuse freelance.
            </p>

            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
                <Image
                src="/images/gaelle.jpg"
                alt="Portrait de Gaëlle"
                width={160}
                height={160}
                className="rounded-full object-cover grayscale"
                />
                <div className="mt-6 md:mt-0 text-left">
                <h3 className="text-2xl font-serif font-bold">Gaëlle</h3>
                <p className="mt-2 text-base leading-relaxed">
                    Développeuse web basée à Vanault-les-Dames (51), passionnée de séries cultes,
                    de rock, de storytelling, et de poésie du code. J’aide les indépendants et les
                    petites entreprises à créer des sites web qui leur ressemblent et qui racontent
                    vraiment leur histoire.
                </p>
                </div>
            </div>
        </section>
    );
}