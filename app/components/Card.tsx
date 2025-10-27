"use client";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <motion.div
            className={`rounded-2xl p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border border-[var(--color-primary)]/20 shadow-xl transition-all duration-300 md:hover:border-[var(--color-primary)]/40 md:hover:shadow-2xl md:hover:shadow-[var(--color-primary)]/30 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
            }}
        >
            {children}
        </motion.div>
    );
}