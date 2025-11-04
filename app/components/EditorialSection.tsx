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
                <h2 className="text-xs lg:text-sm uppercase tracking-[0.3em] font-bold mb-3">
                    {title}
                </h2>
                <div className="w-full h-[2px] bg-black"></div>
            </div>

            {/* Contenu de la section */}
            <div className="mt-6">
                {children}
            </div>

            {/* Bordure de séparation subtile en bas */}
            <div className="mt-12 lg:mt-16 w-full h-[1px] bg-gray-300"></div>
        </motion.section>
    );
}
