import Image from "next/image";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 shrink-0 relative rounded-xl overflow-hidden border-4 border-[var(--color-secondary)] shadow-md">
                    <Image
                        src="/images/gaelle.jpg" // Remplace avec le bon chemin vers ta photo
                        alt="Portrait de Gaëlle"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-serif font-bold mb-6 border-b-2 border-[var(--color-secondary)] pb-2">
                        À propos
                    </h1>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)] mb-4">
                        Je suis Gaëlle, développeuse web passionnée par les séries, la musique et les histoires qui nous façonnent.
                        Ce blog, c’est mon espace d’expression, entre storytelling et code, New York et Tree Hill.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-dark)]">
                        Ici, je mêle souvenirs et savoir-faire, inspirations et intuitions. Tu y trouveras autant de lignes de code que de lignes de vie.
                    </p>
                </div>
            </div>
        </section>
    );
}