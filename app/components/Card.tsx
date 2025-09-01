"use client";
import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <motion.div
            className={`rounded-lg border border-[var(--color-secondary)] bg-white/90 p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    );
}