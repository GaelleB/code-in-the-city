"use client";
import { motion } from "framer-motion";

interface EditorialSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function EditorialSection({
    title,
    children,
    className = ""
}: EditorialSectionProps) {
    return (
        <motion.section
            className={`my-12 lg:my-16 ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Titre de section avec ligne en dessous */}
            <div className="mb-8">
                <h2 className="typo-h2 font-serif uppercase tracking-[0.1em] mb-3">
                    {title}
                </h2>
                <div className="w-full h-px bg-black" />
            </div>

            {/* Contenu de la section */}
            <div className="mt-6">
                {children}
            </div>

            {/* Bordure de separation subtile en bas */}
            <div className="mt-12 lg:mt-16 w-full h-px bg-gray-300" />
        </motion.section>
    );
}
