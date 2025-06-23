"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            <Image
                src="/images/hero-nyc-taxi.jpg"
                alt="Taxi à New York sur le pont de Brooklyn"
                fill
                className="object-cover object-bottom"
                priority
            />
            <div className="absolute inset-0 bg-black/70 flex items-end justify-center pb-12 px-4">
                <Link
                    href="/welcome"
                    className="uppercase tracking-wider px-6 py-2 bg-[#f1cd52] !text-black font-semibold rounded shadow-md ring-1 ring-black/20 hover:brightness-110 transition"
                    >
                    Entrée
                </Link>
            </div>
        </section>
    );
}