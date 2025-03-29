"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
            src="/images/hero-nyc-taxi.jpg"
            alt="Taxi jaune à New York"
            fill
            priority
            className="object-cover object-bottom"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-wider">
            Code in the City
            </h1>
            <p className="mt-4 text-xl italic font-light">
            Séries, Sounds & Stories
            </p>
            <Link
            href="/blog"
            className="mt-8 px-6 py-3 bg-white text-black uppercase font-semibold tracking-wide rounded hover:bg-gray-200 transition"
            >
            Entrer
            </Link>
        </div>
        </section>
    );
}