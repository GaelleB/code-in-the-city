"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Image
                    src="/images/hero-nyc-taxi.jpg"
                    alt="Taxi à New York sur le pont de Brooklyn"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
            </motion.div>
            <motion.div 
                className="absolute inset-0 bg-black/70 flex items-end justify-center pb-12 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Link
                        href="/welcome"
                        className="uppercase tracking-wider px-6 py-2 bg-[#f1cd52] !text-black font-semibold rounded shadow-md ring-1 ring-black/20 hover:brightness-110 transition"
                        >
                        Entrée
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}