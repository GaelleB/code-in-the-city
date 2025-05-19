"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
    const photoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            // Animation photo
            if (photoRef.current) {
                gsap.fromTo(
                    photoRef.current,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
                );
            }

            // Animation texte en cascade
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
        }, []
    );

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
                    <p className="font-cursive text-xl text-[var(--color-dark)] mt-8">
                        Entre Brooklyn et Tree Hill, j’écris mes souvenirs en HTML.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)] italic mt-8">
                        Un blog comme un vieux journal. Codé, mais vivant.
                    </p>
                </div>
            </div>
        </section>
    );
}