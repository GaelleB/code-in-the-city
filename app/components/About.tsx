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
                    delay: 0.4
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
                        alt="Portrait de Gaelle"
                        fill
                        sizes="(max-width: 768px) 160px, 160px"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>

                <div ref={textRef}>
                    <h1 className="typo-h1 font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
                        A propos
                    </h1>

                    <p className="typo-body text-[var(--color-dark)] mb-4">
                        Je suis Gaelle, developpeuse web passionnee par les series, la musique et les histoires
                        qui nous faconnent. Ce blog est mon espace d&apos;expression, entre storytelling et code,
                        New York et Tree Hill.
                    </p>
                    <p className="typo-body text-[var(--color-dark)] mb-4">
                        Ici, je mele souvenirs et savoir-faire, inspirations et intuitions. Tu y trouveras autant
                        de lignes de code que de lignes de vie.
                    </p>
                    <p className="typo-body text-[var(--color-dark)] mb-4">
                        Entre Brooklyn et Tree Hill, j&apos;ecris mes souvenirs en HTML.
                    </p>
                    <p className="typo-body text-[var(--color-dark)] mb-4">
                        Un blog comme un vieux journal. Code, mais vivant.
                    </p>
                </div>
            </div>

            <section className="mt-16 max-w-3xl mx-auto text-[var(--color-dark)] typo-body">
                <hr className="border-t border-[var(--color-secondary)] mb-8" />
                <p className="mb-4">
                    Il y a des choses que l&apos;on garde en soi pendant des annees. Des series que l&apos;on
                    revoit comme des vieilles photos. Des chansons qui nous ramencent a une chambre d&apos;ado, une
                    chaine hi-fi, un pull trop grand. Des lieux qui nous hantent, meme si on n&apos;y a jamais mis les
                    pieds.
                </p>
                <p className="mb-4">
                    <em>Code in the City</em> est ne de tout cela. D&apos;un besoin de poser quelque part ce que je
                    ressens quand je code, quand je regarde une scene, quand j&apos;ecoute une musique et que tout
                    revient. C&apos;est un blog, oui. Mais c&apos;est surtout un carnet. Un journal. Un endroit pour
                    reunir mes histoires, celles que l&apos;on vit derriere un ecran ou au fond d&apos;un souvenir.
                </p>
                <p className="mb-4">
                    Ici, je parle de series comme on parle de personnes que l&apos;on aime. Je relie les lieux a mes
                    reves de voyage, les musiques a mes emotions, le code a ce que je suis. Je ne cherche pas a
                    convaincre, a vendre ou a plaire a tout le monde. Je cherche juste a creer un espace vrai.
                </p>
                <p className="italic">
                    Et si toi aussi, tu penses qu&apos;un <code>console.log</code> peut contenir un bout de ton coeur,
                    alors bienvenue.
                </p>
            </section>
        </section>
    );
}
