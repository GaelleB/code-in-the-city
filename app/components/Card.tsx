"use client";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <motion.div
            className={`
                relative overflow-hidden rounded-lg md:rounded-xl
                bg-white/90 backdrop-blur-md
                border border-[var(--color-secondary)]/20
                shadow-md md:shadow-lg shadow-[var(--color-dark)]/5
                transition-all duration-300 ease-out
                md:hover:bg-white/95 md:hover:shadow-xl md:hover:shadow-[var(--color-primary)]/10
                md:hover:border-[var(--color-primary)]/30
                active:scale-[0.98] active:shadow-sm
                p-4 sm:p-5 md:p-6
                ${className}
            `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
            }}
            style={{
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 8px 32px rgba(56, 60, 69, 0.08), 0 2px 16px rgba(26, 177, 221, 0.04)",
                WebkitTapHighlightColor: "transparent"
            }}
        >
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 opacity-0 md:hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}