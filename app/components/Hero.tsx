"use client";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[70vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/globe.svg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-serif font-bold uppercase tracking-wider drop-shadow-lg">
                Code in the City
                </h1>
                <p className="mt-4 text-xl italic font-light drop-shadow">
                Séries, Sounds & Stories
                </p>
                <Link
                href="/blog"
                className="mt-8 px-6 py-3 bg-white text-black text-sm font-medium uppercase tracking-widest rounded hover:bg-gray-200 transition"
                >
                Entrer
                </Link>
            </div>
        </section>
    );
}