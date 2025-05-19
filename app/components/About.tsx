"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
    const photoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (photoRef.current) {
            gsap.fromTo(
                photoRef.current,
                { opacity: 0, scale: 0.9, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
            );
        }

        if (textRef.current) {
            gsap.fromTo(
                textRef.current.querySelectorAll("p"),
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                    delay: 0.4,
                }
            );
        }
    }, []);

    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div
                    ref={photoRef}
                    className="w-40 h-40 shrink-0 relative rounded-xl overflow-hidden border-4 border-[var(--color-secondary)] shadow-md"
                >
                    <Image
                        src="/images/gaelle.jpg"
                        alt="Portrait de Gaëlle"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div ref={textRef}>
                    <h1 className="text-4xl font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
                        À propos
                    </h1>

                    <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-4">
                        Je suis Gaëlle, développeuse web passionnée par les séries, la musique et les histoires qui nous façonnent.
                        Ce blog, c’est mon espace d’expression, entre storytelling et code, New York et Tree Hill.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-4">
                        Ici, je mêle souvenirs et savoir-faire, inspirations et intuitions. Tu y trouveras autant de lignes de code que de lignes de vie.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-4">
                        Entre Brooklyn et Tree Hill, j’écris mes souvenirs en HTML.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-4">
                        Un blog comme un vieux journal. Codé, mais vivant.
                    </p>
                </div>
            </div>

            <section className="mt-16 max-w-3xl mx-auto text-[var(--color-dark)] text-lg leading-relaxed">
                <hr className="border-t border-[var(--color-secondary)] mb-8" />
                <p className="mb-4">
                    Il y a des choses qu’on garde en soi pendant des années.
                    Des séries qu’on revoit comme des vieilles photos.
                    Des chansons qui nous ramènent à une chambre d’ado, une chaîne hi-fi, un pull trop grand.
                    Des lieux qui nous hantent, même si on n’y a jamais mis les pieds.
                </p>
                <p className="mb-4">
                    <em>Code in the City</em> est né de tout ça.
                    D’un besoin de poser quelque part ce que je ressens quand je code, quand je regarde une scène, quand j’écoute une musique et que tout revient.
                    C’est un blog, oui. Mais c’est surtout un carnet. Un journal.
                    Un endroit pour réunir mes histoires, celles qu’on vit derrière un écran ou au fond d’un souvenir.
                </p>
                <p className="mb-4">
                    Ici, je parle de séries comme on parle de personnes qu’on aime.
                    Je relie les lieux à mes rêves de voyage, les musiques à mes émotions, le code à ce que je suis.
                    Je ne cherche pas à convaincre, à vendre ou à plaire à tout le monde.
                    Je cherche juste à créer un espace vrai.
                </p>
                <p className="italic">
                    Et si toi aussi, tu penses qu’un <code>console.log</code> peut contenir un bout de ton cœur,
                    alors bienvenue.
                </p>
            </section>
        </section>
    );
}